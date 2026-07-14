import {
  SoundBadge,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function SoundBadgeDocs() {
  return (
    <DocPage
      title="SoundBadge"
      description="POW / BAM / BOOM sound-effect words. Optional burst clip shape for extra comic energy."
      importCode={`import { SoundBadge } from "comixa-ui";`}
      exampleCode={`<SoundBadge variant="pow" />\n<SoundBadge variant="boom" burst />\n<SoundBadge variant="bam" word="SNAP!" />`}
      props={[
        {
          name: "variant",
          type: `"pow" | "bam" | "wow" | "boom" | "zap" | "crash" | "wham" | "bang" | "kapow" | "splash"`,
          default: `"pow"`,
          description: "Preset sound word + color",
        },
        {
          name: "size",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Overall scale",
        },
        {
          name: "burst",
          type: "boolean",
          default: "false",
          description: "Jagged burst clip path",
        },
        {
          name: "word",
          type: "string",
          description: "Custom text instead of the preset",
        },
      ]}
    >
      <div className="flex flex-wrap items-center gap-3">
        <SoundBadge variant="pow" />
        <SoundBadge variant="bam" />
        <SoundBadge variant="wow" />
        <SoundBadge variant="boom" burst />
        <SoundBadge variant="zap" />
        <SoundBadge variant="kapow" size="lg" />
      </div>
    </DocPage>
  );
}
