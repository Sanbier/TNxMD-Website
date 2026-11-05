"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, MessageCircle, ArrowRight, Eye, Monitor, Smartphone } from "lucide-react";
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
      <div className="group relative rounded-2xl bg-[#0b0b13] border border-white/[0.08] hover:border-purple-500/50 p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-[0_12px_36px_-6px_rgba(0,0,0,0.8),0_0_24px_rgba(168,85,247,0.25)] hover:-translate-y-1">
        {/* Subtle hover gradient accent */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/[0.04] via-transparent to-cyan-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6">
          {/* Left: Large Cover Image */}
          <Link
            href={`/game/${game.slug}`}
            className="relative shrink-0 w-full sm:w-56 md:w-64 lg:w-72 h-48 sm:h-52 md:h-56 rounded-xl overflow-hidden bg-black/40 block"
          >
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 280px, 320px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              priority={game.isHot}
            />

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Top Badges */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
              {game.isHot && <Badge variant="hot">HOT</Badge>}
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                {game.version}
              </span>
            </div>

            {/* Bottom info on image */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-gray-300 font-medium">
              <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-white">{game.rating.toFixed(1)}</span>
              </span>
              {game.views && (
                <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-gray-300 text-[11px]">
                  <Eye className="w-3 h-3 text-cyan-400" />
                  {game.views}
                </span>
              )}
            </div>
          </Link>

          {/* Right: Game Info */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              {/* Category, Genre, & Platforms Bar */}
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <Badge variant="category">{game.category}</Badge>
                <span className="text-xs text-purple-300/80 font-medium truncate">
                  {game.genre}
                </span>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {game.platforms.map((platform) => (
                    <Badge key={platform} variant="platform">
                      {platform === "PC" ? (
                        <Monitor className="w-3 h-3 text-cyan-400" />
                      ) : (
                        <Smartphone className="w-3 h-3 text-purple-400" />
                      )}
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Title */}
              <Link href={`/game/${game.slug}`} className="block">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-white group-hover:to-cyan-300 transition-colors tracking-tight font-gaming leading-snug">
                  {game.title}
                </h3>
              </Link>

              {/* Short Description */}
              <p className="mt-2 text-xs sm:text-sm text-gray-300/90 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {game.shortDescription}
              </p>

              {/* Feature bullet pills */}
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                {game.features.slice(0, 2).map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-gray-300 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span className="truncate max-w-[200px] sm:max-w-none">{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-300">{game.developer}</span>
                <span>•</span>
                <span className="text-purple-400 font-medium">{game.releaseDate}</span>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {/* Direct Contact Button */}
                <button
                  type="button"
                  onClick={handleContactClick}
                  className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs font-bold text-gray-200 bg-white/[0.06] hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all flex items-center justify-center gap-1.5"
                  title="Liên hệ tựa game này"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Liên Hệ</span>
                </button>

                {/* View Details Link */}
                <Link
                  href={`/game/${game.slug}`}
                  className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_18px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Xem Chi Tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
