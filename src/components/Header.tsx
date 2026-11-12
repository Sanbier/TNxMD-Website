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
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07070c]/88 border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.45)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-20 flex items-center justify-between gap-3">
          {/* Logo (kept intact) + Redesigned Brand Typography Lockup */}
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

            {/* Subtle Luminous Vertical Hairline */}
            <span
              aria-hidden="true"
              className="h-7 sm:h-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-300/35 to-transparent shrink-0"
            />

            {/* Engineered Futuristic Wordmark & Tagline */}
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

                <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-blue-600/15 border border-cyan-400/35 shadow-[0_0_12px_rgba(0,212,255,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff] animate-pulse" />
                  <span className="font-brand font-extrabold text-[8.5px] sm:text-[9.5px] tracking-[0.12em] text-cyan-200 leading-none">
                    IO.VN
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="w-3 sm:w-4 h-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-transparent shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] bg-gradient-to-r from-sky-200/90 via-slate-300/85 to-cyan-200/75 bg-clip-text text-transparent leading-none truncate">
                  Nền Tảng Gaming Cao Cấp
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Glass Capsule Nav */}
          <nav className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-xs lg:text-[13px] font-semibold text-gray-300">
            <Link
              href="/"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] hover:text-cyan-300 transition-all flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Kho Game</span>
            </Link>
            <Link
              href="/#catalog"
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] hover:text-cyan-300 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Game Nổi Bật</span>
            </Link>
            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault();
                setContactModalOpen(true);
              }}
              className="px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] hover:text-cyan-300 transition-all flex items-center gap-1.5"
            >
              <Headset className="w-3.5 h-3.5 text-purple-400" />
              <span>Hỗ Trợ Trực Tiếp</span>
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setContactModalOpen(true)}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 border border-cyan-300/25 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_26px_rgba(0,240,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-2 relative z-10">
                <MessageSquare className="w-4 h-4 text-cyan-100" />
                <span>Kênh Liên Hệ</span>
              </div>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden shrink-0">
            <button
              onClick={() => setContactModalOpen(true)}
              className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 active:scale-95 transition-transform"
              aria-label="Kênh liên hệ"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-gray-200 hover:text-white active:scale-95 transition-transform"
              aria-label="Đóng/Mở menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-white/[0.08] bg-[#090910]/98 backdrop-blur-2xl px-4 py-5 space-y-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-gray-200 font-semibold text-sm hover:bg-white/[0.08]"
              >
                <span>Kho Game</span>
                <span className="text-xs text-cyan-400 font-mono">Trực tuyến</span>
              </Link>
              <Link
                href="/#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-gray-200 font-semibold text-sm hover:bg-white/[0.08]"
              >
                <span>Tựa Game Nổi Bật & Hot</span>
                <span className="text-xs text-amber-400 font-mono">HOT</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-950/60 via-indigo-950/50 to-cyan-950/60 border border-cyan-400/30 text-white font-semibold text-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  Kênh Liên Hệ Trực Tiếp
                </span>
                <span className="text-xs text-cyan-300 font-semibold">Mở →</span>
              </button>
            </nav>

            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-xs text-gray-400 block mb-2 font-medium">Kết nối nhanh:</span>
              <SocialLinks size="sm" showLabel={true} />
            </div>
          </div>
        )}
      </header>

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
};
