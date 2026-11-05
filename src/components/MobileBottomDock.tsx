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

  // If on game detail page, let the GameDetailClient render its dedicated action dock
  if (isDetailPage) {
    return null;
  }

  // Calculate sliding pill left position based on 4 columns
  const pillLeftPercentage = `${activeTab * 25}%`;

  return (
    <>
      <nav
        aria-label="Điều hướng nhanh điện thoại"
        className="fixed bottom-3 left-3 right-3 z-40 sm:hidden backdrop-blur-2xl bg-[#0a0a14]/90 border border-white/10 rounded-2xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(168,85,247,0.2)]"
        style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom))" }}
      >
        <div className="relative grid grid-cols-4 items-center text-[11px] font-bold text-gray-300">
          {/* Lucian Element #041: Sliding Neon Capsule Pill */}
          <div
            className="absolute top-1 bottom-1 w-1/4 rounded-xl bg-gradient-to-r from-purple-600/30 via-indigo-600/25 to-cyan-500/30 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300 pointer-events-none"
            style={{ left: pillLeftPercentage }}
          />

          {/* 1. Kho Game */}
          <Link
            href="/#catalog"
            onClick={() => setActiveTab(0)}
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 0 ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Gamepad2 className={`w-5 h-5 mb-0.5 transition-colors ${activeTab === 0 ? "text-cyan-400" : "text-purple-400"}`} />
            <span>Kho Game</span>
          </Link>

          {/* 2. Tìm Kiếm */}
          <button
            onClick={handleSearchClick}
            type="button"
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 1 ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            <Search className={`w-5 h-5 mb-0.5 transition-colors ${activeTab === 1 ? "text-cyan-300" : "text-cyan-400"}`} />
            <span>Tìm Kiếm</span>
          </button>

          {/* 3. Zalo */}
          <a
            href="https://zalo.me/g/d4xyfuzgvavdgjdjhpun"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleZaloClick}
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 2 ? "text-white" : "text-gray-400 hover:text-blue-300"
            }`}
          >
            <div className="w-5 h-5 mb-0.5 flex items-center justify-center text-blue-400">
              <ZaloIcon className="w-4 h-4" />
            </div>
            <span>Nhóm Zalo</span>
          </a>

          {/* 4. Telegram */}
          <a
            href="https://t.me/tnxmd"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleTelegramClick}
            className={`relative z-10 flex flex-col items-center justify-center py-1.5 px-1 rounded-xl active:scale-90 transition-all ${
              activeTab === 3 ? "text-white" : "text-gray-400 hover:text-cyan-300"
            }`}
          >
            <div className="w-5 h-5 mb-0.5 flex items-center justify-center text-cyan-400">
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
