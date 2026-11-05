"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageSquare, Sparkles, Compass } from "lucide-react";
import { ContactModal } from "./ContactModal";
import { SocialLinks } from "./SocialLinks";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07070a]/85 border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.7)] group-hover:scale-105 transition-all shrink-0 border border-cyan-400/40">
              <Image
                src="/logo.png"
                alt="TNXMD Logo"
                fill
                priority
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300 font-gaming">
                  TNXMD
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  IO.VN
                </span>
              </div>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">
                Nền Tảng Gaming Cao Cấp
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-300">
            <Link
              href="/"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-purple-400" />
              Kho Game
            </Link>
            <Link
              href="/#catalog"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Game Nổi Bật
            </Link>
            <a
              href="#support"
              onClick={(e) => {
                e.preventDefault();
                setContactModalOpen(true);
              }}
              className="hover:text-cyan-400 transition-colors"
            >
              Hỗ Trợ Trực Tiếp
            </a>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-400">
              tnxmd.io.vn
            </span>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setContactModalOpen(true)}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <div className="flex items-center gap-2 relative z-10">
                <MessageSquare className="w-4 h-4 text-cyan-200" />
                <span>Kênh Liên Hệ</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setContactModalOpen(true)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-cyan-400"
              aria-label="Kênh liên hệ"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 hover:text-white"
              aria-label="Đóng/Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-white/[0.08] bg-[#090910] px-4 py-5 space-y-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] text-gray-200 font-semibold text-sm hover:bg-white/[0.08]"
              >
                <span>Kho Game</span>
                <span className="text-xs text-purple-400 font-mono">Trực tuyến</span>
              </Link>
              <Link
                href="/#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] text-gray-200 font-semibold text-sm hover:bg-white/[0.08]"
              >
                <span>Tựa Game Nổi Bật & Hot</span>
                <span className="text-xs text-yellow-400 font-mono">HOT</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/30 text-white font-semibold text-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  Kênh Liên Hệ Trực Tiếp
                </span>
                <span className="text-xs text-cyan-300">Mở</span>
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
