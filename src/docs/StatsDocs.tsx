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
      exampleCode={`<Stats columns={4}>\n  <Stat value="12k+" label="Heroes" animate />\n  <Stat value="98%" label="Pow rating" tone="yellow" />\n</Stats>`}
      props={[
        {
          name: "columns (Stats)",
          type: `2 | 3 | 4`,
          default: `4`,
          description: "Grid columns",
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
      ]}
    >
      <Stats columns={4}>
        <Stat value="12k+" label="Heroes" hint="and counting" animate />
        <Stat value="98%" label="Pow rating" tone="yellow" animate />
        <Stat value="240" label="Panels" tone="blue" animate />
        <Stat value="4.9" label="Stars" tone="green" animate />
      </Stats>
    </DocPage>
  );
}
