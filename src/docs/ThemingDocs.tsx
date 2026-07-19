import { useState, type ReactNode } from "react";
import {
  BoxSelect,
  Check,
  CircleDot,
  Palette,
  Sparkles,
  Type,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ComixaProvider,
} from "comixa-ui";
import { CodeBlock } from "./DocPage";

type ThemeId = "comic" | "retro" | "pop-art" | "manga" | "vintage";
type ProviderTheme = Exclude<ThemeId, "comic">;

const THEMES: {
  id: ThemeId;
  label: string;
  description: string;
  swatches: string[];
}[] = [
  {
    id: "comic",
    label: "Comic",
    description: "Bright primary colors, bold ink borders, and punchy shadows.",
    swatches: ["#ffd84d", "#4f9cf9", "#ff5757"],
  },
  {
    id: "retro",
    label: "Retro",
    description:
      "Warm analog colors with softer corners and aged-paper energy.",
    swatches: ["#d9a441", "#6c8ebf", "#c66a4a"],
  },
  {
    id: "pop-art",
    label: "Pop Art",
    description: "Electric color, oversized shadows, and high-impact contrast.",
    swatches: ["#ffe14d", "#3b82f6", "#ff4fa3"],
  },
  {
    id: "manga",
    label: "Manga",
    description: "Monochrome ink, screentone patterns, and dramatic geometry.",
    swatches: ["#ffffff", "#bdbdbd", "#111111"],
  },
  {
    id: "vintage",
    label: "Vintage",
    description: "Editorial typography with muted ink and antique paper tones.",
    swatches: ["#e5c37a", "#d7c2a5", "#7b2d26"],
  },
];

const TOKENS = [
  {
    icon: Palette,
    title: "Colors",
    body: "Semantic color slots keep primary, danger, success, warning, paper, and ink roles consistent across themes.",
    code: "--comixa-primary-bg",
  },
  {
    icon: BoxSelect,
    title: "Borders",
    body: "Each theme controls border color and thickness so components share the same visual weight.",
    code: "--comixa-button-border-width",
  },
  {
    icon: Type,
    title: "Typography",
    body: "Font family, weight, casing, and letter spacing shift together without changing component markup.",
    code: "--comixa-button-font",
  },
  {
    icon: Sparkles,
    title: "Shadows",
    body: "Hard-shadow direction, distance, and color create a distinct depth system for every visual world.",
    code: "--comixa-default-shadow-value",
  },
] as const;

const SWITCHING_CODE = `<ComixaProvider theme="retro">
  <Button>Retro action</Button>
</ComixaProvider>`;

const COMIC_CODE = `<ComixaProvider theme="comic">
  <Button>Comic action</Button>
</ComixaProvider>

// Comic is also used when theme is omitted:
<ComixaProvider>
  <Button>Comic action</Button>
</ComixaProvider>`;

