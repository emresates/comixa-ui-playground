import { useEffect, type ReactNode } from "react";
import { Badge, Button, Card, CardContent } from "comixa-ui";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { SITE_URL } from "../seo";

const TITLE = "How to Build a Comic Website in React with Comixa UI";
const DESCRIPTION =
  "Learn how to build a responsive comic website in React with Comixa UI. Add comic sections, bold themes, animations, halftone patterns, and reusable components.";
const SLUG = "/blog/how-to-build-a-comic-website-in-react-with-comixa-ui";

const CONTENTS = [
  ["what-is-a-comic-website", "What Is a Comic Website?"],
  ["why-comixa", "Why Use Comixa UI?"],
  ["create-project", "Create a React Project"],
  ["install", "Install Comixa UI"],
  ["provider", "Set Up ComixaProvider"],
  ["page-sections", "Build the Page Sections"],
  ["themes", "Switch Between Comic Themes"],
  ["responsive", "Responsive Design"],
  ["accessibility", "Accessibility"],
  ["seo", "SEO"],
  ["deploy", "Deploy the Website"],
  ["complete-example", "Complete Page Example"],
  ["faq", "Frequently Asked Questions"],
] as const;

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-xl border-4 border-ink bg-ink p-5 text-sm leading-relaxed text-paper shadow-comic">
      <code>{children.trim()}</code>
    </pre>
  );
}

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

