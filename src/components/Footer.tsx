import React from "react";
import { BrandLockup } from "./BrandLockup";
import { SocialLinks } from "./SocialLinks";
import { ScrollToTopButton } from "./ScrollToTopButton";

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-8 bg-white/[0.025] backdrop-blur-2xl border-t border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] pt-10 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          {/* Brand & Domain (Matching Header Lockup) */}
          <div className="space-y-3.5 max-w-xl">
            <BrandLockup />

            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
              TNxMD cung cấp danh mục game chọn lọc với cấu hình tối ưu, kiểm định ổn định và kết nối hỗ trợ trực tiếp.
            </p>
          </div>

          {/* Official Direct Channels */}
          <div className="shrink-0">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block mb-2">
              Kênh Liên Lạc Chính Thức:
            </span>
            <SocialLinks size="sm" showLabel={true} />
          </div>
        </div>

        {/* Bottom disclaimer & copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>
              © 2026 TNxMD (tnxmd.io.vn). Mọi thương hiệu và bản quyền tựa game thuộc về các nhà phát hành tương ứng.
            </span>
          </div>

          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
};
