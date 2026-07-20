import type { GeneratorState, PageSection } from "./types";

const sectionComponents: Record<PageSection["type"], string[]> = {
  navbar: ["Navbar", "NavbarBrand", "NavbarContent", "NavbarMenu", "NavbarLink", "NavbarActions", "Button"],
  hero: ["Badge", "Button", "ComicPanel", "Ribbon", "SoundBadge", "Sticker"],
  features: ["Feature", "Features"],
  bento: ["Badge", "Card", "CardContent"],
  stats: ["Stat", "Stats"],
  comparison: [],
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
    case "navbar": return `      <Navbar variant="${variant === "asymmetric" ? "ink" : variant === "center" || variant === "boxed" || variant === "floating" ? "cream" : "pop"}" className="navbar-${variant}">\n        <NavbarContent>\n          <NavbarBrand href="#"><img src="/logo.png" alt="" />Comixa Studio</NavbarBrand>\n          <NavbarMenu><NavbarLink href="#work">Work</NavbarLink><NavbarLink href="#pricing">Pricing</NavbarLink></NavbarMenu>\n          <NavbarActions><Button size="sm">Start a project</Button></NavbarActions>\n        </NavbarContent>\n      </Navbar>`;
    case "hero": return `      <section className="hero hero-${variant}">\n        <Ribbon variant="banner">Built to stand out</Ribbon>\n        <h1>Make your next launch impossible to ignore.</h1>\n        <p>A bold visual system for memorable digital experiences.</p>\n        <Button size="lg" variant="primary">Build your world</Button>\n        <ComicPanel variant="hero" shadow="xl" halftone><SoundBadge variant="pow" /><Sticker variant="pink">100% ORIGINAL</Sticker></ComicPanel>\n      </section>`;
    case "features": return `      <section id="features" className="features-${variant}">\n        <h2>Everything your big idea needs.</h2>\n        <Features columns={${variant === "bento" ? 2 : 3}}>\n          <Feature variant="yellow" title="Fast by default" description="From blank page to polished story." />\n          <Feature variant="blue" title="Built to compose" description="A coherent visual system." />\n          <Feature variant="burst" title="Never generic" description="Five expressive art directions." />\n        </Features>\n      </section>`;
    case "bento": return `      <section className="bento-${variant}">\n        <h2>One system. Many stories.</h2>\n        <div className="bento-grid">\n          <Card><CardContent><Badge>Creative system</Badge><h3>Built for ideas with a pulse.</h3><p>Compose expressive pages without losing clarity.</p></CardContent></Card>\n          <Card><CardContent><strong>48</strong><span> launches shipped</span></CardContent></Card>\n          <Card><CardContent><h3>Five art directions</h3><p>Switch the visual world instantly.</p></CardContent></Card>\n        </div>\n      </section>`;
    case "stats": return `      <section className="stats-${variant}"><h2>Proof in every panel.</h2><Stats columns={${variant === "spotlight" ? 2 : 4}}>\n        <Stat value="240%" label="More engagement" tone="yellow" animate />\n        <Stat value="48h" label="Idea to launch" tone="blue" animate />\n        <Stat value="12k" label="Panels shipped" tone="pink" animate />\n        <Stat value="98%" label="Happy teams" tone="green" animate />\n      </Stats></section>`;
    case "comparison": return `      <section className="comparison-${variant}"><h2>See the difference.</h2>\n        <div className="comparison"><div>Capability</div><strong>Comixa</strong><strong>Ordinary UI</strong><div>Expressive themes</div><span>✓</span><span>×</span><div>Production-ready</div><span>✓</span><span>✓</span></div>\n      </section>`;
    case "gallery": return `      <section id="work" className="gallery-${variant}"><h2>Three worlds. Zero beige.</h2><Gallery variant="${variant === "polaroids" || variant === "contact-sheet" ? "grid" : variant === "showcase" ? "featured" : variant}" framed items={galleryItems} /></section>`;
    case "pricing": return `      <section id="pricing" className="pricing-${variant}"><h2>Choose your superpower.</h2><Pricing columns={${variant === "spotlight" || variant === "horizontal" ? 1 : variant === "magazine" || variant === "compact" ? 2 : 3}}>\n        <PricingTier name="Sidekick" price="$0" features={["3 projects", "Core components"]} cta={<Button>Start free</Button>} />\n        <PricingTier name="Hero" price="$19" featured badge="Popular" features={["Unlimited projects", "Export code"]} cta={<Button variant="primary">Go hero</Button>} />\n      </Pricing></section>`;
    case "testimonials": return `      <section className="testimonials-${variant}"><h2>People remember the feeling.</h2><Testimonials columns={${variant === "featured" ? 2 : 3}}>\n        <Testimonial variant="${variant === "speech" || variant === "featured" ? "speech" : variant === "quotes" || variant === "wall" ? "cream" : "pop"}" quote="It turned our launch into an event." author="Mina Torres" avatar={<Avatar name="MT" />} />\n      </Testimonials></section>`;
    case "faq": return `      <section className="faq-${variant}"><h2>Questions, answered.</h2><FAQ variant="${variant === "split" ? "panel" : "default"}" type="single">\n        <FAQItem value="customize" title="Can I customize every section?">Yes. Every global and section setting composes independently.</FAQItem>\n      </FAQ></section>`;
    case "cta": return `      <section className="cta cta-${variant}"><ComicPanel variant="hero" shadow="xl" halftone>\n        <Badge variant="ink">Your next chapter</Badge><h2>Ready to make some noise?</h2><Button variant="danger">Start building</Button>\n      </ComicPanel></section>`;
    case "newsletter": return `      <section className="newsletter-${variant}"><Card variant="${variant === "card" || variant === "split" ? "speech" : "panel"}"><CardContent>\n        <h2>Fresh panels, monthly.</h2><Input placeholder="you@example.com" /><Button>Join</Button>\n      </CardContent></Card></section>`;
    case "contact": return `      <section className="contact-${variant}"><div><Badge variant="pink">Open for ideas</Badge><h2>Bring us the impossible brief.</h2></div>\n        <Card><CardContent><Input placeholder="Your name" /><Input placeholder="Email" /><Button>Send the brief</Button></CardContent></Card>\n      </section>`;
    case "footer": return `      <footer className="footer-${variant}"><img src="/logo.png" alt="" /><strong>Comixa Studio</strong><p>Make the internet feel something.</p><Badge variant="yellow">© 2026</Badge></footer>`;
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
