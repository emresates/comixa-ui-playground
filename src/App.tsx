import { useEffect, useMemo, useState } from "react";
import { Badge, Button, ComixaProvider, ToastProvider } from "comixa-ui";
import { NAV } from "./docs/nav";
import { NavSearch } from "./docs/NavSearch";
import { renderDocsPage } from "./docs/pages";

const PLAYGROUND_THEMES = [
  { id: "light", label: "Comic" },
  { id: "retro", label: "Retro" },
  { id: "pop-art", label: "Pop Art" },
  { id: "manga", label: "Manga" },
  { id: "vintage", label: "Vintage" },
] as const;

type PlaygroundTheme = (typeof PLAYGROUND_THEMES)[number]["id"];
type ProviderTheme = "default" | "retro" | "pop-art" | "manga" | "vintage";

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
    if (typeof document === "undefined") return "light";
    try {
      const stored = localStorage.getItem("comixa-playground-theme");
      if (isPlaygroundTheme(stored)) return stored;
    } catch {
      /* ignore */
    }
    const current = document.documentElement.getAttribute("data-comixa-theme");
    return isPlaygroundTheme(current) ? current : "light";
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}

function Playground() {
  const [active, setActive] = useState("overview");
  const [mobileNav, setMobileNav] = useState(false);
  const { theme, setTheme } = useTheme();
  const providerTheme: ProviderTheme = theme === "light" ? "default" : theme;

  const page = useMemo(() => renderDocsPage(active, setActive), [active]);

  return (
    <ComixaProvider theme={providerTheme}>
      <div className="flex h-full min-h-0 overflow-hidden">
        <div
          className={
            mobileNav
              ? "pg-chrome pg-border flex h-full w-full min-h-0 shrink-0 flex-col border-r-2 md:w-64"
              : "pg-chrome pg-border hidden h-full w-64 min-h-0 shrink-0 flex-col border-r-2 md:flex"
          }
        >
          <div className="pg-border flex shrink-0 items-center gap-3 border-b-2 px-4 py-4">
            <img
              src="/logo.png"
              alt="Comixa"
              className="h-14 w-14 shrink-0 rounded-lg border-2 border-ink object-cover shadow-comic-sm"
            />
            <div className="min-w-0">
              <p className="pg-fg font-comic text-2xl uppercase tracking-wide">
                Comixa
              </p>
              <p className="pg-fg-muted text-sm">Component docs</p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="ml-auto md:hidden"
              onClick={() => setMobileNav(false)}
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
                        <button
                          type="button"
                          onClick={() => {
                            setActive(item.id);
                            setMobileNav(false);
                          }}
                          className={
                            selected
                              ? "pg-nav-item-active w-full rounded-lg border-2 border-ink bg-comic-yellow px-3 py-2 text-left font-comic text-sm uppercase tracking-wide text-ink shadow-comic-sm"
                              : "pg-nav-item pg-fg w-full rounded-lg px-3 py-2 text-left font-body text-sm hover:bg-black/5"
                          }
                        >
                          {item.label}
                        </button>
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
              className="md:hidden"
              onClick={() => setMobileNav(true)}
            >
              Menu
            </Button>
            <Badge variant="yellow" className="hidden sm:inline-flex">
              Playground
            </Badge>
            <NavSearch
              onSelect={(id) => {
                setActive(id);
                setMobileNav(false);
              }}
            />
            <span className="pg-fg-muted hidden shrink-0 font-comic text-sm uppercase tracking-wide lg:inline">
              {NAV.flatMap((g) => g.items).find((i) => i.id === active)
                ?.label ?? "Overview"}
            </span>
            <div className="pg-theme-picker ml-auto flex shrink-0 items-center gap-1 pg-hide-scrollbar">
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
    </ToastProvider>
  );
}
