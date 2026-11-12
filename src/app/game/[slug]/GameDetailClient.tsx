"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  MessageCircle,
  Zap,
  Apple,
  ChevronLeft,
  ChevronRight,
  Wrench,
} from "lucide-react";
import { Game } from "@/types/game";
import { Badge } from "@/components/Badge";
import { ContactModal } from "@/components/ContactModal";
import { ImageLightbox } from "@/components/ImageLightbox";

interface GameDetailClientProps {
  game: Game;
  relatedGames: Game[];
}

export const GameDetailClient: React.FC<GameDetailClientProps> = ({
  game,
  relatedGames,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    game.gallery && game.gallery.length > 0 ? game.gallery[0] : game.coverImage
  );
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const isMaintenance = game.status === "Bảo Trì";
  const allImages =
    game.gallery && game.gallery.length > 0 ? game.gallery : [game.coverImage];
  const activeImageIndex = Math.max(0, allImages.indexOf(selectedImage));
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-gray-100 pb-16">
      {/* 1. Large Game Banner */}
      <div className="relative w-full h-72 sm:h-96 md:h-[480px] overflow-hidden bg-black">
        <Image
          src={game.bannerImage}
          alt={game.title}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070a] via-transparent to-[#07070a]/80" />

        {/* Top Floating Back Button */}
        <div className="absolute top-6 left-4 sm:left-8 z-20">
          <Link
            href="/#catalog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 hover:bg-purple-900/40 border border-white/10 hover:border-purple-500/50 text-xs sm:text-sm font-bold text-gray-200 hover:text-white backdrop-blur-md transition-all shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Quay Lại Kho Game</span>
          </Link>
        </div>

        {/* Banner Overlay Content: Game Title & Meta */}
        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            {!isMaintenance && game.isHot && (
              <Badge variant="hot">GAME HOT</Badge>
            )}
            <Badge variant="category">{game.category}</Badge>
            <Badge variant={isMaintenance ? "maintenance" : "status"}>
              {game.status}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-gaming tracking-tight">
            {game.title}
          </h1>

          <div className="flex items-center gap-3.5 mt-2 text-xs sm:text-sm text-gray-300 flex-wrap">
            <span className="text-purple-300 font-semibold">{game.genre}</span>
            <span>•</span>
            <span className="text-gray-300 font-medium flex items-center gap-1.5">
              <span>Version App Store:</span>
              <span className="font-mono text-cyan-300 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                {game.version}
              </span>
            </span>
            <span>•</span>
            <span className="text-gray-400">
              Nhà phát triển:{" "}
              <strong className="text-gray-200">{game.developer}</strong>
            </span>
            <span>•</span>
            <div className="flex items-center gap-1 text-yellow-400 font-bold">
              <Star className="w-4 h-4 fill-yellow-400" />
              <span>{game.rating.toFixed(1)} / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4 relative z-20">
        {isMaintenance && (
          <div className="mb-6 rounded-2xl bg-amber-950/35 border border-amber-500/50 p-4 sm:p-5 flex items-start sm:items-center gap-3.5 shadow-[0_0_24px_rgba(245,158,11,0.18)]">
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 shrink-0">
              <Wrench className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-amber-300 uppercase tracking-wide">
                Thông Báo: Tựa Game Đang Bảo Trì Nâng Cấp
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/80 mt-0.5">
                Phiên bản tích hợp của <strong>{game.title}</strong> hiện đang
                tạm dừng để bảo trì và đồng bộ bản cập nhật mới. Vui lòng theo
                dõi nhóm Zalo / Telegram để nhận thông báo sớm nhất khi mở lại.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Interactive Image Gallery */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative w-full h-80 sm:h-96 md:h-[460px] rounded-xl overflow-hidden bg-[#06060b] mb-3 cursor-pointer group/img"
            >
              {/* Ambient blurred backdrop so portrait & landscape screenshots both look full & crisp */}
              <Image
                src={selectedImage}
                alt=""
                fill
                unoptimized
                aria-hidden="true"
                className="object-cover object-center blur-2xl opacity-35 scale-110 pointer-events-none"
              />
              <Image
                src={selectedImage}
                alt={game.title}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain object-center relative z-10 p-1 sm:p-2 transition-transform duration-300"
              />
              <div className="absolute bottom-2.5 right-2.5 z-20 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-semibold text-cyan-300 border border-white/10 flex items-center gap-1.5 shadow-md">
                <span>Chạm xem toàn màn hình</span>
              </div>
            </div>

            {/* Thumbnails */}
            {game.gallery && game.gallery.length > 0 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {game.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? "border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.4)] scale-105"
                        : "border-white/10 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Ảnh chụp màn hình ${idx + 1}`}
                      fill
                      unoptimized
                      sizes="200px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right 5 Cols: Features Scrollable List + Back Link */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-4 sm:p-5 space-y-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <h2 className="text-base sm:text-lg font-bold text-white font-gaming tracking-wide uppercase">
                    Các Chức Năng Đặc Biệt
                  </h2>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-950/70 border border-purple-500/40 text-purple-300">
                    {game.features.length} Chức Năng
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="max-h-[410px] overflow-y-auto pr-1.5 space-y-2 scrollbar-thin scrollbar-thumb-purple-600/50 hover:scrollbar-thumb-cyan-400/60">
                  {game.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="group/item p-2.5 px-3.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-400/50 transition-all duration-200 flex items-center gap-2.5"
                    >
                      <span className="text-[10px] font-mono font-bold text-gray-400 group-hover/item:text-cyan-400 w-5 text-right shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-200 font-semibold group-hover/item:text-white leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {game.features.length > 7 && (
                  <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1 text-cyan-300/80 text-[11px]">
                      <span>↓ Cuộn hoặc vuốt để xem tiếp các chức năng</span>
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      Tổng {game.features.length} mục
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/#catalog"
              className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-bold text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-purple-400" />
              <span>Quay Lại Danh Sách Game</span>
            </Link>
          </div>
        </div>

        {/* Related Games Carousel / Grid */}
        {relatedGames.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Tựa Game Đề Xuất
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-gaming tracking-tight">
                  CÁC TỰA GAME TƯƠNG TỰ
                </h3>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                  <span className="text-cyan-400 font-medium">
                    ← Vuốt ngang hoặc bấm phím mũi tên để chọn game →
                  </span>
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => scrollCarousel("left")}
                  aria-label="Cuộn sang trái"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-white transition-all active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel("right")}
                  aria-label="Cuộn sang phải"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-white transition-all active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <Link
                  href="/#catalog"
                  className="ml-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Xem Tất Cả →
                </Link>
              </div>
            </div>

            {/* Horizontal Scrollable Row with Smooth Touch / Mouse Swipe */}
            <div
              ref={carouselRef}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-purple-600/40 hover:scrollbar-thumb-cyan-400/60 -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x"
            >
              {relatedGames.map((rg) => (
                <Link
                  key={rg.id}
                  href={`/game/${rg.slug}`}
                  className="group snap-start shrink-0 w-[240px] sm:w-[280px] md:w-[310px] rounded-2xl bg-[#0b0b14] border border-white/[0.08] hover:border-purple-500/50 p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-black/40 mb-3">
                      <Image
                        src={rg.coverImage}
                        alt={rg.title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 384px, 512px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 flex items-center gap-1">
                        {rg.status === "Bảo Trì" ? (
                          <Badge variant="maintenance">BẢO TRÌ</Badge>
                        ) : (
                          rg.isHot && <Badge variant="hot">HOT</Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-purple-300 mb-1">
                      <span>{rg.category}</span>
                      <span className="font-mono text-gray-400">
                        {rg.version}
                      </span>
                    </div>
                    <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {rg.title}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-cyan-400 font-semibold group-hover:text-cyan-300">
                    <span>Xem Chi Tiết</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile Bottom Bar (Thumb-Zone Optimized for iPhone) */}
      <div
        className="fixed bottom-3 left-3 right-3 z-40 sm:hidden backdrop-blur-2xl bg-[#0b0b14]/95 border border-purple-500/40 p-2.5 rounded-2xl flex items-center gap-2 shadow-[0_12px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(168,85,247,0.3)]"
        style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={game.contactUrl || "https://apps.apple.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95 transition-transform flex items-center justify-center gap-1.5 uppercase font-gaming truncate"
        >
          <Apple className="w-4 h-4 shrink-0" />
          <span className="truncate">MỞ APP STORE</span>
        </a>

        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="py-3 px-4 rounded-xl font-bold text-xs text-gray-200 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 active:scale-95 transition-transform flex items-center justify-center gap-1.5 shrink-0"
        >
          <MessageCircle className="w-4 h-4 text-cyan-400" />
          <span>Tư Vấn</span>
        </button>
      </div>

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={allImages}
        initialIndex={activeImageIndex}
        title={game.title}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        gameTitle={game.title}
        channels={game.contactChannels}
      />
    </div>
  );
};
