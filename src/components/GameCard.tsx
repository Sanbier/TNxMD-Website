"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, MessageCircle, ArrowRight, Eye, Smartphone, Apple } from "lucide-react";
import { Game } from "@/types/game";
import { Badge } from "./Badge";
import { ContactModal } from "./ContactModal";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (game.contactUrl && game.contactUrl.startsWith("http")) {
      window.open(game.contactUrl, "_blank", "noopener,noreferrer");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <div className="group relative rounded-2xl bg-[#0b0b13] border border-white/[0.08] hover:border-purple-500/50 p-3 sm:p-3.5 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.8),0_0_20px_rgba(168,85,247,0.22)] hover:-translate-y-0.5">
        {/* Subtle hover gradient accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/[0.03] via-transparent to-cyan-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex items-center sm:items-start gap-3.5 sm:gap-4">
          {/* Left: Compact Cover Image */}
          <Link
            href={`/game/${game.slug}`}
            className="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl overflow-hidden bg-black/50 block shadow-md"
          >
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              sizes="(max-width: 640px) 96px, 144px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              priority={game.isHot}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Top Hot Badge */}
            {game.isHot && (
              <div className="absolute top-1.5 left-1.5">
                <Badge variant="hot" size="sm" className="text-[10px] px-1.5 py-0.2">
                  HOT
                </Badge>
              </div>
            )}

            {/* Bottom Version on Image */}
            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[10px]">
              <span className="flex items-center gap-0.5 bg-black/75 px-1.5 py-0.5 rounded text-yellow-400 font-bold">
                <Star className="w-3 h-3 fill-yellow-400" />
                <span>{game.rating.toFixed(1)}</span>
              </span>
              <span className="font-mono text-cyan-300 bg-black/75 px-1.5 py-0.5 rounded font-semibold">
                {game.version}
              </span>
            </div>
          </Link>

          {/* Right: Condensed Game Info */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              {/* iOS badge first, followed by genre */}
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.25)]">
                  <Smartphone className="w-3 h-3 text-cyan-400" />
                  iOS
                </span>
                <span className="text-xs text-purple-300/90 font-medium truncate max-w-[200px] sm:max-w-none">
                  {game.genre}
                </span>
              </div>

              {/* Title */}
              <Link href={`/game/${game.slug}`} className="block">
                <h3 className="text-base sm:text-lg md:text-xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-white group-hover:to-cyan-300 transition-colors tracking-tight font-gaming leading-tight truncate">
                  {game.title}
                </h3>
              </Link>
            </div>

            {/* Bottom Bar: Metadata & Action Buttons */}
            <div className="mt-3 pt-2.5 border-t border-white/[0.05] flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-[11px] text-gray-400">
                <span className="font-medium text-gray-300 truncate max-w-[120px] sm:max-w-none">
                  {game.developer}
                </span>
                <span>•</span>
                <span className="text-purple-400 font-medium">{game.releaseDate}</span>
                {game.views && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-gray-400">
                      <Eye className="w-3 h-3 text-cyan-400" />
                      {game.views}
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* AppStore Direct Link Button */}
                <a
                  href={game.contactUrl || "https://apps.apple.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] font-bold text-gray-200 bg-white/[0.06] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all flex items-center gap-1.5 shadow-sm"
                  title="Chuyển đến App Store"
                >
                  <Apple className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AppStore</span>
                </a>

                {/* View Details Link */}
                <Link
                  href={`/game/${game.slug}`}
                  className="px-3 sm:px-3.5 py-1.5 rounded-lg text-[11px] font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all flex items-center gap-1"
                >
                  <span>Chi Tiết</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal fallback */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        gameTitle={game.title}
        channels={game.contactChannels}
      />
    </>
  );
};
