import { type ReactNode } from "react";
import {
  Button,
  Tooltip,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function TooltipDocs() {
  return (
    <DocPage
      title="Tooltip"
      description="Short tip shown on hover or focus. Anchors to a trigger on the side you choose."
      importCode={`import { Tooltip } from "comixa-ui";`}
      exampleCode={`<Tooltip content="Hello!" side="top" variant="pop">\n  <Button>Hover me</Button>\n</Tooltip>`}
      props={[
        {
          name: "content",
          type: "ReactNode",
          description: "Text or node inside the tip",
        },
        {
          name: "side",
          type: `"top" | "right" | "bottom" | "left"`,
          default: `"top"`,
          description: "Preferred placement around the trigger",
        },
        {
          name: "variant",
          type: `"default" | "pop" | "paper" | "danger" | "success" | "blue"`,
          default: `"default"`,
          description: "Tip color style",
        },
        {
          name: "delay",
          type: "number",
          default: "120",
          description: "Show delay in ms",
        },
      ]}
    >
      <div className="flex flex-wrap gap-3">
        <Tooltip content="Classic tip" side="top">
          <Button size="sm" variant="outline">
            Top
          </Button>
        </Tooltip>
        <Tooltip content="Pow!" variant="pop" side="bottom">
          <Button size="sm" variant="pop">
            Bottom
          </Button>
        </Tooltip>
        <Tooltip content="Danger" variant="danger" side="right">
          <Button size="sm" variant="danger">
            Right
          </Button>
        </Tooltip>
      </div>
    </DocPage>
  );
}
