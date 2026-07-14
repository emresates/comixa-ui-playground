import { type ReactNode } from "react";
import {
  Checkbox,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function CheckboxDocs() {
  return (
    <DocPage
      title="Checkbox"
      description="Checkable option with a thick comic box. Pair with label for forms and filters."
      importCode={`import { Checkbox } from "comixa-ui";`}
      exampleCode={`<Checkbox label="Accept quest" defaultChecked />\n<Checkbox label="Danger" variant="danger" />`}
      props={[
        {
          name: "variant",
          type: `"default" | "primary" | "danger" | "success" | "pink"`,
          default: `"default"`,
          description: "Checked accent color",
        },
        {
          name: "checkboxSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Box and label size",
        },
        {
          name: "label",
          type: "ReactNode",
          description: "Text shown next to the box",
        },
      ]}
    >
      <div className="flex flex-wrap gap-4">
        <Checkbox label="Accept quest" defaultChecked />
        <Checkbox label="Primary" variant="primary" />
        <Checkbox label="Danger" variant="danger" />
        <Checkbox label="Success" variant="success" />
      </div>
    </DocPage>
  );
}
