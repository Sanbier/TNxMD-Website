"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Search } from "lucide-react";
import { TelegramIcon, ZaloIcon } from "./SocialLinks";
import { ContactModal } from "./ContactModal";
import { useToast } from "./Toast";

export const MobileBottomDock: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();
  const { showToast } = useToast();
  const isDetailPage = pathname?.startsWith("/game/");

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(1);
    if (pathname === "/") {
      const searchInput = document.getElementById("game-search-input");
      if (searchInput) {
        searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
        searchInput.focus();
      }
    } else {
      window.location.href = "/#catalog";
    }
  };

  const handleZaloClick = () => {
    setActiveTab(2);
    showToast("Đang mở Nhóm Zalo...", "Chuyển tiếp đến nhóm cộng đồng TNxMD", "info");
  };

  const handleTelegramClick = () => {
    setActiveTab(3);
    showToast("Đang mở Shop Telegram...", "Chuyển tiếp đến @tnxmd", "info");
  };

  if (isDetailPage) {
    return null;
  }

  const pillLeftPercentage = `${activeTab * 25}%`;

  return (
    <>
      <nav
        aria-label="Điều hướng nhanh điện thoại"
        className="fixed bottom-3 left-3 right-3 z-40 sm:hidden glass-dock-2 rounded-2xl p-1.5"
        style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom))" }}
      >
        <div className="relative grid grid-cols-4 items-center text-[11px] font-bold text-slate-200">
          {/* Liquid Glass Sliding Capsule Pill */}
          <div
            className="absolute top-0.5 bottom-0.5 w-1/4 rounded-xl bg-gradient-to-r from-sky-400/25 via-indigo-400/20 to-cyan-400/25 border border-white/30 shadow-[0_4px_16px_rgba(0,240,255,0.22),inset_0_1px_0_rgba(255,255,255,0.42)] transition-all duration-300 pointer-events-none"
            style={{ left: pillLeftPercentage }}
          />

          <Link
            href="/#catalog"
            onClick={() => setActiveTab(0)}
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 0 ? "text-white" : "text-slate-300/80 hover:text-white"
            }`}
          >
            <Gamepad2 className={`w-5 h-5 mb-0.5 transition-colors ${activeTab === 0 ? "text-cyan-300" : "text-sky-300/80"}`} />
            <span>Kho Game</span>
          </Link>

          <button
            onClick={handleSearchClick}
            type="button"
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 1 ? "text-white" : "text-slate-300/80 hover:text-white"
            }`}
          >
            <Search className={`w-5 h-5 mb-0.5 transition-colors ${activeTab === 1 ? "text-cyan-200" : "text-cyan-300/80"}`} />
            <span>Tìm Kiếm</span>
          </button>

          <a
            href="https://zalo.me/g/d4xyfuzgvavdgjdjhpun"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleZaloClick}
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 2 ? "text-white" : "text-slate-300/80 hover:text-sky-200"
            }`}
          >
            <div className="w-5 h-5 mb-0.5 flex items-center justify-center text-sky-300">
              <ZaloIcon className="w-4 h-4" />
            </div>
            <span>Nhóm Zalo</span>
          </a>

          <a
            href="https://t.me/tnxmd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTelegramClick}
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 3 ? "text-white" : "text-slate-300/80 hover:text-cyan-200"
            }`}
          >
            <div className="w-5 h-5 mb-0.5 flex items-center justify-center text-cyan-300">
              <TelegramIcon className="w-4 h-4" />
            </div>
            <span>Telegram</span>
          </a>
        </div>
      </nav>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};
