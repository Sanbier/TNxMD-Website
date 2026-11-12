"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="px-3.5 py-1.5 rounded-full glass-pill-2 flex items-center gap-1.5 text-slate-200 hover:text-cyan-200 transition-colors active:scale-95"
    >
      <span>Về Đầu Trang</span>
      <ArrowUp className="w-3.5 h-3.5 text-cyan-300" />
    </button>
  );
};
