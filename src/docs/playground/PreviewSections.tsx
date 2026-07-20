import {
  ArrowRight,
  Layers3,
  Mail,
  Palette,
  Rocket,
  Zap,
} from "lucide-react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  ComicPanel,
  FAQ,
  FAQItem,
  Feature,
  Features,
  Gallery,
  type GalleryItem,
  Input,
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
  Sticker,
  Testimonial,
  Testimonials,
} from "comixa-ui";
import type { PageSection } from "./types";

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80",
    alt: "Artist painting a colorful canvas",
    title: "Color Riot",
    description: "A campaign world made to be remembered.",
    badge: "New",
  },
  {
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80",
    alt: "Bright performance stage",
    title: "Main Stage",
    description: "Launch visuals with opening-night energy.",
  },
  {
    src: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=900&q=80",
    alt: "Abstract colorful artwork",
    title: "Panel Study",
    description: "A loud study in shape and rhythm.",
    badge: "Hot",
  },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <header className="cg-preview-heading">
      <span data-editor-node="Eyebrow"><Badge variant="yellow">{eyebrow}</Badge></span>
      <h2 data-editor-node="Headline">{title}</h2>
      {copy ? <p data-editor-node="Body copy">{copy}</p> : null}
    </header>
  );
}

function GeneratedNavbar({ variant }: { variant: string }) {
  const tone =
    variant === "bold" ? "ink" : variant === "center" ? "cream" : "pop";
  return (
    <Navbar
      variant={tone}
      position="static"
      className={`cg-generated-navbar cg-navbar-${variant}`}
    >
      <NavbarContent>
        <NavbarBrand data-editor-node="Brand" href="#" onClick={(event) => event.preventDefault()}>
          <span className="cg-preview-logo">C</span>
          Comixa Studio
        </NavbarBrand>
        <NavbarMenu data-editor-node="Navigation">
          <NavbarLink href="#work">Work</NavbarLink>
          <NavbarLink href="#features">Features</NavbarLink>
          <NavbarLink href="#pricing">Pricing</NavbarLink>
        </NavbarMenu>
        <NavbarActions data-editor-node="Actions">
          <Button size="sm" variant={variant === "bold" ? "warning" : "primary"}>
            Start a project
          </Button>
        </NavbarActions>
      </NavbarContent>
    </Navbar>
  );
}

function GeneratedHero({ variant }: { variant: string }) {
  const centered = variant === "center" || variant === "explosion";
  return (
    <section className={`cg-page-section cg-hero cg-hero-${variant}`}>
      <div className="cg-section-inner">
        <div className="cg-hero-copy">
          <span data-editor-node="Eyebrow"><Ribbon variant={variant === "magazine" ? "ticket" : "banner"} tilt="left">
            Issue 01 · Built to stand out
          </Ribbon></span>
          <h1 data-editor-node="Headline">
            Make your next launch <span>impossible to ignore.</span>
          </h1>
          <p data-editor-node="Body copy">
            A bold visual system for teams shipping memorable products, stories,
            and digital experiences.
          </p>
          <div className="cg-preview-actions" data-editor-node="Actions">
            <Button size="lg" variant="primary">
              Build your world <ArrowRight aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline">See the work</Button>
          </div>
        </div>
        {!centered ? (
          <ComicPanel
            variant={variant === "magazine" ? "night" : "hero"}
            shadow="xl"
            halftone
            className="cg-hero-art"
            data-editor-node="Artwork"
          >
            <SoundBadge variant="pow" size="lg" burst />
            <div className="cg-art-orbit" aria-hidden="true"><span>C</span></div>
            <Sticker variant="pink" tilt="right">100% ORIGINAL</Sticker>
          </ComicPanel>
        ) : null}
        {variant === "explosion" ? (
          <div className="cg-explosion-mark" aria-hidden="true">WOW!</div>
        ) : null}
      </div>
    </section>
  );
}

