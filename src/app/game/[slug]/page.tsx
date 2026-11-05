import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Star,
  Monitor,
  Smartphone,
  CheckCircle,
  ExternalLink,
  ShieldAlert,
  Cpu,
  Layers,
  Calendar,
  Eye,
  MessageCircle,
  Flame,
} from "lucide-react";
import { getGameBySlug, getAllGameSlugs, GAMES } from "@/data/games";
import { Badge } from "@/components/Badge";
import { SocialLinks } from "@/components/SocialLinks";
import { GameDetailClient } from "./GameDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGameSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Không Tìm Thấy Tựa Game | TNXMD",
      description: "Tựa game yêu cầu hiện không có trong thư viện TNXMD.",
    };
  }

  return {
    title: `${game.title} - Cấu Hình, Đặc Điểm & Trải Nghiệm | TNXMD`,
    description: game.shortDescription,
    openGraph: {
      title: `${game.title} | TNXMD Gaming Hub`,
      description: game.shortDescription,
      url: `https://tnxmd.io.vn/game/${game.slug}`,
      siteName: "TNXMD",
      images: [
        {
          url: game.bannerImage,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `https://tnxmd.io.vn/game/${game.slug}`,
    },
  };
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  // Related games from same category or featured
  const relatedGames = GAMES.filter((g) => g.id !== game.id).slice(0, 3);

  return (
    <GameDetailClient game={game} relatedGames={relatedGames} />
  );
}
