import { useEffect, useState } from "react";
import { Button, PageTransition } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { ComponentDemoCard } from "./shared";

const variants = ["panel-swipe", "burst", "flip", "speed-lines"] as const;
type TransitionVariant = (typeof variants)[number];

const previewPages = [
  {
    id: "home",
    label: "Home",
    title: "Boom, whole page",
    kicker: "Full viewport",
    tone: "bg-comic-yellow",
    badge: "bg-comic-pink",
    body: "This mini playground behaves like a tiny app shell. Use the nav items to replay the selected page transition between routes.",
  },
  {
    id: "episodes",
    label: "Episodes",
    title: "Fresh chapters",
    kicker: "Route swap",
    tone: "bg-comic-blue text-white",
    badge: "bg-comic-yellow",
    body: "Each navbar click changes the transitionKey, so the content panel enters with the active PageTransition variant.",
  },
  {
    id: "heroes",
    label: "Heroes",
    title: "Hero roster",
    kicker: "Comic UI",
    tone: "bg-comic-green",
    badge: "bg-comic-red text-white",
    body: "The header stays in place while the page body animates, matching how a real routed app usually feels.",
  },
  {
    id: "settings",
    label: "Settings",
    title: "Panel controls",
    kicker: "Tweak",
    tone: "bg-paper",
    badge: "bg-comic-blue text-white",
    body: "Switch the variant outside the preview, then open it again to test the same navigation with a different motion style.",
  },
] as const;
type PreviewPageId = (typeof previewPages)[number]["id"];

