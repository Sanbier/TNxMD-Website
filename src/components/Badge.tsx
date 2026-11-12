import React from "react";
import { Flame, Sparkles, Wrench } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "hot" | "platform" | "category" | "status" | "neon" | "maintenance";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "category",
  size = "sm",
  className = "",
}) => {
  const sizeClasses =
    size === "sm"
      ? "text-[11px] px-2.5 py-0.5 tracking-wider font-semibold uppercase"
      : "text-xs px-3 py-1 tracking-wider font-bold uppercase";

  if (variant === "hot") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-rose-500/90 via-pink-500/90 to-purple-600/90 border border-white/35 text-white font-extrabold shadow-[0_4px_14px_rgba(244,63,94,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] ${sizeClasses} ${className}`}
      >
        <Flame className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
        {children}
      </span>
    );
  }

  if (variant === "platform") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-white/20 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] ${sizeClasses} ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === "neon") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-purple-950/80 border border-purple-300/40 text-purple-100 shadow-[0_0_14px_rgba(168,85,247,0.28),inset_0_1px_0_rgba(255,255,255,0.3)] ${sizeClasses} ${className}`}
      >
        <Sparkles className="w-3 h-3 text-cyan-300" />
        {children}
      </span>
    );
  }

  if (variant === "maintenance") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-amber-950/85 border border-amber-300/55 text-amber-200 font-bold shadow-[0_4px_14px_rgba(245,158,11,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] ${sizeClasses} ${className}`}
      >
        <Wrench className="w-3 h-3 text-amber-300 animate-pulse" />
        {children}
      </span>
    );
  }

  if (variant === "status") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-cyan-950/80 border border-cyan-300/45 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] ${sizeClasses} ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full bg-slate-900/75 border border-white/20 text-sky-100 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.26)] ${sizeClasses} ${className}`}
    >
      {children}
    </span>
  );
};
