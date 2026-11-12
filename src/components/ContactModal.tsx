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
      hoverClass: "hover:border-cyan-300/60 hover:bg-cyan-400/12 hover:shadow-[0_8px_24px_rgba(0,240,255,0.22)]",
      btnClass: "bg-cyan-400/18 border border-cyan-300/40 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-950",
      iconTone: "text-cyan-300",
    },
    {
      name: "Zalo Nhóm",
      tag: "Cộng đồng hỗ trợ TNxMD",
      url: merged.zalo,
      icon: ZaloIcon,
      hoverClass: "hover:border-sky-300/60 hover:bg-sky-400/12 hover:shadow-[0_8px_24px_rgba(56,189,248,0.22)]",
      btnClass: "bg-sky-400/18 border border-sky-300/40 text-sky-200 group-hover:bg-sky-500 group-hover:text-white",
      iconTone: "text-sky-300",
    },
    {
      name: "Liên Hệ Quản Gia",
      tag: "Hỗ trợ trực tiếp & trao đổi",
      url: merged.facebook,
      icon: FacebookIcon,
      hoverClass: "hover:border-fuchsia-300/60 hover:bg-fuchsia-400/12 hover:shadow-[0_8px_24px_rgba(217,70,239,0.22)]",
      btnClass: "bg-fuchsia-400/18 border border-fuchsia-300/40 text-fuchsia-200 group-hover:bg-fuchsia-500 group-hover:text-white",
      iconTone: "text-fuchsia-300",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-slate-950/65 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-t-3xl sm:rounded-3xl glass-modal-2 p-5 sm:p-8 transition-transform duration-150 max-h-[90vh] overflow-y-auto"
        style={{
          transform: `translateY(${dragY}px)`,
          paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="sm:hidden w-12 h-1.5 bg-white/30 rounded-full mx-auto -mt-1 mb-4 active:bg-cyan-300" />

        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-xl glass-pill-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5 sm:mb-6 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill-2 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
            Kênh Đã Xác Minh: tnxmd.io.vn
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          {gameTitle && (
            <p className="text-sm text-cyan-200 font-medium mt-1">
              Liên hệ về tựa game: <span className="text-white font-semibold">{gameTitle}</span>
            </p>
          )}
          <p className="text-xs text-slate-300 mt-1">
            Chọn kênh liên hệ bạn mong muốn để trao đổi trực tiếp với đội ngũ TNxMD.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {contactList.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl glass-pill-2 active:scale-[0.98] transition-all duration-200 ${item.hoverClass}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                    <Icon className={`w-5 h-5 ${item.iconTone}`} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-semibold text-sm sm:text-base text-white truncate block">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-300 block truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`ml-3 shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] ${item.btnClass}`}
                >
                  <span>Kết Nối</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-5 pt-3 border-t border-white/[0.1] flex items-center justify-between text-[11px] text-slate-300">
          <span>
            Tên miền chính thức: <strong className="text-white">tnxmd.io.vn</strong>
          </span>
          <span className="text-cyan-300 font-medium">Hỗ trợ trực tiếp</span>
        </div>
      </div>
    </div>
  );
};
