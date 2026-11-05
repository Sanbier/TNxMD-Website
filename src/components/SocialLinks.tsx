import React from "react";
import { ContactChannels } from "@/types/game";
import { DEFAULT_CONTACT_CHANNELS } from "@/data/games";

interface SocialLinksProps {
  channels?: ContactChannels;
  className?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export const TelegramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export const ZaloIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.954 4 4 12.954 4 24c0 4.148 1.272 8.01 3.454 11.22L5.12 43.12a1.5 1.5 0 0 0 1.848 1.848l7.9-2.334A19.92 19.92 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm-8.8 13.6h9.6a1.4 1.4 0 0 1 1.05 2.324L18.4 29.2h7.4a1.4 1.4 0 0 1 0 2.8H15.2a1.4 1.4 0 0 1-1.05-2.324L21.6 20.4h-6.4a1.4 1.4 0 1 1 0-2.8zm17.6 14.4c-2.4 0-4-1.6-4-4s1.6-4 4-4 4 1.6 4 4-1.6 4-4 4z"/>
  </svg>
);

export const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
    sm: "p-2 text-xs",
    md: "p-2.5 text-sm",
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
      hoverBorder: "hover:border-cyan-400/80 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]",
      textColor: "hover:text-cyan-300",
      bgHover: "hover:bg-cyan-950/40",
      accent: "from-cyan-500 to-blue-600",
    },
    {
      name: "Discord",
      url: merged.discord,
      icon: DiscordIcon,
      hoverBorder: "hover:border-indigo-400/80 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]",
      textColor: "hover:text-indigo-300",
      bgHover: "hover:bg-indigo-950/40",
      accent: "from-indigo-500 to-purple-600",
    },
    {
      name: "Zalo",
      url: merged.zalo,
      icon: ZaloIcon,
      hoverBorder: "hover:border-blue-400/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
      textColor: "hover:text-blue-300",
      bgHover: "hover:bg-blue-950/40",
      accent: "from-blue-500 to-cyan-600",
    },
    {
      name: "Facebook",
      url: merged.facebook,
      icon: FacebookIcon,
      hoverBorder: "hover:border-fuchsia-400/80 hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]",
      textColor: "hover:text-fuchsia-300",
      bgHover: "hover:bg-fuchsia-950/40",
      accent: "from-fuchsia-500 to-pink-600",
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
            title={`Contact on ${item.name}`}
            className={`flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 transition-all duration-200 ${item.hoverBorder} ${item.textColor} ${item.bgHover} ${sizeMap[size]}`}
          >
            <Icon className={iconSizeMap[size]} />
            {showLabel && <span className="font-medium tracking-wide">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
};
