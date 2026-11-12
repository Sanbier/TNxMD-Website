"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageSquare, Sparkles, Compass, Headset } from "lucide-react";
import { BrandLockup } from "./BrandLockup";
import { ContactModal } from "./ContactModal";
import { SocialLinks } from "./SocialLinks";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const drawerCloseTimerRef = useRef<number | null>(null);
  const pathname = usePathname();

  // Tự động đóng menu di động khi đổi trang
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // 120Hz GPU Scroll Progress & Adaptive Frosted Header Tightening
  useEffect(() => {
    let rafId = 0;

    const updateScrollMetrics = () => {
      rafId = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrolled = scrollTop > 16;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));

      if (progressBarRef.current) {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          docHeight > 24 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
        progressBarRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
        progressBarRef.current.style.opacity = progress > 0.005 ? "1" : "0";
      }
    };

    const onScroll = () => {
      if (rafId !== 0) return;
      rafId = window.requestAnimationFrame(updateScrollMetrics);
    };

    updateScrollMetrics();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId !== 0) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Tự động đóng menu di động khi chạm ra ngoài, bấm Escape hoặc xoay ngang màn hình
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (
        headerRef.current &&
        e.target instanceof Node &&
        !headerRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  // Cử chỉ vuốt lên trên menu di động để đóng mượt tức thì
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!mobileMenuOpen || !drawer) return;

    let tracking = false;
    let swipingUp = false;
    let startY = 0;
    let startX = 0;
    let lastDy = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      tracking = true;
      swipingUp = false;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      lastDy = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!tracking || e.touches.length !== 1) return;
      const dy = e.touches[0].clientY - startY;
      const dx = e.touches[0].clientX - startX;

      if (!swipingUp) {
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
          tracking = false;
          return;
        }
        if (dy < -8) {
          swipingUp = true;
          drawer.style.transition = "none";
        } else {
          return;
        }
      }

      if (e.cancelable) e.preventDefault();
      lastDy = Math.min(0, dy);
      const progress = Math.min(1, Math.abs(lastDy) / 140);
      drawer.style.transform = `translate3d(0, ${lastDy}px, 0)`;
      drawer.style.opacity = String(Math.max(0.25, 1 - progress * 0.75));
    };

    const onTouchEnd = () => {
      if (!tracking) return;
      tracking = false;
      if (!swipingUp) return;

      if (lastDy < -44) {
        drawer.style.transition =
          "transform 200ms cubic-bezier(0.32, 0.72, 0, 1), opacity 180ms ease";
        drawer.style.transform = "translate3d(0, -18px, 0)";
        drawer.style.opacity = "0";
        if (drawerCloseTimerRef.current !== null) {
          window.clearTimeout(drawerCloseTimerRef.current);
        }
        drawerCloseTimerRef.current = window.setTimeout(() => {
          drawerCloseTimerRef.current = null;
          setMobileMenuOpen(false);
        }, 180);
      } else {
        drawer.style.transition =
          "transform 240ms cubic-bezier(0.34, 1.35, 0.64, 1), opacity 200ms ease";
        drawer.style.transform = "translate3d(0, 0, 0)";
        drawer.style.opacity = "1";
      }
    };

    drawer.addEventListener("touchstart", onTouchStart, { passive: true });
    drawer.addEventListener("touchmove", onTouchMove, { passive: false });
    drawer.addEventListener("touchend", onTouchEnd, { passive: true });
    drawer.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      if (drawerCloseTimerRef.current !== null) {
        window.clearTimeout(drawerCloseTimerRef.current);
        drawerCloseTimerRef.current = null;
      }
      drawer.removeEventListener("touchstart", onTouchStart);
      drawer.removeEventListener("touchmove", onTouchMove);
      drawer.removeEventListener("touchend", onTouchEnd);
      drawer.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-30 sm:hidden bg-slate-950/60 touch-none animate-lightbox-in"
        />
      )}

      <header
        ref={headerRef}
        className={`sticky top-0 z-40 w-full glass-header-2 ${
          isScrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-20 flex items-center justify-between gap-3">
          {/* Logo (kept intact) + Orbitron Brand Typography Lockup */}
          <Link href="/" className="group min-w-0">
            <BrandLockup priority interactive />
          </Link>

          {/* Desktop Frosted Glass Capsule Nav */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full glass-pill-2 text-xs lg:text-[13px] font-semibold text-slate-200">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.11] hover:text-cyan-200 transition-all flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Kho Game</span>
            </Link>
            <Link
              href="/#catalog"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.11] hover:text-cyan-200 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Game Nổi Bật</span>
            </Link>
            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault();
                setContactModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.11] hover:text-cyan-200 transition-all flex items-center gap-1.5"
            >
              <Headset className="w-3.5 h-3.5 text-purple-300" />
              <span>Hỗ Trợ Trực Tiếp</span>
            </a>
          </nav>

          {/* Right Liquid Glass CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="relative group px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white glass-btn-primary hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 relative z-10">
                <MessageSquare className="w-4 h-4 text-cyan-100" />
                <span>Kênh Liên Hệ</span>
              </div>
            </button>
          </div>

          {/* Mobile Frosted Glass Buttons */}
          <div className="flex items-center gap-2 sm:hidden shrink-0">
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="p-2 rounded-xl glass-btn-secondary text-cyan-300 active:scale-95 transition-transform"
              aria-label="Kênh liên hệ"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl glass-btn-secondary text-slate-200 hover:text-white active:scale-95 transition-transform"
              aria-label="Đóng/Mở menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Liquid Crystal Scroll Progress Hairline (GPU scaleX, 0 reflow) */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden"
        >
          <div
            ref={progressBarRef}
            style={{ transform: "scaleX(0)", opacity: 0 }}
            className="h-full w-full origin-left bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400 shadow-[0_0_10px_rgba(0,240,255,0.75)] transition-opacity duration-200 will-change-transform"
          />
        </div>

        {/* Mobile Frosted Glass Spring Dropdown Drawer (Swipe Up to Close) */}
        {mobileMenuOpen && (
          <div
            ref={drawerRef}
            className="sm:hidden border-t border-white/[0.14] bg-[#080d1e]/92 backdrop-blur-2xl px-4 pt-4 pb-5 space-y-4 shadow-[0_24px_48px_rgba(0,0,0,0.72)] animate-glass-drawer will-change-transform"
          >
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-slate-100 font-semibold text-sm active:scale-[0.98] transition-all hover:bg-white/[0.1]"
              >
                <span>Kho Game</span>
                <span className="text-xs text-cyan-300 font-mono">Trực tuyến</span>
              </Link>
              <Link
                href="/#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] text-slate-100 font-semibold text-sm active:scale-[0.98] transition-all hover:bg-white/[0.1]"
              >
                <span>Tựa Game Nổi Bật & Hot</span>
                <span className="text-xs text-amber-300 font-mono">HOT</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl glass-btn-primary text-white font-semibold text-sm active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-100" />
                  Kênh Liên Hệ Trực Tiếp
                </span>
                <span className="text-xs text-cyan-100 font-semibold">Mở →</span>
              </button>
            </nav>

            <div className="pt-2 border-t border-white/[0.08]">
              <span className="text-xs text-slate-300 block mb-2 font-medium">
                Kết nối nhanh:
              </span>
              <SocialLinks size="sm" showLabel={true} />
            </div>

            <div className="pt-1 flex justify-center">
              <span className="w-10 h-1 rounded-full bg-white/30" />
            </div>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
};
