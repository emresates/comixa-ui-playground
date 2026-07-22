import { useEffect, type ReactNode } from "react";
import { Badge, Button, Card, CardContent } from "comixa-ui";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock3, X } from "lucide-react";
import { SITE_URL } from "../seo";

const TITLE = "React Hero Section Best Practices (2026)";
const DESCRIPTION =
  "Learn how to design a high-converting React hero section with better headlines, CTAs, layout, accessibility, and responsive design.";
const SLUG = "/blog/react-hero-section-best-practices";

const CONTENTS = [
  ["clear-headline", "Write a Clear Headline"],
  ["primary-cta", "Keep One Primary CTA"],
  ["keep-it-focused", "Don't Overload the Hero"],
  ["mobile", "Optimize for Mobile"],
  ["visual-hierarchy", "Use Strong Visual Hierarchy"],
  ["social-proof", "Add Social Proof"],
  ["accessibility", "Make It Accessible"],
  ["build-with-comixa", "Build Faster with Comixa UI"],
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

export function ReactHeroSectionBestPractices() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      description: DESCRIPTION,
      image: [`${SITE_URL}/logo.png`],
      datePublished: "2026-07-22T12:00:00+03:00",
      dateModified: "2026-07-22T12:00:00+03:00",
      author: { "@type": "Organization", name: "Comixa UI", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Comixa UI", url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${SLUG}` },
      keywords: [
        "react hero section",
        "hero section react",
        "landing page hero",
        "react landing page",
        "hero section best practices",
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
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rotate-12 border-[18px] border-comic-yellow opacity-70" />
        <div className="relative mx-auto max-w-5xl">
          <a
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-comic uppercase tracking-wide hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </a>
          <Badge variant="red">React best practices</Badge>
          <h1 className="mt-6 font-comic text-6xl uppercase leading-[.84] tracking-wide md:text-8xl">
            {TITLE}
          </h1>
          <p className="pg-fg-muted mt-7 max-w-3xl text-lg font-bold leading-relaxed md:text-xl">
            Design a high-converting React hero section with a clearer message,
            focused calls to action, responsive layout, and accessible content.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-bold uppercase tracking-wider opacity-60">
            <span>Comixa UI Team</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              July 22, 2026
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-4 w-4" />5 min read
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
            <p>
              The hero section is the first thing visitors see when they land
              on your website.
            </p>
            <p>It has only a few seconds to answer three important questions:</p>
            <ul className="grid gap-3 border-l-4 border-comic-blue pl-6 font-bold text-ink">
              <li>What is this?</li>
              <li>Why should I care?</li>
              <li>What should I do next?</li>
            </ul>
            <p>
              A beautiful hero section isn&apos;t enough. It should communicate
              value immediately and guide visitors toward a clear action.
            </p>
            <p>
              Here are some best practices for building an effective React hero
              section.
            </p>
          </div>

          <ArticleSection id="clear-headline" title="1. Write a Clear Headline">
            <p>
              Your headline should explain the main benefit of your product
              instead of simply describing it. Focus on outcomes rather than
              features.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card variant="default" className="bg-comic-red/10">
                <CardContent className="p-5">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-comic-red">
                    <X className="h-4 w-4" /> Bad
                  </p>
                  <p className="mt-3 font-comic text-3xl uppercase text-ink">
                    React Component Library
                  </p>
                </CardContent>
              </Card>
              <Card variant="default" className="bg-comic-yellow">
                <CardContent className="p-5">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink/65">
                    <Check className="h-4 w-4" /> Better
                  </p>
                  <p className="mt-3 font-comic text-3xl uppercase text-ink">
                    Build Bold React Websites in Minutes
                  </p>
                </CardContent>
              </Card>
            </div>
          </ArticleSection>

          <ArticleSection id="primary-cta" title="2. Keep One Primary CTA">
            <p>
              Too many buttons create confusion. A hero section should usually
              have one primary button and one secondary action.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">Start Building</Button>
              <Button size="lg" variant="outline">View Documentation</Button>
            </div>
            <p>This makes the next step obvious.</p>
          </ArticleSection>

          <ArticleSection id="keep-it-focused" title="3. Don't Overload the Hero">
            <p>
              Avoid adding too many elements at once. Keep only what&apos;s
              necessary:
            </p>
            <BulletList
              items={[
                "Headline",
                "Description",
                "CTA",
                "Product preview",
                "Small trust indicators",
              ]}
            />
            <p>A cleaner hero is easier to scan.</p>
          </ArticleSection>

          <ArticleSection id="mobile" title="4. Optimize for Mobile">
            <p>
              Large desktop layouts rarely work on phones without adjustments.
              For mobile:
            </p>
            <BulletList
              items={[
                "Reduce headline length",
                "Stack content vertically",
                "Keep buttons full width",
                "Avoid oversized illustrations",
              ]}
            />
            <p>Always test the first screen on a real device.</p>
          </ArticleSection>

          <ArticleSection id="visual-hierarchy" title="5. Use Strong Visual Hierarchy">
            <p>
              Visitors should instantly know where to look. A simple hierarchy
              is:
            </p>
            <ol className="grid gap-3">
              {["Headline", "CTA", "Description", "Product preview"].map(
                (item, index) => (
                  <li key={item} className="flex items-center gap-3 font-bold text-ink">
                    <span className="grid h-8 w-8 shrink-0 place-items-center border-2 border-ink bg-comic-yellow font-comic">
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ol>
            <p>
              Decorative elements should support the content, not compete with
              it.
            </p>
          </ArticleSection>

          <ArticleSection id="social-proof" title="6. Add Social Proof">
            <p>
              Small trust signals can improve credibility. Keep them short and
              close to the CTA.
            </p>
            <div className="flex flex-wrap gap-2">
              {["⭐ 1,000+ developers", "Open Source", "MIT Licensed", "Built with React"].map(
                (item) => (
                  <Badge key={item} variant="blue">{item}</Badge>
                ),
              )}
            </div>
          </ArticleSection>

          <ArticleSection id="accessibility" title="7. Make It Accessible">
            <p>A hero section should also be usable. Remember to:</p>
            <BulletList
              items={[
                "Use one <h1>",
                "Add descriptive button labels",
                "Maintain good color contrast",
                "Use meaningful alt text for images",
              ]}
            />
            <p>Accessibility improves both usability and SEO.</p>
          </ArticleSection>

          <ArticleSection id="build-with-comixa" title="Build Faster with Comixa UI">
            <p>
              Instead of building a hero section from scratch, Comixa UI
              provides reusable Hero components designed for creative React
              websites.
            </p>
            <p>
              You can customize typography, themes, layouts, and call-to-action
              sections while keeping the code clean and reusable.
            </p>
            <p>
              Explore the Hero component, browse examples, or experiment in the
              Playground to create your own landing page.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => { window.location.href = "/components/comic-page"; }}>
                Explore Hero <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => { window.location.href = "/examples"; }}>
                Browse examples
              </Button>
              <Button variant="outline" onClick={() => { window.location.href = "/playground"; }}>
                Open Playground
              </Button>
            </div>
          </ArticleSection>

          <ArticleSection id="final-thoughts" title="Final Thoughts">
            <p>A hero section doesn&apos;t need to be complicated.</p>
            <p>
              A clear message, one strong CTA, responsive layout, and good
              visual hierarchy are often more effective than complex animations
              or oversized graphics.
            </p>
            <p>
              Whether you&apos;re building a SaaS product, portfolio, or
              comic-inspired landing page, the same principles apply:
              communicate value quickly and make the next action obvious.
            </p>
          </ArticleSection>

          <section className="border-4 border-ink bg-comic-yellow p-7 text-ink shadow-comic-lg">
            <h2 className="font-comic text-5xl uppercase leading-none">
              Build a hero that earns the next click.
            </h2>
            <p className="mt-4 max-w-2xl font-bold leading-relaxed">
              Start with a clear message, focus the action, and test the first
              screen at every breakpoint.
            </p>
            <Button className="mt-6" onClick={() => { window.location.href = "/playground"; }}>
              Build in Playground
            </Button>
          </section>
        </main>
      </div>
    </article>
  );
}
