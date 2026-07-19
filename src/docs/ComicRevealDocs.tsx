import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, ComicReveal } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { ComponentDemoCard } from "./shared";

const variants = ["pop", "slide-up", "panel-wipe", "spotlight"] as const;

export function ComicRevealDocs() {
  const [replay, setReplay] = useState(0);

  return (
    <DocPage
      title="Reveal Animation"
      description="Replayable comic reveal animations for cards, sections, and route content. Reveals can also start when they enter the viewport."
      importCode={`import { ComicReveal } from "comixa-ui";`}
      exampleCode={`<ComicReveal variant="pop" revealKey={id}>
  <Card>Fresh panel</Card>
</ComicReveal>

<ComicReveal variant="panel-wipe" triggerOnView>
  <Card>Reveals when visible</Card>
</ComicReveal>`}
      customExamples
      props={
        [
          {
            name: "variant",
            type: `"pop" | "slide-up" | "panel-wipe" | "spotlight"`,
            default: `"pop"`,
            description: "Reveal animation",
          },
          {
            name: "revealKey",
            type: "React.Key",
            description: "Change to replay the animation",
          },
          {
            name: "delay",
            type: "number",
            default: "0",
            description: "Animation delay in ms",
          },
          {
            name: "duration",
            type: "number",
            default: "520",
            description: "Animation duration in ms",
          },
          {
            name: "triggerOnView",
            type: "boolean",
            default: "false",
            description: "Start reveal when the element enters the viewport",
          },
          {
            name: "once",
            type: "boolean",
            default: "true",
            description: "With triggerOnView, reveal only the first time it enters view",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-5">
        <Button size="sm" onClick={() => setReplay((value) => value + 1)}>
          Replay
        </Button>
        <div className="grid gap-4 md:grid-cols-2">
          {variants.map((variant) => (
            <ComponentDemoCard
              key={variant}
              title={variant}
              code={`<ComicReveal variant="${variant}" revealKey={replay} triggerOnView>
  <Card>Zap panel</Card>
</ComicReveal>`}
            >
              <ComicReveal
                variant={variant}
                revealKey={`${variant}-${replay}`}
                triggerOnView
              >
                <Card variant={variant === "spotlight" ? "panel" : "pop"}>
                  <CardHeader>
                    <CardTitle>Zap panel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-80">
                      This block replays with the selected reveal style.
                    </p>
                  </CardContent>
                </Card>
              </ComicReveal>
            </ComponentDemoCard>
          ))}
        </div>
        <ComponentDemoCard title="Scroll trigger" code={`<ComicReveal variant="panel-wipe" triggerOnView>
  <Card>Revealed down here</Card>
</ComicReveal>`}>
          <div
            className="h-64 overflow-y-auto rounded-xl border-2 border-dashed border-ink bg-paper-cream p-5 shadow-comic-sm"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(26,26,26,.18) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="flex h-[30rem] items-start">
              <span className="rounded-full border-2 border-ink bg-paper px-3 py-1 font-comic text-sm uppercase shadow-comic-sm">
                Scroll to reveal
              </span>
            </div>
            <ComicReveal
              variant="panel-wipe"
              triggerOnView
            >
              <Card variant="speech">
                <CardHeader>
                  <CardTitle>Revealed down here</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-80">
                    This panel starts its reveal when it enters this scroll area.
                  </p>
                </CardContent>
              </Card>
            </ComicReveal>
          </div>
        </ComponentDemoCard>
      </div>
    </DocPage>
  );
}
