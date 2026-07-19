import {
  Accessibility,
  Check,
  Contrast,
  Eye,
  FolderTree,
  Gauge,
  Keyboard,
  PackageOpen,
  Split,
  X,
  Zap,
} from "lucide-react";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "comixa-ui";
import { CodeBlock } from "./DocPage";

const DO_ITEMS = [
  [
    "Keep one theme per page",
    "Use a consistent visual world for the main route. Scope exceptions to intentional previews or embedded experiences.",
  ],
  [
    "Use spacing consistently",
    "Choose a small spacing scale and repeat it across sections, cards, controls, and content groups.",
  ],
  [
    "Prefer semantic colors",
    "Use primary, success, warning, and danger roles so meaning survives theme changes.",
  ],
] as const;

const DONT_ITEMS = [
  [
    "Mix every animation",
    "Choose motion that explains the current change instead of combining multiple effects on one interaction.",
  ],
  [
    "Use every font together",
    "Keep display and body typography roles predictable. Too many typefaces weaken hierarchy.",
  ],
  [
    "Stack shadows excessively",
    "Hard shadows are expressive; layering several on one surface reduces clarity and can hurt performance.",
  ],
] as const;

const ACCESSIBILITY = [
  {
    icon: Keyboard,
    title: "Keyboard",
    body: "Keep every interactive control reachable in a logical tab order. Use native buttons and links, and test menus, dialogs, and forms without a pointer.",
  },
  {
    icon: Eye,
    title: "Focus",
    body: "Preserve visible focus indicators. Custom cursor and hover effects must never replace keyboard focus feedback.",
  },
  {
    icon: Contrast,
    title: "Contrast",
    body: "Check text, borders, states, and focus rings against every active theme. Semantic colors still need sufficient contrast in their final context.",
  },
] as const;

const PERFORMANCE = [
  {
    icon: PackageOpen,
    title: "Tree Shaking",
    body: "Import named components from comixa-ui. The package ships ESM and is marked side-effect free so unused exports can be removed by modern bundlers.",
    code: 'import { Button } from "comixa-ui";',
  },
  {
    icon: Split,
    title: "Dynamic Import",
    body: "Split large optional experiences such as editors, galleries, and dashboards at the route or feature boundary.",
    code: 'const Editor = lazy(() => import("./Editor"));',
  },
  {
    icon: Zap,
    title: "Lazy Loading",
    body: "Defer below-the-fold media and expensive client components, but keep primary content and critical controls immediately available.",
    code: '<img loading="lazy" alt="Comic panel" />',
  },
] as const;

const FOLDER_STRUCTURE = `app/
├── layout.tsx          # ComixaProvider and global styles
├── page.tsx            # Route composition
└── examples/
    └── page.tsx

components/
├── ui/                 # Reusable Comixa compositions
├── sections/           # Page-level sections
└── theme-switcher.tsx

lib/
├── themes.ts           # Custom token maps
└── utils.ts

styles/
├── globals.css         # Tailwind directives
└── tokens.css          # Brand token overrides`;

export function BestPracticesDocs() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Production Guide</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Best Practices
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Keep expressive interfaces coherent, accessible, and fast by applying
          a small set of repeatable rules across themes, components, and routes.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <PracticeList title="Do" icon={Check} items={DO_ITEMS} positive />
        <PracticeList title="Don't" icon={X} items={DONT_ITEMS} />
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle
          icon={Accessibility}
          eyebrow="Inclusive by design"
          title="Accessibility"
        />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Component accessibility is a starting point. The finished application
          must also provide meaningful labels, correct content order, readable
          contrast, and complete keyboard workflows.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {ACCESSIBILITY.map(({ icon: Icon, title, body }) => (
            <InfoCard key={title} icon={Icon} title={title} body={body} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle
          icon={Gauge}
          eyebrow="Ship less JavaScript"
          title="Performance"
        />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Optimize at feature boundaries. Measure real routes first, then split
          work that is large, optional, or not needed for the initial
          interaction.
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
          {PERFORMANCE.map(({ icon: Icon, title, body, code }) => (
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
                <code className="pg-surface-muted pg-fg mt-auto overflow-x-auto rounded-lg border border-black/15 p-3 font-mono text-xs">
                  {code}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.75fr_1.5fr]">
        <div className="flex flex-col gap-4">
          <SectionTitle
            icon={FolderTree}
            eyebrow="Project organization"
            title="Recommended Folder Structure"
          />
          <p className="pg-fg-muted leading-7">
            Separate reusable UI compositions from route content, theme tokens,
            and global styles. This keeps provider setup discoverable and
            prevents page-specific code from leaking into shared primitives.
          </p>
          <div className="rounded-xl border-2 border-ink bg-comic-yellow p-5 text-ink shadow-comic-sm">
            <p className="font-comic uppercase tracking-wide">
              Guideline, not a requirement
            </p>
            <p className="mt-2 text-sm leading-6">
              Adapt the structure to your framework and team while preserving
              clear ownership.
            </p>
          </div>
        </div>
        <CodeBlock code={FOLDER_STRUCTURE} />
      </section>
    </article>
  );
}

function PracticeList({
  title,
  icon: Icon,
  items,
  positive = false,
}: {
  title: string;
  icon: typeof Check;
  items: readonly (readonly [string, string])[];
  positive?: boolean;
}) {
  return (
    <Card variant="default" padding="none">
      <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink ${positive ? "bg-comic-green" : "bg-comic-red text-white"}`}
        >
          <Icon className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
        </span>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-5">
        <ul className="flex flex-col gap-5">
          {items.map(([heading, body]) => (
            <li key={heading} className="flex gap-3">
              <Icon
                className={`mt-0.5 h-5 w-5 shrink-0 ${positive ? "text-comic-green" : "text-comic-red"}`}
                strokeWidth={3}
                aria-hidden="true"
              />
              <div>
                <h3 className="pg-fg font-semibold">{heading}</h3>
                <p className="pg-fg-muted mt-1 text-sm leading-6">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Keyboard;
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
          <h3 className="pg-fg font-comic text-lg uppercase tracking-wide">
            {title}
          </h3>
          <p className="pg-fg-muted mt-2 text-sm leading-6">{body}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function SectionTitle({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Accessibility;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="pg-surface-muted pg-border flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2">
        <Icon className="pg-fg h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <div>
        <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
          {eyebrow}
        </p>
        <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
}
