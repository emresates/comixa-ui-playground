import { useState } from "react";
import { Button, ComicReveal } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

const variants = ["pop", "slide-up", "panel-wipe", "spotlight"] as const;

export function ComicRevealDocs() {
  const [replay, setReplay] = useState(0);

  return (
    <DocPage
      title="ComicReveal"
      description="Replayable comic reveal animations for cards, sections, and route content."
      importCode={`import { ComicReveal } from "comixa-ui";`}
      exampleCode={`<ComicReveal variant="pop" revealKey={id}>
  <Card>Fresh panel</Card>
</ComicReveal>`}
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
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-5">
        <Button size="sm" onClick={() => setReplay((value) => value + 1)}>
          Replay
        </Button>
        <div className="grid gap-4 md:grid-cols-2">
          {variants.map((variant) => (
            <div key={variant}>
              <DemoLabel>{variant}</DemoLabel>
              <ComicReveal
                variant={variant}
                revealKey={`${variant}-${replay}`}
                className="rounded-xl border-2 border-ink bg-comic-yellow p-5 shadow-comic"
              >
                <h3 className="font-comic text-3xl uppercase tracking-wide">
                  Zap panel
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  This block replays with the selected reveal style.
                </p>
              </ComicReveal>
            </div>
          ))}
        </div>
      </div>
    </DocPage>
  );
}
