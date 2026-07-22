import { Badge, Button, Card, CardContent, Ribbon } from "comixa-ui";
import { ArrowUpRight, CalendarDays, Clock3, Sparkles } from "lucide-react";

const LATEST_ARTICLE_PATH = "/blog/css-vs-react-ui-components";
const HERO_ARTICLE_PATH = "/blog/react-hero-section-best-practices";
const COMIC_WEBSITE_ARTICLE_PATH =
  "/blog/how-to-build-a-comic-website-in-react-with-comixa-ui";

export function BlogPage() {
  return (
    <article className="pg-surface min-h-full pg-fg">
      <header className="pg-border relative overflow-hidden border-b-4 px-5 py-16 md:px-10 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[24px] border-comic-yellow opacity-70" />
        <div className="relative mx-auto max-w-7xl">
          <Badge variant="red">Comixa UI guides</Badge>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h1 className="font-comic text-7xl uppercase leading-[.78] tracking-wide md:text-[9rem]">
                The Comixa
                <br />
                <span className="text-comic-blue">Blog.</span>
              </h1>
              <p className="pg-fg-muted mt-7 max-w-2xl text-lg font-bold leading-relaxed md:text-xl">
                Tutorials and practical notes for building expressive React
                interfaces.
              </p>
            </div>
            <div className="pg-border hidden rotate-3 border-4 bg-comic-yellow p-6 text-ink shadow-comic-lg md:block">
              <Sparkles className="h-9 w-9" />
              <p className="mt-3 font-comic text-3xl uppercase leading-none">
                Build bold.
                <br />
                Ship clear.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="px-5 py-12 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="pg-fg-muted mb-5 font-comic text-sm uppercase tracking-[.2em]">
            Latest article
          </p>
          <Card variant="default" padding="none" className="overflow-hidden">
            <div className="grid lg:grid-cols-[1.08fr_.92fr]">
              <div className="relative min-h-80 border-b-4 border-ink lg:min-h-[36rem] lg:border-b-0 lg:border-r-4">
                <div className="absolute inset-0 bg-[repeating-conic-gradient(#4d9fff_0_12deg,#ffe566_12deg_24deg,#ff7ab6_24deg_36deg)]" />
                <div className="absolute inset-8 grid place-items-center border-4 border-ink bg-paper/90 shadow-comic-lg -rotate-2">
                  <div className="px-5 text-center text-ink">
                    <div className="flex items-center justify-center gap-4 font-comic text-6xl leading-none md:text-8xl">
                      <span>CSS</span>
                      <span className="text-comic-red">VS</span>
                      <span>REACT</span>
                    </div>
                    <p className="mt-4 font-comic text-3xl uppercase">Control meets reuse.</p>
                  </div>
                </div>
                <Ribbon variant="corner" className="absolute left-5 top-5">
                  Featured guide
                </Ribbon>
              </div>
              <CardContent className="flex flex-col justify-center p-7 md:p-11">
                <Badge variant="blue">Frontend guide</Badge>
                <h2 className="mt-5 font-comic text-5xl uppercase leading-[.9] md:text-7xl">
                  CSS vs React UI Components: Which Should You Choose?
                </h2>
                <p className="mt-5 font-semibold leading-relaxed opacity-65">
                  Should you build every UI component with CSS or use a React UI
                  library? Learn the pros, cons, and when each approach makes
                  sense.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider opacity-60">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    July 22, 2026
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    4 min read
                  </span>
                  <span>Comixa UI Team</span>
                </div>
                <Button
                  size="lg"
                  className="mt-8 self-start"
                  onClick={() => {
                    window.location.href = LATEST_ARTICLE_PATH;
                  }}
                >
                  Read the guide <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          <div className="mt-14">
            <p className="pg-fg-muted mb-5 font-comic text-sm uppercase tracking-[.2em]">
              More from the blog
            </p>
            <div className="grid gap-6">
              <Card variant="default">
                <CardContent className="grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
                  <div>
                    <Badge variant="red">React best practices</Badge>
                    <h2 className="mt-4 font-comic text-4xl uppercase leading-none md:text-5xl">
                      React Hero Section Best Practices (2026)
                    </h2>
                    <p className="mt-4 max-w-3xl font-semibold leading-relaxed opacity-65">
                      Design a high-converting React hero section with clearer
                      headlines, focused CTAs, responsive layout, and accessible
                      content.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider opacity-60">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        July 22, 2026
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />5 min read
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      window.location.href = HERO_ARTICLE_PATH;
                    }}
                  >
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card variant="default">
                <CardContent className="grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
                  <div>
                    <Badge variant="blue">React tutorial</Badge>
                    <h2 className="mt-4 font-comic text-4xl uppercase leading-none md:text-5xl">
                      How to Build a Comic Website in React with Comixa UI
                    </h2>
                    <p className="mt-4 max-w-3xl font-semibold leading-relaxed opacity-65">
                      Build a responsive comic-style website with reusable
                      sections, expressive themes, accessibility, SEO, and
                      production-ready React components.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider opacity-60">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" />
                        July 20, 2026
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5" />6 min read
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      window.location.href = COMIC_WEBSITE_ARTICLE_PATH;
                    }}
                  >
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="pg-border border-t-4 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <span className="font-comic text-2xl uppercase">Comixa Blog</span>
          <span className="pg-fg-muted">© 2026 Comixa UI</span>
        </div>
      </footer>
    </article>
  );
}
