import { useState } from "react";
import {
  Box,
  Check,
  CheckCircle2,
  Cloud,
  FileCheck2,
  Gauge,
  Globe2,
  KeyRound,
  Rocket,
  ServerCog,
  Terminal,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "comixa-ui";
import { CodeBlock } from "./DocPage";

const BUILD_COMMANDS = `npm run build
npm run preview`;

const VERCEL_CONFIG = `// vercel.json — SPA deep-link fallback
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`;

const NETLIFY_CONFIG = `# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200`;

const ENV_CODE = `# .env.production
VITE_SITE_URL=https://example.com
VITE_PUBLIC_ANALYTICS_ID=public-id

# Client usage
const siteUrl = import.meta.env.VITE_SITE_URL;`;

const VERCEL_STEPS = [
  "Push the project to GitHub, GitLab, or Bitbucket.",
  "In Vercel, choose Add New → Project and import the repository.",
  "Confirm the framework preset is Vite and the root directory points to this app.",
  "Use npm run build as the build command and dist as the output directory.",
  "Add production environment variables before the first production build.",
  "Deploy, open a nested URL such as /docs/deployment, and verify the SPA rewrite.",
] as const;

const NETLIFY_STEPS = [
  "Push the project to a supported Git provider and select Add new site → Import an existing project.",
  "Choose the repository and production branch.",
  "Use npm run build for the build command and dist for the publish directory.",
  "Add the SPA redirect in netlify.toml or public/_redirects so direct route visits do not return 404.",
  "Configure environment variables in Site configuration → Environment variables.",
  "Deploy and test the production URL, preview URL, assets, and nested documentation routes.",
] as const;

const CHECKLIST = [
  {
    id: "build",
    label: "Build passes",
    detail: "Run npm run build without TypeScript or bundler errors.",
  },
  {
    id: "console",
    label: "No console errors",
    detail:
      "Check initial load, navigation, dialogs, and interactive examples.",
  },
  {
    id: "metadata",
    label: "Metadata",
    detail:
      "Verify title, description, canonical URL, Open Graph, and social image.",
  },
  {
    id: "sitemap",
    label: "Sitemap",
    detail:
      "Confirm /sitemap.xml is public and contains canonical production routes.",
  },
  {
    id: "robots",
    label: "Robots",
    detail:
      "Confirm /robots.txt allows intended crawling and references the sitemap.",
  },
  {
    id: "lighthouse",
    label: "Lighthouse",
    detail:
      "Audit performance, accessibility, best practices, and SEO on production.",
  },
] as const;

export function DeploymentDocs() {
  const [checked, setChecked] = useState<Set<string>>(() => new Set());
  const progress = Math.round((checked.size / CHECKLIST.length) * 100);

  const toggle = (id: string) => {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Production</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Deployment
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Build Comixa as an optimized Vite application, publish the generated
          static assets, and validate routing, metadata, accessibility, and
          performance before directing production traffic to the site.
        </p>
      </header>

      <section className="">
        <div className="flex flex-col gap-4">
          <SectionTitle icon={Terminal} eyebrow="Step 01" title="Build" />
          <p className="pg-fg-muted leading-7">
            Vite writes the production bundle to{" "}
            <code className="pg-fg font-mono text-sm">dist</code>. Preview that
            output locally before deployment. The preview command is for
            verification, not a production server.
          </p>
          <div className="rounded-xl border-2 border-ink bg-comic-yellow p-5 text-ink shadow-comic-sm">
            <p className="font-comic uppercase tracking-wide">
              Expected output
            </p>
            <p className="mt-2 text-sm">
              dist/index.html, hashed JavaScript and CSS assets, plus files
              copied from public.
            </p>
          </div>
        </div>
      </section>
      <CodeBlock code={BUILD_COMMANDS} />

      <section className="grid gap-6 xl:grid-cols-2">
        <PlatformGuide
          icon={Rocket}
          title="Deploy to Vercel"
          steps={VERCEL_STEPS}
          href="https://vercel.com/docs/frameworks/frontend/vite"
          linkLabel="Vercel Vite guide"
        >
          <CodeBlock code={VERCEL_CONFIG} />
        </PlatformGuide>
        <PlatformGuide
          icon={Cloud}
          title="Deploy to Netlify"
          steps={NETLIFY_STEPS}
          href="https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/"
          linkLabel="Netlify Vite guide"
        >
          <CodeBlock code={NETLIFY_CONFIG} />
        </PlatformGuide>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card variant="default" padding="none">
          <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
            <Box
              className="pg-fg h-5 w-5"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <CardTitle>Static Export</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-5">
            <p className="pg-fg-muted text-sm leading-6">
              This Vite app already produces a static deployment: the complete
              <code className="pg-fg mx-1 font-mono">dist</code> directory can
              be uploaded to any static host or CDN. No additional export
              command is required.
            </p>
            <p className="pg-fg-muted text-sm leading-6">
              Because navigation uses browser history, the host must return
              <code className="pg-fg mx-1 font-mono">index.html</code> for
              unknown application routes. Without that rewrite, refreshing a
              nested route can return 404.
            </p>
            <a
              href="https://vite.dev/guide/static-deploy.html"
              target="_blank"
              rel="noreferrer"
              className="pg-fg mt-auto font-comic text-sm uppercase underline underline-offset-4"
            >
              Vite static deployment guide →
            </a>
          </CardContent>
        </Card>

        <Card variant="default" padding="none">
          <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
            <KeyRound
              className="pg-fg h-5 w-5"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <CardTitle>Environment Variables</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-5">
            <p className="pg-fg-muted text-sm leading-6">
              Environment variables are optional unless the app needs
              deployment-specific public configuration. Vite exposes variables
              prefixed with
              <code className="pg-fg mx-1 font-mono">VITE_</code> to browser
              code at build time.
            </p>
            <div className="rounded-lg border-2 border-comic-red bg-comic-red/10 p-3">
              <p className="pg-fg text-sm font-semibold">
                Never place secrets in VITE_ variables.
              </p>
              <p className="pg-fg-muted mt-1 text-xs leading-5">
                They are bundled into client assets and can be read by users.
                Keep secret keys in server-side functions.
              </p>
            </div>
            <CodeBlock code={ENV_CODE} />
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle
            icon={FileCheck2}
            eyebrow="Before launch"
            title="Production Checklist"
          />
          <Badge variant={progress === 100 ? "green" : "yellow"}>
            {progress}% complete
          </Badge>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {CHECKLIST.map((item) => {
            const complete = checked.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggle(item.id)}
                aria-pressed={complete}
                className="h-full text-left"
              >
                <Card
                  variant="default"
                  padding="none"
                  className={`h-full transition-transform hover:-translate-y-0.5 ${complete ? "ring-4 ring-comic-green ring-offset-2" : ""}`}
                >
                  <CardContent className="flex h-full gap-3 p-5">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded border-2 border-ink ${complete ? "bg-comic-green" : "pg-surface-muted"}`}
                    >
                      {complete ? (
                        <Check
                          className="h-5 w-5"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      ) : null}
                    </span>
                    <div>
                      <h3 className="pg-fg font-comic text-base uppercase tracking-wide">
                        {item.label}
                      </h3>
                      <p className="pg-fg-muted mt-1 text-sm leading-6">
                        {item.detail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
        {progress === 100 ? (
          <div className="flex items-center gap-3 rounded-xl border-2 border-ink bg-comic-green p-5 text-ink shadow-comic-sm">
            <CheckCircle2
              className="h-6 w-6 shrink-0"
              strokeWidth={3}
              aria-hidden="true"
            />
            <div>
              <p className="font-comic text-lg uppercase tracking-wide">
                Ready to launch
              </p>
              <p className="text-sm">
                All production checks are marked complete.
              </p>
            </div>
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <MiniCard
          icon={Globe2}
          title="Deep Links"
          body="Open nested routes directly after deployment."
        />
        <MiniCard
          icon={ServerCog}
          title="Cache Assets"
          body="Cache hashed assets aggressively; revalidate HTML."
        />
        <MiniCard
          icon={Gauge}
          title="Measure Production"
          body="Run Lighthouse against the deployed URL."
        />
      </section>
    </article>
  );
}

function PlatformGuide({
  icon: Icon,
  title,
  steps,
  href,
  linkLabel,
  children,
}: {
  icon: typeof Rocket;
  title: string;
  steps: readonly string[];
  href: string;
  linkLabel: string;
  children: React.ReactNode;
}) {
  return (
    <Card variant="default" padding="none">
      <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
        <Icon className="pg-fg h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 p-5">
        <ol className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-comic-yellow font-comic text-xs text-ink">
                {index + 1}
              </span>
              <p className="pg-fg-muted pt-0.5 text-sm leading-6">{step}</p>
            </li>
          ))}
        </ol>
        {children}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="pg-fg font-comic text-sm uppercase underline underline-offset-4"
        >
          {linkLabel} →
        </a>
      </CardContent>
    </Card>
  );
}

function MiniCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Globe2;
  title: string;
  body: string;
}) {
  return (
    <Card variant="default" padding="none">
      <CardContent className="flex h-full items-start gap-3 p-5">
        <Icon
          className="pg-fg mt-0.5 h-5 w-5 shrink-0"
          strokeWidth={2.5}
          aria-hidden="true"
        />
        <div>
          <h3 className="pg-fg font-comic uppercase tracking-wide">{title}</h3>
          <p className="pg-fg-muted mt-1 text-sm leading-6">{body}</p>
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
  icon: typeof Terminal;
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
