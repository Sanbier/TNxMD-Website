import React from "react";
import { Hero } from "@/components/Hero";
import { CatalogSection } from "@/components/CatalogSection";

export default function HomePage() {
  return (
    <main className="relative flex-1">
      {/* Hero Section */}
      <Hero />

      {/* Catalog & Filter Section */}
      <CatalogSection />
    </main>
  );
}