export function PageTransitionDocs() {
  const [scene, setScene] = useState(0);
  const [activeVariant, setActiveVariant] =
    useState<TransitionVariant>("panel-swipe");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);
  const [activePreviewPage, setActivePreviewPage] =
    useState<PreviewPageId>("home");

  const playPreview = (variant = activeVariant) => {
    setActiveVariant(variant);
    setActivePreviewPage("home");
    setPreviewKey((value) => value + 1);
    setPreviewOpen(true);
  };

  const selectedPreviewPage =
    previewPages.find((page) => page.id === activePreviewPage) ??
    previewPages[0];

  useEffect(() => {
    if (!previewOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [previewOpen]);

  return (
    <>
      <DocPage
        title="PageTransition"
        description="Comic page enter effects for route swaps, panels, or view changes. Pass a transitionKey to replay the animation when content changes."
        importCode={`import { PageTransition } from "comixa-ui";`}
        exampleCode={`<PageTransition variant="panel-swipe" transitionKey={routeId}>
  <YourPage />
</PageTransition>`}
        customExamples
        props={
          [
            {
              name: "variant",
              type: `"panel-swipe" | "burst" | "flip" | "speed-lines"`,
              default: `"panel-swipe"`,
              description: "Transition style",
            },
            {
              name: "transitionKey",
              type: "React.Key",
              description: "Changes remount and replay the animation",
            },
            {
              name: "duration",
              type: "number",
              default: "420",
              description: "Animation duration in milliseconds",
            },
            {
              name: "padding",
              type: `"none" | "sm" | "md" | "lg"`,
              default: `"md"`,
              description: "Inner spacing",
            },
          ] satisfies PropRow[]
        }
      >
        <div className="flex flex-col gap-5">
          <ComponentDemoCard title="Full page preview" code={`<Button onClick={() => playPreview("panel-swipe")}>
  Open app preview
</Button>`}>
            <div className="flex flex-wrap gap-3">
              {variants.map((variant) => (
                <Button
                  key={variant}
                  size="sm"
                  variant={activeVariant === variant ? "pop" : "outline"}
                  onClick={() => playPreview(variant)}
                >
                  {variant}
                </Button>
              ))}
            </div>
          </ComponentDemoCard>
          <div className="flex flex-wrap gap-3">
            <Button size="sm" onClick={() => playPreview()}>
              Open app preview
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setScene((value) => value + 1)}
            >
              Replay cards
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {variants.map((variant, index) => (
              <ComponentDemoCard
                key={variant}
                title={variant}
                code={`<PageTransition variant="${variant}" transitionKey={scene}>
  <YourPage />
</PageTransition>`}
              >
                <button type="button" className="block w-full text-left" onClick={() => playPreview(variant)}>
                  <PageTransition
                    variant={variant}
                    transitionKey={`${variant}-${scene}`}
                    className={index === scene % variants.length ? "bg-comic-yellow" : ""}
                  >
                    <h3 className="font-comic text-2xl uppercase tracking-wide">Chapter {index + 1}</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink-muted">A route-sized panel with comic timing and a replayable key.</p>
                  </PageTransition>
                </button>
              </ComponentDemoCard>
            ))}
          </div>
        </div>
      </DocPage>

      {previewOpen ? (
        <div className="fixed inset-0 z-50 bg-ink">
          <div className="flex h-full w-full flex-col bg-paper text-ink">
            <div className="flex shrink-0 items-center gap-3 border-b-2 border-ink bg-comic-yellow px-5 py-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg border-2 border-ink bg-paper font-comic text-2xl shadow-comic-sm">
                P
              </div>
              <div className="min-w-0">
                <p className="font-comic text-2xl uppercase leading-none tracking-wide">
                  Page Transition
                </p>
                <p className="text-sm text-ink-muted">{activeVariant}</p>
              </div>
              <nav className="ml-3 hidden flex-wrap gap-2 md:flex">
                {previewPages.map((page) => (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => setActivePreviewPage(page.id)}
                    className={
                      activePreviewPage === page.id
                        ? "rounded-lg border-2 border-ink bg-paper px-3 py-2 font-comic text-sm uppercase tracking-wide shadow-comic-sm"
                        : "rounded-lg border-2 border-transparent px-3 py-2 font-comic text-sm uppercase tracking-wide hover:border-ink hover:bg-paper/50"
                    }
                  >
                    {page.label}
                  </button>
                ))}
              </nav>
              <Button
                size="sm"
                variant="outline"
                className="ml-auto bg-paper"
                onClick={() => setPreviewOpen(false)}
              >
                Close
              </Button>
            </div>
            <nav className="flex shrink-0 gap-2 overflow-x-auto border-b-2 border-ink bg-paper-cream px-4 py-3 md:hidden">
              {previewPages.map((page) => (
                <Button
                  key={page.id}
                  size="sm"
                  variant={activePreviewPage === page.id ? "pop" : "outline"}
                  onClick={() => setActivePreviewPage(page.id)}
                >
                  {page.label}
                </Button>
              ))}
            </nav>
            <div className="grid min-h-0 flex-1 grid-cols-1 overflow-hidden md:grid-cols-[18rem_1fr]">
              <aside className="hidden border-r-2 border-ink bg-paper-cream p-5 md:block">
                <div className="mb-5 border-2 border-ink bg-comic-blue px-3 py-2 font-comic text-sm uppercase tracking-wide text-white shadow-comic-sm">
                  Mini nav
                </div>
                <div className="flex flex-col gap-3">
                  {previewPages.map((page) => (
                    <button
                      key={page.id}
                      type="button"
                      onClick={() => setActivePreviewPage(page.id)}
                      className={
                        activePreviewPage === page.id
                          ? "rounded-lg border-2 border-ink bg-comic-yellow px-4 py-3 text-left font-comic uppercase tracking-wide shadow-comic-sm"
                          : "rounded-lg border-2 border-ink bg-paper px-4 py-3 text-left font-comic uppercase tracking-wide shadow-comic-sm transition-transform hover:-translate-y-0.5"
                      }
                    >
                      {page.label}
                    </button>
                  ))}
                </div>
              </aside>
              <main className="min-h-0 overflow-hidden p-6 md:p-10">
                <PageTransition
                  variant={activeVariant}
                  transitionKey={`${activeVariant}-${activePreviewPage}-${previewKey}`}
                  duration={680}
                  padding="none"
                  className="h-full rounded-none border-0 bg-transparent shadow-none"
                >
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span
                      className={`border-2 border-ink px-3 py-1 font-comic text-sm uppercase tracking-wide shadow-comic-sm ${selectedPreviewPage.badge}`}
                    >
                      {selectedPreviewPage.kicker}
                    </span>
                    <span className="border-2 border-ink bg-comic-blue px-3 py-1 font-comic text-sm uppercase tracking-wide text-white shadow-comic-sm">
                      {activeVariant}
                    </span>
                  </div>
                  <div className="grid h-[calc(100%-4rem)] min-h-[22rem] gap-5 md:grid-cols-3">
                    <section
                      className={`rounded-xl border-2 border-ink p-6 shadow-comic md:col-span-2 ${selectedPreviewPage.tone}`}
                    >
                      <h2 className="max-w-xl font-comic text-5xl uppercase leading-none tracking-wide md:text-7xl">
                        {selectedPreviewPage.title}
                      </h2>
                      <p className="mt-4 max-w-lg text-lg opacity-75">
                        {selectedPreviewPage.body}
                      </p>
                    </section>
                    <section className="rounded-xl border-2 border-ink bg-paper p-5 shadow-comic">
                      <div
                        className={`mb-4 h-36 rounded-lg border-2 border-ink shadow-comic-sm ${selectedPreviewPage.badge}`}
                      />
                      <h3 className="font-comic text-3xl uppercase tracking-wide">
                        {selectedPreviewPage.label}
                      </h3>
                      <p className="mt-2 text-sm text-ink-muted">
                        Click another nav item to watch the current transition.
                      </p>
                    </section>
                  </div>
                </PageTransition>
              </main>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
