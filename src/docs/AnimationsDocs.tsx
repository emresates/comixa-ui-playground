import { useState } from "react";
import {
  Accessibility,
  Activity,
  Gauge,
  MousePointer2,
  Play,
  RefreshCw,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CursorFollow,
} from "comixa-ui";
import { CodeBlock } from "./DocPage";

const ENTRANCES = [
  {
    id: "fade",
    title: "Fade",
    description: "Introduce secondary content without changing its geometry.",
    className: "docs-anim-fade",
  },
  {
    id: "scale",
    title: "Scale",
    description:
      "Give dialogs, cards, and important reveals a focused entrance.",
    className: "docs-anim-scale",
  },
  {
    id: "slide",
    title: "Slide",
    description:
      "Communicate direction when content enters a flow or sequence.",
    className: "docs-anim-slide",
  },
] as const;

const HOVERS = [
  {
    title: "Tilt",
    description: "Adds playful, poster-like rotation.",
    className: "docs-hover-tilt",
  },
  {
    title: "Lift",
    description: "Signals that a surface is interactive.",
    className: "docs-hover-lift",
  },
  {
    title: "Bounce",
    description: "Adds emphasis to compact actions and stickers.",
    className: "docs-hover-bounce",
  },
] as const;

const ENTRANCE_CODE = `<ComicReveal variant="slide-up" triggerOnView>
  <Card>Revealed content</Card>
</ComicReveal>`;

const CURSOR_CODE = `<>
  <CursorFollow
    variant="comic"
    animated
    showLabel
    trailCount={5}
  />

  <Button data-comixa-cursor-zone>
    Hover target
  </Button>
</>`;

const REDUCED_MOTION_CODE = `@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`;

const PERFORMANCE_TIPS = [
  {
    icon: Gauge,
    title: "Animate transforms",
    body: "Prefer transform and opacity. They usually avoid expensive layout and paint work.",
  },
  {
    icon: Activity,
    title: "Keep motion local",
    body: "Animate the element that changed instead of replaying an entire page or component tree.",
  },
  {
    icon: Zap,
    title: "Use short durations",
    body: "Interaction feedback should feel immediate. Most UI transitions work well around 150–500ms.",
  },
  {
    icon: Accessibility,
    title: "Respect preferences",
    body: "Disable non-essential effects when the user requests reduced motion.",
  },
] as const;

