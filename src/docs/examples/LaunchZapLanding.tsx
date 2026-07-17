import { useEffect, useState, type SVGProps } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  Menu,
  Rocket,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";

function GithubIcon({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.28-.01-1.21-.01-2.19-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.22 0 .31.21.67.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ComicCursor,
  ComicPanel,
  ComicReveal,
  ComixaProvider,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Divider,
  FAQ,
  FAQItem,
  Feature,
  Features,
  Highlight,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarLink,
  NavbarMenu,
  Pricing,
  PricingTier,
  SoundBadge,
  SpeechBubble,
  Stat,
  Stats,
  Sticker,
  ToastProvider,
  toast,
} from "comixa-ui";

const nav = [
  ["features", "Features"],
  ["workflow", "How it works"],
  ["pricing", "Pricing"],
  ["faq", "FAQ"],
];

export function LaunchZapLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const joinWaitlist = () =>
    toast({
      title: "You're on the list!",
      description: "The next issue is heading your way.",
      variant: "success",
    });

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <ComixaProvider theme="manga">
      <ToastProvider position="top-right">
        <ComicCursor variant="ring" trailCount={5} />
        <main className="overflow-hidden bg-paper">
          <Navbar
            variant="cream"
            position="sticky"
            className="z-50 border-b-4 border-ink"
          >
            <NavbarContent className="mx-auto max-w-8xl px-4 md:px-8">
              <NavbarBrand href="#top" className="display text-3xl">
                LAUNCH<span className="text-comic-pink">ZAP!</span>
              </NavbarBrand>
              <NavbarMenu className="hidden gap-6 md:flex">
                {nav.map(([href, label]) => (
                  <NavbarLink key={href} href={`#${href}`}>
                    {label}
                  </NavbarLink>
                ))}
              </NavbarMenu>
              <NavbarActions>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:inline-flex"
                  onClick={() => setDemoOpen(true)}
                >
                  Watch demo
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hidden sm:inline-flex"
                  onClick={joinWaitlist}
                >
                  Start free
                </Button>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-paper font-comic text-lg text-ink shadow-comic-sm transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  {menuOpen ? (
                    <X size={20} strokeWidth={2.5} />
                  ) : (
                    <Menu size={20} strokeWidth={2.5} />
                  )}
                </button>
              </NavbarActions>
            </NavbarContent>

            {menuOpen && (
              <>
                <button
                  type="button"
                  className="mobile-backdrop-in fixed inset-0 z-40 bg-ink/60 md:hidden"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                />
                <aside
                  className="mobile-drawer-in fixed inset-y-0 right-0 z-50 flex w-[min(100%,18.5rem)] flex-col border-l-4 border-ink bg-paper-cream shadow-[-10px_0_0_#171717] md:hidden"
                  aria-label="Mobile navigation"
                >
                  <div className="flex items-center justify-between border-b-3 border-ink px-5 py-4">
                    <span className="display text-2xl tracking-wide">MENU</span>
                    <button
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-ink bg-white shadow-comic-sm transition-transform hover:-translate-y-0.5"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <X size={18} strokeWidth={2.5} />
                    </button>
                  </div>

                  <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-5">
                    {nav.map(([href, label]) => (
                      <NavbarLink
                        key={href}
                        href={`#${href}`}
                        className="display w-full justify-start rounded-lg px-4 py-3.5 text-xl uppercase tracking-wide hover:-translate-y-0.5 hover:bg-comic-yellow hover:shadow-comic-sm"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </NavbarLink>
                    ))}
                  </nav>

                  <div className="flex flex-col gap-3 border-t-3 border-ink bg-comic-yellow px-4 py-5">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        setMenuOpen(false);
                        setDemoOpen(true);
                      }}
                    >
                      Watch demo
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        setMenuOpen(false);
                        joinWaitlist();
                      }}
                    >
                      Start free
                    </Button>
                  </div>
                </aside>
              </>
            )}
          </Navbar>

          <section
            id="top"
            className="relative px-5 pb-20 pt-14 md:px-8 md:pt-20"
          >
            <div className="absolute inset-0 opacity-25">
              <div className="h-full w-full bg-[radial-gradient(#171717_1.4px,transparent_1.4px)] [background-size:9px_9px]" />
            </div>
            <div className="relative mx-auto grid max-w-8xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
              <ComicReveal variant="pop" className="relative z-10">
                <Badge variant="pink" size="lg">
                  AI launch workspace
                </Badge>
                <h1 className="display hero-title mt-6">
                  TURN IDEAS INTO{" "}
                  <span className="text-outline block text-comic-yellow">
                    BIG LAUNCHES.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg font-bold leading-relaxed text-ink/70 md:text-xl">
                  Plan campaigns, generate launch assets, and ship your next
                  product from one energetic workspace built for small teams
                  with big ambitions.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    effect="pop"
                    onClick={joinWaitlist}
                  >
                    Start launching <Rocket size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setDemoOpen(true)}
                  >
                    See it in action <ArrowRight size={20} />
                  </Button>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold">
                  <span>✓ No credit card</span>
                  <span>✓ Free plan</span>
                  <span>✓ Cancel anytime</span>
                </div>
              </ComicReveal>

              <div className="relative mx-auto w-full max-w-xl animate-float">
                <Sticker
                  variant="pink"
                  size="lg"
                  tilt="wild"
                  className="absolute -right-3 -top-7 z-20"
                >
                  NEW!
                </Sticker>
                <SoundBadge
                  word="ZAP!"
                  variant="zap"
                  className="absolute -left-8 top-16 z-20"
                />
                <ComicPanel
                  variant="hero"
                  shadow="xl"
                  halftone
                  className="min-h-[500px] overflow-hidden p-5 md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Badge variant="ink">Launch #042</Badge>
                    <span className="font-black">87% ready</span>
                  </div>
                  <Card variant="cream" effect="pop" className="rotate-[-1deg]">
                    <CardHeader>
                      <CardTitle className="display text-4xl">
                        Orbit Notes
                      </CardTitle>
                      <CardDescription>
                        AI notes for teams that hate messy docs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 h-4 overflow-hidden border-3 border-ink bg-white">
                        <div className="h-full w-[87%] bg-comic-pink" />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          "Landing page",
                          "Launch email",
                          "Social kit",
                          "Press brief",
                        ].map((item, i) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 border-3 border-ink bg-white p-3 font-black shadow-[3px_3px_0_#171717]"
                          >
                            <span
                              className={`grid h-6 w-6 place-items-center border-2 border-ink ${i < 3 ? "bg-comic-green" : "bg-comic-yellow"}`}
                            >
                              {i < 3 ? <Check size={15} /> : i + 1}
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="primary" className="w-full">
                        Generate launch kit <Wand2 size={18} />
                      </Button>
                    </CardFooter>
                  </Card>
                  <SpeechBubble
                    tone="cream"
                    tail="bottomRight"
                    className="ml-auto mt-7 max-w-xs font-bold"
                  >
                    Your launch story is ready. Want me to punch up the
                    headline?
                  </SpeechBubble>
                </ComicPanel>
              </div>
            </div>
          </section>

          <div className="border-y-4 border-ink bg-ink py-4 text-white">
            <div className="marquee flex w-max gap-12 whitespace-nowrap display text-3xl">
              <span>PLAN FASTER ✦ WRITE BETTER ✦ LAUNCH LOUDER ✦</span>
              <span>PLAN FASTER ✦ WRITE BETTER ✦ LAUNCH LOUDER ✦</span>
            </div>
          </div>

          <section className="px-5 py-20 md:px-8">
            <Stats columns={4} className="mx-auto max-w-8xl">
              <Stat
                value="12K+"
                label="Launches created"
                hint="and counting"
                animate
                tone="yellow"
                triggerOnView
              />
              <Stat
                value="4.9/5"
                label="Average rating"
                hint="from indie teams"
                tone="pink"
                animate
                triggerOnView
              />
              <Stat
                value="8 hrs"
                label="Saved per launch"
                hint="on average"
                tone="blue"
                animate
                triggerOnView
              />
              <Stat
                value="42%"
                label="Faster shipping"
                hint="than old workflows"
                tone="green"
                animate
                triggerOnView
              />
            </Stats>
          </section>

          <section
            id="features"
            className="border-y-4 border-ink bg-gray-300 px-5 py-24 md:px-8"
          >
            <div className="mx-auto max-w-8xl">
              <Badge variant="yellow">Your launch superpowers</Badge>
              <h2 className="display section-title mt-5 text-white text-outline outline-white">
                EVERYTHING YOU NEED TO MAKE NOISE.
              </h2>
              <Features className="mt-12">
                <Feature
                  variant="yellow"
                  icon={<Wand2 />}
                  title="AI Launch Writer"
                  description="Generate positioning, landing copy, email sequences, and social posts in your own brand voice."
                />
                <Feature
                  variant="blue"
                  icon={<Layers3 />}
                  title="One Launch Board"
                  description="Keep every asset, owner, deadline, and approval together instead of chasing scattered tabs."
                />
                <Feature
                  variant="burst"
                  icon={<Gauge />}
                  title="Momentum Score"
                  description="Spot missing launch pieces and see exactly what will make your campaign stronger."
                />
                <Feature
                  variant="burst"
                  icon={<Code2 />}
                  title="Developer Friendly"
                  description="Export clean copy, snippets, and assets without locking your team into another complex tool."
                />
              </Features>
            </div>
          </section>

          <section id="workflow" className="px-5 py-24 md:px-8">
            <div className="mx-auto max-w-8xl">
              <div className="max-w-3xl">
                <Badge variant="pink">Three simple issues</Badge>
                <h2 className="display section-title mt-4">
                  FROM BLANK PAGE TO{" "}
                  <Highlight triggerOnView repeat={1}>
                    LAUNCH DAY.
                  </Highlight>
                </h2>
              </div>
              <div className="mt-12 grid gap-7 lg:grid-cols-3">
                {[
                  [
                    "01",
                    "Drop the idea",
                    "Tell LaunchZap what you are building, who it is for, and what makes it different.",
                  ],
                  [
                    "02",
                    "Build the story",
                    "Generate your launch narrative, campaign assets, timeline, and team checklist.",
                  ],
                  [
                    "03",
                    "Ship with a bang",
                    "Review everything in one place, collaborate, export, and launch with confidence.",
                  ],
                ].map(([n, t, d], i) => (
                  <ComicPanel
                    key={n}
                    variant={i === 1 ? "sky" : "cream"}
                    shadow="lg"
                    tilt={i === 1}
                    hover
                    caption={`ISSUE #${n}`}
                    className="min-h-72 p-7"
                  >
                    <SoundBadge
                      word={i === 0 ? "IDEA!" : i === 1 ? "BUILD!" : "SHIP!"}
                      variant={i === 0 ? "bam" : i === 1 ? "zap" : "pow"}
                    />
                    <h3 className="display mt-8 text-4xl">{t}</h3>
                    <p className="mt-4 font-bold leading-relaxed text-ink/70">
                      {d}
                    </p>
                  </ComicPanel>
                ))}
              </div>
            </div>
          </section>

          <section
            id="pricing"
            className="border-y-4 border-ink bg-gray-300 px-5 py-24 md:px-8"
          >
            <div className="mx-auto max-w-8xl">
              <div className="mx-auto max-w-3xl text-center">
                <Badge variant="ink">Simple pricing</Badge>
                <h2 className="display section-title mt-5">
                  PICK YOUR POWER LEVEL.
                </h2>
                <p className="mt-5 text-lg font-bold text-ink/70">
                  Start free. Upgrade when your launches get serious.
                </p>
              </div>
              <Pricing columns={3} className="mt-12">
                <PricingTier
                  name="Sidekick"
                  price="$0"
                  period="forever"
                  description="For testing your next tiny idea."
                  features={[
                    "1 active launch",
                    "AI copy starter",
                    "Basic export",
                  ]}
                  cta={
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={joinWaitlist}
                    >
                      Start free
                    </Button>
                  }
                />
                <PricingTier
                  featured
                  badge="MOST POPULAR"
                  name="Hero"
                  price="$19"
                  period="/month"
                  description="For founders shipping every month."
                  features={[
                    "Unlimited launches",
                    "Full AI launch kit",
                    "Team collaboration",
                    "Priority exports",
                  ]}
                  cta={
                    <Button
                      variant="default"
                      className="w-full"
                      onClick={joinWaitlist}
                    >
                      Choose Hero
                    </Button>
                  }
                />
                <PricingTier
                  name="League"
                  price="$49"
                  period="/month"
                  description="For studios and growing teams."
                  features={[
                    "Everything in Hero",
                    "5 team seats",
                    "Brand workspaces",
                    "Priority support",
                  ]}
                  cta={
                    <Button
                      variant="primary"
                      className="w-full"
                      onClick={joinWaitlist}
                    >
                      Choose League
                    </Button>
                  }
                />
              </Pricing>
            </div>
          </section>

          <section id="faq" className="px-5 py-24 md:px-8">
            <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <Badge variant="blue">Questions?</Badge>
                <h2 className="display text-7xl mt-5">
                  THE FINE PRINT, WITHOUT THE BORING PART.
                </h2>
                <SpeechBubble
                  tone="cream"
                  tail="bottomLeft"
                  className="mt-8 font-bold"
                >
                  Still stuck? Send a signal. We reply faster than a speeding
                  deadline.
                </SpeechBubble>
              </div>
              <FAQ type="single" defaultValue="q1">
                <FAQItem value="q1" title="Is LaunchZap really free to try?">
                  Yes. The Sidekick plan lets you build and export a launch
                  without entering a card.
                </FAQItem>
                <FAQItem value="q2" title="Can I use my own brand voice?">
                  Absolutely. Add examples of your writing and the AI will adapt
                  its tone and vocabulary.
                </FAQItem>
                <FAQItem
                  value="q3"
                  title="Does it replace my project management tool?"
                >
                  Not necessarily. LaunchZap focuses on campaign strategy and
                  assets, then exports cleanly into your existing workflow.
                </FAQItem>
                <FAQItem
                  value="q4"
                  title="Can agencies manage multiple clients?"
                >
                  Yes. The League plan includes separate brand workspaces and
                  reusable launch systems.
                </FAQItem>
              </FAQ>
            </div>
          </section>

          <section className="border-t-4 border-ink bg-gray-300 px-5 py-20 text-center md:px-8">
            <div className="mx-auto max-w-4xl">
              <SoundBadge word="READY?" variant="boom" />
              <h2 className="display section-title mt-5 text-white text-outline">
                MAKE YOUR NEXT LAUNCH IMPOSSIBLE TO IGNORE.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-bold text-white">
                Join ambitious builders turning small ideas into loud, memorable
                launches.
              </p>
              <Button
                variant="default"
                size="lg"
                className="mt-9"
                onClick={joinWaitlist}
              >
                Start your first launch <Rocket size={20} />
              </Button>
            </div>
          </section>

          <footer className="border-t-4 border-ink bg-ink px-5 py-8 text-white md:px-8">
            <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-5 md:flex-row">
              <div>
                <div className="display text-3xl">LAUNCHZAP!</div>
                <p className="text-sm text-white/60">
                  Built with Comixa UI 0.1.5.
                </p>
              </div>
              <div className="flex gap-5 text-sm font-black uppercase">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq">FAQ</a>
                <a href="#" aria-label="GitHub">
                  <GithubIcon size={19} />
                </a>
              </div>
            </div>
          </footer>
        </main>

        <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
          <DialogContent variant="boom" size="lg">
            <DialogHeader>
              <DialogTitle className="display text-5xl">
                SEE LAUNCHZAP IN ACTION!
              </DialogTitle>
              <DialogDescription>
                A quick preview of the workflow your team gets.
              </DialogDescription>
            </DialogHeader>
            <ComicPanel
              variant="night"
              halftone
              className="grid min-h-72 place-items-center p-8 text-center text-white"
            >
              <div>
                <SoundBadge word="PLAY!" variant="pow" />
                <p className="display mt-6 text-4xl">Demo video placeholder</p>
                <p className="mt-3 font-bold text-white/70">
                  Replace this panel with your product video or interactive
                  walkthrough.
                </p>
              </div>
            </ComicPanel>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
              <Button
                variant="default"
                onClick={() => {
                  setDemoOpen(false);
                  joinWaitlist();
                }}
              >
                Start free
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ToastProvider>
    </ComixaProvider>
  );
}
