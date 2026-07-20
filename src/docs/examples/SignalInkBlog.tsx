import { useMemo, useState, type FormEvent } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  ComixaProvider,
  Input,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContent,
  NavbarLink,
  NavbarMenu,
  Ribbon,
  ToastProvider,
  toast,
} from "comixa-ui";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  "All",
  "Design",
  "Culture",
  "Technology",
  "Process",
] as const;

const ARTICLES = [
  {
    id: "quiet-interfaces",
    title: "Why quiet interfaces are getting loud again",
    excerpt:
      "A field guide to restraint, rhythm, and the small details that make digital products feel unmistakably human.",
    category: "Design",
    author: "Mara Voss",
    date: "July 18, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    id: "creative-tools",
    title: "The creative tools we keep coming back to",
    excerpt:
      "Six small utilities that survived the hype cycle and became part of our everyday practice.",
    category: "Process",
    author: "Jon Bell",
    date: "July 14, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "internet-texture",
    title: "The internet needs texture",
    excerpt:
      "Perfect grids are useful. Imperfect edges are memorable. The strongest products know when to use both.",
    category: "Culture",
    author: "Leila Park",
    date: "July 10, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "small-ai",
    title: "Small AI, useful AI",
    excerpt:
      "The next wave of AI products may win by doing less, staying focused, and respecting the edges of the task.",
    category: "Technology",
    author: "Nico Reed",
    date: "July 6, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "type-personality",
    title: "Typography is product personality",
    excerpt:
      "Before color, motion, or illustration, type tells readers what kind of room they just walked into.",
    category: "Design",
    author: "Mara Voss",
    date: "June 29, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=85",
  },
] as const;

type Article = (typeof ARTICLES)[number];

function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-wider text-ink/55">
      <span>{article.author}</span>
      <span aria-hidden="true">•</span>
      <span>{article.date}</span>
      <span aria-hidden="true">•</span>
      <span className="inline-flex items-center gap-1">
        <Clock3 className="h-3.5 w-3.5" />
        {article.readTime}
      </span>
    </div>
  );
}

