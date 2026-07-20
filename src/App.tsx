import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, ComixaProvider, ToastProvider } from "comixa-ui";
import { Analytics } from "@vercel/analytics/react";
import { DOCS_ITEMS, NAV } from "./docs/nav";
import { NavSearch } from "./docs/NavSearch";
import { renderDocsPage } from "./docs/pages";
import { updateSeo } from "./seo";
import { LandingPage } from "./landing/LandingPage";
import NotFoundPage from "./not-found";
import { Menu } from "lucide-react";

const PLAYGROUND_THEMES = [
  { id: "comic", label: "Comic" },
  { id: "retro", label: "Retro" },
  { id: "pop-art", label: "Pop Art" },
  { id: "manga", label: "Manga" },
  { id: "vintage", label: "Vintage" },
] as const;

type PlaygroundTheme = (typeof PLAYGROUND_THEMES)[number]["id"];
type ProviderTheme = "retro" | "pop-art" | "manga" | "vintage";

const COMPONENT_IDS = new Set(
  NAV.flatMap((group) => group.items.map((item) => item.id)).filter(
    (id) => id !== "overview" && id !== "examples" && !id.startsWith("docs-"),
  ),
);
const DOCS_IDS = new Set(DOCS_ITEMS.map((item) => item.id));

function pageFromPath(pathname: string) {
  if (pathname === "/" || pathname === "") return "landing";
  if (pathname === "/404" || pathname === "/404/") return "404";
  if (pathname === "/docs" || pathname === "/docs/") return "docs";
  if (pathname === "/examples" || pathname === "/examples/") return "examples";
  if (pathname === "/blog" || pathname === "/blog/") return "blog";
  if (pathname === "/playground" || pathname === "/playground/")
    return "playground";
  if (pathname === "/components" || pathname === "/components/") {
    return "components";
  }
  if (
    pathname === "/docs/getting-started" ||
    pathname === "/docs/getting-started/"
  )
    return "docs-getting-started";

  const docsMatch = pathname.match(/^\/docs\/([^/]+)\/?$/);
  if (docsMatch) {
    const id = `docs-${decodeURIComponent(docsMatch[1])}`;
    if (DOCS_IDS.has(id as (typeof DOCS_ITEMS)[number]["id"])) return id;
    return "404";
  }

  const match = pathname.match(/^\/components\/([^/]+)\/?$/);
  if (match) {
    const id = decodeURIComponent(match[1]);
    if (COMPONENT_IDS.has(id)) return id;
    return "404";
  }

  return "404";
}

function pathForPage(id: string) {
  if (id === "landing") return "/";
  if (id === "404") return "/404";
  if (id === "components") return "/components";
  if (id === "examples") return "/examples";
  if (id === "blog") return "/blog";
  if (id === "playground") return "/playground";
  if (id === "docs") return "/docs";
  if (id.startsWith("docs-")) {
    return `/docs/${encodeURIComponent(id.slice(5))}`;
  }
  return `/components/${encodeURIComponent(id)}`;
}

function isPlaygroundTheme(value: string | null): value is PlaygroundTheme {
  return PLAYGROUND_THEMES.some((theme) => theme.id === value);
}

function applyTheme(theme: PlaygroundTheme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", "light");
  root.setAttribute("data-comixa-theme", theme);
  try {
    localStorage.setItem("comixa-playground-theme", theme);
  } catch {
    /* ignore */
  }
}

function useTheme() {
  const [theme, setTheme] = useState<PlaygroundTheme>(() => {
    if (typeof document === "undefined") return "comic";
    try {
      const stored = localStorage.getItem("comixa-playground-theme");
      if (isPlaygroundTheme(stored)) return stored;
    } catch {
      /* ignore */
    }
    const current = document.documentElement.getAttribute("data-comixa-theme");
    return isPlaygroundTheme(current) ? current : "comic";
  });

  return { theme, setTheme };
}

