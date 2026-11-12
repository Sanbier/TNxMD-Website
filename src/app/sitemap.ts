import type { MetadataRoute } from "next";
import { GAMES } from "@/data/games";

const BASE_URL = "https://tnxmd.io.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const gameRoutes: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${BASE_URL}/game/${game.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: game.isHot ? 0.9 : 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    ...gameRoutes,
  ];
}
