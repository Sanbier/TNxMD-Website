"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, images.length]);

  if (!isOpen || images.length === 0) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextImage();
    } else if (diff < -50) {
      prevImage();
    }
    setTouchStart(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/88 backdrop-blur-3xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Frosted Bar */}
      <div
        className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-2">
          {title && <span className="font-bold text-xs sm:text-sm text-white truncate max-w-[200px] sm:max-w-xs">{title}</span>}
          <span className="text-xs font-mono text-cyan-200 font-semibold">
            {currentIndex + 1} / {images.length}
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

      {/* Main Image with Touch Swipe */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] p-4 flex items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Ảnh ${currentIndex + 1}`}
            fill
            unoptimized
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
          ← Vuốt trái / phải để đổi ảnh →
        </span>
      </div>
    </div>
  );
};
