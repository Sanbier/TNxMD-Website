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
    <footer className="relative bg-[#050508] border-t border-white/[0.08] pt-10 pb-8 overflow-hidden">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Domain */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
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
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white font-gaming tracking-wider">
                    TN<span className="text-cyan-400">x</span>MD
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-bold uppercase">
                    tnxmd.io.vn
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  Kiến Trúc & Nền Tảng Gaming Thế Hệ Mới
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              TNxMD cung cấp danh mục game chọn lọc với cấu hình tối ưu, kiểm định ổn định và kết nối hỗ trợ trực tiếp.
            </p>
          </div>

          {/* Official Direct Channels */}
          <div className="shrink-0">
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
              Kênh Liên Lạc Chính Thức:
            </span>
            <SocialLinks size="sm" showLabel={true} />
          </div>
        </div>

        {/* Bottom disclaimer & copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>
              © 2026 TNxMD (tnxmd.io.vn). Mọi thương hiệu và bản quyền tựa game thuộc về các nhà phát hành tương ứng.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <span>Về Đầu Trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
