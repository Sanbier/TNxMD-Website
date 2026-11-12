import type React from "react";

let finePointerQuery: MediaQueryList | null = null;

function isFinePointerDevice(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  if (!finePointerQuery) {
    finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  }
  return finePointerQuery.matches;
}

/**
 * Cập nhật tọa độ ánh sáng khúc xạ Liquid Glass (--mx, --my) trên máy tính (fine pointer)
 * bằng CSS custom properties trực tiếp trên DOM (0 React re-renders, 0 overhead trên điện thoại).
 */
export function handleGlassSpotlightMove(
  e: React.PointerEvent<HTMLElement>
): void {
  if (e.pointerType !== "mouse" || !isFinePointerDevice()) return;
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return;

  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  el.style.setProperty("--mx", `${x.toFixed(1)}%`);
  el.style.setProperty("--my", `${y.toFixed(1)}%`);
  el.style.setProperty("--spotlight-opacity", "1");
}

export function handleGlassSpotlightLeave(
  e: React.PointerEvent<HTMLElement>
): void {
  if (e.pointerType !== "mouse") return;
  e.currentTarget.style.setProperty("--spotlight-opacity", "0");
}
