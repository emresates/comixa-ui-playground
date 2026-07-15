import { Ribbon } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

export function RibbonDocs() {
  return (
    <DocPage
      title="Ribbon"
      description="Comic labels for promos, feature callouts, corners, and badges."
      importCode={`import { Ribbon } from "comixa-ui";`}
      exampleCode={`<Ribbon variant="banner">New issue</Ribbon>
<Ribbon variant="corner" tilt="right">Hot</Ribbon>
<Ribbon variant="ticket">Limited</Ribbon>
<Ribbon variant="burst">Pow</Ribbon>`}
      props={
        [
          {
            name: "variant",
            type: `"banner" | "corner" | "ticket" | "burst"`,
            default: `"banner"`,
            description: "Ribbon shape",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: `"md"`,
            description: "Text size",
          },
          {
            name: "tilt",
            type: `"none" | "left" | "right"`,
            default: `"none"`,
            description: "Rotation",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-5">
        <div>
          <DemoLabel>Variants</DemoLabel>
          <div className="flex flex-wrap items-center gap-4">
            <Ribbon variant="banner">New issue</Ribbon>
            <Ribbon variant="corner" tilt="right">
              Hot
            </Ribbon>
            <Ribbon variant="ticket">Limited</Ribbon>
            <Ribbon variant="burst">Pow</Ribbon>
          </div>
        </div>
        <div>
          <DemoLabel>Sizes</DemoLabel>
          <div className="flex flex-wrap items-center gap-4">
            <Ribbon size="sm">Small</Ribbon>
            <Ribbon size="md">Medium</Ribbon>
            <Ribbon size="lg">Large</Ribbon>
          </div>
        </div>
      </div>
    </DocPage>
  );
}
