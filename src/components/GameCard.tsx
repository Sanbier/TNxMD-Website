"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Eye, Smartphone, Apple } from "lucide-react";
import { Game } from "@/types/game";
import { Badge } from "./Badge";
import { ContactModal } from "./ContactModal";
import { useToast } from "./Toast";

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast } = useToast();
  const isMaintenance = game.status === "Bảo Trì";

  return (
    <>
      <div
        className={`group rounded-2xl p-3 sm:p-4 active:scale-[0.99] ${
          isMaintenance ? "glass-card-amber" : "glass-card-2"
        }`}
      >
        <div className="flex items-center sm:items-start gap-3.5 sm:gap-4">
          {/* Left: Crystal-Beveled Cover Image */}
          <Link
            href={`/game/${game.slug}`}
            className="relative shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950/60 block ring-1 ring-white/20 shadow-[0_10px_25px_-6px_rgba(0,0,0,0.65)]"
          >
            <Image
              src={game.coverImage}
              alt={game.title}
              fill
              unoptimized
              sizes="(max-width: 640px) 256px, 384px"
              className={`object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
                isMaintenance ? "opacity-75 grayscale-[30%]" : ""
              }`}
              priority={game.isHot}
            />

            {/* Soft Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/15" />

            {/* Top Status / Hot Badge */}
            {isMaintenance ? (
              <div className="absolute top-1.5 left-1.5">
                <Badge variant="maintenance" size="sm" className="text-[10px] px-1.5 py-0.5">
                  BẢO TRÌ
                </Badge>
              </div>
            ) : (
              game.isHot && (
                <div className="absolute top-1.5 left-1.5">
                  <Badge variant="hot" size="sm" className="text-[10px] px-1.5 py-0.5">
                    HOT
                  </Badge>
                </div>
              )
            )}

            {/* Bottom Frosted Rating & Version Micro-Pills */}
            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[10px] gap-1">
              <span className="flex items-center gap-0.5 bg-slate-950/65 backdrop-blur-md border border-white/20 px-1.5 py-0.5 rounded-md text-amber-300 font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <Star className="w-2.5 h-2.5 fill-amber-300" />
                <span>{game.rating.toFixed(1)}</span>
              </span>
              <span className="font-mono text-cyan-200 bg-slate-950/65 backdrop-blur-md border border-white/20 px-1.5 py-0.5 rounded-md font-semibold truncate shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                {game.version}
              </span>
            </div>
          </Link>

          {/* Right: Condensed Game Info */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            <div>
              {/* Frosted iOS Badge + Genre */}
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-400/15 border border-cyan-300/40 backdrop-blur-md text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]">
                  <Smartphone className="w-3 h-3 text-cyan-300" />
                  iOS
                </span>
                {isMaintenance && (
                  <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-400/50 backdrop-blur-md text-amber-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                    Đang Bảo Trì
                  </span>
                )}
                <span className="text-xs text-sky-200/85 font-medium truncate max-w-[200px] sm:max-w-none">
                  {game.genre}
                </span>
              </div>

              {/* Title */}
              <Link href={`/game/${game.slug}`} className="block">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-sky-200 group-hover:to-cyan-300 transition-colors tracking-tight font-gaming leading-tight truncate">
                  {game.title}
                </h3>
              </Link>

              <p className="hidden sm:line-clamp-1 text-xs text-slate-300/80 mt-1">
                {game.shortDescription}
              </p>
            </div>

            {/* Bottom Bar: Metadata & Liquid Glass Buttons */}
            <div className="mt-3 pt-2.5 border-t border-white/[0.1] flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-[11px] text-slate-300/85">
                <span className="font-medium text-slate-200 truncate max-w-[120px] sm:max-w-none">
                  {game.developer}
                </span>
                <span className="text-white/30">•</span>
                <span className={isMaintenance ? "text-amber-300 font-semibold" : "text-sky-300 font-medium"}>
                  {game.releaseDate}
                </span>
                {game.views && (
                  <>
                    <span className="hidden sm:inline text-white/30">•</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
                      <Eye className="w-3 h-3 text-cyan-300" />
                      {game.views}
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={game.contactUrl || "https://apps.apple.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 sm:py-1.5 rounded-xl text-xs sm:text-[11px] font-bold text-slate-100 glass-btn-secondary hover:text-cyan-200 active:scale-95 flex items-center gap-1.5 min-h-[36px]"
                  title="Chuyển đến App Store"
                  onClick={() => showToast("Đang mở App Store...", "Chuyển tiếp đến trang tải chính thức", "info")}
                >
                  <Apple className="w-3.5 h-3.5 text-cyan-300" />
                  <span>AppStore</span>
                </a>

                <Link
                  href={`/game/${game.slug}`}
                  className="px-3.5 py-2 sm:py-1.5 rounded-xl text-xs sm:text-[11px] font-bold text-white glass-btn-primary active:scale-95 flex items-center gap-1 min-h-[36px]"
                >
                  <span>Chi Tiết</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        gameTitle={game.title}
        channels={game.contactChannels}
      />
    </>
  );
};
