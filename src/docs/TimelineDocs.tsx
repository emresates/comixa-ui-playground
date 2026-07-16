import { Timeline, TimelineItem } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

const items = [
  {
    period: "2024 - Today",
    title: "Senior Frontend Dev - TechCo",
    description:
      "Led the design system and rebuilt the product UI with an 8-person team.",
    color: "red" as const,
    tilt: "right" as const,
  },
  {
    period: "2021 - 2024",
    title: "Frontend Developer - StartupX",
    description:
      "Scaled an MVP to 1M users with performance work and component architecture.",
    color: "yellow" as const,
    tilt: "left" as const,
  },
  {
    period: "2019 - 2021",
    title: "Jr. Developer - Agency",
    description:
      "Built campaign pages, motion-heavy launches, and a lot of reusable UI.",
    color: "blue" as const,
    tilt: "right" as const,
  },
  {
    period: "2019",
    title: "Origin Story",
    description:
      "Computer engineering graduate. Bitten by a radioactive keyboard.",
    color: "orange" as const,
    tilt: "left" as const,
  },
];

export function TimelineDocs() {
  return (
    <DocPage
      title="Timeline"
      description="A comic-styled vertical timeline for resumes, product history, launch logs, and story beats."
      importCode={`import { Timeline, TimelineItem } from "comixa-ui";`}
      exampleCode={`<Timeline>
  <TimelineItem
    period="2024 - Today"
    title="Senior Frontend Dev - TechCo"
    description="Led the design system and rebuilt the product UI."
    color="red"
    tilt="right"
  />
  <TimelineItem
    period="2021 - 2024"
    title="Frontend Developer - StartupX"
    description="Scaled an MVP to 1M users."
    color="yellow"
    tilt="left"
  />
</Timeline>`}
      props={
        [
          {
            name: "variant (Timeline)",
            type: `"default" | "compact" | "roomy"`,
            default: `"default"`,
            description: "Vertical spacing between timeline items",
          },
          {
            name: "line (Timeline)",
            type: `"dashed" | "solid" | "none"`,
            default: `"dashed"`,
            description: "Connector line style",
          },
          {
            name: "period",
            type: "ReactNode",
            description: "Small label badge above the item title",
          },
          {
            name: "title",
            type: "ReactNode",
            description: "Main timeline item heading",
          },
          {
            name: "description",
            type: "ReactNode",
            description: "Optional supporting text",
          },
          {
            name: "color",
            type: `"red" | "yellow" | "blue" | "orange" | "pink" | "green"`,
            default: `"yellow"`,
            description: "Marker color",
          },
          {
            name: "tilt",
            type: `"none" | "left" | "right"`,
            default: `"none"`,
            description: "Small comic panel rotation",
          },
        ] satisfies PropRow[]
      }
    >
      <div className="flex flex-col gap-8">
        <div>
          <DemoLabel>Resume timeline</DemoLabel>
          <div
            className="rounded-xl border-2 border-ink bg-paper-cream p-5 shadow-comic-sm sm:p-8"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(26,26,26,.22) 1.2px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          >
            <Timeline variant="roomy">
              {items.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </Timeline>
          </div>
        </div>

        <div>
          <DemoLabel>Compact solid line</DemoLabel>
          <Timeline variant="compact" line="solid">
            <TimelineItem
              period="Phase 01"
              title="Sketch"
              description="Map the rough idea into panels."
              color="pink"
            />
            <TimelineItem
              period="Phase 02"
              title="Ink"
              description="Add strong borders, spacing, and motion."
              color="green"
              tilt="right"
            />
          </Timeline>
        </div>
      </div>
    </DocPage>
  );
}
