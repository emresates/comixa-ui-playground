import {
  Avatar,
  SpeechBubble,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function SpeechBubbleDocs() {
  return (
    <DocPage
      title="SpeechBubble"
      description="Dialogue bubble with a triangle pointer, or a thought bubble with cloud dots. Place near an Avatar for strips."
      importCode={`import { SpeechBubble } from "comixa-ui";`}
      exampleCode={`<SpeechBubble shape="speech" tone="cream" tail="bottomLeft">\n  Hey! Did you see that?\n</SpeechBubble>\n\n<SpeechBubble shape="thought" tail="bottomRight">\n  Hmm…\n</SpeechBubble>`}
      props={[
        {
          name: "shape",
          type: `"speech" | "thought"`,
          default: `"speech"`,
          description: "Speech pointer vs thought dots",
        },
        {
          name: "tone",
          type: `"default" | "pop" | "danger" | "blue" | "pink" | "cream"`,
          default: `"default"`,
          description: "Bubble fill color",
        },
        {
          name: "size",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Padding and type size",
        },
        {
          name: "tail",
          type: `"bottomLeft" | "bottomRight" | "bottom" | "none"`,
          default: `"bottomLeft"`,
          description: "Where the tail / dots sit",
        },
      ]}
    >
      <div className="flex flex-wrap items-end gap-6">
        <div className="flex items-end gap-2">
          <Avatar name="Zap" variant="yellow" size="sm" shape="circle" />
          <SpeechBubble tone="cream" tail="bottomLeft">
            Hey! Did you see that flash?
          </SpeechBubble>
        </div>
        <div className="flex flex-row-reverse items-end gap-2">
          <Avatar name="Ink" variant="blue" size="sm" shape="circle" />
          <SpeechBubble tone="pop" tail="bottomRight">
            Stay sharp.
          </SpeechBubble>
        </div>
        <SpeechBubble shape="thought">Should I trust them…?</SpeechBubble>
      </div>
    </DocPage>
  );
}
