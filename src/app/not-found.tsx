import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-lg rounded-3xl glass-panel-2 p-7 sm:p-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill-2 text-xs font-bold uppercase tracking-wider text-cyan-200 mb-5">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Mã lỗi 404 • TNxMD</span>
        </div>

        <h1 className="font-brand font-black text-5xl sm:text-6xl tracking-wider bg-gradient-to-b from-white via-sky-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(56,189,248,0.3)]">
          404
        </h1>

        <h2 className="mt-3 text-xl sm:text-2xl font-extrabold text-white font-gaming">
          Không Tìm Thấy Trang Yêu Cầu
        </h2>

        <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Đường dẫn bạn truy cập không tồn tại hoặc tựa game đã được cập nhật
          sang địa chỉ mới trong kho game TNxMD.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/#catalog"
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white glass-btn-primary flex items-center justify-center gap-2 active:scale-95"
          >
            <Compass className="w-4 h-4 text-cyan-100" />
            <span>Mở Kho Game</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-100 glass-btn-secondary hover:text-white flex items-center justify-center gap-2 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-300" />
            <span>Về Trang Chủ</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
