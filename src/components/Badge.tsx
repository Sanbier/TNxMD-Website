import React from "react";
import { Flame, Sparkles, CheckCircle2 } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "hot" | "platform" | "category" | "status" | "neon";
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
        className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white font-extrabold shadow-[0_0_12px_rgba(236,72,153,0.6)] animate-pulse ${sizeClasses} ${className}`}
      >
        <Flame className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
        {children}
      </span>
    );
  }

  if (variant === "platform") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-md bg-white/[0.06] border border-white/10 text-gray-300 backdrop-blur-sm ${sizeClasses} ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === "neon") {
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full bg-purple-950/70 border border-purple-500/50 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] ${sizeClasses} ${className}`}
      >
        <Sparkles className="w-3 h-3 text-cyan-400" />
        {children}
      </span>
    );
  }

  if (variant === "status") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 ${sizeClasses} ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        {children}
      </span>
    );
  }

  // default category badge
  return (
    <span
      className={`inline-flex items-center rounded-md bg-purple-900/30 border border-purple-500/30 text-purple-200 font-medium ${sizeClasses} ${className}`}
    >
      {children}
    </span>
  );
};
