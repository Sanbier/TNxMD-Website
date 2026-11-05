"use client";

import React, { useEffect } from "react";
import { X, Send, MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";
import { ContactChannels } from "@/types/game";
import { DEFAULT_CONTACT_CHANNELS } from "@/data/games";
import { DiscordIcon, TelegramIcon, ZaloIcon, FacebookIcon } from "./SocialLinks";

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const contactList = [
    {
      name: "Telegram Kênh & Tin Nhắn",
      tag: "@tnxmd_gaming",
      badge: "Nhanh nhất 24/7",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      url: merged.telegram,
      icon: TelegramIcon,
      hoverClass: "hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)]",
      btnClass: "bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-black",
    },
    {
      name: "Discord Cộng Đồng",
      tag: "TNXMD Gaming Hub",
      badge: "Cộng đồng",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
      url: merged.discord,
      icon: DiscordIcon,
      hoverClass: "hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]",
      btnClass: "bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500 hover:text-white",
    },
    {
      name: "Zalo Chính Thức",
      tag: "Hotline Hỗ Trợ",
      badge: "Trực tiếp VN",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      url: merged.zalo,
      icon: ZaloIcon,
      hoverClass: "hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]",
      btnClass: "bg-blue-500/10 text-blue-300 hover:bg-blue-500 hover:text-white",
    },
    {
      name: "Trang Facebook",
      tag: "TNXMD Gaming Network",
      badge: "Cập nhật",
      badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40",
      url: merged.facebook,
      icon: FacebookIcon,
      hoverClass: "hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]",
      btnClass: "bg-fuchsia-500/10 text-fuchsia-300 hover:bg-fuchsia-500 hover:text-white",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0c0c14] border border-purple-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient point */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            Kênh Đã Xác Minh: tnxmd.io.vn
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {title}
          </h3>
          {gameTitle && (
            <p className="text-sm text-cyan-300 font-medium mt-1">
              Liên hệ về tựa game: <span className="text-white font-semibold">{gameTitle}</span>
            </p>
          )}
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Chọn kênh liên hệ bạn yêu thích. Đội ngũ kỹ thuật của chúng tôi túc trực 24/7 để phản hồi bạn.
          </p>
        </div>

        {/* Channel Cards */}
        <div className="space-y-3">
          {contactList.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] transition-all duration-200 ${item.hoverClass}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-gray-200 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm sm:text-base text-gray-100 group-hover:text-white truncate">
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 block truncate">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`ml-3 shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${item.btnClass}`}
                >
                  <span>Kết Nối</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Security & Verification Note */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-500">
          <span>Tên miền chính thức: <strong className="text-gray-300">tnxmd.io.vn</strong></span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Hỗ Trợ Đang Online
          </span>
        </div>
      </div>
    </div>
  );
};
