"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  Smartphone,
  CheckCircle,
  ExternalLink,
  Cpu,
  Layers,
  Calendar,
  Eye,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Game } from "@/types/game";
import { Badge } from "@/components/Badge";
import { ContactModal } from "@/components/ContactModal";
import { SocialLinks } from "@/components/SocialLinks";

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

  const handleContactAction = () => {
    if (game.contactUrl && game.contactUrl.startsWith("http")) {
      window.open(game.contactUrl, "_blank", "noopener,noreferrer");
    } else {
      setContactOpen(true);
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
          sizes="100vw"
          className="object-cover object-center opacity-70"
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
            {game.isHot && <Badge variant="hot">GAME HOT</Badge>}
            <Badge variant="category">{game.category}</Badge>
            <Badge variant="status">{game.status}</Badge>
            <span className="text-xs font-mono text-cyan-300 bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30">
              {game.version}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-gaming tracking-tight">
            {game.title}
          </h1>

          <div className="flex items-center gap-4 mt-2 text-xs sm:text-sm text-gray-300 flex-wrap">
            <span className="text-purple-300 font-semibold">{game.genre}</span>
            <span>•</span>
            <span className="text-gray-400">Nhà phát triển: <strong className="text-gray-200">{game.developer}</strong></span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Gallery, Description, Features, Specs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Image Gallery */}
            <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden bg-black mb-3">
                <Image
                  src={selectedImage}
                  alt={game.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover object-center transition-all duration-300"
                />
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
                          : "border-white/10 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Ảnh chụp màn hình ${idx + 1}`}
                        fill
                        sizes="96px"
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Game Overview Description */}
            <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <Layers className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg sm:text-xl font-black text-white font-gaming tracking-wide uppercase">
                  Tổng Quan & Lối Chơi
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
                {game.fullDescription}
              </p>
            </div>

            {/* Features Highlight Grid */}
            <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <Zap className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg sm:text-xl font-black text-white font-gaming tracking-wide uppercase">
                  Đặc Điểm & Tối Ưu Cấu Hình
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {game.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Requirements Section */}
            {game.systemRequirements && (
              <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
                  <Cpu className="w-5 h-5 text-purple-400" />
                  <h2 className="text-lg sm:text-xl font-black text-white font-gaming tracking-wide uppercase">
                    Yêu Cầu Cấu Hình Phần Cứng
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1">
                      Hệ Điều Hành
                    </span>
                    <span className="text-white font-semibold">
                      {game.systemRequirements.os}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1">
                      Bộ Xử Lý (CPU)
                    </span>
                    <span className="text-white font-semibold">
                      {game.systemRequirements.processor}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1">
                      Bộ Nhớ (RAM)
                    </span>
                    <span className="text-white font-semibold">
                      {game.systemRequirements.memory}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1">
                      Card Đồ Họa (GPU)
                    </span>
                    <span className="text-white font-semibold">
                      {game.systemRequirements.graphics}
                    </span>
                  </div>
                  <div className="sm:col-span-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider mb-1">
                      Dung Lượng Trống (Ổ Cứng)
                    </span>
                    <span className="text-white font-semibold">
                      {game.systemRequirements.storage}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Col: Prominent Contact Card & Meta Info */}
          <div className="space-y-6">
            {/* Prominent Gradient Contact Action Card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#120f24] via-[#0d0d1a] to-[#070b16] border border-purple-500/40 p-6 shadow-[0_0_35px_rgba(168,85,247,0.3)] space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Kết Nối Trực Tiếp
                </div>
                <h3 className="text-xl font-black text-white font-gaming tracking-tight">
                  NHẬN TƯ VẤN & TRẢI NGHIỆM
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Kết nối ngay với đội ngũ hỗ trợ để nhận cấu hình chuẩn và hỗ trợ kỹ thuật chi tiết.
                </p>
              </div>

              {/* Prominent Gradient Contact Button */}
              <button
                type="button"
                onClick={handleContactAction}
                className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wider font-gaming"
              >
                <MessageCircle className="w-5 h-5 text-cyan-200" />
                <span>LIÊN HỆ VỀ TỰA GAME NÀY</span>
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              </button>

              <div className="pt-2 border-t border-white/[0.08]">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                  Kênh Trực Tiếp:
                </span>
                <SocialLinks
                  channels={game.contactChannels}
                  size="md"
                  showLabel={true}
                  className="w-full justify-between"
                />
              </div>

              <div className="bg-black/40 rounded-xl p-3 border border-white/[0.06] text-[11px] text-gray-400 flex items-center justify-between">
                <span>Tên miền chính thức:</span>
                <span className="text-cyan-300 font-mono font-bold">tnxmd.io.vn</span>
              </div>
            </div>

            {/* Game Information Section */}
            <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-5 space-y-3.5">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono border-b border-white/[0.08] pb-2">
                Thông Tin Tựa Game
              </h4>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-gray-400">Thể loại</span>
                  <span className="text-purple-300 font-semibold">{game.category}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-gray-400">Nền tảng hỗ trợ</span>
                  <div className="flex items-center gap-1">
                    {game.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-gray-300 font-medium text-[10px]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-gray-400">Phiên bản</span>
                  <span className="text-cyan-400 font-mono font-bold">{game.version}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-gray-400">Thời gian cập nhật</span>
                  <span className="text-gray-200">{game.releaseDate}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-gray-400">Trạng thái</span>
                  <span className="text-emerald-400 font-bold">{game.status}</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-gray-400">Lượt quan tâm</span>
                  <span className="text-gray-300 font-mono">{game.views || "12.4K"}</span>
                </div>
              </div>
            </div>

            {/* Tags Pill Box */}
            <div className="rounded-2xl bg-[#0b0b14] border border-white/[0.08] p-5 space-y-3">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider font-mono">
                Từ Khóa & Thẻ Phân Loại
              </h4>
              <div className="flex items-center gap-1.5 flex-wrap">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back to Catalog Bottom Button */}
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
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                  Tựa Game Đề Xuất
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-gaming tracking-tight">
                  CÁC TỰA GAME TƯƠNG TỰ
                </h3>
              </div>
              <Link
                href="/#catalog"
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Xem Toàn Bộ Kho Game →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedGames.map((rg) => (
                <Link
                  key={rg.id}
                  href={`/game/${rg.slug}`}
                  className="group rounded-2xl bg-[#0b0b14] border border-white/[0.08] hover:border-purple-500/50 p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 block"
                >
                  <div className="relative w-full h-40 rounded-xl overflow-hidden bg-black/40 mb-3">
                    <Image
                      src={rg.coverImage}
                      alt={rg.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 flex items-center gap-1">
                      {rg.isHot && <Badge variant="hot">HOT</Badge>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-purple-300 mb-1">
                    <span>{rg.category}</span>
                    <span className="font-mono text-gray-400">{rg.version}</span>
                  </div>
                  <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                    {rg.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                    {rg.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        gameTitle={game.title}
        channels={game.contactChannels}
      />
    </div>
  );
};
