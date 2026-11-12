import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllGameSlugs,
  getGameBySlug,
  getRelatedGames,
  toGameDetailItem,
} from "@/data/games";
import { getAppleOgImageUrl } from "@/lib/imageLoader";
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
      title: "Không Tìm Thấy Tựa Game",
      description: "Tựa game yêu cầu hiện không có trong thư viện TNxMD.",
    };
  }

  const ogImageUrl = getAppleOgImageUrl(game.bannerImage, 1200);

  return {
    title: `${game.title} - Chức Năng & Trải Nghiệm`,
    description: game.shortDescription,
    openGraph: {
      title: `${game.title} | TNxMD`,
      description: game.shortDescription,
      url: `https://tnxmd.io.vn/game/${game.slug}`,
      siteName: "TNxMD",
      locale: "vi_VN",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: game.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.title} | TNxMD`,
      description: game.shortDescription,
      images: [ogImageUrl],
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

  const detailItem = toGameDetailItem(game);
  const relatedGames = getRelatedGames(game, 8);

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: game.title,
    applicationCategory: "GameApplication",
    applicationSubCategory: game.genre,
    operatingSystem: game.platforms.join(", "),
    softwareVersion: game.version,
    description: game.shortDescription,
    url: `https://tnxmd.io.vn/game/${game.slug}`,
    image: getAppleOgImageUrl(game.coverImage, 512),
    author: {
      "@type": "Organization",
      name: game.developer,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: game.rating.toFixed(1),
      bestRating: "5.0",
      worstRating: "1.0",
      ratingCount: "120",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <GameDetailClient game={detailItem} relatedGames={relatedGames} />
    </>
  );
}
