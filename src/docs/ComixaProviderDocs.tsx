import { useState, type ReactNode } from "react";
import {
  Boxes,
  Check,
  Layers3,
  RefreshCw,
  SlidersHorizontal,
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

const THEMES: { id: ThemeId; label: string }[] = [
  { id: "comic", label: "Comic" },
  { id: "retro", label: "Retro" },
  { id: "pop-art", label: "Pop Art" },
  { id: "manga", label: "Manga" },
  { id: "vintage", label: "Vintage" },
];

const BASIC_USAGE = `import { Button, ComixaProvider } from "comixa-ui";

export default function App() {
  return (
    <ComixaProvider theme="comic">
      <Button>Start adventure</Button>
    </ComixaProvider>
  );
}`;

const NESTED_PROVIDERS = `<ComixaProvider theme="comic">
  <Button>Comic button</Button>

  <ComixaProvider theme="manga">
    <Button>Manga button</Button>
  </ComixaProvider>
</ComixaProvider>`;

const DYNAMIC_THEME = `import { useState } from "react";
import { Button, ComixaProvider, type ComixaThemeName } from "comixa-ui";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<ComixaThemeName>("comic");

  return (
    <ComixaProvider theme={theme}>
      <Button onClick={() => setTheme("retro")}>
        Switch to Retro
      </Button>
    </ComixaProvider>
  );
}`;

const PROVIDER_PROPS = [
  {
    prop: "theme",
    type: '"comic" | "retro" | "pop-art" | "manga" | "vintage"',
    initial: '"comic"',
    description: "Visual system inherited by every nested Comixa component.",
  },
  {
    prop: "className",
    type: "string",
    initial: "—",
    description: "Optional classes applied to the provider scope element.",
  },
  {
    prop: "style",
    type: "React.CSSProperties",
    initial: "—",
    description: "Inline styles or CSS variable overrides for this scope.",
  },
  {
    prop: "children",
    type: "React.ReactNode",
    initial: "required",
    description: "Application or section content that receives the theme.",
  },
] as const;

export function ComixaProviderDocs() {
  const [theme, setTheme] = useState<ThemeId>("comic");

  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Theme Provider</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          ComixaProvider
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          ComixaProvider is the global configuration boundary for Comixa UI. It
          distributes a consistent theme to every component below it while still
          allowing individual sections to create their own visual scope.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <ReasonCard
          icon={SlidersHorizontal}
          title="One Configuration"
          body="Set the visual system once instead of passing theme props through every component."
        />
        <ReasonCard
          icon={Layers3}
          title="Inherited Tokens"
          body="Nested components receive the same colors, typography, borders, patterns, and shadows."
        />
        <ReasonCard
          icon={Boxes}
          title="Scoped Overrides"
          body="Create a nested provider when one route, panel, or feature needs a different theme."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle eyebrow="Quick start" title="Basic Usage" />
          <p className="pg-fg-muted leading-7">
            Place the provider near your application root. Comic is used when
            the theme prop is omitted, but setting it explicitly can make intent
            clear.
          </p>
          <CodeBlock code={BASIC_USAGE} />
        </div>
        <Card variant="default" padding="none">
          <CardHeader className="border-b-2 border-ink px-5 py-4">
            <CardTitle>Comic Provider</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ThemeProvider theme="comic">
              <div className="flex min-h-64 flex-col items-center justify-center gap-4 bg-paper p-8 text-center">
                <Badge variant="yellow">Global theme</Badge>
                <h3 className="font-comic text-2xl uppercase tracking-wide text-ink">
                  Ready for action
                </h3>
                <Button variant="primary">Start adventure</Button>
              </div>
            </ThemeProvider>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle eyebrow="API reference" title="Provider Props" />
        <div className="pg-surface pg-border overflow-x-auto rounded-xl border-2 shadow-comic-sm">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead className="pg-surface-muted font-comic uppercase tracking-wide">
              <tr>
                <th className="pg-border pg-fg border-b-2 px-4 py-3">Prop</th>
                <th className="pg-border pg-fg border-b-2 px-4 py-3">Type</th>
                <th className="pg-border pg-fg border-b-2 px-4 py-3">
                  Initial value
                </th>
                <th className="pg-border pg-fg border-b-2 px-4 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {PROVIDER_PROPS.map((row) => (
                <tr key={row.prop} className="align-top">
                  <td className="pg-fg border-b border-black/10 px-4 py-3 font-mono text-xs">
                    {row.prop}
                  </td>
                  <td className="pg-fg-muted border-b border-black/10 px-4 py-3 font-mono text-xs">
                    {row.type}
                  </td>
                  <td className="pg-fg-muted border-b border-black/10 px-4 py-3 font-mono text-xs">
                    {row.initial}
                  </td>
                  <td className="pg-fg-muted border-b border-black/10 px-4 py-3 leading-6">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle
            eyebrow="Scoped configuration"
            title="Nested Providers"
          />
          <p className="pg-fg-muted leading-7">
            A child provider overrides only its own subtree. When that subtree
            ends, components continue using the parent provider theme.
          </p>
          <CodeBlock code={NESTED_PROVIDERS} />
        </div>
        <ThemeProvider theme="comic">
          <div className="rounded-xl border-2 border-ink bg-paper p-5 shadow-comic-sm">
            <p className="mb-4 font-comic uppercase tracking-wide text-ink">
              Parent: Comic
            </p>
            <Button>Comic button</Button>
            <ThemeProvider theme="manga">
              <div className="mt-6 rounded-lg border-2 border-ink bg-paper p-5 shadow-comic-sm">
                <p className="mb-4 font-comic uppercase tracking-wide text-ink">
                  Child: Manga
                </p>
                <Button>Manga button</Button>
              </div>
            </ThemeProvider>
          </div>
        </ThemeProvider>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle eyebrow="React state" title="Dynamic Theme Switching" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Store the active theme in state and pass it to the provider. All
          nested Comixa components update together when the state changes.
        </p>
        <CodeBlock code={DYNAMIC_THEME} />
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

function ReasonCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Layers3;
  title: string;
  body: string;
}) {
  return (
    <Card variant="default" padding="none">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <span className="pg-surface-muted pg-border flex h-11 w-11 items-center justify-center rounded-lg border-2">
          <Icon
            className="pg-fg h-5 w-5"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
        <div>
          <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">
            {title}
          </h2>
          <p className="pg-fg-muted mt-2 text-sm leading-6">{body}</p>
        </div>
      </CardContent>
    </Card>
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
