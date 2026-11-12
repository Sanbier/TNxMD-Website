import React from "react";
import { ContactChannels } from "@/types/game";
import { DEFAULT_CONTACT_CHANNELS } from "@/config/contacts";

interface SocialLinksProps {
  channels?: ContactChannels;
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export const TelegramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export const ZaloIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
    <path d="M24 4C12.954 4 4 12.954 4 24c0 4.148 1.272 8.01 3.454 11.22L5.12 43.12a1.5 1.5 0 0 0 1.848 1.848l7.9-2.334A19.92 19.92 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm-8.8 13.6h9.6a1.4 1.4 0 0 1 1.05 2.324L18.4 29.2h7.4a1.4 1.4 0 0 1 0 2.8H15.2a1.4 1.4 0 0 1-1.05-2.324L21.6 20.4h-6.4a1.4 1.4 0 1 1 0-2.8zm17.6 14.4c-2.4 0-4-1.6-4-4s1.6-4 4-4 4 1.6 4 4-1.6 4-4 4z" />
  </svg>
);

export const SocialLinks: React.FC<SocialLinksProps> = ({
  channels = DEFAULT_CONTACT_CHANNELS,
  className = "",
  size = "md",
  showLabel = false,
}) => {
  const merged = { ...DEFAULT_CONTACT_CHANNELS, ...channels };

  const sizeMap = {
    sm: "px-3 py-2 text-xs",
    md: "px-3.5 py-2.5 text-sm",
    lg: "px-4 py-2.5 text-sm",
  };

  const iconSizeMap = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-5 h-5",
  };

  const items = [
    {
      name: "Telegram",
      url: merged.telegram,
      icon: TelegramIcon,
      hoverStyle:
        "hover:border-cyan-300/60 hover:bg-cyan-400/15 hover:text-cyan-200 hover:shadow-[0_4px_18px_rgba(0,240,255,0.28)]",
      iconColor: "text-cyan-300",
    },
    {
      name: "Zalo",
      url: merged.zalo,
      icon: ZaloIcon,
      hoverStyle:
        "hover:border-sky-300/60 hover:bg-sky-400/15 hover:text-sky-200 hover:shadow-[0_4px_18px_rgba(56,189,248,0.28)]",
      iconColor: "text-sky-300",
    },
    {
      name: "Quản Gia",
      url: merged.managerTelegram,
      icon: TelegramIcon,
      hoverStyle:
        "hover:border-fuchsia-300/60 hover:bg-fuchsia-400/15 hover:text-fuchsia-200 hover:shadow-[0_4px_18px_rgba(217,70,239,0.28)]",
      iconColor: "text-fuchsia-300",
    },
  ];

  return (
    <div className={`flex items-center gap-2.5 flex-wrap ${className}`}>
      {items.map((item) => {
        if (!item.url) return null;
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Kết nối ${item.name}`}
            className={`flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] text-slate-200 transition-all duration-200 active:scale-95 ${item.hoverStyle} ${sizeMap[size]}`}
          >
            <Icon className={`${iconSizeMap[size]} ${item.iconColor}`} />
            {showLabel && <span className="font-semibold tracking-wide">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
};
