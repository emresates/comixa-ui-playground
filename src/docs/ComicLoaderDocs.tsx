import { ComicLoader } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

export function ComicLoaderDocs() {
  return (
    <DocPage
      title="Loader Animation"
      description="Small loading indicators with theme-aware comic motion: dots, burst, panel slide, and speech bubble."
      importCode={`import { ComicLoader } from "comixa-ui";`}
      exampleCode={`<ComicLoader variant="dots" />\n<ComicLoader variant="burst" label="Zap" tone="red" />`}
      props={
        [
          {
            name: "variant",
            type: `"dots" | "burst" | "panel" | "speech"`,
            default: `"dots"`,
            description: "Loader animation style",
          },
          {
            name: "tone",
            type: `"yellow" | "blue" | "red" | "green" | "pink"`,
            default: `"yellow"`,
            description: "Accent color",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: `"md"`,
            description: "Text scale",
          },
          {
            name: "label",
            type: "string",
            default: `"Loading"`,
            description: "Accessible status label and visible text on some variants",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-ink bg-paper p-5 shadow-comic-sm">
          <DemoLabel>Dots</DemoLabel>
          <ComicLoader variant="dots" tone="blue" label="Loading" />
        </div>
        <div className="rounded-xl border-2 border-ink bg-paper p-5 shadow-comic-sm">
          <DemoLabel>Burst</DemoLabel>
          <ComicLoader variant="burst" tone="red" label="Zap" size="sm" />
        </div>
        <div className="rounded-xl border-2 border-ink bg-paper p-5 shadow-comic-sm">
          <DemoLabel>Panel</DemoLabel>
          <ComicLoader variant="panel" tone="green" label="Loading panels" />
        </div>
        <div className="rounded-xl border-2 border-ink bg-paper p-5 shadow-comic-sm">
          <DemoLabel>Speech</DemoLabel>
          <ComicLoader variant="speech" tone="pink" label="Hold on" />
        </div>
      </div>
    </DocPage>
  );
}
