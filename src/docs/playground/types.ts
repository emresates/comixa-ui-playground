export const SECTION_TYPES = [
  "navbar",
  "hero",
  "features",
  "gallery",
  "pricing",
  "testimonials",
  "faq",
  "cta",
  "newsletter",
  "contact",
  "footer",
] as const;

export type SectionType = (typeof SECTION_TYPES)[number];
export type GeneratorTheme =
  | "classic"
  | "retro"
  | "pop-art"
  | "manga"
  | "vintage";
export type Device = "desktop" | "tablet" | "mobile";
export type CodeTab = "preview" | "jsx" | "tsx" | "json";
export type Pattern = "none" | "paper" | "halftone" | "dots" | "cross-hatch";

export type PageSection = {
  id: string;
  type: SectionType;
  variant: string;
  hidden?: boolean;
};

export type GeneratorState = {
  theme: GeneratorTheme;
  spacing: "compact" | "balanced" | "airy";
  container: "narrow" | "standard" | "wide";
  border: "none" | "sharp" | "soft";
  shadow: "none" | "comic" | "heavy" | "offset";
  pattern: Pattern;
  background: "paper" | "cream" | "ink";
  cursor: "classic" | "ring" | "spark";
  effects: boolean;
  animation: "none" | "subtle" | "playful";
  radius: "sharp" | "soft" | "round";
  stickerDensity: "none" | "low" | "medium" | "high";
  noise: "none" | "low" | "medium" | "high";
  sections: PageSection[];
};

export type SectionDefinition = {
  type: SectionType;
  label: string;
  description: string;
  category: "Essentials" | "Content" | "Conversion";
  variants: readonly { id: string; label: string }[];
  thumbnail: readonly number[];
};

export const DEFAULT_STATE: GeneratorState = {
  theme: "classic",
  spacing: "balanced",
  container: "standard",
  border: "sharp",
  shadow: "comic",
  pattern: "paper",
  background: "paper",
  cursor: "classic",
  effects: true,
  animation: "subtle",
  radius: "soft",
  stickerDensity: "low",
  noise: "low",
  sections: [
    { id: "navbar-1", type: "navbar", variant: "classic" },
    { id: "hero-1", type: "hero", variant: "split" },
    { id: "features-1", type: "features", variant: "cards" },
    { id: "pricing-1", type: "pricing", variant: "panels" },
    {
      id: "testimonials-1",
      type: "testimonials",
      variant: "speech",
    },
    { id: "cta-1", type: "cta", variant: "burst" },
    { id: "footer-1", type: "footer", variant: "columns" },
  ],
};

export function providerTheme(theme: GeneratorTheme) {
  return theme === "classic" ? undefined : theme;
}