export function SignalInkBlog() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const featured = ARTICLES[0];
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return ARTICLES.slice(1).filter((article) => {
      const matchesCategory =
        category === "All" || article.category === category;
      const matchesQuery =
        !needle ||
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const openArticle = (article: Article) =>
    toast({
      title: article.title,
      description: "Article detail page can be connected next.",
      variant: "info",
    });

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "You're on the list!",
      description: "The next issue will land in your inbox.",
      variant: "success",
    });
    event.currentTarget.reset();
  };

  return (
    <ComixaProvider theme="retro">
      <ToastProvider position="bottom-right">
        <main className="min-h-screen bg-[#f3ead5] text-ink">
          <Navbar
            variant="cream"
            position="sticky"
            className="rounded-none border-x-0 border-t-0 shadow-none"
          >
            <NavbarContent className="mx-auto w-full max-w-7xl px-2">
              <NavbarBrand href="#top">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-9 w-9 rounded-md border-2 border-ink object-cover"
                />
                Signal &amp; Ink
              </NavbarBrand>
              <NavbarMenu>
                <NavbarLink href="#stories">Stories</NavbarLink>
                <NavbarLink href="#popular">Popular</NavbarLink>
                <NavbarLink href="#newsletter">Newsletter</NavbarLink>
              </NavbarMenu>
              <NavbarActions>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById("newsletter")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Subscribe
                </Button>
              </NavbarActions>
            </NavbarContent>
          </Navbar>

          <header
            id="top"
            className="border-b-4 border-ink px-5 py-14 md:py-20"
          >
            <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <Badge variant="red">Independent ideas · Issue 24</Badge>
                <h1 className="mt-5 max-w-4xl font-comic text-7xl uppercase leading-[.78] tracking-wide md:text-9xl">
                  Stories for curious people.
                </h1>
                <p className="mt-6 max-w-2xl text-lg font-bold leading-relaxed text-ink/65">
                  Design, technology, culture, and the messy process behind work
                  worth remembering.
                </p>
              </div>
              <div className="hidden rotate-3 border-4 border-ink bg-comic-yellow p-6 text-center shadow-comic-lg md:block">
                <Sparkles className="mx-auto h-8 w-8" />
                <strong className="mt-2 block font-comic text-3xl uppercase">
                  New every
                  <br />
                  Thursday
                </strong>
              </div>
            </div>
          </header>

          <section className="border-b-4 border-ink px-5 py-8">
            <div className="mx-auto grid max-w-7xl overflow-hidden border-4 border-ink bg-paper shadow-comic-lg lg:grid-cols-[1.2fr_.8fr]">
              <div className="relative min-h-80 border-b-4 border-ink lg:min-h-[34rem] lg:border-b-0 lg:border-r-4">
                <img
                  src={featured.image}
                  alt="Abstract artwork in vivid colors"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <Ribbon variant="corner" className="absolute left-5 top-5">
                  Featured
                </Ribbon>
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <Badge variant="blue">{featured.category}</Badge>
                <h2 className="mt-5 font-comic text-5xl uppercase leading-[.9] md:text-6xl">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base font-semibold leading-relaxed text-ink/65">
                  {featured.excerpt}
                </p>
                <div className="mt-6">
                  <ArticleMeta article={featured} />
                </div>
                <Button
                  size="lg"
                  className="mt-8 self-start"
                  onClick={() => openArticle(featured)}
                >
                  Read the cover story <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </section>

          <section id="stories" className="px-5 py-14 md:py-20">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-6 border-b-4 border-ink pb-7 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-comic text-sm uppercase tracking-[.2em] text-ink/55">
                    The latest dispatches
                  </p>
                  <h2 className="font-comic text-5xl uppercase md:text-6xl">
                    Recent stories
                  </h2>
                </div>
                <label className="relative block w-full max-w-sm">
                  <span className="sr-only">Search stories</span>
                  <Search className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2" />
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search the archive..."
                    className="pl-10"
                  />
                </label>
              </div>
              <div
                className="my-7 flex flex-wrap gap-2"
                aria-label="Filter stories by category"
              >
                {CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    className={`rounded-full border-2 border-ink px-4 py-2 font-comic text-sm uppercase tracking-wide transition ${category === item ? "bg-ink text-paper shadow-comic-sm" : "bg-paper hover:-translate-y-0.5"}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {filtered.length ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filtered.map((article, index) => (
                    <Card
                      key={article.id}
                      variant="default"
                      padding="none"
                      className={index % 3 === 0 ? "md:col-span-2" : ""}
                    >
                      <div
                        className={
                          index % 3 === 0
                            ? "grid md:grid-cols-[.9fr_1.1fr]"
                            : ""
                        }
                      >
                        <img
                          src={article.image}
                          alt=""
                          loading="lazy"
                          className={`w-full border-b-4 border-ink object-cover ${index % 3 === 0 ? "h-full min-h-64 md:border-b-0 md:border-r-4" : "h-56"}`}
                        />
                        <CardContent className="flex flex-col p-6">
                          <Badge variant="yellow">{article.category}</Badge>
                          <h3 className="mt-4 font-comic text-4xl uppercase leading-none">
                            {article.title}
                          </h3>
                          <p className="mt-3 leading-relaxed text-ink/65">
                            {article.excerpt}
                          </p>
                          <div className="mt-5">
                            <ArticleMeta article={article} />
                          </div>
                          <Button
                            variant="ghost"
                            className="mt-6 self-start px-0"
                            onClick={() => openArticle(article)}
                          >
                            Read story <ArrowRight className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="border-4 border-dashed border-ink bg-paper p-12 text-center">
                  <BookOpen className="mx-auto h-10 w-10" />
                  <h3 className="mt-3 font-comic text-3xl uppercase">
                    No stories found
                  </h3>
                  <p className="mt-1 text-ink/60">
                    Try another category or search phrase.
                  </p>
                </div>
              )}
            </div>
          </section>

          <section
            id="popular"
            className="border-y-4 border-ink bg-ink px-5 py-14 text-paper"
          >
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <Badge variant="red">Reader favorites</Badge>
                <h2 className="mt-4 font-comic text-6xl uppercase leading-none">
                  Most read this month.
                </h2>
              </div>
              <ol className="divide-y-2 divide-paper/25">
                {ARTICLES.slice(1, 4).map((article, index) => (
                  <li
                    key={article.id}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5"
                  >
                    <span className="font-comic text-5xl text-comic-yellow">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-comic text-2xl uppercase">
                        {article.title}
                      </h3>
                      <p className="text-sm text-paper/55">
                        {article.category} · {article.readTime}
                      </p>
                    </div>
                    <Button
                      icon
                      size="sm"
                      variant="outline"
                      aria-label={`Read ${article.title}`}
                      onClick={() => openArticle(article)}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="newsletter" className="px-5 py-16 md:py-24">
            <div className="mx-auto max-w-4xl rotate-[-1deg] border-4 border-ink bg-comic-blue p-7 text-white shadow-[12px_12px_0_0_#1a1a1a] md:p-12">
              <Mail className="h-10 w-10" />
              <h2 className="mt-4 font-comic text-6xl uppercase leading-none">
                A better inbox, once a week.
              </h2>
              <p className="mt-4 max-w-2xl font-semibold text-white/75">
                One original essay, three useful links, and no growth-hack
                nonsense.
              </p>
              <form
                onSubmit={subscribe}
                className="mt-7 flex flex-col gap-3 sm:flex-row"
              >
                <Input
                  type="email"
                  required
                  aria-label="Email address"
                  placeholder="you@example.com"
                  className="flex-1 bg-paper text-ink"
                />
                <Button type="submit" size="lg" variant="warning">
                  Join the readers
                </Button>
              </form>
            </div>
          </section>

          <footer className="border-t-4 border-ink bg-paper px-5 py-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-10 w-10 rounded-md border-2 border-ink object-cover"
                />
                <strong className="font-comic text-2xl uppercase">
                  Signal &amp; Ink
                </strong>
              </div>
              <p className="text-sm font-bold text-ink/55">
                Mock editorial content · © 2026
              </p>
            </div>
          </footer>
        </main>
      </ToastProvider>
    </ComixaProvider>
  );
}
