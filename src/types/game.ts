export type Platform = "iOS" | "iPadOS";

export type GameStatus =
  | "Đang Hoạt Động"
  | "Mới Cập Nhật"
  | "Nổi Bật"
  | "HOT"
  | "Bảo Trì";

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
  status: GameStatus;
  features: string[];
  systemRequirements?: SystemRequirements;
  contactUrl?: string;
  contactChannels?: ContactChannels;
  tags: string[];
  views?: string;
}

/** DTO tối giản truyền từ Server xuống Hero Expanding Accordion (Top 6 HOT) */
export interface HeroGameItem {
  slug: string;
  displayTitle: string;
  coverImage: string;
  version: string;
  collapsedPos: string;
  activePos: string;
  baseScale: number;
}

/** DTO tối giản truyền từ Server xuống từng thẻ GameCard tại Kho Game */
export interface CatalogGameItem {
  id: string;
  slug: string;
  title: string;
  genre: string;
  shortDescription: string;
  coverImage: string;
  isHot: boolean;
  rating: number;
  version: string;
  releaseDate: string;
  developer: string;
  status: GameStatus;
  contactUrl?: string;
  views?: string;
  searchIndex: string;
}

/** DTO tối giản truyền xuống trang Chi Tiết Game */
export interface GameDetailItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  genre: string;
  coverImage: string;
  bannerImage: string;
  gallery: string[];
  isHot: boolean;
  rating: number;
  version: string;
  developer: string;
  status: GameStatus;
  features: string[];
  contactUrl?: string;
  contactChannels?: ContactChannels;
}

/** DTO tối giản cho dải Các Tựa Game Tương Tự (Top 8 liên quan nhất) */
export interface RelatedGameItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  version: string;
  coverImage: string;
  status: GameStatus;
  isHot: boolean;
}
