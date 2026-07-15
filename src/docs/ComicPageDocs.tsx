import { useState, type ReactNode } from "react";
import {
  Button,
  ComicPage,
  ComicPanel,
} from "comixa-ui";
import { DocPage } from "./DocPage";

function ComicHero() {
  return (
    <div className="flex min-h-[18rem] flex-col justify-end">
      <div className="mb-4 inline-flex w-fit -rotate-2 border-2 border-ink bg-comic-red px-3 py-1 font-comic text-sm uppercase tracking-wide text-white shadow-comic-sm">
        Issue #01
      </div>
      <h3 className="max-w-xl font-comic text-5xl uppercase leading-none tracking-wide text-ink md:text-7xl">
        Cosmic punch
      </h3>
      <p className="mt-3 max-w-md text-lg font-bold text-ink/75">
        A single panel with cover energy: hard ink, halftone texture, tilt,
        hover lift, and oversized composition.
      </p>
    </div>
  );
}

export function ComicPageDocs() {
  const [layout, setLayout] = useState<"2-1" | "1-2" | "2-2" | "3">("2-1");
  return (
    <DocPage
      title="ComicPage"
      description="Page strip made of ComicPanel children. ComicPanel can also be a single drop-in cover panel with hero styling, halftone, tilt, hover, and heavy shadow."
      importCode={`import { ComicPage, ComicPanel } from "comixa-ui";`}
      exampleCode={`<ComicPanel
  variant="hero"
  shadow="xl"
  halftone
  tilt
  hover
>
  <ComicHero />
</ComicPanel>

<ComicPage layout="2-1">
  <ComicPanel caption="1">Top left</ComicPanel>
  <ComicPanel caption="2">Top right</ComicPanel>
  <ComicPanel>Bottom wide</ComicPanel>
</ComicPage>`}
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
          type: `"default" | "cream" | "sky" | "alert" | "pop" | "night" | "hero"`,
          default: `"default"`,
          description: "Panel fill / mood",
        },
        {
          name: "shadow (Panel)",
          type: `"none" | "sm" | "md" | "lg" | "xl"`,
          default: `"none"`,
          description: "Comic shadow depth",
        },
        {
          name: "halftone (Panel)",
          type: "boolean",
          default: "false",
          description: "Adds a dotted comic print texture overlay",
        },
        {
          name: "tilt (Panel)",
          type: "boolean",
          default: "false",
          description: "Tilts the panel slightly for cover/poster energy",
        },
        {
          name: "hover (Panel)",
          type: "boolean",
          default: "false",
          description: "Adds hover lift and stronger shadow",
        },
        {
          name: "caption (Panel)",
          type: "ReactNode",
          description: "Optional caption chip on the panel",
        },
      ]}
    >
      <div className="mb-6">
        <ComicPanel variant="hero" shadow="xl" halftone tilt hover>
          <ComicHero />
        </ComicPanel>
      </div>
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
