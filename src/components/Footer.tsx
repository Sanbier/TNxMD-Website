"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-8 bg-white/[0.025] backdrop-blur-2xl border-t border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] pt-10 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
          {/* Brand & Domain (Matching Header Lockup) */}
          <div className="space-y-3.5 max-w-xl">
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 drop-shadow-[0_0_12px_rgba(0,240,255,0.45)] shrink-0">
                <Image
                  src="/logo.png"
                  alt="TNxMD Logo"
                  fill
                  quality={95}
                  sizes="128px"
                  className="object-contain"
                />
              </div>

              <span
                aria-hidden="true"
                className="h-7 sm:h-8 w-[1px] bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent shrink-0"
              />

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 leading-none">
                  <span className="font-brand font-black text-[18px] sm:text-[21px] tracking-[0.07em] inline-flex items-baseline drop-shadow-[0_2px_12px_rgba(56,189,248,0.28)]">
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

                  <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full bg-gradient-to-r from-cyan-400/20 via-sky-400/12 to-blue-500/20 border border-cyan-300/40 backdrop-blur-md shadow-[0_0_12px_rgba(0,212,255,0.18),inset_0_1px_0_rgba(255,255,255,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_6px_#00f0ff]" />
                    <span className="font-brand font-extrabold text-[8.5px] sm:text-[9.5px] tracking-[0.12em] text-cyan-100 leading-none">
                      IO.VN
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-3 sm:w-4 h-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-transparent shrink-0" />
                  <span className="text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.16em] bg-gradient-to-r from-sky-100/95 via-slate-200/85 to-cyan-200/80 bg-clip-text text-transparent leading-none">
                    Nền Tảng Gaming Cao Cấp
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed">
              TNxMD cung cấp danh mục game chọn lọc với cấu hình tối ưu, kiểm định ổn định và kết nối hỗ trợ trực tiếp.
            </p>
          </div>

          {/* Official Direct Channels */}
          <div className="shrink-0">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider block mb-2">
              Kênh Liên Lạc Chính Thức:
            </span>
            <SocialLinks size="sm" showLabel={true} />
          </div>
        </div>

        {/* Bottom disclaimer & copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>
              © 2026 TNxMD (tnxmd.io.vn). Mọi thương hiệu và bản quyền tựa game thuộc về các nhà phát hành tương ứng.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 rounded-full glass-pill-2 flex items-center gap-1.5 text-slate-200 hover:text-cyan-200 transition-colors"
          >
            <span>Về Đầu Trang</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
