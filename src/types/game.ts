export type Platform = "iOS" | "iPadOS";

export type GameCategory =
  | "Tất cả"
  | "Hành động"
  | "FPS"
  | "Nhập vai"
  | "MOBA"
  | "Sinh tồn"
  | "Chiến thuật"
  | "Di động";

export interface ContactChannels {
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
  status: "Đang Hoạt Động" | "Mới Cập Nhật" | "Nổi Bật" | "HOT";
  features: string[];
  systemRequirements?: SystemRequirements;
  contactUrl?: string;
  contactChannels?: ContactChannels;
  tags: string[];
  views?: string;
}
