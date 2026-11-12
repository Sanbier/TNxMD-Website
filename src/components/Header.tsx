"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageSquare, Sparkles, Compass, Headset } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { SocialLinks } from "./SocialLinks";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-header-2 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-20 flex items-center justify-between gap-3">
          {/* Logo (kept intact) + Orbitron Brand Typography Lockup */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 drop-shadow-[0_0_12px_rgba(0,240,255,0.45)] group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/logo.png"
                alt="TNxMD Logo"
                fill
                priority
                quality={95}
                sizes="128px"
                className="object-contain"
              />
            </div>

            <span
              aria-hidden="true"
              className="h-7 sm:h-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent shrink-0"
            />

            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-2 leading-none">
                <span className="font-brand font-black text-[18px] sm:text-[22px] tracking-[0.07em] inline-flex items-baseline drop-shadow-[0_2px_12px_rgba(56,189,248,0.28)]">
                  <span className="bg-gradient-to-b from-white via-sky-100 to-sky-300 bg-clip-text text-transparent">
                    TN
                  </span>
                  <span className="mx-[1.5px] text-[0.76em] font-extrabold bg-gradient-to-b from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,240,255,0.75)]">
                    x
                  </span>
                  <span className="bg-gradient-to-b from-white via-sky-100 to-cyan-300 bg-clip-text text-transparent">
                    MD
                  </span>
                </span>

                <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/12 to-blue-500/20 border border-cyan-300/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,212,255,0.2),inset_0_1px_0_rgba(255,255,255,0.32)] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f0ff] animate-pulse" />
                  <span className="font-brand font-extrabold text-[8.5px] sm:text-[9.5px] tracking-[0.12em] text-cyan-100 leading-none">
                    IO.VN
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="w-3 sm:w-4 h-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-transparent shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] bg-gradient-to-r from-sky-100/95 via-slate-200/85 to-cyan-200/80 bg-clip-text text-transparent leading-none truncate">
                  Nền Tảng Gaming Cao Cấp
                </span>
              </div>
            </div>
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
              onClick={() => setContactModalOpen(true)}
              className="p-2 rounded-xl glass-btn-secondary text-cyan-300 active:scale-95 transition-transform"
              aria-label="Kênh liên hệ"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-btn-secondary text-slate-200 hover:text-white active:scale-95 transition-transform"
              aria-label="Đóng/Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Frosted Glass Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-white/[0.12] bg-[#080d1e]/85 backdrop-blur-2xl px-4 py-5 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.65)]">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl glass-pill-2 text-slate-100 font-semibold text-sm hover:bg-white/[0.1]"
              >
                <span>Kho Game</span>
                <span className="text-xs text-cyan-300 font-mono">Trực tuyến</span>
              </Link>
              <Link
                href="/#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl glass-pill-2 text-slate-100 font-semibold text-sm hover:bg-white/[0.1]"
              >
                <span>Tựa Game Nổi Bật & Hot</span>
                <span className="text-xs text-amber-300 font-mono">HOT</span>
              </Link>
              <button
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
              <span className="text-xs text-slate-300 block mb-2 font-medium">Kết nối nhanh:</span>
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
