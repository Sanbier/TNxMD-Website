"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, Sparkles, X, ChevronDown, Layers, Gamepad } from "lucide-react";
import { GAMES, CATEGORIES } from "@/data/games";
import { GameCard } from "./GameCard";
import { GameCategory, Platform } from "@/types/game";

const ALL_PLATFORMS: Platform[] = ["PC", "iOS", "Android", "Steam", "PlayStation", "Xbox"];

export const CatalogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter games based on search, category, and platform
  const filteredGames = useMemo(() => {
    return GAMES.filter((game) => {
      // Category filter
      if (selectedCategory !== "All" && game.category !== selectedCategory) {
        return false;
      }
      // Platform filter
      if (
        selectedPlatform !== "All" &&
        !game.platforms.includes(selectedPlatform as Platform)
      ) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = game.title.toLowerCase().includes(q);
        const matchGenre = game.genre.toLowerCase().includes(q);
        const matchDesc = game.shortDescription.toLowerCase().includes(q);
        const matchTags = game.tags.some((tag) => tag.toLowerCase().includes(q));
        return matchTitle || matchGenre || matchDesc || matchTags;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedPlatform]);

  const displayedGames = filteredGames.slice(0, visibleCount);
  const hasMore = visibleCount < filteredGames.length;

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPlatform("All");
  };

  return (
    <section id="catalog" className="relative py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">
              <Gamepad className="w-4 h-4 text-cyan-400" />
              <span>Full Library Archive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-gaming tracking-tight">
              GAME CATALOG & PLATFORMS
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Showing high-performance releases with verified configs and direct contact access.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs font-mono text-gray-400 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
            <span>Index:</span>
            <span className="text-cyan-400 font-bold">{filteredGames.length}</span>
            <span>of</span>
            <span className="text-white font-bold">{GAMES.length} Titles</span>
          </div>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.5)] mb-8 space-y-4">
          {/* Top Row: Search input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, genre, keyword (e.g. Valorant, FPS, Battle Royale, Tactical)..."
              className="w-full pl-12 pr-10 py-3 sm:py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs: Horizontal scrollable on mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-purple-400" />
              Genre:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    active
                      ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                      : "bg-white/[0.03] text-gray-300 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Platform Selector Row */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Platform:
            </span>
            {["All", ...ALL_PLATFORMS].map((plt) => {
              const active = selectedPlatform === plt;
              return (
                <button
                  key={plt}
                  onClick={() => setSelectedPlatform(plt)}
                  className={`shrink-0 px-3 py-1 rounded-md text-[11px] font-semibold transition-all ${
                    active
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.25)]"
                      : "bg-white/[0.02] text-gray-400 hover:text-gray-200 border border-white/[0.05]"
                  }`}
                >
                  {plt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Game List */}
        {filteredGames.length > 0 ? (
          <div className="space-y-4 sm:space-y-5">
            {displayedGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0b0b14] border border-white/[0.08]">
            <div className="w-12 h-12 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center mx-auto mb-3 text-purple-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No games matched your criteria</h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-sm mx-auto">
              Try searching with different terms or reset your active genre and platform filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Infinite Scroll / Load More Trigger */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-gray-200 bg-white/[0.05] border border-purple-500/30 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] inline-flex items-center gap-2"
            >
              <span>Load More Titles</span>
              <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce" />
            </button>
            <span className="block text-[11px] text-gray-500 mt-2">
              Viewing {displayedGames.length} of {filteredGames.length} available records
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
