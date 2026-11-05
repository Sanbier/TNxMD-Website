"use client";

import React, { useState } from "react";
import { Sparkles, ArrowDown, Headphones } from "lucide-react";
import { ContactModal } from "./ContactModal";

export const Hero: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-20 border-b border-white/[0.06]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] pointer-events-none">
        <div className="absolute top-4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/25 rounded-full blur-[110px]" />
        <div className="absolute top-10 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 rounded-full blur-[110px]" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[550px] h-48 bg-indigo-500/15 rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)] mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-cyan-300 to-white">
              Cổng Mua/Bán Uy Tín : TNxMD.IO.VN
            </span>
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-gaming leading-[1.1]">
            Trải nghiệm game đỉnh cao <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]">
              & Truy cập trực tiếp
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#catalog"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Khám Phá Kho Game</span>
              <ArrowDown className="w-4 h-4 text-cyan-200 animate-bounce" />
            </a>

            <button
              onClick={() => setContactOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-gray-200 bg-white/[0.05] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.09] hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Headphones className="w-4 h-4 text-cyan-400" />
              <span>Liên Hệ Đội Ngũ Hỗ Trợ</span>
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
};
