"use client";

import React, { useState, useMemo } from "react";
import { Search, X, Gamepad } from "lucide-react";
import { GAMES } from "@/data/games";
import { GameCard } from "./GameCard";

export const CatalogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = useMemo(() => {
    if (searchQuery.trim() === "") return GAMES;
    const q = searchQuery.toLowerCase().trim();
    return GAMES.filter((game) => {
      const matchTitle = game.title.toLowerCase().includes(q);
      const matchGenre = game.genre.toLowerCase().includes(q);
      const matchDesc = game.shortDescription.toLowerCase().includes(q);
      const matchTags = game.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchTitle || matchGenre || matchDesc || matchTags;
    });
  }, [searchQuery]);

  return (
    <section id="catalog" className="relative py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill-2 text-[11px] font-bold uppercase tracking-wider text-sky-200 mb-2.5">
              <Gamepad className="w-3.5 h-3.5 text-cyan-300" />
              <span>Thư Viện Game</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-200 font-gaming tracking-tight">
              DANH SÁCH NHỮNG GAME MOD
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono text-slate-300 px-3.5 py-2 rounded-full glass-pill-2">
            <span>Hiển thị:</span>
            <span className="text-cyan-300 font-bold">{filteredGames.length}</span>
            <span>trên</span>
            <span className="text-white font-bold">{GAMES.length} Tựa Game</span>
          </div>
        </div>

        {/* Frosted Crystal Search Bar */}
        <div className="mb-7 sm:mb-8">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-white/[0.07] border border-white/15 flex items-center justify-center pointer-events-none">
              <Search className="w-4 h-4 text-cyan-300" />
            </span>
            <input
              id="game-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên game..."
              className="w-full pl-14 pr-11 py-3.5 sm:py-4 rounded-2xl glass-input-2 text-white placeholder-slate-400 text-base sm:text-sm focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-xl glass-pill-2 text-slate-300 hover:text-white transition-colors"
                aria-label="Xóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Vertical Frosted Glass Game List */}
        {filteredGames.length > 0 ? (
          <div className="space-y-4 sm:space-y-5">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl glass-panel-2">
            <div className="w-12 h-12 rounded-2xl glass-pill-2 flex items-center justify-center mx-auto mb-3 text-cyan-300">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Không tìm thấy tựa game phù hợp</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
              Không có kết quả nào khớp với &quot;{searchQuery}&quot;. Thử tìm kiếm với tên game khác.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-5 py-2.5 rounded-xl text-xs font-bold text-white glass-btn-primary"
            >
              Xem Toàn Bộ Game
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
