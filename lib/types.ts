export type BrandSlug = "litty-co" | "jj-totes" | "great-wall-of-legends" | "jj-pro-service";

export type MonogramVariant = "tt" | "JJ" | "LL";

export type DealStatus = "live" | "up-next" | "archive";

export interface BrandTheme {
  accent: string;
  accentSoft: string;
  accentGlow: string;
  surface: string;
  edge: string;
  label: string;
}

export interface BrandPageSection {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  media?: string;
}

export interface Brand {
  slug: BrandSlug;
  displayName: string;
  shortName: string;
  tag: string;
  summary: string;
  route: string;
  monogramVariant: MonogramVariant;
  theme: BrandTheme;
  palette: string[];
  heroImage: string;
  secondaryImage: string;
  signature: string;
  audience: string;
  proof: string[];
  sections: BrandPageSection[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ContentPillar {
  title: string;
  summary: string;
}

export interface StoryPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
  image: string;
  relatedBrand: BrandSlug;
}

export interface MarketplaceItem {
  title: string;
  category: string;
  summary: string;
  price: string;
  tag: string;
  image: string;
  brandSlug: BrandSlug;
}

export interface ServiceOffer {
  title: string;
  category: string;
  summary: string;
  delivery: string;
  tag: string;
  image: string;
  brandSlug: BrandSlug;
}

export interface DealCampaign {
  title: string;
  status: DealStatus;
  summary: string;
  window: string;
  code: string;
  reward: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}
