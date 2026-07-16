export const site = {
  name: "[YOUR NAME]",
  role: "Frontend Developer",
  email: "hello@yourname.dev",
  location: "Your City, Country",
  availability: "Available for select projects",
  intro:
    "I build bold, fast and accessible digital experiences with React, Next.js and TypeScript.",
  about:
    "I am a frontend developer focused on turning complex product ideas into clear, responsive and memorable interfaces. I care about thoughtful interaction, reusable systems and performance that users can feel.",
  socials: {
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    x: "https://x.com/yourname"
  }
};

export const projects = [
  {
    issue: "ISSUE #01",
    title: "Orbit Commerce",
    category: "E-commerce",
    description:
      "A conversion-focused storefront with instant search, resilient checkout states and a flexible product system.",
    stack: ["Next.js", "TypeScript", "Stripe"],
    accent: "yellow",
    metric: "+34% conversion"
  },
  {
    issue: "ISSUE #02",
    title: "Pulse Analytics",
    category: "SaaS Dashboard",
    description:
      "A real-time analytics experience designed for dense data, quick scanning and confident decision-making.",
    stack: ["React", "Charts", "WebSockets"],
    accent: "blue",
    metric: "48k daily events"
  },
  {
    issue: "ISSUE #03",
    title: "Nova Studio",
    category: "Creative Platform",
    description:
      "A playful portfolio builder with modular sections, motion presets and instant publishing workflows.",
    stack: ["Next.js", "Motion", "CMS"],
    accent: "pink",
    metric: "95 Lighthouse"
  }
];

export const skills = [
  ["React & Next.js", "Building scalable, production-ready user interfaces."],
  ["TypeScript", "Clear contracts, safer refactors and maintainable systems."],
  ["Design Systems", "Reusable components with consistent visual language."],
  ["Performance", "Fast loading, responsive interaction and practical SEO."],
  ["Accessibility", "Keyboard-friendly, semantic and inclusive experiences."],
  ["Motion", "Purposeful animation that guides attention without distraction."]
] as const;

export const experience = [
  {
    issue: "CHAPTER 03",
    period: "2024 — PRESENT",
    role: "Senior Frontend Developer",
    company: "[COMPANY NAME]",
    detail: "Leading interface architecture, design-system adoption and frontend quality standards."
  },
  {
    issue: "CHAPTER 02",
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "[COMPANY NAME]",
    detail: "Built responsive product flows, reusable components and performance-focused pages."
  },
  {
    issue: "CHAPTER 01",
    period: "2020 — 2022",
    role: "Freelance Developer",
    company: "Independent",
    detail: "Delivered websites and product interfaces for startups, studios and independent founders."
  }
];
