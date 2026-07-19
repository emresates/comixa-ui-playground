import {
  AlertTriangle,
  Box,
  CheckCircle2,
  FileCode2,
  PackagePlus,
  Paintbrush,
  Puzzle,
  ShieldCheck,
} from "lucide-react";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle, ComixaProvider } from "comixa-ui";
import { CodeBlock } from "./DocPage";

const INSTALL = `npm install comixa-ui`;
const PEERS = `npm install react react-dom tailwindcss`;
const TAILWIND_CONFIG = `// tailwind.config.js
const comixaPreset = require("comixa-ui/preset");

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [comixaPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/comixa-ui/dist/**/*.{js,mjs,cjs}",
  ],
  theme: { extend: {} },
  plugins: [],
};`;
const GLOBAL_STYLES = `/* app/globals.css or src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`;
const OPTIONAL_STYLE_IMPORT = `import "comixa-ui/styles.css";`;
const VERIFY = `import { Button, ComixaProvider } from "comixa-ui";

export default function App() {
  return (
    <ComixaProvider>
      <Button>Hello</Button>
    </ComixaProvider>
  );
}`;

const TROUBLESHOOTING = [
  {
    icon: Box,
    title: "Module not found",
    body: "Confirm comixa-ui is listed in package.json, reinstall dependencies, and restart the development server. In a monorepo, install it in the app package that imports it.",
    command: "npm install comixa-ui",
  },
  {
    icon: Paintbrush,
    title: "CSS missing",
    body: "Make sure the Comixa preset is enabled and the package dist path is included in Tailwind content. Then restart Tailwind so its generated utilities include Comixa classes.",
    command: '"./node_modules/comixa-ui/dist/**/*.{js,mjs,cjs}"',
  },
  {
    icon: Puzzle,
    title: "Provider missing",
    body: "Wrap the part of your application that uses Comixa components with ComixaProvider. The provider supplies theme tokens inherited by all nested components.",
    command: '<ComixaProvider>...</ComixaProvider>',
  },
] as const;

export function InstallationDocs() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Setup Guide</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Installation
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Install Comixa UI, connect its Tailwind preset, and render your first
          themed component in a few steps.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-2">
        <SetupCard icon={PackagePlus} step="01" title="Install">
          <p className="pg-fg-muted text-sm">Add Comixa UI to your application.</p>
          <CodeBlock code={INSTALL} />
        </SetupCard>
        <SetupCard icon={ShieldCheck} step="02" title="Peer Dependencies">
          <p className="pg-fg-muted text-sm">
            Comixa UI supports React 18 and 19 with Tailwind CSS 3.4 or 4.
          </p>
          <CodeBlock code={PEERS} />
        </SetupCard>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={FileCode2} eyebrow="Step 03" title="Tailwind Setup" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Add the Comixa preset and scan the package distribution. The package
          content path is required so Tailwind keeps the utility classes used by
          Comixa components.
        </p>
        <CodeBlock code={TAILWIND_CONFIG} />
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={Paintbrush} eyebrow="Step 04" title="Import Styles" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Import your global Tailwind stylesheet once from the root layout or
          application entry point.
        </p>
        <CodeBlock code={GLOBAL_STYLES} />
        <Card variant="default" padding="none">
          <CardContent className="flex gap-3 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-comic-red" aria-hidden="true" />
            <div className="min-w-0 space-y-2">
              <p className="pg-fg font-semibold">Version note</p>
              <p className="pg-fg-muted text-sm leading-6">
                Some distributions may document the import below. The current
                package version does not export this path; use the Tailwind preset
                setup above unless your installed version explicitly provides it.
              </p>
              <code className="pg-surface-muted pg-fg block overflow-x-auto rounded-lg border border-black/15 px-3 py-2 font-mono text-xs">
                {OPTIONAL_STYLE_IMPORT}
              </code>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={CheckCircle2} eyebrow="Step 05" title="Verify Installation" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Render a button inside the provider. If the ink border, theme colors,
          and hard shadow appear, the installation is working.
        </p>
        <CodeBlock code={VERIFY} />
        <Card variant="default" padding="none">
          <CardContent className="flex min-h-32 items-center justify-center p-6">
            <ComixaProvider>
              <Button>Hello</Button>
            </ComixaProvider>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeading icon={AlertTriangle} eyebrow="Common fixes" title="Troubleshooting" />
        <div className="grid gap-4 lg:grid-cols-3">
          {TROUBLESHOOTING.map(({ icon: Icon, title, body, command }) => (
            <Card key={title} variant="default" padding="none">
              <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
                <Icon className="pg-fg h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 p-5">
                <p className="pg-fg-muted text-sm leading-6">{body}</p>
                <code className="pg-surface-muted pg-fg mt-auto overflow-x-auto rounded-lg border border-black/15 p-3 font-mono text-xs">
                  {command}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </article>
  );
}

function SetupCard({ icon: Icon, step, title, children }: { icon: typeof PackagePlus; step: string; title: string; children: React.ReactNode }) {
  return (
    <Card variant="default" padding="none">
      <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
        <span className="pg-surface-muted pg-border flex h-10 w-10 items-center justify-center rounded-lg border-2">
          <Icon className="pg-fg h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        </span>
        <div>
          <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">Step {step}</p>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-5">{children}</CardContent>
    </Card>
  );
}

function SectionHeading({ icon: Icon, eyebrow, title }: { icon: typeof PackagePlus; eyebrow: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="pg-surface-muted pg-border flex h-11 w-11 items-center justify-center rounded-lg border-2">
        <Icon className="pg-fg h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <div>
        <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">{eyebrow}</p>
        <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">{title}</h2>
      </div>
    </div>
  );
}
