"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Flame, ArrowUpRight } from "lucide-react";
import { HeroGameItem } from "@/types/game";
import { appleCdnLoader } from "@/lib/imageLoader";
import {
  handleGlassSpotlightLeave,
  handleGlassSpotlightMove,
} from "@/lib/glassEffects";

interface HeroProps {
  items: HeroGameItem[];
}

export const Hero: React.FC<HeroProps> = ({ items }) => {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isInViewRef = useRef<boolean>(true);
  const isTabVisibleRef = useRef<boolean>(true);
  const manualPauseUntilRef = useRef<number>(0);
  const swipeRef = useRef<{ x: number; y: number; t: number } | null>(null);
  const suppressNextClickRef = useRef<number>(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          isInViewRef.current = entry.isIntersecting;
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      isTabVisibleRef.current = document.visibilityState === "visible";
    };
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      if (isHovered) return;
      if (!isInViewRef.current || !isTabVisibleRef.current) return;
      if (Date.now() < manualPauseUntilRef.current) return;
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isHovered, items.length]);

  const handleMouseEnterCard = useCallback((idx: number) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      setActiveIndex(idx);
    }
  }, []);

  const handleClickCard = useCallback(
    (idx: number, slug: string) => {
      if (performance.now() < suppressNextClickRef.current) return;
      if (idx !== activeIndex) {
        setActiveIndex(idx);
        manualPauseUntilRef.current = Date.now() + 8000;
        return;
      }
      router.push(`/game/${slug}`);
    },
    [activeIndex, router]
  );

  // Cử chỉ vuốt ngang (passive touch — không ảnh hưởng cuộn dọc 120Hz) để chuyển giữa Top 6
  const handleTouchStartAccordion = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    swipeRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      t: performance.now(),
    };
  }, []);

  const handleTouchEndAccordion = useCallback(
    (e: React.TouchEvent) => {
      const start = swipeRef.current;
      swipeRef.current = null;
      if (!start || e.changedTouches.length === 0 || items.length <= 1) return;

      const end = e.changedTouches[0];
      const dx = end.clientX - start.x;
      const dy = end.clientY - start.y;
      const dt = Math.max(1, performance.now() - start.t);

      // Vuốt ngang rõ ràng (kể cả vuốt nhanh ngắn >= 28px trong < 260ms hoặc kéo >= 40px)
      const isHorizontal = Math.abs(dx) > Math.abs(dy) * 1.15;
      const velocity = Math.abs(dx) / dt;
      if (isHorizontal && (Math.abs(dx) > 38 || (Math.abs(dx) > 26 && velocity > 0.3))) {
        suppressNextClickRef.current = performance.now() + 260;
        manualPauseUntilRef.current = Date.now() + 8000;
        if (dx < 0) {
          setActiveIndex((prev) => (prev + 1) % items.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
      }
    },
    [items.length]
  );

  if (items.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-5 pb-7 sm:pt-8 sm:pb-11"
    >
      <div className="relative max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Glassmorphism 2.5 Floating Showcase Stage */}
        <div
          onPointerMove={handleGlassSpotlightMove}
          onPointerLeave={handleGlassSpotlightLeave}
          className="glass-panel-2 glass-spotlight rounded-2xl sm:rounded-3xl p-2.5 sm:p-4"
        >
          {/* Compact Top 6 Header Bar */}
          <div className="flex items-center justify-between gap-3 px-1 pb-2.5 sm:pb-3.5">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-orange-400/25 via-rose-500/20 to-purple-500/25 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_14px_rgba(249,115,22,0.28)] shrink-0">
                <Flame className="w-4 h-4 text-orange-300 fill-orange-400/35" />
              </span>
              <h1 className="text-sm sm:text-xl md:text-2xl font-extrabold uppercase tracking-tight text-white font-gaming truncate">
                Top 6{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-sky-200 to-cyan-300">
                  Siêu Phẩm HOT
                </span>
              </h1>
            </div>

            {/* Frosted Glass Step Indicators */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass-pill-2 shrink-0">
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    aria-label={`Chọn ${item.displayTitle}`}
                    onClick={() => {
                      setActiveIndex(idx);
                      manualPauseUntilRef.current = Date.now() + 8000;
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-5 sm:w-6 bg-gradient-to-r from-sky-300 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                        : "w-1.5 bg-white/25 hover:bg-white/55"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Expanding Image Accordion (6 Slices + Touch Horizontal Swipe) */}
          <div
            className="flex flex-row items-stretch justify-center gap-1.5 sm:gap-2.5 w-full h-[325px] sm:h-[405px] md:h-[435px] select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStartAccordion}
            onTouchEnd={handleTouchEndAccordion}
          >
            {items.map((item, idx) => {
              const isActive = idx === activeIndex;
              const scaleVal = isActive ? item.baseScale + 0.05 : item.baseScale;

              return (
                <div
                  key={item.slug}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`${item.displayTitle} - ${
                    isActive ? "Nhấn để xem chi tiết" : "Nhấn để mở rộng"
                  }`}
                  onMouseEnter={() => handleMouseEnterCard(idx)}
                  onClick={() => handleClickCard(idx, item.slug)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleClickCard(idx, item.slug);
                    }
                  }}
                  style={{
                    flex: isActive ? "5.4 1 0%" : "1 1 0%",
                    transition:
                      "flex 700ms cubic-bezier(0.25, 1, 0.5, 1), border-color 450ms ease, box-shadow 450ms ease",
                  }}
                  className={`group relative min-w-0 h-full rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer outline-none active:scale-[0.99] ${
                    isActive
                      ? "border border-cyan-300/65 shadow-[0_14px_38px_-6px_rgba(0,0,0,0.7),0_0_26px_rgba(56,189,248,0.32)]"
                      : "border border-white/20 hover:border-sky-300/45 shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  {/* Glass Specular Inner Rim Overlay */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 z-20 rounded-xl sm:rounded-2xl pointer-events-none transition-shadow duration-500 ${
                      isActive
                        ? "shadow-[inset_0_1.5px_0_0_rgba(255,255,255,0.48),inset_1px_0_0_0_rgba(125,211,252,0.22),inset_0_-1px_0_0_rgba(56,189,248,0.18)]"
                        : "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),inset_1px_0_0_0_rgba(255,255,255,0.1)]"
                    }`}
                  />

                  {/* Retina Full-Bleed Artwork (GPU transform only, zero filter brightness pass) */}
                  <Image
                    loader={appleCdnLoader}
                    src={item.coverImage}
                    alt={item.displayTitle}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 640px) 420px, 560px"
                    style={{
                      objectPosition: isActive
                        ? item.activePos
                        : item.collapsedPos,
                      transform: `scale(${scaleVal})`,
                      transition:
                        "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), object-position 700ms cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                    className="object-cover"
                  />

                  {/* GPU-Composited Opacity Dimmer */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 z-[5] bg-[#050814] pointer-events-none transition-opacity duration-500 ${
                      isActive
                        ? "opacity-0"
                        : "opacity-30 group-hover:opacity-10"
                    }`}
                  />

                  {/* Bottom Refraction Vignette */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: isActive
                        ? "linear-gradient(to top, rgba(5,8,20,0.94) 0%, rgba(5,8,20,0.68) 26%, rgba(5,8,20,0.12) 56%, rgba(5,8,20,0.04) 100%)"
                        : "linear-gradient(to top, rgba(5,8,20,0.9) 0%, rgba(5,8,20,0.4) 52%, rgba(5,8,20,0.16) 100%)",
                    }}
                  />

                  {/* Top Glass Specular Badges */}
                  <div
                    className={`absolute top-2.5 left-2.5 right-2.5 sm:top-3.5 sm:left-3.5 sm:right-3.5 z-20 flex items-center justify-between gap-1.5 pointer-events-none transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-orange-500/90 to-rose-500/90 text-white border border-white/35 shadow-[0_4px_14px_rgba(244,63,94,0.4),inset_0_1px_0_rgba(255,255,255,0.45)]">
                      <Flame className="w-3 h-3 fill-white" />
                      HOT #{idx + 1}
                    </span>
                    <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-slate-950/80 text-cyan-200 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                      {item.version}
                    </span>
                  </div>

                  {/* Rotating Title (90deg vertical slice -> 0deg horizontal active) */}
                  <span
                    style={{
                      transform: isActive
                        ? "translateX(-50%) rotate(0deg)"
                        : "translateX(-50%) rotate(90deg)",
                      transition:
                        "transform 550ms cubic-bezier(0.25, 1, 0.5, 1), bottom 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                    className={`absolute left-1/2 z-20 whitespace-nowrap pointer-events-none font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
                      isActive
                        ? "bottom-[2.65rem] sm:bottom-[3.15rem] text-[13px] sm:text-lg md:text-xl tracking-tight"
                        : "bottom-[5.2rem] sm:bottom-[6.4rem] text-[11px] sm:text-[13.5px] tracking-wide text-white/95"
                    }`}
                  >
                    {item.displayTitle}
                  </span>

                  {/* Bottom Liquid-Glass Pill (Visible when Active) */}
                  <div
                    className={`absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white glass-btn-primary">
                      <span>Xem Chi Tiết</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-100" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
