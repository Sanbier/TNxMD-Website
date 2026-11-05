export type Platform = "PC" | "iOS" | "Android" | "Steam" | "PlayStation" | "Xbox";

export type GameCategory =
  | "All"
  | "Action"
  | "FPS"
  | "RPG"
  | "MOBA"
  | "Survival"
  | "Strategy"
  | "Mobile";

export interface ContactChannels {
  discord?: string;
  telegram?: string;
  zalo?: string;
  facebook?: string;
}

export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface Game {
  id: string;
  slug: string;
  title: string;
  category: string;
  genre: string;
  platforms: Platform[];
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  bannerImage: string;
  gallery: string[];
  isHot: boolean;
  rating: number;
  version: string;
  releaseDate: string;
  developer: string;
  status: "Active" | "Updated" | "Featured" | "Hot";
  features: string[];
  systemRequirements?: SystemRequirements;
  contactUrl?: string;
  contactChannels?: ContactChannels;
  tags: string[];
  views?: string;
}
