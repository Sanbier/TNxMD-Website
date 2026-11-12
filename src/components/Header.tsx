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
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Tự động đóng menu di động khi đổi trang
  useEffect(() => {
    setMobileMenuOpen(false);
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

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 w-full glass-header-2 transition-all"
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
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.1] hover:text-cyan-200 transition-all flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Kho Game</span>
            </Link>
            <Link
              href="/#catalog"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.1] hover:text-cyan-200 transition-all flex items-center gap-1.5"
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
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.1] hover:text-cyan-200 transition-all flex items-center gap-1.5"
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
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white glass-btn-primary hover:scale-[1.02] active:scale-[0.98]"
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

        {/* Mobile Frosted Glass Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-white/[0.12] bg-[#080d1e]/90 backdrop-blur-2xl px-4 py-5 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.65)]">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] border border-white/15 text-slate-100 font-semibold text-sm hover:bg-white/[0.1]"
              >
                <span>Kho Game</span>
                <span className="text-xs text-cyan-300 font-mono">Trực tuyến</span>
              </Link>
              <Link
                href="/#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] border border-white/15 text-slate-100 font-semibold text-sm hover:bg-white/[0.1]"
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
                className="w-full flex items-center justify-between p-3 rounded-xl glass-btn-primary text-white font-semibold text-sm"
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
