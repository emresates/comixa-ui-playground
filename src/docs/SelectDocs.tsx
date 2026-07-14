import {
  Select,
} from "comixa-ui";
import { DocPage } from "./DocPage";
import { DemoLabel } from "./shared";

export function SelectDocs() {
  const options = [
    { value: "zap", label: "Captain Zap" },
    { value: "boom", label: "Boom Knight" },
    { value: "ink", label: "Ink Mage" },
  ];

  return (
    <DocPage
      title="Select"
      description="Custom listbox dropdown (not the native select). Options open in a comic panel; chevron stays on the right."
      importCode={`import { Select } from "comixa-ui";`}
      exampleCode={`<Select\n  variant="pop"\n  defaultValue="zap"\n  options={[\n    { value: "zap", label: "Captain Zap" },\n    { value: "boom", label: "Boom Knight" },\n  ]}\n/>`}
      props={[
        {
          name: "options",
          type: "SelectOption[]",
          description: "Items shown in the list",
        },
        {
          name: "value",
          type: "string",
          description: "Controlled selected value",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          description: "Fires when selection changes",
        },
        {
          name: "variant",
          type: `"default" | "ghost" | "filled" | "pop"`,
          default: `"default"`,
          description: "Trigger surface style",
        },
        {
          name: "selectSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Trigger height and text",
        },
        {
          name: "state",
          type: `"default" | "error" | "success"`,
          default: `"default"`,
          description: "Validation / feedback look",
        },
        {
          name: "placeholder",
          type: "string",
          default: `"Select..."`,
          description: "Shown when nothing is selected",
        },
        {
          name: "classNames",
          type: "SelectClassNames",
          description: "Slot classes for trigger, list, option",
        },
      ]}
    >
      <div className="flex flex-col gap-5">
        <div>
          <DemoLabel>Variants</DemoLabel>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <Select
              variant="default"
              defaultValue="zap"
              placeholder="Default"
              options={options}
            />
            <Select
              variant="ghost"
              defaultValue="zap"
              placeholder="Ghost"
              options={options}
            />
            <Select
              variant="filled"
              defaultValue="zap"
              placeholder="Filled"
              options={options}
            />
            <Select
              variant="pop"
              defaultValue="zap"
              placeholder="Pop"
              options={options}
            />
          </div>
        </div>
        <div>
          <DemoLabel>States</DemoLabel>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <Select
              variant="default"
              state="error"
              defaultValue="boom"
              options={options}
            />
            <Select
              variant="default"
              state="success"
              defaultValue="ink"
              options={options}
            />
          </div>
        </div>
        <div>
          <DemoLabel>Sizes</DemoLabel>
          <div className="grid max-w-md gap-3">
            <Select selectSize="sm" defaultValue="zap" options={options} />
            <Select selectSize="md" defaultValue="zap" options={options} />
            <Select selectSize="lg" defaultValue="zap" options={options} />
          </div>
        </div>
      </div>
    </DocPage>
  );
}
