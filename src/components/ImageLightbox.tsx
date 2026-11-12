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
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
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
  }, [isOpen, images.length, prevImage, nextImage]);

  if (!isOpen || images.length === 0) return null;

  const safeIndex = Math.min(Math.max(0, currentIndex), images.length - 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.targetTouches.length !== 1) return;
    const t = e.targetTouches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || e.changedTouches.length === 0) return;

    const end = e.changedTouches[0];
    const dx = start.x - end.clientX;
    const dy = end.clientY - start.y;

    // Vuốt xuống để đóng nhanh trên điện thoại
    if (dy > 70 && Math.abs(dy) > Math.abs(dx) * 1.2) {
      onCloseRef.current();
      return;
    }

    // Vuốt ngang để chuyển ảnh
    if (images.length > 1 && Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-2xl animate-lightbox-in touch-none"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Frosted Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 flex items-center justify-between text-white"
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
          onClick={onClose}
          type="button"
          className="p-2.5 rounded-full glass-pill-2 text-slate-200 hover:text-white transition-colors"
          aria-label="Đóng xem ảnh"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] p-4 flex items-center justify-center select-none"
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
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-pill-2 text-white hover:bg-white/[0.16] transition-all active:scale-90"
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
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass-pill-2 text-white hover:bg-white/[0.16] transition-all active:scale-90"
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="sm:hidden absolute bottom-5 left-0 right-0 text-center pointer-events-none">
        <span className="text-[11px] font-medium text-slate-200 glass-pill-2 px-3.5 py-1.5 rounded-full">
          {images.length > 1
            ? "← Vuốt ngang đổi ảnh • Vuốt xuống để đóng →"
            : "↓ Vuốt xuống để đóng"}
        </span>
      </div>
    </div>
  );
};
