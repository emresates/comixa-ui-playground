import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Mail,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  ComicCursor,
  ComicPanel,
  ComicReveal,
  Divider,
  Input,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarLink,
  NavbarMenu,
  SoundBadge,
  SpeechBubble,
  Sticker,
  ToastProvider,
  toast,
} from "comixa-ui";
import { posts } from "./blogPosts";

const categories = ["All", "React", "Next.js", "CSS", "Career"] as const;
const toneClass = {
  yellow: "bg-yellow-300",
  pink: "bg-pink-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
  orange: "bg-orange-400",
  red: "bg-red-400",
};

export function PanelPressBlogHome({
  onSelectPost,
}: {
  onSelectPost: (slug: string) => void;
}) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const featured = posts.find((post) => post.featured)!;
  const visible = useMemo(
    () =>
      posts.filter(
        (post) =>
          !post.featured &&
          (category === "All" || post.category === category) &&
          `${post.title} ${post.excerpt}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    if (!email.includes("@"))
      return toast({
        title: "Hold up!",
        description: "Enter a valid email address.",
        variant: "danger",
      });
    toast({
      title: "KAPOW! You're in.",
      description: "The next issue will arrive in your inbox.",
      variant: "success",
    });
    event.currentTarget.reset();
  };

  return (
    <ToastProvider position="bottom-right">
      <ComicCursor variant="spark" trailCount={4} />
      <div className="min-h-full paper-noise">
        <Navbar
          variant="cream"
          position="sticky"
          className="z-40 border-b-4 border-ink px-4"
        >
          <NavbarContent className="mx-auto max-w-7xl">
            <NavbarBrand
              href="#"
              className="font-display text-3xl tracking-wider"
            >
              PANEL<span className="text-pink-500">PRESS!</span>
            </NavbarBrand>
            <NavbarMenu className="hidden gap-6 md:flex">
              <NavbarLink href="#latest" active>
                Latest
              </NavbarLink>
              <NavbarLink href="#topics">Topics</NavbarLink>
              <NavbarLink href="#newsletter">Newsletter</NavbarLink>
            </NavbarMenu>
            <NavbarActions>
              <Button
                size="sm"
                variant="outline"
                className="hidden sm:inline-flex"
                onClick={() =>
                  document
                    .getElementById("newsletter")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Subscribe
              </Button>
              <Button
                icon
                size="sm"
                variant="outline"
                className="md:hidden"
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </NavbarActions>
          </NavbarContent>
        </Navbar>
        {menuOpen && (
          <div className="border-b-4 border-ink bg-yellow-300 p-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 font-bold">
              <a href="#latest" onClick={() => setMenuOpen(false)}>
                Latest
              </a>
              <a href="#topics" onClick={() => setMenuOpen(false)}>
                Topics
              </a>
              <a href="#newsletter" onClick={() => setMenuOpen(false)}>
                Newsletter
              </a>
            </div>
          </div>
        )}

        <main>
          <section className="comic-grid border-b-4 border-ink px-5 py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <ComicReveal variant="slide-up">
                <SpeechBubble
                  tone="cream"
                  size="sm"
                  tail="bottomLeft"
                  className="mb-7 inline-flex"
                >
                  <Sparkles className="mr-2 inline" size={17} />
                  Fresh ideas for curious builders.
                </SpeechBubble>
                <Badge variant="pink" size="lg">
                  THE DEVELOPER CHRONICLES
                </Badge>
                <h1 className="mt-5 font-display text-7xl leading-[.82] tracking-wide sm:text-8xl lg:text-9xl">
                  CODE.
                  <br />
                  <span className="text-blue-500 [text-shadow:4px_4px_0_#111]">
                    DESIGN.
                  </span>
                  <br />
                  SHIP.
                </h1>
                <p className="mt-7 max-w-xl text-lg font-bold leading-relaxed">
                  Practical stories about frontend engineering, expressive
                  interfaces, performance, and building a creative career.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    onClick={() =>
                      document
                        .getElementById("latest")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Read latest <ArrowRight size={18} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("newsletter")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Join 2,400 readers
                  </Button>
                </div>
              </ComicReveal>
              <ComicReveal variant="pop" delay={120}>
                <ComicPanel
                  variant="hero"
                  shadow="xl"
                  tilt
                  halftone
                  className="relative min-h-[430px] overflow-hidden bg-blue-400 p-6"
                >
                  <Sticker
                    variant="yellow"
                    tilt="wild"
                    className="absolute right-4 top-4 z-10"
                  >
                    NEW ISSUE
                  </Sticker>
                  <SoundBadge
                    variant="pow"
                    size="lg"
                    className="absolute left-5 top-10 z-10"
                  />
                  <div className="absolute inset-x-8 bottom-8 border-4 border-ink bg-paper p-6 shadow-[8px_8px_0_#111]">
                    <p className="font-bold uppercase tracking-widest">
                      Weekly field notes
                    </p>
                    <p className="mt-2 font-display text-5xl leading-none">
                      NO FLUFF.
                      <br />
                      JUST USEFUL STUFF.
                    </p>
                  </div>
                </ComicPanel>
              </ComicReveal>
            </div>
          </section>

          <section className="px-3 py-14 sm:px-5 md:py-20 lg:px-6">
            <div className="mx-auto max-w-[1480px]">
              <div className="mb-7 flex items-end justify-between gap-5 px-1 sm:px-0">
                <div>
                  <Badge variant="yellow">EDITOR'S PICK</Badge>
                  <h2 className="mt-3 font-display text-5xl sm:text-7xl">
                    FEATURED STORY
                  </h2>
                </div>
                <div className="hidden items-center gap-3 sm:flex">
                  <span className="font-black uppercase tracking-widest">
                    Cover story
                  </span>
                  <BookOpen size={48} />
                </div>
              </div>
              <button
                type="button"
                onClick={() => onSelectPost(featured.slug)}
                className="group block w-full text-left"
              >
                <ComicPanel
                  variant="cream"
                  shadow="lg"
                  hover
                  className=" overflow-hidden "
                >
                  <div className="comic-grid relative min-h-[340px] overflow-hidden bg-yellow-300 p-6 sm:min-h-[390px] sm:p-8 lg:min-h-[500px]">
                    <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border-4 border-ink bg-pink-400 opacity-90" />
                    <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-4 border-ink bg-blue-400 opacity-90" />
                    <SoundBadge
                      variant="zap"
                      className="absolute left-6 top-6 z-10 sm:left-8 sm:top-8"
                    />
                    <Sticker
                      variant="pink"
                      tilt="right"
                      className="absolute right-6 top-8 z-10"
                    >
                      MUST READ
                    </Sticker>
                    <div className="absolute inset-x-6 bottom-6 z-10 border-4 border-ink bg-paper p-5 shadow-[7px_7px_0_#111] sm:inset-x-8 sm:bottom-8 sm:p-7">
                      <p className="text-xs font-black uppercase tracking-[.22em]">
                        This week's big idea
                      </p>
                      <div className="mt-2 font-display text-5xl leading-[.82] sm:text-7xl">
                        IDEAS
                        <br />
                        WITH IMPACT!
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12">
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="ink">{featured.category}</Badge>
                        <Badge variant="outline">{featured.issue}</Badge>
                        <Badge variant="blue">FEATURED</Badge>
                      </div>
                      <h3 className="mt-5 font-display text-5xl leading-[.92] sm:text-6xl lg:text-7xl xl:text-8xl">
                        {featured.title}
                      </h3>
                      <p className="mt-5 max-w-3xl text-base font-bold leading-relaxed text-zinc-700 sm:text-lg">
                        {featured.excerpt}
                      </p>
                      <div className="mt-6 grid gap-3 border-y-2 border-dashed border-ink py-5 text-sm font-black sm:grid-cols-3">
                        <span>01 · Practical ideas</span>
                        <span>02 · Real examples</span>
                        <span>03 · Actionable steps</span>
                      </div>
                    </div>
                    <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-bold">
                        {featured.date} · {featured.readTime}
                      </span>
                      <span className="flex w-fit items-center gap-2 border-3 border-ink bg-yellow-300 px-5 py-3 font-black uppercase shadow-[4px_4px_0_#111] transition-transform group-hover:translate-x-1">
                        Read story <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </ComicPanel>
              </button>
            </div>
          </section>

          <Divider variant="burst" tone="red" label="NEW STORIES" />
          <section id="latest" className="bg-ink px-5 py-20 text-white">
            <div className="mx-auto max-w-7xl">
              <div
                id="topics"
                className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
              >
                <div>
                  <Badge variant="yellow">THE ARCHIVE</Badge>
                  <h2 className="mt-3 font-display text-6xl sm:text-8xl">
                    LATEST ISSUES
                  </h2>
                </div>
                <div className="flex w-full flex-col gap-3 lg:max-w-2xl lg:flex-row">
                  <div className="relative flex-1">
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink"
                      size={18}
                    />
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search stories..."
                      className="pl-11"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((item) => (
                      <Button
                        key={item}
                        size="sm"
                        variant={category === item ? "pop" : "outline"}
                        className={
                          category === item
                            ? ""
                            : "border-white bg-paper text-ink"
                        }
                        onClick={() => setCategory(item)}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((post, index) => (
                  <ComicReveal
                    key={post.slug}
                    variant="slide-up"
                    delay={index * 65}
                  >
                    <button
                      type="button"
                      onClick={() => onSelectPost(post.slug)}
                      className="group block h-full w-full text-left"
                    >
                      <Card
                        variant="panel"
                        effect="pop"
                        padding="none"
                        className="h-full overflow-hidden bg-paper text-ink"
                      >
                        <div
                          className={`comic-grid relative h-48 ${toneClass[post.tone]} p-5`}
                        >
                          <Badge variant="ink">{post.issue}</Badge>
                          <SoundBadge
                            variant={index % 2 === 0 ? "bam" : "wow"}
                            size="sm"
                            className="absolute bottom-5 right-5"
                          />
                        </div>
                        <CardContent className="p-6">
                          <Badge variant="soft">{post.category}</Badge>
                          <h3 className="mt-4 font-display text-4xl leading-none">
                            {post.title}
                          </h3>
                          <p className="mt-4 font-bold leading-relaxed text-zinc-600">
                            {post.excerpt}
                          </p>
                          <div className="mt-6 flex items-center justify-between text-sm font-black">
                            <span>{post.readTime}</span>
                            <span className="flex items-center gap-1 group-hover:translate-x-1">
                              READ <ArrowRight size={16} />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  </ComicReveal>
                ))}
              </div>
              {visible.length === 0 && (
                <ComicPanel
                  variant="alert"
                  className="mx-auto max-w-xl p-10 text-center text-ink"
                >
                  <SoundBadge variant="crash" />
                  <h3 className="mt-4 font-display text-4xl">
                    NO STORIES FOUND
                  </h3>
                  <p className="mt-2 font-bold">
                    Try another keyword or category.
                  </p>
                </ComicPanel>
              )}
            </div>
          </section>

          <section
            id="newsletter"
            className="comic-grid border-y-4 border-ink bg-pink-400 px-5 py-20"
          >
            <div className="mx-auto max-w-5xl">
              <ComicPanel
                variant="cream"
                shadow="xl"
                className="p-7 md:p-10 lg:items-center"
              >
                <div>
                  <Sticker variant="yellow" tilt="left">
                    EVERY THURSDAY
                  </Sticker>
                  <h2 className="mt-5 font-display text-5xl leading-none sm:text-7xl">
                    GET THE NEXT ISSUE!
                  </h2>
                  <p className="mt-4 max-w-xl text-lg font-bold">
                    One practical frontend story, one design idea, and a handful
                    of useful links. No spam. No supervillains.
                  </p>
                </div>
                <form onSubmit={subscribe} className="space-y-3">
                  <label htmlFor="email" className="font-black uppercase">
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hero@example.com"
                    inputSize="lg"
                  />
                  <Button type="submit" size="lg" className="w-full">
                    <Mail size={18} /> Join the newsletter
                  </Button>
                  <p className="text-sm font-bold">
                    Unsubscribe anytime. Your inbox stays heroic.
                  </p>
                </form>
              </ComicPanel>
            </div>
          </section>
        </main>
        <footer className="bg-paper px-5 py-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 font-bold sm:flex-row">
            <span className="font-display text-3xl">PANEL PRESS!</span>
            <span>Built with Next.js + Comixa UI 0.1.5</span>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
}