export function BlogArticlePage() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      description: DESCRIPTION,
      image: [`${SITE_URL}/logo.png`],
      datePublished: "2026-07-20T12:00:00+03:00",
      dateModified: "2026-07-20T12:00:00+03:00",
      author: { "@type": "Organization", name: "Comixa UI", url: SITE_URL },
      publisher: { "@type": "Organization", name: "Comixa UI", url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${SLUG}` },
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
        <div className="relative mx-auto max-w-5xl">
          <a
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-comic uppercase tracking-wide hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </a>
          <Badge variant="blue">Comixa UI tutorial</Badge>
          <h1 className="mt-6 font-comic text-6xl uppercase leading-[.84] tracking-wide md:text-8xl">
            {TITLE}
          </h1>
          <p className="pg-fg-muted mt-7 max-w-3xl text-lg font-bold leading-relaxed md:text-xl">
            Build a responsive comic-style website in React using reusable
            sections, expressive themes, strong patterns, and production-ready
            components.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-bold uppercase tracking-wider opacity-60">
            <span>Comixa UI Team</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              July 20, 2026
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-4 w-4" />6 min read
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-10 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:py-16">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <Card variant="default">
            <CardContent className="p-5">
              <p className="font-comic text-xl uppercase">Table of contents</p>
              <nav className="mt-4 grid gap-2 text-sm font-bold">
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
              Most websites today follow the same visual formula: a clean
              navbar, centered headline, rounded cards, subtle gradients, and
              soft shadows. These patterns are useful, but they can also make
              websites feel interchangeable.
            </p>
            <p>
              A comic website takes a different approach. It uses bold outlines,
              expressive typography, halftone textures, speech bubbles,
              stickers, asymmetric panels, dramatic colors, and playful
              interactions to create a clear personality.
            </p>
            <p>
              In this guide, you will build a complete comic-style landing page
              with navigation, hero, features, gallery, testimonials, pricing,
              FAQ, conversion sections, a footer, theme switching, and
              responsive behavior.
            </p>
          </div>

          <ArticleSection
            id="what-is-a-comic-website"
            title="What Is a Comic Website?"
          >
            <p>
              A comic website borrows visual ideas from comic books, manga, pop
              art, printed magazines, and illustrated storytelling. The goal is
              not chaos; the best comic interfaces combine expressive art
              direction with familiar navigation, readable typography, clear
              hierarchy, and accessible interactions.
            </p>
            <BulletList
              items={[
                "Thick black borders and offset shadows",
                "Halftone patterns and speech bubbles",
                "High-contrast colors and large display typography",
                "Asymmetric panel layouts",
                "Stickers, labels, and strong motion effects",
              ]}
            />
          </ArticleSection>

          <ArticleSection id="why-comixa" title="Why Use Comixa UI?">
            <p>
              Building the visual system manually means maintaining borders,
              shadows, themes, buttons, cards, navigation layouts, patterns,
              responsive states, animation behavior, forms, and accessibility
              states. Comixa UI provides these foundations as reusable React
              components.
            </p>
            <p>
              Complete pages can be composed from Navbar, Hero, Features,
              Gallery, Testimonials, FAQ, Pricing, CTA, Newsletter, Contact, and
              Footer sections. The same structure can then adopt Classic, Retro,
              Pop Art, Manga, or Vintage art direction.
            </p>
          </ArticleSection>

          <ArticleSection id="create-project" title="Create a React Project">
            <p>Start with a TypeScript Vite project:</p>
            <CodeBlock>{`npm create vite@latest comic-website -- --template react-ts
cd comic-website
npm install
npm run dev`}</CodeBlock>
            <p>
              A simple project can keep page sections under{" "}
              <code>src/sections</code> and compose them from{" "}
              <code>App.tsx</code>.
            </p>
          </ArticleSection>

          <ArticleSection id="install" title="Install Comixa UI">
            <CodeBlock>{`npm install comixa-ui`}</CodeBlock>
            <p>
              Import the package stylesheet from your application entry when
              required by your package version:
            </p>
            <CodeBlock>{`import "comixa-ui/styles.css";
import "./index.css";`}</CodeBlock>
            <p>
              See the{" "}
              <a
                className="font-bold text-comic-blue underline"
                href="/docs/installation"
              >
                installation documentation
              </a>{" "}
              for the current setup.
            </p>
          </ArticleSection>

          <ArticleSection id="provider" title="Set Up ComixaProvider">
            <p>
              Wrap the page once at the application boundary so every section
              shares the same visual language.
            </p>
            <CodeBlock>{`import { ComixaProvider } from "comixa-ui";

export default function App() {
  return (
    <ComixaProvider theme="pop-art">
      <ComicWebsite />
    </ComixaProvider>
  );
}`}</CodeBlock>
          </ArticleSection>

          <ArticleSection id="page-sections" title="Build the Page Sections">
            <p>
              Start with the essentials: Navbar, Hero, and Footer. Add only the
              content and conversion sections the page actually needs. A focused
              page with strong content usually performs better than a long page
              filled with repetitive blocks.
            </p>
            <h3 className="font-comic text-3xl uppercase text-ink">
              Navigation and hero
            </h3>
            <p>
              Keep navigation familiar, limit it to five or six meaningful
              destinations, and give the hero one clear outcome with a primary
              action.
            </p>
            <CodeBlock>{`<Navbar>
  <NavbarBrand href="#home">PANEL//LAB</NavbarBrand>
  <NavbarMenu>{/* important destinations */}</NavbarMenu>
</Navbar>

<ComicPanel variant="hero" shadow="xl" halftone>
  <h1>Build Websites That Refuse to Disappear</h1>
  <Button variant="primary">Start Building</Button>
</ComicPanel>`}</CodeBlock>
            <h3 className="font-comic text-3xl uppercase text-ink">
              Content sections
            </h3>
            <p>
              Use Features to connect capabilities to outcomes, Gallery for real
              screenshots, Testimonials for genuine social proof, and FAQ for
              concise objections and answers.
            </p>
            <h3 className="font-comic text-3xl uppercase text-ink">
              Conversion sections
            </h3>
            <p>
              Pricing, CTA, Newsletter, and Contact serve different goals. Keep
              each conversion moment focused on one main next step.
            </p>
          </ArticleSection>

          <ArticleSection id="themes" title="Switch Between Comic Themes">
            <p>
              The same page structure can reuse five distinct visual identities.
              Keep the selection at provider level rather than repeating theme
              configuration across every component.
            </p>
            <CodeBlock>{`type Theme = "classic" | "retro" | "pop-art" | "manga" | "vintage";

const [theme, setTheme] = useState<Theme>("pop-art");

<ComixaProvider theme={theme}>
  <ComicWebsite />
</ComixaProvider>`}</CodeBlock>
            <p>
              Persist the selection in local storage if visitors should keep
              their preferred theme after refresh.
            </p>
          </ArticleSection>

          <ArticleSection id="responsive" title="Make the Website Responsive">
            <p>
              Comixa UI provides a responsive foundation, but real content still
              needs testing. Review headline length, navigation behavior, image
              dimensions, card stacking, section spacing, form controls,
              decorative elements, and horizontal overflow.
            </p>
            <CodeBlock>{`.page-container {
  width: min(1180px, calc(100% - 32px));
  margin-inline: auto;
}

@media (max-width: 768px) {
  .page-section { padding-block: 64px; }
}`}</CodeBlock>
            <p>
              Do not remove every decorative detail on mobile. Keep one or two
              strong effects per section so the interface still feels like
              Comixa.
            </p>
          </ArticleSection>

          <ArticleSection id="accessibility" title="Improve Accessibility">
            <BulletList
              items={[
                "Use semantic header, main, section, nav, and footer elements",
                "Preserve visible keyboard focus states",
                "Respect prefers-reduced-motion",
                "Keep important information as real HTML text",
                "Use accurate alt text for meaningful screenshots",
              ]}
            />
            <CodeBlock>{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}`}</CodeBlock>
          </ArticleSection>

          <ArticleSection id="seo" title="Optimize the Website for SEO">
            <p>
              Use one descriptive H1, a useful title and meta description,
              logical H2/H3 structure, descriptive image filenames, explicit
              dimensions, and natural internal links to documentation, themes,
              examples, and the playground.
            </p>
            <CodeBlock>{`<title>How to Build a Comic Website in React with Comixa UI</title>
<meta
  name="description"
  content="Learn how to build a responsive comic website in React with Comixa UI using themed sections and reusable layouts."
/>`}</CodeBlock>
          </ArticleSection>

          <ArticleSection id="deploy" title="Deploy the Website">
            <CodeBlock>{`npm run build
npm run preview`}</CodeBlock>
            <p>
              After deployment, verify that routes and images load, metadata
              appears in the page source, mobile navigation works, forms provide
              feedback, themes remain consistent, and there is no horizontal
              overflow.
            </p>
          </ArticleSection>

          <ArticleSection id="complete-example" title="Complete Page Example">
            <p>
              The final page can be composed almost entirely from reusable
              Comixa UI primitives:
            </p>
            <CodeBlock>{`import {
  ComixaProvider,
  Navbar,
  Features,
  Gallery,
  Testimonials,
  Pricing,
  FAQ,
  Button,
} from "comixa-ui";

export default function App() {
  return (
    <ComixaProvider theme="pop-art">
      <Navbar>{/* brand and links */}</Navbar>
      <main>
        <ComicHero />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ConversionSections />
      </main>
      <ComicFooter />
    </ComixaProvider>
  );
}`}</CodeBlock>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  window.location.href = "/playground";
                }}
              >
                Open Playground <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = "/examples";
                }}
              >
                Explore examples
              </Button>
            </div>
          </ArticleSection>

          <ArticleSection id="faq" title="Frequently Asked Questions">
            <div className="grid gap-4">
              {[
                [
                  "Can I build a comic website with React?",
                  "Yes. React works well because navigation, heroes, panels, galleries, pricing, and calls to action can be composed as reusable components.",
                ],
                [
                  "What is Comixa UI?",
                  "Comixa UI is a comic-inspired React UI system with reusable components, themes, patterns, and visual effects.",
                ],
                [
                  "Can I use TypeScript and Next.js?",
                  "Yes. Comixa UI can be used in TypeScript projects and React-based frameworks when client components and styles are configured correctly.",
                ],
                [
                  "Is a comic website suitable for a business?",
                  "Yes—especially for creative tools, SaaS products, portfolios, games, events, and brands that want a distinctive identity while keeping navigation clear.",
                ],
                [
                  "Do comic websites need animation?",
                  "No. Borders, shadows, typography, panels, patterns, and color can create a strong comic identity without constant motion.",
                ],
              ].map(([question, answer]) => (
                <Card key={question} variant="default">
                  <CardContent className="p-5">
                    <h3 className="font-comic text-2xl uppercase text-ink">
                      {question}
                    </h3>
                    <p className="mt-2 text-ink/70">{answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ArticleSection>

          <section className="border-4 border-ink bg-comic-yellow p-7 text-ink shadow-comic-lg">
            <h2 className="font-comic text-5xl uppercase leading-none">
              Make the important moments impossible to miss.
            </h2>
            <p className="mt-4 max-w-2xl font-bold leading-relaxed">
              Start with essential sections, add only the content your page
              needs, and use conversion sections that support one clear goal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => {
                  window.location.href = "/docs/installation";
                }}
              >
                Install Comixa UI
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = "/playground";
                }}
              >
                Build in Playground
              </Button>
            </div>
          </section>
        </main>
      </div>
    </article>
  );
}
