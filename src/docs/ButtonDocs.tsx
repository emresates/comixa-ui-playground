import { Button } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { BoltIcon, ComponentDemoCard, PlusIcon } from "./shared";

export function ButtonDocs() {
  return (
    <DocPage
      title="Button"
      description="Chunky comic CTA for actions. Variants stay semantic; the playground theme picker changes how those variants look."
      importCode={`import { Button } from "comixa-ui";`}
      exampleCode={`<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button loading>Saving...</Button>`}
      customExamples
      props={
        [
          {
            name: "variant",
            type: `"default" | "primary" | "danger" | "success" | "warning" | "outline" | "ghost"`,
            default: `"default"`,
            description:
              "Semantic intent. The active theme controls colors, shadows, and patterns.",
          },
          {
            name: "size",
            type: `"sm" | "md" | "lg"`,
            default: `"md"`,
            description: "Padding and type size (also applies to icon buttons)",
          },
          {
            name: "loading",
            type: "boolean",
            default: "false",
            description: "Shows spinner and disables the button",
          },
          {
            name: "icon",
            type: "boolean",
            default: "false",
            description: "Square icon-only button",
          },
          {
            name: "className",
            type: "string",
            description: "Extra Tailwind classes",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-5">
        <ComponentDemoCard
          title="Variants"
          code={`<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}
        >
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Loading"
          code={`<Button loading>Saving</Button>
<Button variant="primary" loading>Loading</Button>
<Button variant="danger" loading>Boom...</Button>
<Button variant="outline" loading>Wait</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button loading>Saving</Button>
            <Button variant="primary" loading>
              Loading
            </Button>
            <Button variant="danger" loading>
              Boom...
            </Button>
            <Button variant="outline" loading>
              Wait
            </Button>
          </div>
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Icon buttons"
          code={`<Button icon size="sm" aria-label="Add"><PlusIcon /></Button>
<Button icon aria-label="Zap"><BoltIcon /></Button>
<Button icon size="lg" variant="primary" aria-label="Zap large"><BoltIcon /></Button>
<Button icon variant="outline" loading aria-label="Loading icon" />`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button icon size="sm" aria-label="Add">
              <PlusIcon className="h-4 w-4" />
            </Button>
            <Button icon aria-label="Zap">
              <BoltIcon className="h-5 w-5" />
            </Button>
            <Button icon size="lg" variant="primary" aria-label="Zap large">
              <BoltIcon className="h-6 w-6" />
            </Button>
            <Button icon variant="danger" aria-label="Danger">
              <PlusIcon className="h-5 w-5" />
            </Button>
            <Button icon variant="outline" loading aria-label="Loading icon" />
          </div>
        </ComponentDemoCard>

        <ComponentDemoCard
          title="With icon + label"
          code={`<Button><BoltIcon />Zap</Button>
<Button variant="primary"><PlusIcon />Add hero</Button>`}
        >
          <div className="flex flex-wrap gap-3">
            <Button>
              <BoltIcon className="h-4 w-4" />
              Zap
            </Button>
            <Button variant="primary">
              <PlusIcon className="h-4 w-4" />
              Add hero
            </Button>
          </div>
        </ComponentDemoCard>

        <ComponentDemoCard
          title="Sizes"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentDemoCard>
      </div>
    </DocPage>
  );
}
