"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MessageSquare } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { ContactModal } from "./ContactModal";

export const Footer: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-[#050508] border-t border-white/[0.08] pt-12 pb-8 overflow-hidden">
        {/* Subtle bottom lighting */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/[0.06]">
            {/* Col 1: Brand & Domain */}
            <div className="md:col-span-2 space-y-4">
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

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                TNxMD cung cấp danh mục game chọn lọc với cấu hình tối ưu, kiểm định ổn định và kết nối hỗ trợ trực tiếp. Không giỏ hàng rườm rà, không cổng thanh toán, liên hệ trực tiếp.
              </p>

              <div className="pt-2">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-2">
                  Kênh Liên Lạc Chính Thức:
                </span>
                <SocialLinks size="sm" showLabel={true} />
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider font-mono">
                Danh Mục Nền Tảng
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link href="/" className="hover:text-cyan-400 transition-colors">
                    Trang Chủ Kho Game
                  </Link>
                </li>
                <li>
                  <Link href="/#catalog" className="hover:text-cyan-400 transition-colors">
                    Tựa Game Nổi Bật
                  </Link>
                </li>
                <li>
                  <a
                    href="#support"
                    onClick={(e) => {
                      e.preventDefault();
                      setContactOpen(true);
                    }}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Hỗ Trợ Trực Tiếp 24/7
                  </a>
                </li>
                <li>
                  <span className="text-gray-500">Tên miền: tnxmd.io.vn</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Connect */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider font-mono">
                Liên Hệ Trực Tiếp
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Kết nối trực tiếp với đội ngũ kỹ thuật để nhận thông tin cấu hình và hướng dẫn trải nghiệm mượt mà nhất.
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="w-full px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Mở Bảng Chọn Kênh Liên Hệ</span>
              </button>
            </div>
          </div>

          {/* Bottom disclaimer & copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 text-center sm:text-left">
              <span>© 2026 TNxMD (tnxmd.io.vn). Mọi thương hiệu và bản quyền tựa game thuộc về các nhà phát hành tương ứng.</span>
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

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
