import { ComicLoader } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { ComponentDemoCard } from "./shared";

export function ComicLoaderDocs() {
  return (
    <DocPage
      title="Loader Animation"
      description="Small loading indicators with theme-aware comic motion: dots, burst, panel slide, and speech bubble."
      importCode={`import { ComicLoader } from "comixa-ui";`}
      exampleCode={`<ComicLoader variant="dots" />\n<ComicLoader variant="burst" label="Zap" tone="red" />`}
      customExamples
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
        <ComponentDemoCard title="Dots" code={`<ComicLoader variant="dots" tone="blue" label="Loading" />`}>
          <ComicLoader variant="dots" tone="blue" label="Loading" />
        </ComponentDemoCard>
        <ComponentDemoCard title="Burst" code={`<ComicLoader variant="burst" tone="red" label="Zap" size="sm" />`}>
          <ComicLoader variant="burst" tone="red" label="Zap" size="sm" />
        </ComponentDemoCard>
        <ComponentDemoCard title="Panel" code={`<ComicLoader variant="panel" tone="green" label="Loading panels" />`}>
          <ComicLoader variant="panel" tone="green" label="Loading panels" />
        </ComponentDemoCard>
        <ComponentDemoCard title="Speech" code={`<ComicLoader variant="speech" tone="pink" label="Hold on" />`}>
          <ComicLoader variant="speech" tone="pink" label="Hold on" />
        </ComponentDemoCard>
      </div>
    </DocPage>
  );
}
