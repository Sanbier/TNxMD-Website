"use client";

import React, { useState, useMemo } from "react";
import { Search, X, Gamepad } from "lucide-react";
import { GAMES } from "@/data/games";
import { GameCard } from "./GameCard";

export const CatalogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter games based purely on search query
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
    <section id="catalog" className="relative py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
              <Gamepad className="w-4 h-4 text-cyan-400" />
              <span>Thư Viện Game :</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-gaming tracking-tight">
              DANH SÁCH NHỮNG GAME MOD
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono text-gray-400 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
            <span>Hiển thị:</span>
            <span className="text-cyan-400 font-bold">{filteredGames.length}</span>
            <span>trên</span>
            <span className="text-white font-bold">{GAMES.length} Tựa Game</span>
          </div>
        </div>

        {/* Search Bar Only */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên game..."
              className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-[#0b0b14] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(0,240,255,0.25)] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
                aria-label="Xóa tìm kiếm"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Vertical Game List */}
        {filteredGames.length > 0 ? (
          <div className="space-y-4 sm:space-y-5">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0b0b14] border border-white/[0.08]">
            <div className="w-12 h-12 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center mx-auto mb-3 text-purple-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Không tìm thấy tựa game phù hợp</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-sm mx-auto">
              Không có kết quả nào khớp với &quot;{searchQuery}&quot;. Thử tìm kiếm với tên game khác.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-white/[0.04] border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
            >
              Xem Toàn Bộ Game
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
