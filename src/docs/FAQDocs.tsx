import { type ReactNode } from "react";
import {
  FAQ,
  FAQItem,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function FAQDocs() {
  return (
    <DocPage
      title="FAQ"
      description="Accordion Q&A with ink panels. Single-open by default, or multiple."
      importCode={`import { FAQ, FAQItem } from "comixa-ui";`}
      exampleCode={`<FAQ type="single" defaultValue="a">\n  <FAQItem value="a" title="What is Comixa?">\n    Comic React UI with Tailwind.\n  </FAQItem>\n</FAQ>`}
      props={[
        {
          name: "type",
          type: `"single" | "multiple"`,
          default: `"single"`,
          description: "How many items can be open",
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          description: "Initially open item(s)",
        },
        {
          name: "value / onValueChange",
          type: "controlled",
          description: "Controlled open state",
        },
        {
          name: "title (Item)",
          type: "ReactNode",
          description: "Question line",
        },
        {
          name: "value (Item)",
          type: "string",
          description: "Unique item id",
        },
      ]}
    >
      <FAQ type="single" defaultValue="install">
        <FAQItem value="install" title="How do I install?">
          Run <code className="font-mono">npm i comixa-ui</code> and add the
          Tailwind preset.
        </FAQItem>
        <FAQItem value="tailwind" title="Do I need Tailwind?">
          Yes — Comixa is class-based. Scan{" "}
          <code className="font-mono">node_modules/comixa-ui/dist</code> in
          content.
        </FAQItem>
        <FAQItem value="theme" title="Can I restyle it?">
          Pass className / classNames, or override tokens via the preset.
        </FAQItem>
      </FAQ>
    </DocPage>
  );
}
