import React from "react";
import { Hero } from "@/components/Hero";
import { CatalogSection } from "@/components/CatalogSection";
import { getCatalogGames, getHeroGames } from "@/data/games";

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TNxMD",
  alternateName: "TNxMD | Cổng Mua/Bán Mod Game Online",
  url: "https://tnxmd.io.vn",
  description:
    "Truy cập khám phá và trải nghiệm các chức năng thú vị đến từ đội ngũ siêu hạng",
  inLanguage: "vi-VN",
  publisher: {
    "@type": "Organization",
    name: "TNxMD",
    url: "https://tnxmd.io.vn",
    logo: "https://tnxmd.io.vn/logo.png",
  },
};

export default function HomePage() {
  const heroItems = getHeroGames();
  const catalogGames = getCatalogGames();

  return (
    <main className="relative flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
      />

      {/* Hero Section (Top 6 Expanding Image Accordion) */}
      <Hero items={heroItems} />

      {/* Catalog & Search Section */}
      <CatalogSection games={catalogGames} />
    </main>
  );
}
