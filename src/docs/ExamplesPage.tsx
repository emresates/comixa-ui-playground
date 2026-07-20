import { useRef, useState, type ReactNode } from "react";
import {
  Avatar,
  Badge,
  Button,
  ComicPanel,
  ComicReveal,
  ComixaProvider,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  FAQ,
  FAQItem,
  Feature,
  Features,
  Gallery,
  Highlight,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarLink,
  NavbarMenu,
  Pricing,
  PricingTier,
  Ribbon,
  SoundBadge,
  SpeechBubble,
  Stat,
  Stats,
  Sticker,
  Testimonial,
  Testimonials,
  Typewriter,
  ThemeScope,
  type ComixaThemeName,
  type GalleryItem,
} from "comixa-ui";
import {
  BookOpen,
  Code2,
  Gem,
  LayoutDashboard,
  Newspaper,
  Palette,
  PenTool,
  RadioTower,
  Rocket,
} from "lucide-react";
import { ComixaPopArtExperience } from "./examples/ComixaPopArtExperience";
import { ComixaRetroFM79 } from "./examples/ComixaRetroFM79";
import { ComixaVintageGildedLedger } from "./examples/ComixaVintageGildedLedger";
import { DeveloperPortfolio } from "./examples/DeveloperPortfolio";
import { InkShiftEbookLanding } from "./examples/InkShiftEbookLanding";
import { LaunchBoardDashboard } from "./examples/LaunchBoardDashboard";
import { LaunchZapLanding } from "./examples/LaunchZapLanding";
import { PanelPressBlog } from "./examples/PanelPressBlog";
import { SignalInkBlog } from "./examples/SignalInkBlog";
import { BoltIcon, PlusIcon } from "./shared";

const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80",
    alt: "Neon city skyline",
    title: "Neon Alley",
    description: "Campaign cover for a midnight product drop.",
    badge: "New",
  },
  {
    src: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=1000&q=80",
    alt: "Golden landscape",
    title: "Solar Beat",
    description: "Warm launch art for creator-led releases.",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
    alt: "Desert road",
    title: "Road Cut",
    description: "Chapter break visuals for longform pages.",
    badge: "Hot",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    alt: "House near water",
    title: "Quiet Panel",
    description: "Soft proof section artwork.",
  },
];

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 8l5 4 4-8 4 8 5-4-2 11H5L3 8zm3.4 9h11.2l.8-4.5-3.3 2.7L12 8.9l-3.1 6.3-3.3-2.7.8 4.5z" />
    </svg>
  );
}

function CoverHero() {
  return (
    <div className="grid min-h-[25rem] items-end gap-6 md:grid-cols-[1.05fr_0.72fr]">
      <div className="flex min-h-[21rem] flex-col justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <Ribbon variant="corner" tilt="right">
            Issue #7
          </Ribbon>
          <Badge variant="ink">Landing kit</Badge>
        </div>
        <div>
          <h2 className="max-w-2xl font-comic text-5xl uppercase leading-[0.9] tracking-wide md:text-7xl">
            Launch pages with comic book force
          </h2>
          <p className="mt-4 max-w-xl text-base font-bold leading-relaxed text-ink/75 md:text-lg">
            Cover-grade hero panels, motion, proof, pricing, galleries, and FAQ
            sections composed into one polished landing page.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="default" size="lg">
              Start building
            </Button>
            <Button variant="outline" size="lg" className="bg-paper">
              View components
            </Button>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-[21rem] md:block">
        <div className="absolute right-2 top-2 z-10">
          <SoundBadge variant="pow" burst size="sm" />
        </div>
        <div className="absolute inset-4 rotate-3 border-4 border-ink bg-paper shadow-[8px_8px_0_0_#1A1A1A]">
          <div className="h-2/3 border-b-4 border-ink bg-[radial-gradient(circle_at_70%_22%,#FF4D4D_0_3.2rem,transparent_3.3rem),linear-gradient(135deg,#4D9FFF,#FFE566_58%,#FF7AB6)]" />
          <div className="p-4">
            <p className="font-comic text-3xl uppercase leading-none tracking-wide">
              CoverForge
            </p>
            <p className="mt-1 text-sm font-bold text-ink-muted">
              Visual landing system
            </p>
          </div>
        </div>
        <div className="absolute bottom-5 left-1 border-2 border-ink bg-comic-blue px-3 py-2 font-comic text-sm uppercase tracking-wide text-white shadow-comic-sm">
          12k panels shipped
        </div>
      </div>
    </div>
  );
}

