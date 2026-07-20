import type { SectionDefinition, SectionType } from "./types";

export const SECTION_DEFINITIONS: readonly SectionDefinition[] = [
  {
    type: "navbar",
    label: "Navbar",
    description: "Brand, links and primary action",
    category: "Essentials",
    variants: [
      { id: "classic", label: "Classic" },
      { id: "center", label: "Centered" },
      { id: "bold", label: "Bold bar" },
    ],
    thumbnail: [90, 28, 54],
  },
  {
    type: "hero",
    label: "Hero",
    description: "High-impact opening section",
    category: "Essentials",
    variants: [
      { id: "split", label: "Hero Split" },
      { id: "center", label: "Hero Center" },
      { id: "magazine", label: "Hero Magazine" },
      { id: "explosion", label: "Hero Explosion" },
    ],
    thumbnail: [64, 88, 46],
  },
  {
    type: "features",
    label: "Features",
    description: "Product benefits and capabilities",
    category: "Content",
    variants: [
      { id: "cards", label: "Feature Cards" },
      { id: "panels", label: "Comic Panels" },
      { id: "icons", label: "Icon Grid" },
    ],
    thumbnail: [72, 72, 72],
  },
  {
    type: "gallery",
    label: "Gallery",
    description: "Visual work and product stories",
    category: "Content",
    variants: [
      { id: "grid", label: "Gallery Grid" },
      { id: "featured", label: "Featured Work" },
      { id: "strip", label: "Film Strip" },
    ],
    thumbnail: [80, 54, 68],
  },
  {
    type: "pricing",
    label: "Pricing",
    description: "Plans, benefits and conversion",
    category: "Conversion",
    variants: [
      { id: "cards", label: "Pricing Cards" },
      { id: "panels", label: "Pricing Panels" },
      { id: "magazine", label: "Pricing Magazine" },
    ],
    thumbnail: [62, 84, 62],
  },
  {
    type: "testimonials",
    label: "Testimonials",
    description: "Customer proof and quotes",
    category: "Content",
    variants: [
      { id: "cards", label: "Review Cards" },
      { id: "speech", label: "Speech Bubbles" },
      { id: "quotes", label: "Pull Quotes" },
    ],
    thumbnail: [60, 78, 64],
  },
  {
    type: "faq",
    label: "FAQ",
    description: "Expandable product questions",
    category: "Content",
    variants: [
      { id: "list", label: "FAQ List" },
      { id: "panels", label: "FAQ Panels" },
    ],
    thumbnail: [88, 88, 88],
  },
  {
    type: "cta",
    label: "CTA",
    description: "Focused conversion moment",
    category: "Conversion",
    variants: [
      { id: "banner", label: "CTA Banner" },
      { id: "split", label: "CTA Split" },
      { id: "burst", label: "CTA Burst" },
    ],
    thumbnail: [94, 64, 38],
  },
  {
    type: "newsletter",
    label: "Newsletter",
    description: "Email capture section",
    category: "Conversion",
    variants: [
      { id: "card", label: "Signup Card" },
      { id: "strip", label: "Signup Strip" },
    ],
    thumbnail: [74, 92, 42],
  },
  {
    type: "contact",
    label: "Contact",
    description: "Inquiry form and contact details",
    category: "Conversion",
    variants: [
      { id: "form", label: "Contact Form" },
      { id: "split", label: "Contact Split" },
    ],
    thumbnail: [56, 88, 68],
  },
  {
    type: "footer",
    label: "Footer",
    description: "Site links and final signature",
    category: "Essentials",
    variants: [
      { id: "columns", label: "Footer Columns" },
      { id: "compact", label: "Compact Footer" },
    ],
    thumbnail: [92, 58, 76],
  },
];

export const SECTION_MAP = Object.fromEntries(
  SECTION_DEFINITIONS.map((section) => [section.type, section]),
) as Record<SectionType, SectionDefinition>;

export const CATEGORIES = ["Essentials", "Content", "Conversion"] as const;

