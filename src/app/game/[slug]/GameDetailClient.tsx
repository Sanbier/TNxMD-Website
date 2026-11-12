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
    <div className="min-h-screen text-slate-100 pb-20">
      {/* 1. Large Immersive Banner with Frosted Glass Overlay */}
      <div className="relative w-full h-72 sm:h-96 md:h-[460px] overflow-hidden bg-slate-950">
        <Image
          src={game.bannerImage}
          alt={game.title}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#05070f] via-[#05070f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070f]/90 via-transparent to-[#05070f]/75" />

        {/* Top Floating Frosted Glass Back Button */}
        <div className="absolute top-5 left-4 sm:left-8 z-20">
          <Link
            href="/#catalog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill-2 hover:bg-white/[0.15] text-xs sm:text-sm font-bold text-white transition-all shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-300" />
            <span>Quay Lại Kho Game</span>
          </Link>
        </div>

        {/* Banner Overlay Content: Game Title & Frosted Meta */}
        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8 z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 flex-wrap mb-2.5">
            {!isMaintenance && game.isHot && (
              <Badge variant="hot">GAME HOT</Badge>
            )}
            <Badge variant="category">{game.category}</Badge>
            <Badge variant={isMaintenance ? "maintenance" : "status"}>
              {game.status}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-gaming tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            {game.title}
          </h1>

          <div className="inline-flex items-center gap-3 mt-3 px-3.5 py-2 rounded-2xl glass-pill-2 text-xs sm:text-sm text-slate-200 flex-wrap">
            <span className="text-sky-200 font-semibold">{game.genre}</span>
            <span className="text-white/30">•</span>
            <span className="text-slate-200 font-medium flex items-center gap-1.5">
              <span>Version:</span>
              <span className="font-mono text-cyan-200 font-bold bg-cyan-400/15 px-2 py-0.5 rounded-md border border-cyan-300/35">
                {game.version}
              </span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300">
              Nhà phát triển:{" "}
              <strong className="text-white">{game.developer}</strong>
            </span>
            <span className="text-white/30">•</span>
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <Star className="w-4 h-4 fill-amber-300" />
              <span>{game.rating.toFixed(1)} / 5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 relative z-20">
        {isMaintenance && (
          <div className="mb-6 rounded-2xl glass-card-amber p-4 sm:p-5 flex items-start sm:items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-400/20 border border-amber-300/45 shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              <Wrench className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-amber-200 uppercase tracking-wide">
                Thông Báo: Tựa Game Đang Bảo Trì Nâng Cấp
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/85 mt-0.5">
                Phiên bản tích hợp của <strong>{game.title}</strong> hiện đang
                tạm dừng để bảo trì và đồng bộ bản cập nhật mới. Vui lòng theo
                dõi nhóm Zalo / Telegram để nhận thông báo sớm nhất khi mở lại.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left 7 Cols: Glassmorphism 2.0 Screenshot Gallery */}
          <div className="lg:col-span-7 rounded-3xl glass-panel-2 p-4 sm:p-5">
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative w-full h-80 sm:h-96 md:h-[460px] rounded-2xl overflow-hidden bg-slate-950/65 ring-1 ring-white/15 mb-3.5 cursor-pointer group/img shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
              <Image
                src={selectedImage}
                alt=""
                fill
                unoptimized
                aria-hidden="true"
                className="object-cover object-center blur-2xl opacity-40 scale-110 pointer-events-none"
              />
              <Image
                src={selectedImage}
                alt={game.title}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-contain object-center relative z-10 p-1 sm:p-2 transition-transform duration-300"
              />
              <div className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-full glass-pill-2 text-[11px] font-semibold text-cyan-200 flex items-center gap-1.5 shadow-lg">
                <span>Chạm xem toàn màn hình</span>
              </div>
            </div>

            {game.gallery && game.gallery.length > 0 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {game.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden border transition-all ${
                      selectedImage === img
                        ? "border-cyan-300 shadow-[0_0_14px_rgba(0,240,255,0.45)] scale-105"
                        : "border-white/15 opacity-75 hover:opacity-100"
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

          {/* Right 5 Cols: Glassmorphism 2.0 Features Panel + Back Link */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl glass-panel-2 p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/[0.1] pb-3">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-cyan-400/15 border border-cyan-300/35">
                    <Zap className="w-4 h-4 text-cyan-300 animate-pulse" />
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white font-gaming tracking-wide uppercase">
                    Các Chức Năng Đặc Biệt
                  </h2>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full glass-pill-2 text-cyan-200">
                  {game.features.length} Chức Năng
                </span>
              </div>

              <div className="relative">
                <div className="max-h-[410px] overflow-y-auto pr-1.5 space-y-2">
                  {game.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="group/item p-2.5 px-3.5 rounded-xl bg-white/[0.045] hover:bg-white/[0.095] border border-white/[0.11] hover:border-cyan-300/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-200 flex items-center gap-2.5"
                    >
                      <span className="text-[10px] font-mono font-bold text-slate-400 group-hover/item:text-cyan-300 w-5 text-right shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <CheckCircle className="w-4 h-4 text-cyan-300 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-100 font-semibold group-hover/item:text-white leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {game.features.length > 7 && (
                  <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1 text-cyan-200/90 text-[11px]">
                      <span>↓ Cuộn hoặc vuốt để xem tiếp các chức năng</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-300">
                      Tổng {game.features.length} mục
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/#catalog"
              className="w-full py-3 rounded-2xl glass-btn-secondary text-xs font-bold text-slate-100 hover:text-white flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-300" />
              <span>Quay Lại Danh Sách Game</span>
            </Link>
          </div>
        </div>

        {/* Related Games Frosted Glass Carousel */}
        {relatedGames.length > 0 && (
          <div className="mt-14 pt-10 border-t border-white/[0.1]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full glass-pill-2 text-[11px] font-bold text-sky-200 uppercase tracking-wider mb-2">
                  Tựa Game Đề Xuất
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-gaming tracking-tight">
                  CÁC TỰA GAME TƯƠNG TỰ
                </h3>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                  <span className="text-cyan-300 font-medium">
                    ← Vuốt ngang hoặc bấm phím mũi tên để chọn game →
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => scrollCarousel("left")}
                  aria-label="Cuộn sang trái"
                  className="p-2.5 rounded-xl glass-btn-secondary text-slate-200 hover:text-white active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel("right")}
                  aria-label="Cuộn sang phải"
                  className="p-2.5 rounded-xl glass-btn-secondary text-slate-200 hover:text-white active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <Link
                  href="/#catalog"
                  className="ml-2 px-3.5 py-2 rounded-xl glass-pill-2 text-xs font-bold text-cyan-200 hover:text-white transition-colors"
                >
                  Xem Tất Cả →
                </Link>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 touch-pan-x"
            >
              {relatedGames.map((rg) => (
                <Link
                  key={rg.id}
                  href={`/game/${rg.slug}`}
                  className="group snap-start shrink-0 w-[240px] sm:w-[280px] md:w-[310px] rounded-2xl glass-card-2 p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-36 sm:h-40 rounded-xl overflow-hidden bg-slate-950/60 ring-1 ring-white/15 mb-3">
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
                    <div className="flex items-center justify-between text-xs text-sky-200 mb-1">
                      <span>{rg.category}</span>
                      <span className="font-mono text-cyan-200/90">
                        {rg.version}
                      </span>
                    </div>
                    <h4 className="font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                      {rg.title}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/[0.1] flex items-center justify-between text-[11px] text-cyan-300 font-semibold group-hover:text-cyan-200">
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

      {/* Sticky Mobile Frosted Glass Bottom Bar */}
      <div
        className="fixed bottom-3 left-3 right-3 z-40 sm:hidden glass-dock-2 p-2.5 rounded-2xl flex items-center gap-2"
        style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={game.contactUrl || "https://apps.apple.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white glass-btn-primary active:scale-95 flex items-center justify-center gap-1.5 uppercase font-gaming truncate"
        >
          <Apple className="w-4 h-4 shrink-0" />
          <span className="truncate">MỞ APP STORE</span>
        </a>

        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="py-3 px-4 rounded-xl font-bold text-xs text-slate-100 glass-btn-secondary active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
        >
          <MessageCircle className="w-4 h-4 text-cyan-300" />
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