function LandingExample() {
  return (
    <ComixaProvider>
      <section className="overflow-hidden rounded-xl border-4 border-ink bg-paper shadow-comic-lg">
        <Navbar
          variant="pop"
          className="rounded-none border-0 border-b-4 shadow-none"
        >
          <NavbarBrand href="#hero">
            <img
              src="/logo.png"
              alt=""
              className="h-9 w-9 rounded-md border-2 border-ink bg-paper object-cover"
            />
            CoverForge
          </NavbarBrand>
          <NavbarContent>
            <NavbarMenu>
              <NavbarLink href="#hero" active>
                Home
              </NavbarLink>
              <NavbarLink href="#features">Features</NavbarLink>
              <NavbarLink href="#work">Work</NavbarLink>
              <NavbarLink href="#pricing">Pricing</NavbarLink>
            </NavbarMenu>
            <NavbarActions>
              <Button
                size="sm"
                variant="outline"
                className="hidden bg-paper sm:inline-flex"
              >
                Login
              </Button>
              <Button size="sm" variant="primary">
                Join beta
              </Button>
            </NavbarActions>
          </NavbarContent>
        </Navbar>

        <div
          id="hero"
          className="grid gap-6 bg-paper-cream p-5 lg:grid-cols-[1.18fr_0.82fr] lg:p-8"
        >
          <ComicReveal variant="panel-wipe">
            <ComicPanel variant="hero" shadow="xl" halftone hover>
              <CoverHero />
            </ComicPanel>
          </ComicReveal>
          <aside className="flex flex-col gap-4">
            <SpeechBubble tone="cream" tail="bottomLeft" className="text-lg">
              <Typewriter start="immediate" repeat={Infinity}>
                Your landing page should feel like opening night.
              </Typewriter>
            </SpeechBubble>
            <Stats columns={2}>
              <Stat value="12k+" label="Panels shipped" tone="yellow" animate />
              <Stat value="98%" label="Reader hype" tone="blue" animate />
            </Stats>
            <Testimonials columns={1}>
              <Testimonial
                variant="speech"
                quote="The first draft already felt like a campaign universe."
                author="Mina Ink"
                role="Launch director"
                rating={5}
                avatar={
                  <Avatar name="MI" size="sm" shape="circle" variant="pink" />
                }
              />
            </Testimonials>
          </aside>
        </div>

        <div
          id="features"
          className="border-t-4 border-ink bg-paper p-5 lg:p-8"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <Badge variant="yellow">Production kit</Badge>
              <h2 className="mt-2 font-comic text-4xl uppercase tracking-wide">
                Everything reads like a{" "}
                <Highlight start="immediate">cover reveal</Highlight>
              </h2>
            </div>
            <SoundBadge variant="bam" size="sm" />
          </div>
          <Features columns={3}>
            <Feature
              variant="yellow"
              icon={<BoltIcon className="h-6 w-6" />}
              title="Hero panels"
              description="Use ComicPanel with hero, halftone, hover, and xl shadow for instant cover energy."
            />
            <Feature
              variant="blue"
              icon={<PlusIcon className="h-6 w-6" />}
              title="Composable sections"
              description="Stack proof, pricing, FAQ, galleries, and speech moments without style drift."
            />
            <Feature
              variant="burst"
              icon={<CrownIcon className="h-6 w-6" />}
              title="Motion polish"
              description="Reveal animations, typewriter copy, stats, cursor trails, and badges add movement."
            />
          </Features>
        </div>

        <div
          id="work"
          className="border-t-4 border-ink bg-comic-blue p-5 text-white lg:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <Ribbon variant="ticket">Recent covers</Ribbon>
              <p className="mt-2 max-w-2xl text-white/75">
                A horizontal strip for campaign art, product shots, creator
                drops, and visual proof.
              </p>
            </div>
            <Button variant="outline" className="bg-paper text-ink">
              Browse archive
            </Button>
          </div>
          <Gallery variant="strip" items={galleryItems} className="text-ink" />
        </div>

        <div
          id="pricing"
          className="grid gap-6 border-t-4 border-ink bg-paper-cream p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-8"
        >
          <div>
            <Badge variant="red">Beta pricing</Badge>
            <h2 className="mt-3 font-comic text-5xl uppercase leading-none tracking-wide">
              Build the whole issue
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              Pick a plan, assemble the page, and publish a launch that feels
              designed rather than templated.
            </p>
            <FAQ className="mt-5" defaultValue="a" type="single">
              <FAQItem value="a" title="Can I use these components in my app?">
                Yes. The example is assembled from exported Comixa components.
              </FAQItem>
              <FAQItem value="b" title="Is the style customizable?">
                Every section accepts className, variants, and composable slots.
              </FAQItem>
            </FAQ>
          </div>
          <Pricing columns={2}>
            <PricingTier
              name="Sidekick"
              price="$0"
              period="mo"
              features={[
                "Core components",
                "Basic landing sections",
                "Community releases",
              ]}
              cta={
                <Button variant="outline" className="w-full">
                  Try free
                </Button>
              }
            />
            <PricingTier
              name="Hero"
              price="$19"
              period="mo"
              badge="Popular"
              featured
              features={[
                "Everything in Sidekick",
                "Premium examples",
                "Launch-ready sections",
              ]}
              cta={<Button className="w-full">Start hero plan</Button>}
            />
          </Pricing>
        </div>
      </section>
    </ComixaProvider>
  );
}