function GeneratedFeatures({ variant }: { variant: string }) {
  const featureVariant =
    variant === "panels" ? "burst" : variant === "icons" ? "outline" : "yellow";
  return (
    <section id="features" className={`cg-page-section cg-features-${variant}`}>
      <div className="cg-section-inner">
        <SectionHeading
          eyebrow="Why Comixa"
          title="Everything your big idea needs."
          copy="A flexible cast of components, ready to play any role."
        />
        <Features columns={3} className="cg-component-grid" data-editor-node="Content">
          <Feature variant={featureVariant} icon={<Zap />} title="Fast by default" description="Go from blank page to polished story without losing momentum." />
          <Feature variant={variant === "cards" ? "blue" : featureVariant} icon={<Layers3 />} title="Built to compose" description="Combine expressive sections into one coherent visual system." />
          <Feature variant={variant === "cards" ? "burst" : featureVariant} icon={<Palette />} title="Never generic" description="Five art directions, one production-ready component API." />
        </Features>
      </div>
    </section>
  );
}

function GeneratedGallery({ variant }: { variant: string }) {
  return (
    <section id="work" className="cg-page-section">
      <div className="cg-section-inner">
        <SectionHeading eyebrow="Selected work" title="Three worlds. Zero beige." />
        <Gallery
          items={GALLERY_ITEMS}
          variant={variant as "grid" | "featured" | "strip"}
          framed
          data-editor-node="Content"
        />
      </div>
    </section>
  );
}

const PLAN_FEATURES = {
  sidekick: ["3 projects", "Core components", "Community"],
  hero: ["Unlimited projects", "All themes", "Export code"],
  league: ["Everything in Hero", "Team library", "Priority support"],
};

function GeneratedPricing({ variant }: { variant: string }) {
  return (
    <section id="pricing" className={`cg-page-section cg-pricing-${variant}`}>
      <div className="cg-section-inner">
        <SectionHeading eyebrow="Simple pricing" title="Choose your superpower." />
        <Pricing columns={variant === "magazine" ? 2 : 3} className="cg-component-grid" data-editor-node="Content">
          <PricingTier name="Sidekick" price="$0" period="month" description="For the first panel." features={PLAN_FEATURES.sidekick} cta={<Button variant="outline" className="w-full">Start free</Button>} />
          <PricingTier name="Hero" price="$19" period="month" description="For teams ready to ship." featured badge="Most popular" features={PLAN_FEATURES.hero} cta={<Button variant="primary" className="w-full">Go hero</Button>} />
          {variant !== "magazine" ? (
            <PricingTier name="League" price="$49" period="month" description="For the whole creative crew." features={PLAN_FEATURES.league} cta={<Button variant="default" className="w-full">Build together</Button>} />
          ) : null}
        </Pricing>
      </div>
    </section>
  );
}

function GeneratedTestimonials({ variant }: { variant: string }) {
  const tone = variant === "speech" ? "speech" : variant === "quotes" ? "cream" : "pop";
  return (
    <section className="cg-page-section">
      <div className="cg-section-inner">
        <SectionHeading eyebrow="The reviews are in" title="People remember the feeling." />
        <Testimonials columns={3} className="cg-component-grid" data-editor-node="Content">
          <Testimonial variant={tone} quote="It turned our product launch into an actual event." author="Mina Torres" role="Creative Director" rating={5} avatar={<Avatar name="MT" variant="pink" shape="circle" />} />
          <Testimonial variant={tone} quote="Expressive, flexible, and somehow still incredibly fast." author="Noah Kim" role="Product Designer" rating={5} avatar={<Avatar name="NK" variant="blue" shape="circle" />} />
          <Testimonial variant={tone} quote="Our landing page finally sounds like us before you read a word." author="Ari Woods" role="Founder" rating={5} avatar={<Avatar name="AW" variant="green" shape="circle" />} />
        </Testimonials>
      </div>
    </section>
  );
}

function GeneratedFaq({ variant }: { variant: string }) {
  return (
    <section className="cg-page-section">
      <div className="cg-section-inner cg-faq-layout">
        <SectionHeading eyebrow="Need to know" title="Questions, answered." copy="The short version: start loud, stay flexible, ship fast." />
        <FAQ variant={variant === "panels" ? "panel" : "default"} type="single" defaultValue="item-1" data-editor-node="Content">
          <FAQItem value="item-1" title="Can I customize every section?">Yes. Themes, spacing, patterns, borders, shadows, and layouts compose independently.</FAQItem>
          <FAQItem value="item-2" title="Is this generated with AI?">No. Every result comes from intentional Comixa components and predefined layouts.</FAQItem>
          <FAQItem value="item-3" title="Can I export the result?">Yes. Copy JSX or TSX, or export the exact configuration as JSON.</FAQItem>
        </FAQ>
      </div>
    </section>
  );
}

