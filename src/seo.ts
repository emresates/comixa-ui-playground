import { COMPONENT_BLURBS } from "./docs/nav";

const DEFAULT_SITE_URL = "https://comixa-ui.vercel.app";

export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(
  /\/$/,
  ""
);

const DEFAULT_DESCRIPTION =
  "Comixa UI is a comic-inspired React component library with expressive Tailwind CSS components, themes, examples, and accessible UI documentation.";

const componentById = new Map(COMPONENT_BLURBS.map((item) => [item.id, item]));

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
  const isExamples = pageId === "examples";
  const title = component
    ? `Comixa ${component.label} Component — React UI Docs`
    : isExamples
      ? "Comixa UI Examples — React Component Designs"
      : "Comixa UI — Comic React Component Library";
  const description = component
    ? `Explore the Comixa ${component.label} React component. ${component.blurb} View examples, usage code, imports, and props.`
    : isExamples
      ? "Explore full-page React designs and interface examples built with Comixa UI comic components and themes."
      : DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  document.title = title;
  upsertCanonical(canonicalUrl);
  upsertMeta('meta[name="description"]', { name: "description", content: description });
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