function ExamplePreview({
  title,
  description,
  theme,
  themeId,
  icon,
  onOpen,
  onCursorEnter,
  onCursorMove,
  onCursorLeave,
}: {
  title: string;
  description: string;
  theme: string;
  themeId: ComixaThemeName;
  icon: ReactNode;
  onOpen: () => void;
  onCursorEnter: (x: number, y: number) => void;
  onCursorMove: (x: number, y: number) => void;
  onCursorLeave: () => void;
}) {
  return (
    <ThemeScope theme={themeId} className="h-full">
      <button
        type="button"
        data-example-theme={themeId}
        onClick={onOpen}
        onPointerEnter={(event) => onCursorEnter(event.clientX, event.clientY)}
        onPointerMove={(event) => onCursorMove(event.clientX, event.clientY)}
        onPointerLeave={onCursorLeave}
        className="example-theme-card group relative flex h-full min-h-72 w-full cursor-none flex-col overflow-hidden text-left transition hover:-translate-y-1"
      >
        <div className="absolute right-2 top-2 z-20 max-w-[45%]">
          <Sticker variant="yellow" size="sm" shape="ticket" tilt="right">
            {theme}
          </Sticker>
        </div>
        <ComicPanel
          variant="default"
          shadow="lg"
          halftone={themeId === "pop-art" || themeId === "manga"}
          className="example-theme-panel flex h-full min-h-72 w-full flex-col p-5"
        >
          <div className="example-theme-icon mb-5 grid h-16 w-16 place-items-center transition-transform group-hover:rotate-3 group-hover:scale-105">
            {icon}
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="font-comic text-3xl uppercase tracking-wide">
              {title}
            </h2>
            <p className="mt-1 max-w-md text-sm opacity-75">{description}</p>
            <p className="mt-auto pt-5 font-comic text-sm uppercase tracking-wide group-hover:underline">
              Open preview
            </p>
          </div>
        </ComicPanel>
      </button>
    </ThemeScope>
  );
}

const EXAMPLES = {
  landing: {
    title: "CoverForge landing",
    content: <LandingExample />,
  },
  dashboard: {
    title: "LaunchBoard dashboard",
    content: <LaunchBoardDashboard />,
  },
  ebook: {
    title: "InkShift ebook",
    content: <InkShiftEbookLanding />,
  },
  portfolio: {
    title: "Developer portfolio",
    content: <DeveloperPortfolio />,
  },
  blog: {
    title: "Panel Press blog",
    content: <PanelPressBlog />,
  },
  launchzap: {
    title: "LaunchZap landing",
    content: <LaunchZapLanding />,
  },
  retrofm: {
    title: "FM 79 retro radio",
    content: <ComixaRetroFM79 />,
  },
  popart: {
    title: "POP//DROP experience",
    content: <ComixaPopArtExperience />,
  },
  ledger: {
    title: "The Gilded Ledger",
    content: <ComixaVintageGildedLedger />,
  },
  signalink: {
    title: "Signal & Ink blog",
    content: <SignalInkBlog />,
  },
} as const;

type ExampleId = keyof typeof EXAMPLES;

