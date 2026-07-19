import { Select, type SelectOption } from "comixa-ui";
import { DocPage } from "./DocPage";
import { ComponentDemoCard } from "./shared";

const options: SelectOption[] = [
  { value: "zap", label: "Captain Zap" },
  { value: "boom", label: "Boom Knight" },
  { value: "ink", label: "Ink Mage" },
];

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
      customExamples
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
      <div className="grid gap-5">
        <ComponentDemoCard
          title="Variants"
          code={`<Select variant="default" defaultValue="zap" options={options} />
<Select variant="ghost" defaultValue="zap" options={options} />
<Select variant="filled" defaultValue="zap" options={options} />`}
        >
          <div className="grid gap-3 sm:grid-cols-2">
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
        </ComponentDemoCard>

        <ComponentDemoCard
          title="States"
          code={`<Select state="error" defaultValue="boom" options={options} />
<Select state="success" defaultValue="ink" options={options} />`}
        >
          <div className="grid gap-3 sm:grid-cols-2">
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
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Sizes"
          code={`<Select selectSize="sm" defaultValue="zap" options={options} />
<Select selectSize="md" defaultValue="zap" options={options} />
<Select selectSize="lg" defaultValue="zap" options={options} />`}
        >
          <div className="grid gap-3">
            <Select selectSize="sm" defaultValue="zap" options={options} />
            <Select selectSize="md" defaultValue="zap" options={options} />
            <Select selectSize="lg" defaultValue="zap" options={options} />
          </div>
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Loading"
          code={`<Select
  disabled
  defaultValue="loading"
  options={loadingOptions}
  classNames={{ value: "opacity-80" }}
/>`}
        >
          <Select
            disabled
            defaultValue="loading"
            options={loadingOptions}
            classNames={{ value: "opacity-80" }}
          />
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Grouped options"
          code={`const groupedOptions = [
  { value: "group-heroes", label: "Heroes", disabled: true },
  { value: "captain-zap", label: "Captain Zap" },
  { value: "nova-girl", label: "Nova Girl" },
  { value: "group-villains", label: "Villains", disabled: true },
  { value: "shadow-king", label: "Shadow King" },
];

<Select placeholder="Choose a character" options={groupedOptions} />`}
        >
          <Select
            placeholder="Choose a character"
            options={groupedOptions}
            classNames={{
              list: "divide-y-2 divide-ink/10",
              option: "disabled:cursor-default disabled:opacity-70",
            }}
          />
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Scrollable"
          code={`<Select
  placeholder="Choose an issue"
  options={scrollableOptions}
  classNames={{ list: "max-h-40 overflow-y-auto overscroll-contain" }}
/>`}
        >
          <Select
            placeholder="Choose an issue"
            options={scrollableOptions}
            classNames={{ list: "max-h-40 overflow-y-auto overscroll-contain" }}
          />
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Disabled"
          code={`<Select disabled defaultValue="zap" options={options} />
<Select disabled placeholder="Unavailable" options={options} />`}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Select disabled defaultValue="zap" options={options} />
            <Select disabled placeholder="Unavailable" options={options} />
          </div>
        </ComponentDemoCard>
      </div>
    </DocPage>
  );
}
