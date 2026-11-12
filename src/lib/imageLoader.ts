import type { ImageLoaderProps } from "next/image";

const MZSTATIC_HOST_RE = /^https?:\/\/[^/]*\.mzstatic\.com\//i;
const MZSTATIC_SIZE_SUFFIX_RE = /\/\d+x\d+[a-z]*\.(?:jpg|jpeg|png|webp)$/i;
const APP_ICON_HINT_RE = /(?:\/AppIcon[^/]*\/|\/1024x1024[a-z]*\.)/i;

/**
 * Custom Next.js Image Loader tối ưu trực tiếp từ CDN Apple (`is1-ssl.mzstatic.com`).
 * Dùng hậu tố khóa chiều rộng `${width}x0w.webp` để giữ nguyên 100% tỉ lệ gốc
 * (đặc biệt với ảnh chụp màn hình dọc) và giảm 90–95% dung lượng so với PNG gốc.
 */
export function appleCdnLoader({ src, width, quality }: ImageLoaderProps): string {
  if (!MZSTATIC_HOST_RE.test(src)) {
    if (src.startsWith("/")) {
      return `${src}${src.includes("?") ? "&" : "?"}w=${width}&q=${quality ?? 85}`;
    }
    return src;
  }

  const maxIntrinsicWidth = APP_ICON_HINT_RE.test(src) ? 1024 : 1920;
  const clampedWidth = Math.max(64, Math.min(Math.round(width), maxIntrinsicWidth));

  if (MZSTATIC_SIZE_SUFFIX_RE.test(src)) {
    return src.replace(MZSTATIC_SIZE_SUFFIX_RE, `/${clampedWidth}x0w.webp`);
  }

  return src;
}

/**
 * Sinh URL ảnh thu nhỏ nhẹ (`256x0w.webp` ~14 KiB) cho lớp nền làm mờ phía sau khung ảnh.
 */
export function getAppleThumbnailUrl(src: string, targetWidth = 256): string {
  return appleCdnLoader({ src, width: targetWidth });
}

/**
 * Chuẩn hóa ảnh xem trước OpenGraph / Twitter sang định dạng `.jpg` (`1200x0w.jpg`)
 * tương thích 100% với bộ thu thập liên kết của Zalo, Telegram và Facebook.
 */
export function getAppleOgImageUrl(src: string, targetWidth = 1200): string {
  if (!MZSTATIC_HOST_RE.test(src) || !MZSTATIC_SIZE_SUFFIX_RE.test(src)) {
    return src;
  }
  const maxIntrinsicWidth = APP_ICON_HINT_RE.test(src) ? 1024 : 1600;
  const clampedWidth = Math.max(320, Math.min(Math.round(targetWidth), maxIntrinsicWidth));
  return src.replace(MZSTATIC_SIZE_SUFFIX_RE, `/${clampedWidth}x0w.jpg`);
}
