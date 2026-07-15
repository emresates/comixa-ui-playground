import { Feature, Features } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { BoltIcon, DemoLabel, PlusIcon } from "./shared";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.8 6 6.5.8-4.8 4.4 1.3 6.4L12 16.3l-5.8 3.3 1.3-6.4-4.8-4.4 6.5-.8L12 2z" />
    </svg>
  );
}

export function FeaturesDocs() {
  return (
    <DocPage
      title="Features"
      description="Feature grids and comic cards for product capabilities, benefits, or highlights."
      importCode={`import { Features, Feature } from "comixa-ui";`}
      exampleCode={`<Features columns={3}>
  <Feature
    variant="yellow"
    icon={<BoltIcon />}
    title="Fast setup"
    description="Drop in comic cards with bold ink borders."
  />
  <Feature
    variant="blue"
    title="Responsive"
    description="Choose 1-4 responsive columns."
  />
</Features>`}
      props={
        [
          {
            name: "columns (Features)",
            type: `1 | 2 | 3 | 4`,
            default: `3`,
            description: "Responsive grid columns",
          },
          {
            name: "variant (Feature)",
            type: `"default" | "yellow" | "blue" | "burst" | "outline"`,
            default: `"default"`,
            description: "Feature card style",
          },
          {
            name: "align",
            type: `"left" | "center"`,
            default: `"left"`,
            description: "Content alignment",
          },
          { name: "icon", type: "ReactNode", description: "Optional icon slot" },
          { name: "title", type: "ReactNode", description: "Feature title" },
          {
            name: "description",
            type: "ReactNode",
            description: "Feature description",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <DemoLabel>Variants</DemoLabel>
          <Features columns={3}>
            <Feature
              variant="yellow"
              icon={<BoltIcon className="h-6 w-6" />}
              title="Fast setup"
              description="Drop in comic cards with bold ink borders."
            />
            <Feature
              variant="blue"
              icon={<PlusIcon className="h-6 w-6" />}
              title="Composable"
              description="Use icon, title, description, and any extra children."
            />
            <Feature
              variant="burst"
              icon={<StarIcon className="h-6 w-6" />}
              title="Visual punch"
              description="Burst styling gives important features extra energy."
            />
            <Feature
              variant="default"
              title="Card surface"
              description="A calmer paper card for repeated lists."
            />
            <Feature
              variant="outline"
              title="Outline"
              description="Dashed styling for upcoming or optional items."
            />
            <Feature
              variant="yellow"
              align="center"
              title="Centered"
              description="Use align=center for compact marketing sections."
            />
          </Features>
        </div>
      </div>
    </DocPage>
  );
}
