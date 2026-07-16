import { Textarea } from "comixa-ui";
import { DocPage } from "./DocPage";

export function TextareaDocs() {
  return (
    <DocPage
      title="Textarea"
      description="Ink-bordered multiline field for comments, notes, contact forms, and comic scripts."
      importCode={`import { Textarea } from "comixa-ui";`}
      exampleCode={`<Textarea placeholder="Write your story..." />
<Textarea variant="filled" textareaSize="lg" resize="none" />
<Textarea state="error" defaultValue="This needs more punch." />`}
      props={[
        {
          name: "variant",
          type: `"default" | "ghost" | "filled"`,
          default: `"default"`,
          description: "Field surface style",
        },
        {
          name: "textareaSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Minimum height, padding, and text size",
        },
        {
          name: "state",
          type: `"default" | "error" | "success"`,
          default: `"default"`,
          description: "Validation / feedback look",
        },
        {
          name: "resize",
          type: `"none" | "vertical" | "horizontal" | "both"`,
          default: `"vertical"`,
          description: "Native textarea resize direction",
        },
      ]}
    >
      <div className="grid max-w-2xl gap-3">
        <Textarea placeholder="Default textarea..." />
        <Textarea variant="ghost" placeholder="Ghost textarea..." />
        <Textarea
          variant="filled"
          textareaSize="lg"
          placeholder="Filled large textarea..."
        />
        <Textarea state="error" defaultValue="Error state" />
        <Textarea state="success" defaultValue="Success state" resize="none" />
      </div>
    </DocPage>
  );
}
