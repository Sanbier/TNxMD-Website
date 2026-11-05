"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Search, MessageSquare } from "lucide-react";
import { TelegramIcon, ZaloIcon } from "./SocialLinks";
import { ContactModal } from "./ContactModal";

export const MobileBottomDock: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();
  const isDetailPage = pathname?.startsWith("/game/");

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
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

  // If on game detail page, let the GameDetailClient render its dedicated action dock
  if (isDetailPage) {
    return null;
  }

  return (
    <>
      <nav
        aria-label="Điều hướng nhanh điện thoại"
        className="fixed bottom-3 left-3 right-3 z-40 sm:hidden backdrop-blur-2xl bg-[#090912]/90 border border-white/10 rounded-2xl p-2 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(168,85,247,0.2)]"
        style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="grid grid-cols-4 items-center gap-1 text-[11px] font-bold text-gray-300">
          {/* 1. Kho Game */}
          <Link
            href="/#catalog"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl hover:bg-white/[0.08] active:scale-90 transition-all text-gray-300 hover:text-white"
          >
            <Gamepad2 className="w-5 h-5 text-purple-400 mb-0.5" />
            <span>Kho Game</span>
          </Link>

          {/* 2. Tìm Kiếm */}
          <button
            onClick={handleSearchClick}
            type="button"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl hover:bg-white/[0.08] active:scale-90 transition-all text-gray-300 hover:text-white"
          >
            <Search className="w-5 h-5 text-cyan-400 mb-0.5" />
            <span>Tìm Kiếm</span>
          </button>

          {/* 3. Zalo */}
          <a
            href="https://zalo.me/g/d4xyfuzgvavdgjdjhpun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl hover:bg-white/[0.08] active:scale-90 transition-all text-gray-300 hover:text-blue-300"
          >
            <div className="w-5 h-5 text-blue-400 mb-0.5 flex items-center justify-center">
              <ZaloIcon className="w-4 h-4" />
            </div>
            <span>Nhóm Zalo</span>
          </a>

          {/* 4. Telegram */}
          <a
            href="https://t.me/tnxmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl hover:bg-white/[0.08] active:scale-90 transition-all text-gray-300 hover:text-cyan-300"
          >
            <div className="w-5 h-5 text-cyan-400 mb-0.5 flex items-center justify-center">
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
