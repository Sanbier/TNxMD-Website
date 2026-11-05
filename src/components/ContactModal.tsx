"use client";

import React, { useEffect, useState, useRef } from "react";
import { X, ExternalLink, ShieldCheck } from "lucide-react";
import { ContactChannels } from "@/types/game";
import { DEFAULT_CONTACT_CHANNELS } from "@/data/games";
import { TelegramIcon, ZaloIcon, FacebookIcon } from "./SocialLinks";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  gameTitle?: string;
  channels?: ContactChannels;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  title = "Hỗ Trợ & Trao Đổi Trực Tiếp",
  gameTitle,
  channels = DEFAULT_CONTACT_CHANNELS,
}) => {
  const merged = { ...DEFAULT_CONTACT_CHANNELS, ...channels };
  const [dragY, setDragY] = useState(0);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      setDragY(0);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Touch drag-to-dismiss gesture for iOS bottom sheet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY.current;
    if (diff > 0) {
      setDragY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragY > 80) {
      onClose();
    }
    setDragY(0);
    touchStartY.current = null;
  };

  const contactList = [
    {
      name: "Shop Telegram",
      tag: "@tnxmd",
      url: merged.telegram,
      icon: TelegramIcon,
      hoverClass: "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]",
      btnClass: "bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-black",
    },
    {
      name: "Zalo Nhóm",
      tag: "Cộng đồng hỗ trợ TNxMD",
      url: merged.zalo,
      icon: ZaloIcon,
      hoverClass: "hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]",
      btnClass: "bg-blue-500/10 text-blue-300 hover:bg-blue-500 hover:text-white",
    },
    {
      name: "Liên Hệ Quản Gia",
      tag: "Hỗ trợ trực tiếp & trao đổi",
      url: merged.facebook,
      icon: FacebookIcon,
      hoverClass: "hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]",
      btnClass: "bg-fuchsia-500/10 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-t-3xl sm:rounded-2xl bg-[#0c0c16] border-t sm:border border-purple-500/30 p-5 sm:p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.9),0_0_50px_rgba(168,85,247,0.25)] transition-transform duration-150 max-h-[90vh] overflow-y-auto"
        style={{
          transform: `translateY(${dragY}px)`,
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* iOS Drag Handle (Touch gesture indicator) */}
        <div className="sm:hidden w-12 h-1.5 bg-white/25 rounded-full mx-auto -mt-1 mb-4 active:bg-cyan-400" />

        {/* Ambient Glow */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 sm:mb-6 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Kênh Đã Xác Minh: tnxmd.io.vn
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          {gameTitle && (
            <p className="text-sm text-cyan-300 font-medium mt-1">
              Liên hệ về tựa game: <span className="text-white font-semibold">{gameTitle}</span>
            </p>
          )}
          <p className="text-xs text-gray-400 mt-1">
            Chọn kênh liên hệ bạn mong muốn để trao đổi trực tiếp với đội ngũ TNxMD.
          </p>
        </div>

        {/* Channel Cards */}
        <div className="space-y-2.5 sm:space-y-3">
          {contactList.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] active:scale-[0.98] transition-all duration-200 ${item.hoverClass}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-5 h-5 text-gray-200 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-sm sm:text-base text-gray-100 group-hover:text-white truncate block">
                      {item.name}
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 block truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`ml-3 shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${item.btnClass}`}
                >
                  <span>Kết Nối</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-gray-400">
          <span>Tên miền chính thức: <strong className="text-gray-300">tnxmd.io.vn</strong></span>
          <span className="text-cyan-400 font-medium">Hỗ trợ trực tiếp</span>
        </div>
      </div>
    </div>
  );
};
