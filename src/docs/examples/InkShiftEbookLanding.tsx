import { useState, type FormEvent } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ComicCursor,
  ComicPanel,
  ComicReveal,
  ComixaProvider,
  Divider,
  FAQ,
  FAQItem,
  Highlight,
  Input,
  Ribbon,
  SoundBadge,
  SpeechBubble,
  Stat,
  Stats,
  Sticker,
  Testimonial,
  Testimonials,
  ToastProvider,
  toast,
} from "comixa-ui";
import {
  ArrowRight,
  BookOpen,
  Check,
  Download,
  Mail,
  Menu,
  Quote,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const chapters = [
  {
    no: "01",
    title: "Find Your Creative Edge",
    text: "Turn your taste, curiosity and constraints into a recognizable product style.",
  },
  {
    no: "02",
    title: "Design Systems That Feel Human",
    text: "Build repeatable interfaces without removing all of their personality.",
  },
  {
    no: "03",
    title: "Ship Work People Remember",
    text: "Use motion, narrative and sharp presentation to make projects stick.",
  },
  {
    no: "04",
    title: "Build in Public Without the Noise",
    text: "Share useful progress, create trust and grow a small but real audience.",
  },
  {
    no: "05",
    title: "Turn Skills Into Products",
    text: "Package your knowledge into components, templates and digital products.",
  },
  {
    no: "06",
    title: "Create Your Next Chapter",
    text: "A practical 30-day system for moving from ideas to a published launch.",
  },
];

export function InkShiftEbookLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [email, setEmail] = useState("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast({
        title: "Check your email",
        description: "Enter a valid email address.",
        variant: "danger",
      });
      return;
    }
    toast({
      title: "You’re on the list!",
      description: "Your free chapter is on its way.",
      variant: "success",
    });
    setEmail("");
  };

  return (
    <ComixaProvider theme="pop-art">
      <ToastProvider position="top-right">
        <ComicCursor variant="spark" />
        <main className="min-h-full overflow-hidden">
          <header className="sticky top-0 z-40 border-b-4 border-ink bg-paper/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
              <a href="#top" className="display text-3xl">
                INK<span className="text-comic-pink">SHIFT</span>
              </a>
              <nav className="hidden items-center gap-7 text-sm font-black uppercase md:flex">
                <a href="#inside">What’s inside</a>
                <a href="#author">Author</a>
                <a href="#reviews">Reviews</a>
                <a href="#faq">FAQ</a>
              </nav>
              <div className="hidden md:block">
                <Button size="sm" onClick={() => setPreviewOpen(true)}>
                  Read a sample
                </Button>
              </div>
              <button
                className="grid h-11 w-11 place-items-center border-3 border-ink bg-comic-yellow shadow-comic-sm md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
            {menuOpen && (
              <div className="border-t-3 border-ink bg-comic-yellow px-5 py-5 md:hidden">
                <div className="flex flex-col gap-4 font-black uppercase">
                  {[
                    ["inside", "What’s inside"],
                    ["author", "Author"],
                    ["reviews", "Reviews"],
                    ["faq", "FAQ"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </header>

          <section id="top" className="relative px-5 py-16 md:px-8 md:py-24">
            <div className="halftone absolute inset-0 -z-10 opacity-[.08]" />
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
              <ComicReveal variant="slide-up">
                <div>
                  <SpeechBubble className="mb-7 inline-block bg-white font-black">
                    FOR DESIGNERS, DEVELOPERS & MAKERS
                  </SpeechBubble>
                  <Badge variant="pink" className="mb-5">
                    NEW RELEASE • 2026 EDITION
                  </Badge>
                  <h1 className="display text-6xl leading-[.86] sm:text-7xl lg:text-[7.4rem]">
                    THE CREATIVE{" "}
                    <span className="text-comic-blue">DEVELOPER</span> PLAYBOOK
                  </h1>
                  <p className="mt-7 max-w-2xl text-lg font-bold leading-relaxed text-zinc-700">
                    A practical guide to building memorable interfaces,
                    launching digital products and turning frontend skills into
                    a creative career.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      effect="pop"
                      onClick={() =>
                        toast({
                          title: "Added to cart!",
                          description: "The ebook is ready for checkout.",
                          variant: "success",
                        })
                      }
                    >
                      Get the ebook — $19 <Download size={19} />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => setPreviewOpen(true)}
                    >
                      Read free chapter <BookOpen size={19} />
                    </Button>
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-5 text-sm font-black uppercase">
                    <span className="flex items-center gap-2">
                      <Check size={18} /> 180 pages
                    </span>
                    <span className="flex items-center gap-2">
                      <Check size={18} /> PDF + EPUB
                    </span>
                    <span className="flex items-center gap-2">
                      <Check size={18} /> Lifetime updates
                    </span>
                  </div>
                </div>
              </ComicReveal>

              <ComicReveal variant="pop" delay={150}>
                <div className="relative mx-auto w-full max-w-md px-5 py-8">
                  <div className="absolute -left-2 top-0 z-20">
                    <Sticker variant="yellow">BEST SELLER</Sticker>
                  </div>
                  <div className="absolute -right-1 top-16 z-20">
                    <SoundBadge word="WOW" />
                  </div>
                  <div className="book-cover book-spine relative aspect-[3/4] overflow-hidden border-[5px] border-ink bg-comic-blue p-8 text-white">
                    <div className="halftone absolute inset-0 opacity-20" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div>
                        <span className="inline-block border-3 border-ink bg-comic-yellow px-3 py-1 text-xs font-black text-ink">
                          ISSUE #01
                        </span>
                        <h2 className="display mt-7 text-6xl leading-[.8] [text-shadow:5px_5px_0_#1a1a1a]">
                          THE CREATIVE DEVELOPER PLAYBOOK
                        </h2>
                      </div>
                      <div className="relative mx-auto grid h-40 w-40 place-items-center rounded-full border-[5px] border-ink bg-comic-pink">
                        <Sparkles size={76} />
                        <div className="absolute -inset-6 -z-10 rotate-12 bg-comic-yellow [clip-path:polygon(50%_0%,61%_32%,87%_13%,73%_41%,100%_50%,73%_59%,87%_87%,61%_68%,50%_100%,39%_68%,13%_87%,27%_59%,0_50%,27%_41%,13%_13%,39%_32%)]" />
                      </div>
                      <div>
                        <Divider />
                        <p className="display mt-4 text-2xl">BY [YOUR NAME]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ComicReveal>
            </div>
          </section>

          <div className="overflow-hidden border-y-4 border-ink bg-comic-pink py-4 text-white">
            <div className="marquee flex w-max gap-10 whitespace-nowrap display text-3xl">
              {Array.from({ length: 2 })
                .flatMap(() => [
                  "DESIGN WITH PERSONALITY",
                  "SHIP WITH CONFIDENCE",
                  "BUILD PRODUCTS PEOPLE REMEMBER",
                  "TURN SKILLS INTO INCOME",
                ])
                .map((x, i) => (
                  <span key={i}>✦ {x}</span>
                ))}
            </div>
          </div>

          <section className="px-5 py-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <Stats columns={4}>
                {[
                  ["180+", "Pages"],
                  ["24", "Exercises"],
                  ["12", "Templates"],
                  ["4.9/5", "Reader rating"],
                ].map(([value, label]) => (
                  <Stat key={label} value={value} label={label} />
                ))}
              </Stats>
            </div>
          </section>

          <section
            id="inside"
            className="border-y-4 border-ink bg-comic-yellow px-5 py-24 md:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 max-w-3xl">
                <Badge variant="blue">WHAT’S INSIDE</Badge>
                <h2 className="display mt-4 text-6xl md:text-8xl">
                  SIX CHAPTERS. ONE BIG <Highlight>SHIFT.</Highlight>
                </h2>
                <p className="mt-5 text-lg font-bold text-zinc-700">
                  No vague motivation. Every chapter includes frameworks,
                  examples and practical prompts you can apply immediately.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {chapters.map((c, i) => (
                  <ComicReveal key={c.no} variant="pop" delay={i * 70}>
                    <Card className="h-full bg-paper">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <SoundBadge word={i % 2 ? "ZAP" : "POW"} />
                          <span className="display text-4xl text-comic-pink">
                            #{c.no}
                          </span>
                        </div>
                        <CardTitle className="display mt-5 text-3xl">
                          {c.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-bold leading-relaxed text-zinc-700">
                          {c.text}
                        </p>
                      </CardContent>
                    </Card>
                  </ComicReveal>
                ))}
              </div>
            </div>
          </section>

          <section id="author" className="px-5 py-24 md:px-8">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <ComicPanel className="relative min-h-[420px] overflow-hidden bg-comic-pink p-7">
                <div className="halftone absolute inset-0 opacity-20" />
                <div className="relative flex h-full min-h-[360px] flex-col items-center justify-end">
                  <div className="grid h-52 w-52 place-items-center rounded-full border-[5px] border-ink bg-[#ffbd87] text-7xl">
                    👩‍💻
                  </div>
                  <Ribbon variant="ticket" className="mt-7">
                    AUTHOR PROFILE
                  </Ribbon>
                </div>
              </ComicPanel>
              <div>
                <Badge variant="yellow">MEET THE AUTHOR</Badge>
                <h2 className="display mt-4 text-6xl md:text-8xl">
                  HI, I’M <span className="text-comic-blue">[YOUR NAME]</span>.
                </h2>
                <p className="mt-6 text-lg font-bold leading-relaxed text-zinc-700">
                  I’m a frontend developer and product designer who believes
                  useful interfaces do not have to feel generic. This book
                  distills the systems, experiments and lessons that helped me
                  turn creative coding into products people remember.
                </p>
                <blockquote className="mt-7 border-l-[6px] border-comic-pink pl-5 text-xl font-black italic">
                  “Your taste becomes valuable when you learn how to ship it.”
                </blockquote>
                <div className="mt-8 flex gap-3">
                  <Button variant="outline">Follow the journey</Button>
                  <Button variant="ghost">
                    View portfolio <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section
            id="reviews"
            className="border-y-4 border-ink bg-comic-blue px-5 py-24 text-white md:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 text-center">
                <Badge variant="yellow">READER REVIEWS</Badge>
                <h2 className="display mt-4 text-6xl md:text-8xl">
                  THE VERDICT IS IN!
                </h2>
              </div>
              <Testimonials columns={3}>
                {[
                  [
                    "Exactly the push I needed to package my skills into a real product.",
                    "Alex Morgan",
                    "Frontend Engineer",
                  ],
                  [
                    "Clear, useful and full of examples I could apply the same afternoon.",
                    "Jamie Lee",
                    "Product Designer",
                  ],
                  [
                    "It feels like a creative mentor, a workbook and a launch plan in one.",
                    "Taylor Brooks",
                    "Indie Maker",
                  ],
                ].map(([quote, name, role]) => (
                  <Testimonial
                    key={name}
                    quote={quote}
                    author={name}
                    role={role}
                  />
                ))}
              </Testimonials>
            </div>
          </section>

          <section className="px-5 py-24 md:px-8">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div>
                <Badge variant="pink">GET THE BOOK</Badge>
                <h2 className="display mt-4 text-6xl md:text-8xl">
                  READY TO BUILD YOUR NEXT{" "}
                  <span className="text-comic-blue">CHAPTER?</span>
                </h2>
                <p className="mt-6 max-w-2xl text-lg font-bold text-zinc-700">
                  Download the complete ebook today and get every future update
                  included.
                </p>
                <ul className="mt-7 grid gap-3 font-black">
                  {[
                    "PDF and EPUB formats",
                    "12 reusable worksheets",
                    "Lifetime content updates",
                    "Bonus launch checklist",
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center border-2 border-ink bg-comic-green">
                        <Check size={17} />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <ComicPanel className="bg-comic-yellow p-7 text-center">
                <p className="text-sm font-black uppercase tracking-widest">
                  One-time payment
                </p>
                <div className="display my-4 text-8xl">$19</div>
                <p className="font-bold text-zinc-700">
                  Instant download. No subscription.
                </p>
                <Button
                  size="lg"
                  className="mt-7 w-full"
                  onClick={() =>
                    toast({
                      title: "Checkout opened",
                      description: "Your ebook is ready.",
                      variant: "success",
                    })
                  }
                >
                  Buy the ebook <ArrowRight size={19} />
                </Button>
                <button
                  className="mt-4 text-sm font-black underline"
                  onClick={() => setPreviewOpen(true)}
                >
                  Preview chapter one first
                </button>
              </ComicPanel>
            </div>
          </section>

          <section
            id="faq"
            className="border-t-4 border-ink bg-comic-yellow px-5 py-24 md:px-8"
          >
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <Badge variant="blue">FAQ</Badge>
                <h2 className="display mt-4 text-6xl md:text-8xl">
                  QUESTIONS? ANSWERED.
                </h2>
              </div>
              <FAQ>
                {[
                  [
                    "What formats are included?",
                    "You receive both PDF and EPUB files immediately after purchase.",
                  ],
                  [
                    "Is this only for developers?",
                    "No. The frameworks work for designers, freelancers and digital product makers too.",
                  ],
                  [
                    "Do I get future updates?",
                    "Yes. All future revisions of this edition are included at no additional cost.",
                  ],
                  [
                    "Can I read it on mobile?",
                    "Yes. The EPUB version works with most popular ebook readers and mobile apps.",
                  ],
                ].map(([q, a]) => (
                  <FAQItem key={q} value={q} title={q}>
                    {a}
                  </FAQItem>
                ))}
              </FAQ>
            </div>
          </section>

          <section className="px-5 py-20 md:px-8">
            <ComicPanel className="mx-auto max-w-6xl bg-comic-pink p-7 text-white md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <Badge variant="yellow">FREE CHAPTER</Badge>
                  <h2 className="display mt-4 text-5xl md:text-7xl">
                    GET CHAPTER ONE IN YOUR INBOX.
                  </h2>
                  <p className="mt-3 font-bold">
                    A no-fluff preview plus the creative edge worksheet.
                  </p>
                </div>
                <form
                  onSubmit={subscribe}
                  className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
                >
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="bg-white text-ink"
                  />
                  <Button type="submit" variant="success">
                    <Mail size={18} /> Send it
                  </Button>
                </form>
              </div>
            </ComicPanel>
          </section>

          <footer className="border-t-4 border-ink bg-ink px-5 py-8 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
              <div className="display text-3xl">
                INK<span className="text-comic-pink">SHIFT</span>
              </div>
              <p className="text-sm font-bold">
                © 2026 [YOUR NAME]. Built with Comixa UI.
              </p>
            </div>
          </footer>

          {previewOpen && (
            <div
              className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4"
              onMouseDown={(e) =>
                e.target === e.currentTarget && setPreviewOpen(false)
              }
            >
              <ComicPanel className="max-h-[88vh] w-full max-w-3xl overflow-y-auto bg-paper p-6 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="pink">FREE PREVIEW</Badge>
                    <h3 className="display mt-3 text-5xl">
                      CHAPTER 01: FIND YOUR CREATIVE EDGE
                    </h3>
                  </div>
                  <button
                    className="grid h-10 w-10 shrink-0 place-items-center border-3 border-ink bg-comic-yellow shadow-comic-sm"
                    onClick={() => setPreviewOpen(false)}
                    aria-label="Close preview"
                  >
                    <X />
                  </button>
                </div>
                <Divider className="my-7" />
                <div className="space-y-5 text-base font-bold leading-8 text-zinc-700">
                  <p>
                    Most developers do not struggle because they lack technical
                    skill. They struggle because their work looks
                    interchangeable.
                  </p>
                  <p>
                    Your creative edge is the combination of what you notice,
                    what you care about and how you make decisions under
                    constraints. It is not a visual style you paste onto every
                    project. It is a repeatable point of view.
                  </p>
                  <SpeechBubble className="bg-comic-yellow text-ink">
                    Prompt: Which three interfaces made you stop and look twice
                    this year—and why?
                  </SpeechBubble>
                  <p>
                    In this chapter, you will map your taste, identify repeated
                    patterns and turn them into a practical design direction for
                    your next project.
                  </p>
                </div>
                <Button
                  className="mt-8 w-full"
                  onClick={() =>
                    toast({
                      title: "Full ebook selected",
                      description: "Continue to checkout when ready.",
                      variant: "success",
                    })
                  }
                >
                  Continue with the full ebook <ArrowRight size={18} />
                </Button>
              </ComicPanel>
            </div>
          )}
        </main>
      </ToastProvider>
    </ComixaProvider>
  );
}
