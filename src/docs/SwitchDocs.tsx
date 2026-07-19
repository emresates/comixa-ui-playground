import { type ReactNode } from "react";
import {
  Switch,
} from "comixa-ui";
import { DocPage } from "./DocPage";
import { ComponentDemoCard } from "./shared";

export function SwitchDocs() {
  return (
    <DocPage
      title="Switch"
      description="On/off toggle with a comic thumb and ink border. Good for settings and binary choices."
      importCode={`import { Switch } from "comixa-ui";`}
      exampleCode={`<Switch label="Primary" variant="primary" defaultChecked />\n<Switch label="Danger" variant="danger" />`}
      customExamples
      props={[
        {
          name: "variant",
          type: `"default" | "primary" | "danger" | "success" | "pink"`,
          default: `"default"`,
          description: "On-state track color",
        },
        {
          name: "switchSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Track and thumb size",
        },
        {
          name: "checked",
          type: "boolean",
          description: "Controlled on/off state",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          description: "Fires when toggled",
        },
        {
          name: "label",
          type: "ReactNode",
          description: "Text shown beside the switch",
        },
      ]}
    >
      <div className="flex flex-col gap-5">
        <ComponentDemoCard title="Variants" code={`<Switch label="Default" variant="default" defaultChecked />
<Switch label="Primary" variant="primary" defaultChecked />
<Switch label="Danger" variant="danger" defaultChecked />
<Switch label="Success" variant="success" defaultChecked />
<Switch label="Pink" variant="pink" defaultChecked />`}>
          <div className="flex flex-wrap gap-4">
            <Switch label="Default" variant="default" defaultChecked />
            <Switch label="Primary" variant="primary" defaultChecked />
            <Switch label="Danger" variant="danger" defaultChecked />
            <Switch label="Success" variant="success" defaultChecked />
            <Switch label="Pink" variant="pink" defaultChecked />
          </div>
        </ComponentDemoCard>
        <ComponentDemoCard title="Sizes" code={`<Switch label="Small" switchSize="sm" defaultChecked />
<Switch label="Medium" switchSize="md" defaultChecked />
<Switch label="Large" switchSize="lg" defaultChecked />`}>
          <div className="flex flex-wrap items-center gap-4">
            <Switch label="Small" switchSize="sm" defaultChecked />
            <Switch label="Medium" switchSize="md" defaultChecked />
            <Switch label="Large" switchSize="lg" defaultChecked />
          </div>
        </ComponentDemoCard>
      </div>
    </DocPage>
  );
}
