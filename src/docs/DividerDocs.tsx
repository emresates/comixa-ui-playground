import { type ReactNode } from "react";
import {
  Divider,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function DividerDocs() {
  return (
    <DocPage
      title="Divider"
      description="Comic section rules — solid, dashed, zigzag, dots, or burst — with an optional center label."
      importCode={`import { Divider } from "comixa-ui";`}
      exampleCode={`<Divider variant="dashed" label="Chapter 2" />\n<Divider variant="zigzag" tone="red" />`}
      props={[
        {
          name: "variant",
          type: `"solid" | "dashed" | "zigzag" | "dots" | "burst"`,
          default: `"solid"`,
          description: "Line / pattern style",
        },
        {
          name: "tone",
          type: `"ink" | "muted" | "yellow" | "red" | "blue"`,
          default: `"ink"`,
          description: "Color of the rule",
        },
        {
          name: "label",
          type: "ReactNode",
          description: "Optional chip in the middle",
        },
      ]}
    >
      <div className="flex flex-col gap-3">
        <Divider variant="solid" />
        <Divider variant="dashed" label="Chapter 2" />
        <Divider variant="zigzag" tone="red" />
        <Divider variant="dots" tone="blue" label="Meanwhile" />
        <Divider variant="burst" tone="yellow" />
      </div>
    </DocPage>
  );
}
