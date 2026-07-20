import { Badge, Button, Card, CardContent, Ribbon } from "comixa-ui";
import { ArrowUpRight, CalendarDays, Clock3, Sparkles } from "lucide-react";

const ARTICLE_PATH =
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
                <div className="absolute inset-0 bg-[repeating-conic-gradient(#ff7ab6_0_12deg,#ffe566_12deg_24deg,#4d9fff_24deg_36deg)]" />
                <div className="absolute inset-8 grid place-items-center border-4 border-ink bg-paper/90 shadow-comic-lg -rotate-2">
                  <img
                    src="/logo.png"
                    alt="Comixa UI"
                    className="h-28 w-28 rounded-2xl border-4 border-ink object-cover shadow-comic"
                  />
                </div>
                <Ribbon variant="corner" className="absolute left-5 top-5">
                  Featured guide
                </Ribbon>
              </div>
              <CardContent className="flex flex-col justify-center p-7 md:p-11">
                <Badge variant="blue">React tutorial</Badge>
                <h2 className="mt-5 font-comic text-5xl uppercase leading-[.9] md:text-7xl">
                  How to Build a Comic Website in React with Comixa UI
                </h2>
                <p className="mt-5 font-semibold leading-relaxed opacity-65">
                  Build a responsive comic-style website in React using Comixa
                  UI. Learn installation, themes, navigation, hero sections,
                  content blocks, conversion sections, accessibility, SEO, and
                  deployment.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider opacity-60">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    July 20, 2026
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    24 min read
                  </span>
                  <span>Comixa UI Team</span>
                </div>
                <Button
                  size="lg"
                  className="mt-8 self-start"
                  onClick={() => {
                    window.location.href = ARTICLE_PATH;
                  }}
                >
                  Read the guide <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
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
