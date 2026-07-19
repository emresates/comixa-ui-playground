import {
  Select,
  type SelectOption,
} from "comixa-ui";
import { DocPage } from "./DocPage";
import { DemoLabel } from "./shared";

const groupedOptions: SelectOption[] = [
  {
    value: "group-heroes",
    label: <span className="font-comic text-xs uppercase tracking-widest">Heroes</span>,
    disabled: true,
  },
  { value: "captain-zap", label: "Captain Zap" },
  { value: "nova-girl", label: "Nova Girl" },
  { value: "ink-guardian", label: "Ink Guardian" },
  {
    value: "group-villains",
    label: <span className="font-comic text-xs uppercase tracking-widest">Villains</span>,
    disabled: true,
  },
  { value: "doctor-doom", label: "Doctor Doom" },
  { value: "shadow-king", label: "Shadow King" },
  { value: "chaos-witch", label: "Chaos Witch" },
];

const scrollableOptions: SelectOption[] = Array.from({ length: 24 }, (_, index) => ({
  value: `issue-${index + 1}`,
  label: `Comic Issue #${String(index + 1).padStart(2, "0")}`,
}));

const loadingOptions: SelectOption[] = [
  {
    value: "loading",
    label: (
      <span className="inline-flex items-center gap-2" role="status">
        <span className="inline-flex gap-0.5" aria-hidden="true">
          <span className="animate-bounce [animation-delay:-0.3s]">•</span>
          <span className="animate-bounce [animation-delay:-0.15s]">•</span>
          <span className="animate-bounce">•</span>
        </span>
        Loading heroes…
      </span>
    ),
  },
];

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
      exampleCode={`{/* Loading */}
<Select disabled defaultValue="loading" options={loadingOptions} />

{/* Grouped options */}
<Select options={groupedOptions} placeholder="Choose a character" />

{/* Scrollable */}
<Select
  options={longOptions}
  classNames={{ list: "max-h-40 overflow-y-auto" }}
/>

{/* Disabled */}
<Select disabled defaultValue="zap" options={options} />`}
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
          type: `"default" | "ghost" | "filled"`,
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
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disables opening and selection interactions",
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
        <div>
          <DemoLabel>Loading</DemoLabel>
          <div className="max-w-md">
            <Select
              disabled
              defaultValue="loading"
              options={loadingOptions}
              classNames={{ value: "opacity-80" }}
            />
          </div>
        </div>
        <div>
          <DemoLabel>Grouped options</DemoLabel>
          <div className="max-w-md">
            <Select
              placeholder="Choose a character"
              options={groupedOptions}
              classNames={{
                list: "divide-y-2 divide-ink/10",
                option: "disabled:cursor-default disabled:opacity-70",
              }}
            />
          </div>
        </div>
        <div>
          <DemoLabel>Scrollable</DemoLabel>
          <div className="max-w-md">
            <Select
              placeholder="Choose an issue"
              options={scrollableOptions}
              classNames={{ list: "max-h-40 overflow-y-auto overscroll-contain" }}
            />
          </div>
        </div>
        <div>
          <DemoLabel>Disabled</DemoLabel>
          <div className="grid max-w-xl gap-3 sm:grid-cols-2">
            <Select disabled defaultValue="zap" options={options} />
            <Select disabled placeholder="Unavailable" options={options} />
          </div>
        </div>
      </div>
    </DocPage>
  );
}