export function ThemingDocs() {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("comic");
  const active = THEMES.find((theme) => theme.id === activeTheme) ?? THEMES[0];

  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Visual Systems</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Theming
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Comixa themes are complete visual systems rather than isolated color
          presets. One provider updates colors, typography, borders, shadows,
          patterns, and motion language for every nested component.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <SectionTitle eyebrow="Five visual worlds" title="Available Themes" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {THEMES.map((theme) => {
            const selected = activeTheme === theme.id;
            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => setActiveTheme(theme.id)}
                aria-pressed={selected}
                className="group h-full text-left"
              >
                <Card
                  variant="default"
                  padding="none"
                  className={`h-full transition-transform group-hover:-translate-y-1 ${
                    selected ? "ring-4 ring-comic-yellow ring-offset-2" : ""
                  }`}
                >
                  <CardContent className="flex h-full flex-col gap-4 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="pg-fg font-comic text-lg uppercase tracking-wide">
                        {theme.label}
                      </h3>
                      {selected ? (
                        <Check className="pg-fg h-5 w-5" strokeWidth={3} />
                      ) : null}
                    </div>
                    <div className="flex gap-2" aria-hidden="true">
                      {theme.swatches.map((color) => (
                        <span
                          key={color}
                          className="h-7 flex-1 rounded border-2 border-ink"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="pg-fg-muted text-sm leading-6">
                      {theme.description}
                    </p>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle eyebrow="Provider API" title="Switching Themes" />
          <p className="pg-fg-muted leading-7">
            Wrap an application, route, or isolated section with
            <code className="pg-fg mx-1 font-mono text-sm">ComixaProvider</code>
            . Components inside it inherit the selected theme automatically.
          </p>
          <CodeBlock code={SWITCHING_CODE} />
          <details className="pg-surface pg-border rounded-xl border-2 p-4 shadow-comic-sm">
            <summary className="pg-fg cursor-pointer font-comic uppercase tracking-wide">
              Comic theme usage
            </summary>
            <div className="mt-4">
              <CodeBlock code={COMIC_CODE} />
            </div>
          </details>
        </div>

        <Card variant="default" padding="none" className="min-w-0">
          <CardHeader className="flex-row items-center justify-between gap-3 border-b-2 border-ink px-5 py-4">
            <div>
              <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
                Live provider
              </p>
              <CardTitle>{active.label}</CardTitle>
            </div>
            <CircleDot className="pg-fg h-5 w-5" aria-hidden="true" />
          </CardHeader>
          <CardContent className="p-0">
            <ThemeProvider theme={activeTheme}>
              <div className="flex min-h-72 flex-col items-center justify-center gap-5 bg-paper p-8 text-center">
                <Badge variant="yellow">{active.label}</Badge>
                <h3 className="font-comic text-3xl uppercase tracking-wide text-ink">
                  Same API. New world.
                </h3>
                <p className="max-w-sm text-sm text-ink-muted">
                  Change the selected card to update this entire preview through
                  one provider value.
                </p>
                <Button variant="primary">Launch action</Button>
              </div>
            </ThemeProvider>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle eyebrow="Live preview" title="Theme Comparison" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          The component API stays identical. Only the provider theme changes.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {THEMES.map((theme) => (
            <ThemeProvider key={theme.id} theme={theme.id}>
              <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-xl border-2 border-ink bg-paper p-5 shadow-comic-sm">
                <span className="font-comic text-sm uppercase tracking-wide text-ink">
                  {theme.label}
                </span>
                <Button variant="primary">Button</Button>
              </div>
            </ThemeProvider>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle eyebrow="Design system" title="Theme Tokens" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Comixa converts theme objects into semantic CSS variables. Components
          consume roles instead of hard-coded visual values, so custom themes
          can remain coherent across the entire library.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TOKENS.map(({ icon: Icon, title, body, code }) => (
            <Card key={title} variant="default" padding="none">
              <CardContent className="flex h-full flex-col gap-4 p-5">
                <span className="pg-surface-muted pg-border flex h-11 w-11 items-center justify-center rounded-lg border-2">
                  <Icon
                    className="pg-fg h-5 w-5"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="pg-fg font-comic text-lg uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="pg-fg-muted mt-2 text-sm leading-6">{body}</p>
                </div>
                <code className="pg-surface-muted pg-fg mt-auto overflow-x-auto rounded-lg border border-black/15 p-2 font-mono text-xs">
                  {code}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </article>
  );
}

function ThemeProvider({
  theme,
  children,
}: {
  theme: ThemeId;
  children: ReactNode;
}) {
  const providerTheme: ProviderTheme | undefined =
    theme === "comic" ? undefined : theme;
  return (
    <ComixaProvider {...(providerTheme ? { theme: providerTheme } : {})}>
      {children}
    </ComixaProvider>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
        {eyebrow}
      </p>
      <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
        {title}
      </h2>
    </div>
  );
}