export function ExamplesPage() {
  const [open, setOpen] = useState<ExampleId | null>(null);
  const [cursor, setCursor] = useState({
    visible: false,
    label: "OPEN",
    x: 0,
    y: 0,
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const active = open ? EXAMPLES[open] : null;
  const cursorWords = ["OPEN", "VIEW", "PLAY", "READ"] as const;
  const moveCursor = (x: number, y: number) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };
  const cursorProps = {
    onCursorEnter: (x: number, y: number) => {
      moveCursor(x, y);
      setCursor({
        visible: true,
        label: cursorWords[Math.floor(Math.random() * cursorWords.length)],
        x,
        y,
      });
    },
    onCursorMove: moveCursor,
    onCursorLeave: () => setCursor((value) => ({ ...value, visible: false })),
  };

  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide">
          Examples
        </h1>
        <p className="pg-fg-muted max-w-3xl text-base">
          Small previews of full pages built only from Comixa components. Open
          one to inspect it like a modal.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        <ExamplePreview
          title="CoverForge landing"
          description="A full SaaS-style landing page with hero, proof, gallery, pricing, and FAQ."
          theme="Comic"
          themeId="comic"
          icon={<BoltIcon className="h-8 w-8" />}
          onOpen={() => setOpen("landing")}
          {...cursorProps}
        />
        <ExamplePreview
          title="LaunchBoard dashboard"
          description="Responsive SaaS analytics dashboard with KPIs, revenue chart, customer table, and activity feed."
          theme="Vintage"
          themeId="vintage"
          icon={<LayoutDashboard className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("dashboard")}
          {...cursorProps}
        />
        <ExamplePreview
          title="InkShift ebook"
          description="eBook sales page with hero cover, chapter grid, author profile, reviews, pricing, and free chapter preview."
          theme="Pop Art"
          themeId="pop-art"
          icon={<BookOpen className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("ebook")}
          {...cursorProps}
        />
        <ExamplePreview
          title="Developer portfolio"
          description="Frontend developer portfolio with hero, project grid, skills, experience timeline, testimonials, and contact form."
          theme="Comic"
          themeId="comic"
          icon={<Code2 className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("portfolio")}
          {...cursorProps}
        />
        <ExamplePreview
          title="Panel Press blog"
          description="Comic-inspired developer blog with featured story, category filters, search, newsletter signup, and article pages."
          theme="Manga"
          themeId="manga"
          icon={<Newspaper className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("blog")}
          {...cursorProps}
        />
        <ExamplePreview
          title="LaunchZap landing"
          description="SaaS launch workspace landing page with hero, features, workflow, pricing, FAQ, and demo dialog."
          theme="Manga"
          themeId="manga"
          icon={<Rocket className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("launchzap")}
          {...cursorProps}
        />
        <ExamplePreview
          title="FM 79 retro radio"
          description="Retro radio landing page with schedule cards, dusty record archive, tape club CTA, and live toast actions."
          theme="Retro"
          themeId="retro"
          icon={<RadioTower className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("retrofm")}
          {...cursorProps}
        />
        <ExamplePreview
          title="POP//DROP experience"
          description="Pop art culture magazine and print drop page with loud panels, kinetic cards, cursor modes, and shop section."
          theme="Pop Art"
          themeId="pop-art"
          icon={<Palette className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("popart")}
          {...cursorProps}
        />
        <ExamplePreview
          title="The Gilded Ledger"
          description="Vintage collection landing page with artifact illustrations, selected lots, journal cards, and salon invitation CTA."
          theme="Vintage"
          themeId="vintage"
          icon={<Gem className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("ledger")}
          {...cursorProps}
        />
        <ExamplePreview
          title="Signal & Ink blog"
          description="Editorial blog homepage with featured story, filters, search, popular posts, and newsletter signup."
          theme="Retro"
          themeId="retro"
          icon={<PenTool className="h-8 w-8" strokeWidth={2.5} />}
          onOpen={() => setOpen("signalink")}
          {...cursorProps}
        />
      </div>

      <Dialog
        open={Boolean(active)}
        onOpenChange={(nextOpen) => !nextOpen && setOpen(null)}
      >
        <DialogContent
          variant="panel"
          effect="none"
          showClose
          className="example-preview-dialog !flex !h-[calc(100dvh-2rem)] !w-[calc(100vw-2rem)] !max-w-7xl !flex-col !overflow-hidden !p-0"
        >
          <DialogHeader className="shrink-0 border-b-4 border-ink bg-comic-yellow px-5 py-4 pr-14">
            <DialogTitle>{active?.title ?? "Comixa example"}</DialogTitle>
            <DialogDescription>
              Full-page preview built with Comixa components.
            </DialogDescription>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-y-auto bg-paper-cream">
            {active?.content}
          </div>
        </DialogContent>
      </Dialog>

      {cursor.visible ? (
        <div
          ref={cursorRef}
          className="example-random-cursor"
          style={{
            transform: `translate3d(${cursor.x + 16}px, ${cursor.y + 16}px, 0)`,
          }}
          aria-hidden="true"
        >
          {cursor.label}
        </div>
      ) : null}
    </article>
  );
}
