import {
  Button,
} from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel, BoltIcon, PlusIcon } from "./shared";

export function ButtonDocs() {
  return (
    <DocPage
      title="Button"
      description="Chunky comic CTA for actions. Use variants for intent, sizes for hierarchy, loading for async work, and icon for square icon-only buttons."
      importCode={`import { Button } from "comixa-ui";`}
      exampleCode={`<Button variant="pop">Pow!</Button>\n<Button loading>Saving…</Button>\n<Button icon aria-label="Add">\n  <PlusIcon />\n</Button>`}
      props={
        [
          {
            name: "variant",
            type: `"pop" | "primary" | "danger" | "success" | "outline" | "ghost"`,
            default: `"pop"`,
            description: "Visual style / intent",
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
            name: "effect",
            type: `"none" | "pop" | "shake" | "wiggle"`,
            default: `"none"`,
            description: "Motion on hover / press",
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
        <div>
          <DemoLabel>Variants</DemoLabel>
          <div className="flex flex-wrap gap-3">
            <Button variant="pop">Pop</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>
        <div>
          <DemoLabel>Loading</DemoLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button loading>Saving</Button>
            <Button variant="primary" loading>
              Loading
            </Button>
            <Button variant="danger" loading>
              Boom…
            </Button>
            <Button variant="outline" loading>
              Wait
            </Button>
          </div>
        </div>
        <div>
          <DemoLabel>Icon buttons</DemoLabel>
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
        </div>
        <div>
          <DemoLabel>With icon + label</DemoLabel>
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
        </div>
        <div>
          <DemoLabel>Sizes</DemoLabel>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
        <div>
          <DemoLabel>Effects</DemoLabel>
          <div className="flex flex-wrap gap-3">
            <Button effect="pop">Pop</Button>
            <Button variant="danger" effect="shake">
              Shake
            </Button>
            <Button variant="primary" effect="wiggle">
              Wiggle
            </Button>
          </div>
        </div>
      </div>
    </DocPage>
  );
}
