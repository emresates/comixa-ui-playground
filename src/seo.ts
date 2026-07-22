import { COMPONENT_BLURBS, DOCS_ITEMS } from "./docs/nav";

const DEFAULT_SITE_URL = "https://comixa-ui.vercel.app";

export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/$/,
  ""
);

const DEFAULT_DESCRIPTION =
  "Comixa UI is a comic-inspired React component library with expressive Tailwind CSS components, themes, examples, and accessible UI documentation.";

const componentById = new Map(COMPONENT_BLURBS.map((item) => [item.id, item]));
const docsById = new Map(DOCS_ITEMS.map((item) => [item.id, item]));

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element!.setAttribute(name, value));
}

function upsertCanonical(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

export function updateSeo(pageId: string, pathname: string) {
  const component = componentById.get(pageId);
  const docsPage = docsById.get(pageId as (typeof DOCS_ITEMS)[number]["id"]);
  const isExamples = pageId === "examples";
  const isDocs = pageId === "overview";
  const isNotFound = pageId === "404";
  const isBlog = pageId === "blog";
  const isReactHeroArticle = pageId === "blog-react-hero";
  const isCssVsReactArticle = pageId === "blog-css-vs-react";
  const isBlogArticle =
    pageId === "blog-article" || isReactHeroArticle || isCssVsReactArticle;
  const isPlayground = pageId === "playground";
  const title = isNotFound
    ? "404 — Comixa UI"
    : isCssVsReactArticle
      ? "CSS vs React UI Components: Which Should You Choose?"
    : isReactHeroArticle
      ? "React Hero Section Best Practices (2026)"
    : pageId === "blog-article"
      ? "How to Build a Comic Website in React with Comixa UI"
    : isBlog
      ? "Comixa UI Blog"
    : isPlayground
      ? "Comixa UI Playground"
    : component
    ? `Comixa ${component.label} Component — React UI Docs`
    : docsPage
      ? `${docsPage.label} — Comixa UI Documentation`
    : isExamples
      ? "Comixa UI Examples — React Component Designs"
      : isDocs
        ? "Comixa UI Documentation — React Components"
        : "Comixa UI — Comic React Component Library";
  const description = isNotFound
    ? "Page not found."
    : isCssVsReactArticle
      ? "Should you build every UI component with CSS or use a React UI library? Learn the pros, cons, and when each approach makes sense."
    : isReactHeroArticle
      ? "Learn how to design a high-converting React hero section with better headlines, CTAs, layout, accessibility, and responsive design."
    : pageId === "blog-article"
      ? "Learn how to build a responsive comic website in React with Comixa UI. Add comic sections, bold themes, animations, halftone patterns, and reusable components."
    : isBlog
      ? "Articles, guides, and updates from Comixa UI."
    : isPlayground
      ? "Experiment with Comixa UI components and themes."
    : component
    ? `Explore the Comixa ${component.label} React component. ${component.blurb} View examples, usage code, imports, and props.`
    : docsPage
      ? `Learn about ${docsPage.label} in Comixa UI documentation.`
    : isExamples
      ? "Explore full-page React designs and interface examples built with Comixa UI comic components and themes."
      : isDocs
        ? "Browse Comixa UI React component documentation, interactive examples, props, themes, and copy-ready usage code."
        : DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  document.title = title;
  upsertCanonical(canonicalUrl);
  upsertMeta('meta[name="robots"]', {
    name: "robots",
    content: isNotFound
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  });
  upsertMeta('meta[name="description"]', { name: "description", content: description });
  upsertMeta('meta[name="keywords"]', {
    name: "keywords",
    content: isCssVsReactArticle
      ? "React UI components, CSS components, React component library, React UI library, reusable React components, frontend components"
      : isReactHeroArticle
        ? "react hero section, hero section react, landing page hero, react landing page, hero section best practices"
        : "Comixa, Comixa UI, React component library, comic UI, Tailwind CSS components, React UI kit, comic components",
  });
  upsertMeta('meta[property="og:type"]', {
    property: "og:type",
    content: isBlogArticle ? "article" : "website",
  });
  upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: description,
  });
  upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
  upsertMeta('meta[property="og:image"]', {
    property: "og:image",
    content: `${SITE_URL}/logo.png`,
  });
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: description,
  });
  upsertMeta('meta[name="twitter:image"]', {
    name: "twitter:image",
    content: `${SITE_URL}/logo.png`,
  });
}
