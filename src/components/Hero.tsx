"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Flame, ArrowUpRight } from "lucide-react";
import { GAMES } from "@/data/games";
import { Game } from "@/types/game";

interface HotShowcaseConfig {
  slug: string;
  displayTitle: string;
  collapsedPos: string;
  activePos: string;
  baseScale: number;
}

const TOP_6_HOT_CONFIG: HotShowcaseConfig[] = [
  {
    slug: "zingspeed-mobile",
    displayTitle: "ZingSpeed Mobile",
    collapsedPos: "50% 42%",
    activePos: "50% 44%",
    baseScale: 1.04,
  },
  {
    slug: "mini-world-royale",
    displayTitle: "Mini World Royale",
    collapsedPos: "54% 45%",
    activePos: "50% 48%",
    baseScale: 1.04,
  },
  {
    slug: "lien-quan-mobile",
    displayTitle: "Liên Quân Mobile",
    collapsedPos: "74% 42%",
    activePos: "50% 46%",
    baseScale: 1.04,
  },
  {
    slug: "thu-cung-bao-dan",
    displayTitle: "Thú Cưng Bão Đạn",
    collapsedPos: "38% 44%",
    activePos: "50% 48%",
    baseScale: 1.04,
  },
  {
    slug: "soul-knight-prequel",
    displayTitle: "Kỵ Sĩ Nguyên Khí",
    collapsedPos: "48% 48%",
    activePos: "50% 48%",
    baseScale: 1.05,
  },
  {
    slug: "dau-nho-noi-gian",
    displayTitle: "Đậu Nhỏ Nổi Giận",
    collapsedPos: "45% 42%",
    activePos: "50% 44%",
    baseScale: 1.22,
  },
];

interface ResolvedHotItem extends HotShowcaseConfig {
  game: Game;
}

const TOP_6_ITEMS: ResolvedHotItem[] = TOP_6_HOT_CONFIG.map((cfg) => {
  const found = GAMES.find((g) => g.slug === cfg.slug);
  return found ? { ...cfg, game: found } : null;
}).filter((item): item is ResolvedHotItem => item !== null);

export const Hero: React.FC = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const manualPauseUntilRef = useRef<number>(0);

  useEffect(() => {
    if (TOP_6_ITEMS.length <= 1) return;
    const timer = setInterval(() => {
      if (isHovered) return;
      if (Date.now() < manualPauseUntilRef.current) return;
      setActiveIndex((prev) => (prev + 1) % TOP_6_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

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
      if (idx !== activeIndex) {
        setActiveIndex(idx);
        manualPauseUntilRef.current = Date.now() + 8000;
        return;
      }
      router.push(`/game/${slug}`);
    },
    [activeIndex, router]
  );

  return (
    <section className="relative overflow-hidden pt-5 pb-7 sm:pt-8 sm:pb-11">
      <div className="relative max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Glassmorphism 2.0 Floating Showcase Stage */}
        <div className="glass-panel-2 rounded-2xl sm:rounded-3xl p-2.5 sm:p-4">
          {/* Compact Top 6 Header Bar */}
          <div className="flex items-center justify-between gap-3 px-1 pb-2.5 sm:pb-3.5">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-orange-400/25 via-rose-500/20 to-purple-500/25 border border-white/20 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_14px_rgba(249,115,22,0.28)] shrink-0">
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
              {TOP_6_ITEMS.map((item, idx) => {
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
                        ? "w-5 sm:w-6 bg-gradient-to-r from-sky-300 to-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.75)]"
                        : "w-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Expanding Image Accordion (6 Slices) */}
          <div
            className="flex flex-row items-stretch justify-center gap-1.5 sm:gap-2.5 w-full h-[325px] sm:h-[405px] md:h-[435px] select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {TOP_6_ITEMS.map((item, idx) => {
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
                  className={`group relative min-w-0 h-full rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer outline-none ${
                    isActive
                      ? "border border-cyan-300/60 shadow-[0_14px_38px_-6px_rgba(0,0,0,0.7),0_0_24px_rgba(56,189,248,0.28)]"
                      : "border border-white/20 hover:border-sky-300/45 shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  {/* Glass Specular Inner Rim Overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-20 rounded-xl sm:rounded-2xl pointer-events-none shadow-[inset_0_1px_0_0_rgba(255,255,255,0.38),inset_1px_0_0_0_rgba(255,255,255,0.12)]"
                  />

                  {/* Retina Full-Bleed Artwork */}
                  <Image
                    src={item.game.coverImage}
                    alt={item.displayTitle}
                    fill
                    unoptimized
                    priority={idx < 3}
                    sizes="(max-width: 640px) 240px, 520px"
                    style={{
                      objectPosition: isActive
                        ? item.activePos
                        : item.collapsedPos,
                      transform: `scale(${scaleVal})`,
                      transition:
                        "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), object-position 700ms cubic-bezier(0.25, 1, 0.5, 1), filter 500ms ease",
                    }}
                    className={`object-cover ${
                      isActive
                        ? "brightness-100 saturate-[1.06]"
                        : "brightness-[0.74] group-hover:brightness-[0.9]"
                    }`}
                  />

                  {/* Frosted Bottom Refraction Vignette */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
                    style={{
                      background: isActive
                        ? "linear-gradient(to top, rgba(5,8,20,0.94) 0%, rgba(5,8,20,0.68) 26%, rgba(5,8,20,0.12) 56%, rgba(5,8,20,0.04) 100%)"
                        : "linear-gradient(to top, rgba(5,8,20,0.9) 0%, rgba(5,8,20,0.4) 52%, rgba(5,8,20,0.16) 100%)",
                    }}
                  />

                  {/* Top Frosted Glass Badges (Visible when Active) */}
                  <div
                    className={`absolute top-2.5 left-2.5 right-2.5 sm:top-3.5 sm:left-3.5 sm:right-3.5 z-20 flex items-center justify-between gap-1.5 pointer-events-none transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-orange-500/85 to-rose-500/85 backdrop-blur-xl text-white border border-white/35 shadow-[0_4px_14px_rgba(244,63,94,0.4),inset_0_1px_0_rgba(255,255,255,0.45)]">
                      <Flame className="w-3 h-3 fill-white" />
                      HOT #{idx + 1}
                    </span>
                    <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold bg-slate-950/55 backdrop-blur-xl text-cyan-200 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                      {item.game.version}
                    </span>
                  </div>

                  {/* Rotating Title (90deg vertical slice -> 0deg horizontal active) */}
                  <span
                    style={{
                      transform: isActive
                        ? "translateX(-50%) rotate(0deg)"
                        : "translateX(-50%) rotate(90deg)",
                      transition: "all 550ms cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                    className={`absolute left-1/2 z-20 whitespace-nowrap pointer-events-none font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
                      isActive
                        ? "bottom-[2.65rem] sm:bottom-[3.15rem] text-[13px] sm:text-lg md:text-xl tracking-tight"
                        : "bottom-[5.2rem] sm:bottom-[6.4rem] text-[11px] sm:text-[13.5px] tracking-wide text-white/95"
                    }`}
                  >
                    {item.displayTitle}
                  </span>

                  {/* Bottom Frosted Liquid-Glass Pill (Visible when Active) */}
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
