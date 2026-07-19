import { Badge, Card, CardContent, CardHeader, CardTitle } from "comixa-ui";
import {
  Accessibility,
  Layers3,
  MousePointer2,
  Palette,
  Smartphone,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { CodeBlock } from "./DocPage";

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: Palette, label: "5 built-in themes" },
  { icon: Zap, label: "Built with React & TypeScript" },
  { icon: Smartphone, label: "Fully responsive" },
  { icon: Accessibility, label: "Accessible components" },
  { icon: Layers3, label: "Theme Provider" },
  { icon: MousePointer2, label: "Cursor interactions" },
  { icon: Sparkles, label: "Motion support" },
];

const REQUIREMENTS = ["React 18+", "Next.js 15+", "TypeScript", "Tailwind CSS"];

const NEXT_STEPS = [
  {
    title: "Installation",
    description: "Install Comixa UI and configure the styles in your project.",
    href: "/docs/installation",
  },
  {
    title: "Components",
    description: "Explore the component collection and copy-ready examples.",
    href: "/components/button",
  },
  {
    title: "Themes",
    description: "Learn how to switch and customize Comixa themes.",
    href: "/docs/theming",
  },
] as const;

const FIRST_COMPONENT = `import { Button } from "comixa-ui";

export default function Example() {
  return <Button>Click me</Button>;
}`;

export function GettingStartedDocs() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Getting Started</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Welcome to Comixa UI
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Comixa UI is a React component library designed around comic-inspired
          interfaces. It provides reusable components, multiple visual themes,
          and a consistent design system for building expressive websites.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <div>
          <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
            What you get
          </p>
          <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
            Features
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map(({ icon: Icon, label }) => (
            <Card key={label} variant="default" padding="none">
              <CardContent className="flex items-center gap-3 p-4">
                <span
                  className="pg-border pg-surface-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2"
                  aria-hidden="true"
                >
                  <Icon className="pg-fg h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="pg-fg font-medium">{label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
        <Card variant="default" padding="none">
          <CardHeader className="border-b-2 border-ink px-5 py-4">
            <CardTitle>Requirements</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <ul className="flex flex-col gap-3">
              {REQUIREMENTS.map((requirement) => (
                <li key={requirement} className="pg-fg flex items-center gap-3">
                  <span
                    className="h-3 w-3 shrink-0 rotate-45 border-2 border-ink bg-comic-yellow"
                    aria-hidden="true"
                  />
                  {requirement}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex min-w-0 flex-col gap-3">
          <div>
            <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
              Your First Component
            </h2>
            <p className="pg-fg-muted mt-1 text-sm">
              Import a component from the package and use it directly in your
              React component.
            </p>
          </div>
          <CodeBlock code={FIRST_COMPONENT} />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div>
          <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
            Keep building
          </p>
          <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
            Next Steps
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {NEXT_STEPS.map((item) => (
            <a key={item.title} href={item.href} className="group block">
              <Card
                variant="default"
                padding="none"
                className="h-full transition-transform group-hover:-translate-y-1"
              >
                <CardContent className="flex h-full flex-col gap-3 p-5">
                  <h3 className="pg-fg font-comic text-lg uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="pg-fg-muted flex-1 text-sm leading-6">
                    {item.description}
                  </p>
                  <span className="pg-fg font-comic text-sm uppercase">
                    {item.title} →
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
