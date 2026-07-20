import type { GeneratorState, PageSection } from "./types";

const sectionComponents: Record<PageSection["type"], string[]> = {
  navbar: ["Navbar", "NavbarBrand", "NavbarContent", "NavbarMenu", "NavbarLink", "NavbarActions", "Button"],
  hero: ["Badge", "Button", "ComicPanel", "Ribbon", "SoundBadge", "Sticker"],
  features: ["Feature", "Features"],
  gallery: ["Gallery"],
  pricing: ["Button", "Pricing", "PricingTier"],
  testimonials: ["Avatar", "Testimonial", "Testimonials"],
  faq: ["FAQ", "FAQItem"],
  cta: ["Badge", "Button", "ComicPanel"],
  newsletter: ["Button", "Card", "CardContent", "Input"],
  contact: ["Badge", "Button", "Card", "CardContent", "Input", "SpeechBubble"],
  footer: ["Badge"],
};

function snippet(section: PageSection) {
  const variant = section.variant;
  switch (section.type) {
    case "navbar": return `      <Navbar variant="${variant === "bold" ? "ink" : variant === "center" ? "cream" : "pop"}">\n        <NavbarContent>\n          <NavbarBrand href="#">Comixa Studio</NavbarBrand>\n          <NavbarMenu><NavbarLink href="#work">Work</NavbarLink><NavbarLink href="#pricing">Pricing</NavbarLink></NavbarMenu>\n          <NavbarActions><Button size="sm">Start a project</Button></NavbarActions>\n        </NavbarContent>\n      </Navbar>`;
    case "hero": return `      <section className="hero hero-${variant}">\n        <Ribbon variant="banner">Built to stand out</Ribbon>\n        <h1>Make your next launch impossible to ignore.</h1>\n        <p>A bold visual system for memorable digital experiences.</p>\n        <Button size="lg" variant="primary">Build your world</Button>\n        <ComicPanel variant="hero" shadow="xl" halftone><SoundBadge variant="pow" /><Sticker variant="pink">100% ORIGINAL</Sticker></ComicPanel>\n      </section>`;
    case "features": return `      <section id="features">\n        <h2>Everything your big idea needs.</h2>\n        <Features columns={3}>\n          <Feature variant="yellow" title="Fast by default" description="From blank page to polished story." />\n          <Feature variant="blue" title="Built to compose" description="A coherent visual system." />\n          <Feature variant="burst" title="Never generic" description="Five expressive art directions." />\n        </Features>\n      </section>`;
    case "gallery": return `      <section id="work"><h2>Three worlds. Zero beige.</h2><Gallery variant="${variant}" framed items={galleryItems} /></section>`;
    case "pricing": return `      <section id="pricing"><h2>Choose your superpower.</h2><Pricing columns={3}>\n        <PricingTier name="Sidekick" price="$0" features={["3 projects", "Core components"]} cta={<Button>Start free</Button>} />\n        <PricingTier name="Hero" price="$19" featured badge="Popular" features={["Unlimited projects", "Export code"]} cta={<Button variant="primary">Go hero</Button>} />\n      </Pricing></section>`;
    case "testimonials": return `      <section><h2>People remember the feeling.</h2><Testimonials columns={3}>\n        <Testimonial variant="${variant === "speech" ? "speech" : "pop"}" quote="It turned our launch into an event." author="Mina Torres" avatar={<Avatar name="MT" />} />\n      </Testimonials></section>`;
    case "faq": return `      <section><h2>Questions, answered.</h2><FAQ variant="${variant === "panels" ? "panel" : "default"}" type="single">\n        <FAQItem value="customize" title="Can I customize every section?">Yes. Every global and section setting composes independently.</FAQItem>\n      </FAQ></section>`;
    case "cta": return `      <section className="cta cta-${variant}"><ComicPanel variant="hero" shadow="xl" halftone>\n        <Badge variant="ink">Your next chapter</Badge><h2>Ready to make some noise?</h2><Button variant="danger">Start building</Button>\n      </ComicPanel></section>`;
    case "newsletter": return `      <section><Card variant="${variant === "strip" ? "panel" : "speech"}"><CardContent>\n        <h2>Fresh panels, monthly.</h2><Input placeholder="you@example.com" /><Button>Join</Button>\n      </CardContent></Card></section>`;
    case "contact": return `      <section className="contact-${variant}"><div><Badge variant="pink">Open for ideas</Badge><h2>Bring us the impossible brief.</h2></div>\n        <Card><CardContent><Input placeholder="Your name" /><Input placeholder="Email" /><Button>Send the brief</Button></CardContent></Card>\n      </section>`;
    case "footer": return `      <footer className="footer-${variant}"><strong>Comixa Studio</strong><p>Make the internet feel something.</p><Badge variant="yellow">© 2026</Badge></footer>`;
  }
}

export function generateCode(state: GeneratorState, typescript = false) {
  const visibleSections = state.sections.filter((section) => !section.hidden);
  const imports = new Set(["Background", "ComicCursor", "ComixaProvider"]);
  visibleSections.forEach((section) => sectionComponents[section.type].forEach((item) => imports.add(item)));
  const theme = state.theme === "classic" ? "" : ` theme="${state.theme}"`;
  const typeLine = typescript ? "\ntype GeneratedLandingProps = { className?: string };\n" : "";
  const signature = typescript ? "({ className }: GeneratedLandingProps)" : "({ className })";
  const galleryData = visibleSections.some((section) => section.type === "gallery")
    ? `\nconst galleryItems = [\n  { src: "/work/color-riot.jpg", alt: "Color Riot project", title: "Color Riot" },\n  { src: "/work/main-stage.jpg", alt: "Main Stage project", title: "Main Stage" },\n  { src: "/work/panel-study.jpg", alt: "Panel Study project", title: "Panel Study" },\n];\n`
    : "";
  return `import {\n  ${[...imports].sort().join(",\n  ")}\n} from "comixa-ui";\n${galleryData}${typeLine}\nexport function GeneratedLanding${signature} {\n  return (\n    <ComixaProvider${theme} className={className}>\n      <Background variant="${state.pattern === "dots" ? "dots" : state.pattern === "halftone" ? "pop-art" : "comic-paper"}" tone="${state.background}">\n        <ComicCursor variant="${state.cursor}" enabled={${state.effects}} />\n${visibleSections.map(snippet).join("\n")}\n      </Background>\n    </ComixaProvider>\n  );\n}`;
}
