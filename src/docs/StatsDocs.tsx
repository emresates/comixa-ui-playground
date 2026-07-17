import { type ReactNode } from "react";
import {
  Stat,
  Stats,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function StatsDocs() {
  return (
    <DocPage
      title="Stats"
      description="Metric tiles for landing pages. Numeric strings can count up when they enter view."
      importCode={`import { Stats, Stat } from "comixa-ui";`}
      exampleCode={`<Stats columns={4} triggerOnView>
  <Stat value="12k+" label="Heroes" animate />
  <Stat value="98%" label="Pow rating" tone="yellow" animate />
</Stats>`}
      props={[
        {
          name: "columns (Stats)",
          type: `2 | 3 | 4`,
          default: `4`,
          description: "Grid columns",
        },
        {
          name: "triggerOnView (Stats)",
          type: "boolean",
          default: "false",
          description: "Start animated child stats when the grid enters view",
        },
        {
          name: "value",
          type: "ReactNode",
          description: "Big number / metric",
        },
        { name: "label", type: "ReactNode", description: "Metric label" },
        { name: "hint", type: "ReactNode", description: "Small helper line" },
        {
          name: "tone",
          type: `"default" | "cream" | "yellow" | "blue" | "red" | "green" | "pink"`,
          default: `"default"`,
          description: "Tile color",
        },
        {
          name: "animate",
          type: "boolean",
          default: "false",
          description: "Count-up for numeric strings",
        },
        {
          name: "triggerOnView (Stat)",
          type: "boolean",
          default: "animate behavior",
          description: "Start this stat when it enters view",
        },
      ]}
    >
      <div className="flex flex-col gap-5">
        <Stats columns={4}>
          <Stat value="12k+" label="Heroes" hint="and counting" animate />
          <Stat value="98%" label="Pow rating" tone="yellow" animate />
          <Stat value="240" label="Panels" tone="blue" animate />
          <Stat value="4.9" label="Stars" tone="green" animate />
        </Stats>

        <div className="max-h-72 overflow-y-auto rounded-xl border-2 border-ink bg-paper-cream p-4 shadow-comic-sm">
          <div className="flex min-h-72 items-start">
            <p className="font-comic text-sm uppercase tracking-wide text-ink/60">
              Scroll down
            </p>
          </div>
          <Stats columns={3} triggerOnView>
            <Stat value="84%" label="On view" tone="yellow" animate />
            <Stat value="128" label="Triggered" tone="blue" animate />
            <Stat value="7.5k" label="Readers" tone="green" animate />
          </Stats>
        </div>
      </div>
    </DocPage>
  );
}
