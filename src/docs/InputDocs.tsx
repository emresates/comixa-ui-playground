import {
  Input,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function InputDocs() {
  return (
    <DocPage
      title="Input"
      description="Ink-bordered text field for forms. Supports ghost/filled looks plus error and success states."
      importCode={`import { Input } from "comixa-ui";`}
      exampleCode={`<Input placeholder="Hero name..." />\n<Input state="error" defaultValue="Oops" />\n<Input variant="filled" inputSize="lg" />`}
      props={[
        {
          name: "variant",
          type: `"default" | "ghost" | "filled"`,
          default: `"default"`,
          description: "Field surface style",
        },
        {
          name: "inputSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Height and text size",
        },
        {
          name: "state",
          type: `"default" | "error" | "success"`,
          default: `"default"`,
          description: "Validation / feedback look",
        },
      ]}
    >
      <div className="grid max-w-xl gap-3">
        <Input placeholder="Default input..." />
        <Input variant="ghost" placeholder="Ghost..." />
        <Input variant="filled" placeholder="Filled..." />
        <Input state="error" defaultValue="Error state" />
        <Input state="success" defaultValue="Success state" />
      </div>
    </DocPage>
  );
}
