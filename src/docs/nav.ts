export type NavGroup = {
  label: string;
  items: { id: string; label: string }[];
};

export const NAV: NavGroup[] = [
  {
    label: "Start",
    items: [
      { id: "overview", label: "Overview" },
      { id: "showcase", label: "Showcase" },
    ],
  },
  {
    label: "Actions",
    items: [
      { id: "button", label: "Button" },
      { id: "badge", label: "Badge" },
      { id: "sound-badge", label: "SoundBadge" },
      { id: "sticker", label: "Sticker" },
    ],
  },
  {
    label: "Forms",
    items: [
      { id: "input", label: "Input" },
      { id: "select", label: "Select" },
      { id: "checkbox", label: "Checkbox" },
      { id: "radio", label: "Radio" },
      { id: "switch", label: "Switch" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { id: "dialog", label: "Dialog" },
      { id: "toast", label: "Toast" },
      { id: "tooltip", label: "Tooltip" },
    ],
  },
  {
    label: "Layout",
    items: [
      { id: "card", label: "Card" },
      { id: "divider", label: "Divider" },
      { id: "comic-page", label: "ComicPage" },
      { id: "speech-bubble", label: "SpeechBubble" },
      { id: "avatar", label: "Avatar" },
    ],
  },
  {
    label: "Marketing",
    items: [
      { id: "testimonials", label: "Testimonials" },
      { id: "pricing", label: "Pricing" },
      { id: "faq", label: "FAQ" },
      { id: "stats", label: "Stats" },
    ],
  },
  {
    label: "Effects",
    items: [
      { id: "animated-text", label: "AnimatedText" },
      { id: "background", label: "Background" },
    ],
  },
];

export const COMPONENT_BLURBS: { id: string; label: string; blurb: string }[] = [
  { id: "button", label: "Button", blurb: "Primary CTAs with hard shadows and punchy effects." },
  { id: "badge", label: "Badge", blurb: "Compact tags for status, labels, and accents." },
  { id: "sound-badge", label: "SoundBadge", blurb: "POW / BAM action words from classic comics." },
  { id: "sticker", label: "Sticker", blurb: "Tilted promo stickers for highlights." },
  { id: "input", label: "Input", blurb: "Ink-bordered text fields with validation states." },
  { id: "select", label: "Select", blurb: "Custom listbox dropdown (not the native select)." },
  { id: "checkbox", label: "Checkbox", blurb: "Checkable options with optional labels." },
  { id: "radio", label: "Radio", blurb: "Single-choice radio buttons, groupable." },
  { id: "switch", label: "Switch", blurb: "On/off toggles with a comic thumb." },
  { id: "dialog", label: "Dialog", blurb: "Animated modal dialogs for alerts and confirms." },
  { id: "toast", label: "Toast", blurb: "Transient notifications with position and duration." },
  { id: "tooltip", label: "Tooltip", blurb: "Hover/focus tips anchored to a trigger." },
  { id: "card", label: "Card", blurb: "Content panels with ink borders and shadows." },
  { id: "divider", label: "Divider", blurb: "Comic rules and chapter separators." },
  { id: "comic-page", label: "ComicPage", blurb: "Strip layouts built from comic panels." },
  { id: "speech-bubble", label: "SpeechBubble", blurb: "Dialogue and thought bubbles with tails." },
  { id: "avatar", label: "Avatar", blurb: "Initials or image avatars, stackable in groups." },
  { id: "testimonials", label: "Testimonials", blurb: "Quote cards for social proof." },
  { id: "pricing", label: "Pricing", blurb: "Tier cards with featured plans and CTAs." },
  { id: "faq", label: "FAQ", blurb: "Accordion Q&A with comic chevrons." },
  { id: "stats", label: "Stats", blurb: "Metric tiles with optional count-up." },
  { id: "animated-text", label: "AnimatedText", blurb: "Letter reveal, typewriter, comic text, highlight." },
  { id: "background", label: "Background", blurb: "Dots, grid, lines, pattern, explosion, comic paper." },
];
