"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { appleCdnLoader } from "@/lib/imageLoader";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const backdropRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const closingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearTimer();
    if (isOpen) {
      closingRef.current = false;
      setCurrentIndex(initialIndex);
      if (frameRef.current) {
        frameRef.current.style.transition = "";
        frameRef.current.style.transform = "";
        frameRef.current.style.opacity = "";
      }
      if (backdropRef.current) {
        backdropRef.current.style.transition = "";
        backdropRef.current.style.opacity = "";
      }
    }
    return () => clearTimer();
  }, [isOpen, initialIndex, clearTimer]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  const animateDismiss = useCallback(
    (exitY = 260) => {
      if (closingRef.current) return;
      closingRef.current = true;
      clearTimer();

      if (frameRef.current) {
        frameRef.current.style.transition =
          "transform 210ms cubic-bezier(0.32, 0.72, 0, 1), opacity 190ms ease";
        frameRef.current.style.transform = `translate3d(0, ${exitY}px, 0) scale(0.9)`;
        frameRef.current.style.opacity = "0";
      }
      if (backdropRef.current) {
        backdropRef.current.style.transition = "opacity 200ms ease";
        backdropRef.current.style.opacity = "0";
      }

      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        closingRef.current = false;
        onCloseRef.current();
      }, 200);
    },
    [clearTimer]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") animateDismiss(40);
      if (images.length > 1) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length, prevImage, nextImage, animateDismiss]);

  // 120Hz Ref-Driven Native Touch Photo Viewer (Pull Down to Dismiss & Horizontal Slide)
  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!isOpen || !backdrop) return;

    let tracking = false;
    let axis: "none" | "x" | "y" = "none";
    let startX = 0;
    let startY = 0;
    let startTime = 0;
    let lastDx = 0;
    let lastDy = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (closingRef.current || e.touches.length !== 1) return;
      const t = e.touches[0];
      tracking = true;
      axis = "none";
      startX = t.clientX;
      startY = t.clientY;
      startTime = performance.now();
      lastDx = 0;
      lastDy = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!tracking || e.touches.length !== 1) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;

      if (axis === "none") {
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        if (images.length > 1 && Math.abs(dx) > Math.abs(dy)) {
          axis = "x";
        } else {
          axis = "y";
        }
        if (frameRef.current) frameRef.current.style.transition = "none";
        backdrop.style.transition = "none";
      }

      if (e.cancelable) e.preventDefault();
      lastDx = dx;
      lastDy = dy;

      if (!frameRef.current) return;

      if (axis === "x") {
        frameRef.current.style.transform = `translate3d(${dx}px, 0, 0)`;
      } else {
        const pullY = dy >= 0 ? dy : -Math.min(28, Math.abs(dy) * 0.25);
        const progress = Math.min(1, Math.max(0, pullY) / 260);
        const scale = Math.max(0.84, 1 - progress * 0.14);
        frameRef.current.style.transform = `translate3d(0, ${pullY.toFixed(
          1
        )}px, 0) scale(${scale.toFixed(3)})`;
        backdrop.style.backgroundColor = `rgba(2, 6, 23, ${(
          0.92 -
          progress * 0.55
        ).toFixed(2)})`;
      }
    };

    const onTouchEnd = () => {
      if (!tracking) return;
      tracking = false;
      const currentAxis = axis;
      axis = "none";

      if (currentAxis === "none") return;

      const dt = Math.max(1, performance.now() - startTime);

      if (currentAxis === "y") {
        const vy = lastDy / dt;
        if (lastDy > 82 || (lastDy > 34 && vy > 0.45)) {
          animateDismiss(Math.max(lastDy + 180, 300));
          return;
        }
        if (frameRef.current) {
          frameRef.current.style.transition =
            "transform 260ms cubic-bezier(0.32, 0.72, 0, 1)";
          frameRef.current.style.transform = "translate3d(0, 0, 0) scale(1)";
        }
        backdrop.style.transition = "background-color 220ms ease";
        backdrop.style.backgroundColor = "";
        return;
      }

      // Axis === "x": slide swap with spring settle
      const vx = lastDx / dt;
      if (
        images.length > 1 &&
        (Math.abs(lastDx) > 64 || (Math.abs(lastDx) > 28 && Math.abs(vx) > 0.35))
      ) {
        if (lastDx < 0) {
          nextImage();
        } else {
          prevImage();
        }
      }

      if (frameRef.current) {
        frameRef.current.style.transition =
          "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)";
        frameRef.current.style.transform = "translate3d(0, 0, 0)";
      }
    };

    backdrop.addEventListener("touchstart", onTouchStart, { passive: true });
    backdrop.addEventListener("touchmove", onTouchMove, { passive: false });
    backdrop.addEventListener("touchend", onTouchEnd, { passive: true });
    backdrop.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      backdrop.removeEventListener("touchstart", onTouchStart);
      backdrop.removeEventListener("touchmove", onTouchMove);
      backdrop.removeEventListener("touchend", onTouchEnd);
      backdrop.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [isOpen, images.length, prevImage, nextImage, animateDismiss]);

  if (!isOpen || images.length === 0) return null;

  const safeIndex = Math.min(Math.max(0, currentIndex), images.length - 1);

  return (
    <div
      ref={backdropRef}
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/92 backdrop-blur-2xl animate-lightbox-in touch-none"
      onClick={() => animateDismiss(40)}
    >
      {/* Top Frosted Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-2">
          {title && (
            <span className="font-bold text-xs sm:text-sm text-white truncate max-w-[200px] sm:max-w-xs">
              {title}
            </span>
          )}
          <span className="text-xs font-mono text-cyan-200 font-semibold">
            {safeIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={() => animateDismiss(40)}
          type="button"
          className="p-2.5 rounded-full glass-pill-2 text-slate-200 hover:text-white active:scale-90 transition-all"
          aria-label="Đóng xem ảnh"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive GPU-Composited Image Stage */}
      <div
        ref={frameRef}
        className="relative w-full h-full max-w-5xl max-h-[82vh] p-4 flex items-center justify-center select-none will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            loader={appleCdnLoader}
            src={images[safeIndex]}
            alt={`Ảnh ${safeIndex + 1}`}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            type="button"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-pill-2 text-white hover:bg-white/[0.16] transition-all active:scale-90"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            type="button"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-pill-2 text-white hover:bg-white/[0.16] transition-all active:scale-90"
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Frosted Interactive Pagination Dots + Gesture Hint */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-5 left-0 right-0 z-20 flex flex-col items-center gap-2 pointer-events-none"
          >
            <div className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Chọn ảnh ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === safeIndex
                      ? "w-5 bg-gradient-to-r from-sky-300 to-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                      : "w-1.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <span className="sm:hidden text-[11px] font-medium text-slate-300/90">
              ← Vuốt ngang đổi ảnh • Vuốt xuống để đóng →
            </span>
          </div>
        </>
      )}

      {images.length === 1 && (
        <div className="sm:hidden absolute bottom-5 left-0 right-0 z-20 text-center pointer-events-none">
          <span className="text-[11px] font-medium text-slate-200 glass-pill-2 px-3.5 py-1.5 rounded-full">
            ↓ Vuốt xuống để đóng
          </span>
        </div>
      )}
    </div>
  );
};