function Playground() {
  const [active, setActive] = useState(() =>
    pageFromPath(window.location.pathname),
  );
  const [mobileNav, setMobileNav] = useState(false);
  const { theme, setTheme } = useTheme();
  const providerTheme: ProviderTheme | undefined =
    theme === "comic" ? undefined : theme;

  useEffect(() => {
    if (active === "landing") {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.setAttribute("data-comixa-theme", "comic");
      return;
    }
    applyTheme(theme);
  }, [active, theme]);

  const navigate = useCallback((id: string) => {
    const path = pathForPage(id);
    if (window.location.pathname !== path) {
      window.history.pushState({ page: id }, "", path);
    }
    setActive(id);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const handlePopState = () =>
      setActive(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    updateSeo(active, window.location.pathname);
  }, [active]);

  const page = useMemo(
    () => renderDocsPage(active, navigate),
    [active, navigate],
  );

  if (active === "landing") {
    return <LandingPage />;
  }

  if (active === "404") {
    return <NotFoundPage />;
  }

  return (
    <ComixaProvider {...(providerTheme ? { theme: providerTheme } : {})}>
      <div className="flex h-full min-h-0 overflow-hidden">
        <div
          className={
            mobileNav
              ? "pg-chrome pg-border flex h-full w-full min-h-0 shrink-0 flex-col border-r-2 md:w-64"
              : "pg-chrome pg-border hidden h-full w-64 min-h-0 shrink-0 flex-col border-r-2 md:flex"
          }
        >
          <div className="flex items-center justify-between border-b-2 px-4 py-1 pg-border">
            <a
              href="/"
              className="flex shrink-0 items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Comixa"
                className="h-20 w-20 object-cover "
              />
              <div className="min-w-0">
                <p className="pg-fg font-comic text-3xl uppercase tracking-wide">
                  Comixa UI
                </p>
              </div>
            </a>
            <Button
              size="sm"
              variant="outline"
              className="ml-auto md:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setMobileNav(false);
              }}
            >
              Close
            </Button>
          </div>

          <nav className="pg-hide-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">
            {NAV.map((group) => (
              <div key={group.label} className="mb-4">
                <p className="pg-fg-muted mb-2 px-2 font-comic text-xs uppercase tracking-wide">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const selected = active === item.id;
                    return (
                      <li key={item.id}>
                        <a href={pathForPage(item.id)}>
                          <button
                            type="button"
                            className={
                              selected
                                ? "pg-nav-item-active w-full rounded-lg border-2 border-ink bg-comic-yellow px-3 py-2 text-left font-comic text-sm uppercase tracking-wide text-ink shadow-comic-sm"
                                : "pg-nav-item pg-fg w-full rounded-lg px-3 py-2 text-left font-body text-sm hover:bg-black/5"
                            }
                          >
                            {item.label}
                          </button>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          className={
            mobileNav
              ? "hidden min-h-0 min-w-0 flex-1 flex-col overflow-hidden md:flex"
              : "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden"
          }
        >
          <header className="pg-chrome pg-border flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 backdrop-blur md:gap-3 md:px-8">
            <Button
              size="sm"
              variant="outline"
              className="md:hidden !px-0"
              onClick={() => setMobileNav(true)}
            >
              <Menu size={24} />
            </Button>
            <div className="nav-links">
              <a
                href="/components"
                data-cursor="COMP."
                data-cursor-shape="burst"
              >
                Components
              </a>
              <a
                href="/docs/theming"
                data-cursor="THEMES"
                data-cursor-shape="diamond"
              >
                Themes
              </a>
              <a
                href="/examples"
                data-cursor="EXAMP."
                data-cursor-shape="square"
              >
                Examples
              </a>
              <a
                href="/docs/getting-started"
                data-cursor="DOCS"
                data-cursor-shape="burst"
              >
                Docs
              </a>
              <a href="/blog" data-cursor="BLOG" data-cursor-shape="diamond">
                Blog
              </a>
              <a
                href="/playground"
                data-cursor="PLAY"
                data-cursor-shape="square"
              >
                Playground
              </a>
            </div>

            <div className="pg-theme-picker ml-auto flex shrink-0 items-center gap-1 pg-hide-scrollbar">
              <NavSearch
                onSelect={(id) => {
                  navigate(id);
                  setMobileNav(false);
                }}
              />
              {PLAYGROUND_THEMES.map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  variant="primary"
                  className="theme-option shrink-0"
                  data-theme-option={item.id}
                  aria-pressed={theme === item.id}
                  onClick={() => setTheme(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-8 md:px-8 md:py-10">
            <div
              className={
                active === "examples"
                  ? "mx-auto max-w-6xl"
                  : "mx-auto max-w-3xl"
              }
            >
              {page}
            </div>
          </main>
        </div>
      </div>
    </ComixaProvider>
  );
}

export default function App() {
  return (
    <ToastProvider position="bottom-right">
      <Playground />
      <Analytics />
    </ToastProvider>
  );
}
