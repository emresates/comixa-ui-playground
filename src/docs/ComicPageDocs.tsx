import { useState, type ReactNode } from "react";
import {
  Button,
  ComicPage,
  ComicPanel,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function ComicPageDocs() {
  const [layout, setLayout] = useState<"2-1" | "1-2" | "2-2" | "3">("2-1");
  return (
    <DocPage
      title="ComicPage"
      description="Page strip made of ComicPanel children. Layouts like 2-1 mean two panels on top and one wide below."
      importCode={`import { ComicPage, ComicPanel } from "comixa-ui";`}
      exampleCode={`<ComicPage layout="2-1">\n  <ComicPanel caption="1">Top left</ComicPanel>\n  <ComicPanel caption="2">Top right</ComicPanel>\n  <ComicPanel>Bottom wide</ComicPanel>\n</ComicPage>`}
      props={[
        {
          name: "layout",
          type: `"1" | "1-1" | "2" | "2-1" | "1-2" | "2-2" | "3" | "1-1-1"`,
          default: `"2-1"`,
          description: "Grid arrangement of panels",
        },
        {
          name: "tone",
          type: `"default" | "paper" | "yellow"`,
          default: `"default"`,
          description: "Page background tone",
        },
        {
          name: "variant (Panel)",
          type: `"default" | "cream" | "sky" | "alert" | "pop" | "night"`,
          default: `"default"`,
          description: "Panel fill / mood",
        },
        {
          name: "caption (Panel)",
          type: "ReactNode",
          description: "Optional caption chip on the panel",
        },
      ]}
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {(["2-1", "1-2", "2-2", "3"] as const).map((item) => (
          <Button
            key={item}
            size="sm"
            variant={layout === item ? "pop" : "outline"}
            onClick={() => setLayout(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <ComicPage layout={layout}>
        <ComicPanel variant="sky" caption="1">
          Rooftop landing.
        </ComicPanel>
        <ComicPanel variant="pop" caption="2">
          Cape in the wind.
        </ComicPanel>
        <ComicPanel variant="alert" caption="3">
          The alley lights up!
        </ComicPanel>
        {layout === "2-2" || layout === "3" ? (
          <ComicPanel variant="night" caption="4">
            Footsteps…
          </ComicPanel>
        ) : null}
        {layout === "3" ? (
          <ComicPanel variant="cream" caption="5">
            Turn the page.
          </ComicPanel>
        ) : null}
      </ComicPage>
    </DocPage>
  );
}
