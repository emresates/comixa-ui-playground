import { useEffect, type ReactNode } from "react";
import { Badge, Button, Card, CardContent } from "comixa-ui";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock3, X } from "lucide-react";
import { SITE_URL } from "../seo";

const TITLE = "CSS vs React UI Components: Which Should You Choose?";
const DESCRIPTION =
  "Should you build every UI component with CSS or use a React UI library? Learn the pros, cons, and when each approach makes sense.";
const SLUG = "/blog/css-vs-react-ui-components";

const CONTENTS = [
  ["building-with-css", "Building Everything with CSS"],
  ["react-ui-components", "Using React UI Components"],
  ["choose-css", "When CSS Is the Better Choice"],
  ["choose-library", "When a UI Library Is Better"],
  ["balance", "Finding the Right Balance"],
  ["comixa-ui", "How Comixa UI Fits In"],
  ["final-thoughts", "Final Thoughts"],
] as const;

function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t-2 border-ink/20 pt-10">
      <h2 className="font-comic text-4xl uppercase leading-none md:text-5xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base font-medium leading-8 text-ink/75">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-2 pl-6">
      {items.map((item) => (
        <li key={item} className="list-disc marker:text-comic-red">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ChoiceList({
  title,
  items,
  positive,
}: {
  title: string;
  items: readonly string[];
  positive: boolean;
}) {
  const Icon = positive ? Check : X;

  return (
    <Card variant="default" className={positive ? "bg-comic-yellow/40" : "bg-comic-red/10"}>
      <CardContent className="p-5">
        <h3 className="font-comic text-2xl uppercase text-ink">{title}</h3>
        <ul className="mt-4 grid gap-3 text-sm font-bold text-ink/70">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Icon
                className={`mt-0.5 h-4 w-4 shrink-0 ${positive ? "text-ink" : "text-comic-red"}`}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function CssVsReactUiComponents() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      description: DESCRIPTION,
      image: [`${SITE_URL}/logo.png`],
      datePublished: "2026-07-22T15:00:00+03:00",
      dateModified: "2026-07-22T15:00:00+03:00",
      author: { "@type": "Organization", name: "Comixa UI", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Comixa UI", url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${SLUG}` },
      keywords: [
        "React UI components",
        "CSS components",
        "React component library",
        "React UI library",
        "reusable React components",
        "frontend components",
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.comixaBlogPosting = "true";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <article className="pg-surface min-h-full pg-fg">
      <header className="pg-border relative overflow-hidden border-b-4 px-5 py-14 md:px-10 md:py-20">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#1a1a1a_1.5px,transparent_1.5px)] [background-size:18px_18px]" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rotate-12 border-[20px] border-comic-blue opacity-40" />
        <div className="relative mx-auto max-w-5xl">
          <a
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-comic uppercase tracking-wide hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </a>
          <Badge variant="blue">Frontend guide</Badge>
          <h1 className="mt-6 font-comic text-6xl uppercase leading-[.84] tracking-wide md:text-8xl">
            {TITLE}
          </h1>
          <p className="pg-fg-muted mt-7 max-w-3xl text-lg font-bold leading-relaxed md:text-xl">
            Compare custom CSS and reusable React UI components, then choose the
            approach that fits your project, timeline, and design goals.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-bold uppercase tracking-wider opacity-60">
            <span>Comixa UI Team</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              July 22, 2026
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-4 w-4" />4 min read
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-10 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:py-16">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <Card variant="default">
            <CardContent className="p-5">
              <p className="font-comic text-xl uppercase">Table of contents</p>
              <nav className="mt-4 grid gap-2 text-sm font-bold" aria-label="Article sections">
                {CONTENTS.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="rounded-md px-2 py-1.5 text-ink/65 hover:bg-comic-yellow hover:text-ink"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </aside>

        <main className="min-w-0 space-y-12">
          <div className="space-y-5 text-lg font-medium leading-8 text-ink/75">
            <p>Every frontend developer faces the same question at some point:</p>
            <p className="border-l-4 border-comic-blue pl-6 font-comic text-3xl uppercase leading-tight text-ink">
              Should I build every component with CSS, or should I use a React
              UI library?
            </p>
            <p>
              The answer depends on your project, timeline, and design
              requirements. Both approaches have advantages, and understanding
              when to use each one can save hours of development time.
            </p>
          </div>

          <ArticleSection id="building-with-css" title="Building Everything with CSS">
            <p>
              Creating components from scratch gives you complete control. You
              decide how every button, card, modal, and navigation bar looks and
              behaves.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ChoiceList
                title="Advantages"
                positive
                items={[
                  "Full design freedom",
                  "No external dependencies",
                  "Smaller bundle size in some cases",
                ]}
              />
              <ChoiceList
                title="Drawbacks"
                positive={false}
                items={[
                  "More development time",
                  "Repeated styling",
                  "Harder to maintain consistency",
                ]}
              />
            </div>
            <p>For small personal projects, this approach often works well.</p>
          </ArticleSection>

          <ArticleSection id="react-ui-components" title="Using React UI Components">
            <p>
              A React UI library provides reusable components that solve common
              interface problems. Instead of creating every element yourself,
              you can focus on building your product.
            </p>
            <p>Typical components include:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Buttons",
                "Cards",
                "Hero sections",
                "Navigation bars",
                "Pricing sections",
                "FAQ accordions",
                "Forms",
                "Footers",
              ].map((item) => (
                <Badge key={item} variant="blue">{item}</Badge>
              ))}
            </div>
            <p>This can significantly speed up development.</p>
          </ArticleSection>

          <ArticleSection id="choose-css" title="When CSS Is the Better Choice">
            <p>Building components manually makes sense if:</p>
            <BulletList
              items={[
                "You're learning CSS",
                "You need complete design freedom",
                "Your project is very small",
                "You only need a few components",
              ]}
            />
            <p>
              In these cases, writing your own CSS is often the simplest
              solution.
            </p>
          </ArticleSection>

          <ArticleSection id="choose-library" title="When a UI Library Is the Better Choice">
            <p>A React UI library is usually a better fit when:</p>
            <BulletList
              items={[
                "You're building a production application",
                "You need reusable components",
                "Multiple developers are working on the project",
                "Consistency is important",
                "You want faster development",
              ]}
            />
            <p>
              Reusable components also reduce duplicated code across pages.
            </p>
          </ArticleSection>

          <ArticleSection id="balance" title="Finding the Right Balance">
            <p>
              Using a UI library doesn&apos;t mean giving up customization. Many
              developers combine both approaches:
            </p>
            <ol className="grid gap-3">
              {[
                "Use reusable components for common UI.",
                "Add custom CSS where unique branding is needed.",
              ].map((item, index) => (
                <li key={item} className="flex items-center gap-3 font-bold text-ink">
                  <span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-ink bg-comic-yellow font-comic">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p>
              This keeps development fast while allowing your website to have
              its own identity.
            </p>
          </ArticleSection>

          <ArticleSection id="comixa-ui" title="How Comixa UI Fits In">
            <p>
              Comixa UI is designed for developers building creative React
              websites.
            </p>
            <p>
              Instead of only providing basic UI elements, it also includes
              complete landing page sections and multiple visual themes, making
              it easier to build expressive interfaces without starting from
              scratch.
            </p>
            <p>
              If your project needs a distinctive visual style, reusable
              components can help you spend less time rebuilding the same
              layouts and more time focusing on your content.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => { window.location.href = "/components"; }}>
                Explore components <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => { window.location.href = "/playground"; }}>
                Open Playground
              </Button>
            </div>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <p>
              There is no universal winner between CSS and React UI components.
            </p>
            <p>
              If you&apos;re learning or building something simple, writing your
              own CSS can be a great exercise.
            </p>
            <p>
              If you&apos;re developing a larger application or marketing
              website, reusable React components can improve consistency, speed
              up development, and simplify maintenance.
            </p>
            <p className="font-bold text-ink">
              The best approach is often a combination of both.
            </p>
          </ArticleSection>

          <section className="border-4 border-ink bg-comic-yellow p-7 text-ink shadow-comic-lg">
            <h2 className="font-comic text-5xl uppercase leading-none">
              Start reusable. Customize where it counts.
            </h2>
            <p className="mt-4 max-w-2xl font-bold leading-relaxed">
              Build common interface patterns faster, then use custom CSS to
              make the experience unmistakably yours.
            </p>
            <Button className="mt-6" onClick={() => { window.location.href = "/docs/getting-started"; }}>
              Get started with Comixa UI
            </Button>
          </section>
        </main>
      </div>
    </article>
  );
}