function GeneratedCta({ variant }: { variant: string }) {
  return (
    <section className={`cg-page-section cg-cta-${variant}`}>
      <div className="cg-section-inner">
        <ComicPanel variant={variant === "burst" ? "hero" : "pop"} shadow="xl" halftone={variant === "burst"} className="cg-cta-panel">
          <div><span data-editor-node="Eyebrow"><Badge variant="ink">Your next chapter</Badge></span><h2 data-editor-node="Headline">Ready to make some noise?</h2><p data-editor-node="Body copy">Build a launch page people can recognize from across the internet.</p></div>
          <Button size="lg" variant="danger" data-editor-node="Actions">Start building <Rocket aria-hidden="true" /></Button>
        </ComicPanel>
      </div>
    </section>
  );
}

function GeneratedNewsletter({ variant }: { variant: string }) {
  return (
    <section className={`cg-page-section cg-newsletter-${variant}`}>
      <div className="cg-section-inner">
        <Card variant={variant === "strip" ? "panel" : "speech"} className="cg-newsletter-card">
          <CardContent className="cg-newsletter-content">
            <Mail aria-hidden="true" />
            <div><h2 data-editor-node="Headline">Fresh panels, monthly.</h2><p data-editor-node="Body copy">Notes on expressive UI and work worth remembering.</p></div>
            <div className="cg-inline-form" data-editor-node="Form"><Input placeholder="you@example.com" aria-label="Email address" /><Button variant="primary">Join</Button></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function GeneratedContact({ variant }: { variant: string }) {
  return (
    <section id="contact" className="cg-page-section">
      <div className={`cg-section-inner cg-contact-${variant}`}>
        <div>
          <Badge variant="pink">Open for ideas</Badge>
          <h2 data-editor-node="Headline">Bring us the impossible brief.</h2>
          <p data-editor-node="Body copy">Tell us what you are launching and where the story needs to go.</p>
          {variant === "split" ? <SpeechBubble tone="blue" tail="bottomLeft">Replies land within two working days.</SpeechBubble> : null}
        </div>
        <Card variant="default" data-editor-node="Form">
          <CardContent className="cg-contact-fields">
            <Input placeholder="Your name" aria-label="Your name" />
            <Input placeholder="Email address" aria-label="Email address" />
            <textarea className="cg-preview-textarea" placeholder="Tell us about the project" aria-label="Project details" />
            <Button variant="primary">Send the brief <ArrowRight aria-hidden="true" /></Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function GeneratedFooter({ variant }: { variant: string }) {
  return (
    <footer className={`cg-generated-footer cg-footer-${variant}`}>
      <div className="cg-section-inner">
        <div className="cg-footer-brand" data-editor-node="Brand"><span className="cg-preview-logo">C</span><strong>Comixa Studio</strong><p>Make the internet feel something.</p></div>
        {variant === "columns" ? <div className="cg-footer-links" data-editor-node="Navigation"><div><strong>Explore</strong><a href="#work">Work</a><a href="#features">Features</a></div><div><strong>Connect</strong><a href="#contact">Instagram</a><a href="#contact">Dribbble</a></div></div> : null}
        <Badge variant="yellow">© 2026 · MADE WITH COMIXA</Badge>
      </div>
    </footer>
  );
}

export function PreviewSection({ section }: { section: PageSection }) {
  switch (section.type) {
    case "navbar": return <GeneratedNavbar variant={section.variant} />;
    case "hero": return <GeneratedHero variant={section.variant} />;
    case "features": return <GeneratedFeatures variant={section.variant} />;
    case "gallery": return <GeneratedGallery variant={section.variant} />;
    case "pricing": return <GeneratedPricing variant={section.variant} />;
    case "testimonials": return <GeneratedTestimonials variant={section.variant} />;
    case "faq": return <GeneratedFaq variant={section.variant} />;
    case "cta": return <GeneratedCta variant={section.variant} />;
    case "newsletter": return <GeneratedNewsletter variant={section.variant} />;
    case "contact": return <GeneratedContact variant={section.variant} />;
    case "footer": return <GeneratedFooter variant={section.variant} />;
  }
}