export function AnimationsDocs() {
  const [replay, setReplay] = useState(0);
  const [cursorEnabled, setCursorEnabled] = useState(false);

  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Motion System</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Animations
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Motion in Comixa exists to explain change, confirm interaction, and
          reinforce the comic-inspired personality. It should guide
          attention—not compete with content or slow down a task.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <PhilosophyCard
          icon={Play}
          title="Explain Change"
          body="Entrances make newly added content and state transitions easier to understand."
        />
        <PhilosophyCard
          icon={Sparkles}
          title="Express Character"
          body="Small tilts, lifts, and bursts bring the visual language to interactive moments."
        />
        <PhilosophyCard
          icon={Accessibility}
          title="Remain Optional"
          body="The interface must stay understandable when animations are reduced or removed."
        />
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <SectionTitle eyebrow="Reveal content" title="Entrance Animations" />
          <Button
            size="sm"
            variant="outline"
            onClick={() => setReplay((value) => value + 1)}
          >
            <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
            Replay
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {ENTRANCES.map((item) => (
            <Card
              key={`${item.id}-${replay}`}
              variant="default"
              padding="none"
              className={item.className}
            >
              <CardHeader className="border-b-2 border-ink px-5 py-4">
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <p className="pg-fg-muted text-sm leading-6">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <details className="pg-surface pg-border rounded-xl border-2 p-4 shadow-comic-sm">
          <summary className="pg-fg cursor-pointer font-comic uppercase tracking-wide">
            Show reveal code
          </summary>
          <div className="mt-4">
            <CodeBlock code={ENTRANCE_CODE} />
          </div>
        </details>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle eyebrow="Interaction feedback" title="Hover Effects" />
        <p className="pg-fg-muted max-w-3xl leading-7">
          Hover effects should confirm interactivity. Use one strong response
          per surface so motion remains readable and predictable.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {HOVERS.map((item) => (
            <Card
              key={item.title}
              variant="default"
              padding="none"
              className={`cursor-pointer ${item.className}`}
            >
              <CardContent className="flex min-h-44 flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="pg-surface-muted pg-border flex h-11 w-11 items-center justify-center rounded-lg border-2">
                  <MousePointer2 className="pg-fg h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="pg-fg font-comic text-xl uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="pg-fg-muted text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle eyebrow="Pointer feedback" title="Cursor Effects" />
          <p className="pg-fg-muted leading-7">
            CursorFollow renders a themed pointer that follows movement outside
            React state updates. Elements marked with
            <code className="pg-fg mx-1 font-mono text-sm">
              data-comixa-cursor-zone
            </code>
            activate its label response. Keep the native cursor available when a
            custom follower is decorative rather than essential.
          </p>
          <CodeBlock code={CURSOR_CODE} />
        </div>
        <Card variant="default" padding="none">
          <CardHeader className="flex-row items-center justify-between gap-3 border-b-2 border-ink px-5 py-4">
            <CardTitle>CursorFollow Demo</CardTitle>
            <Button
              size="sm"
              variant={cursorEnabled ? "danger" : "primary"}
              onClick={() => setCursorEnabled((value) => !value)}
            >
              {cursorEnabled ? "Disable" : "Enable"}
            </Button>
          </CardHeader>
          <CardContent className="p-5">
            <CursorFollow
              enabled={cursorEnabled}
              variant="comic"
              animated
              showLabel
              hideNativeCursor={false}
              trailCount={4}
            />
            <div
              data-comixa-cursor-zone
              className="pg-surface-muted pg-border flex min-h-56 items-center justify-center rounded-xl border-2 border-dashed p-6 text-center"
            >
              <div>
                <MousePointer2
                  className="pg-fg mx-auto h-8 w-8"
                  aria-hidden="true"
                />
                <p className="pg-fg mt-3 font-comic text-xl uppercase">
                  Move over this zone
                </p>
                <p className="pg-fg-muted mt-2 text-sm">
                  Enable the demo, then move your pointer here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card variant="default" padding="none">
          <CardHeader className="flex-row items-center gap-3 border-b-2 border-ink px-5 py-4">
            <Accessibility className="pg-fg h-5 w-5" aria-hidden="true" />
            <CardTitle>Reduced Motion</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 p-5">
            <p className="pg-fg-muted text-sm leading-6">
              Respect{" "}
              <code className="pg-fg font-mono">prefers-reduced-motion</code>.
              Remove decorative travel, looping, parallax, and cursor trails
              while preserving instant state changes and visible focus feedback.
            </p>
            <p className="pg-fg-muted text-sm leading-6">
              Never make animation the only way to communicate success, error,
              loading, navigation, or content hierarchy.
            </p>
          </CardContent>
        </Card>
        <CodeBlock code={REDUCED_MOTION_CODE} />
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle
          eyebrow="Ship smooth interfaces"
          title="Performance Tips"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PERFORMANCE_TIPS.map(({ icon: Icon, title, body }) => (
            <PhilosophyCard key={title} icon={Icon} title={title} body={body} />
          ))}
        </div>
        <div className="rounded-xl border-2 border-ink bg-comic-yellow p-5 text-ink shadow-comic-sm">
          <p className="font-comic text-lg uppercase tracking-wide">
            Avoid excessive animation
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6">
            Prioritize the user’s current action. Avoid multiple looping
            effects, large simultaneous reveals, and motion on every hover
            target. If an animation does not explain change, confirm input, or
            improve orientation, remove it.
          </p>
        </div>
      </section>
    </article>
  );
}

function PhilosophyCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
}) {
  return (
    <Card variant="default" padding="none">
      <CardContent className="flex h-full flex-col gap-4 p-5">
        <span className="pg-surface-muted pg-border flex h-11 w-11 items-center justify-center rounded-lg border-2">
          <Icon
            className="pg-fg h-5 w-5"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
        <div>
          <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">
            {title}
          </h2>
          <p className="pg-fg-muted mt-2 text-sm leading-6">{body}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
        {eyebrow}
      </p>
      <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
        {title}
      </h2>
    </div>
  );
}
