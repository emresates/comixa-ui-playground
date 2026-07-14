import { useState, type ReactNode } from "react";
import {
  Radio,
  RadioGroup,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function RadioDocs() {
  const [team, setTeam] = useState("red");
  return (
    <DocPage
      title="Radio"
      description="Single-choice control. Wrap options in RadioGroup to lay them out horizontally or vertically."
      importCode={`import { Radio, RadioGroup } from "comixa-ui";`}
      exampleCode={`<RadioGroup orientation="horizontal">\n  <Radio name="team" value="red" label="Red" checked={team === "red"} onChange={() => setTeam("red")} />\n</RadioGroup>`}
      props={[
        {
          name: "variant",
          type: `"default" | "primary" | "danger" | "success" | "pink"`,
          default: `"default"`,
          description: "Selected accent color",
        },
        {
          name: "radioSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Circle and label size",
        },
        {
          name: "label",
          type: "ReactNode",
          description: "Text shown next to the radio",
        },
        {
          name: "orientation (RadioGroup)",
          type: `"horizontal" | "vertical"`,
          default: `"vertical"`,
          description: "How children are stacked",
        },
      ]}
    >
      <RadioGroup orientation="horizontal" className="gap-4">
        <Radio
          name="team"
          value="red"
          label="Red"
          variant="danger"
          checked={team === "red"}
          onChange={() => setTeam("red")}
        />
        <Radio
          name="team"
          value="blue"
          label="Blue"
          variant="primary"
          checked={team === "blue"}
          onChange={() => setTeam("blue")}
        />
        <Radio
          name="team"
          value="green"
          label="Green"
          variant="success"
          checked={team === "green"}
          onChange={() => setTeam("green")}
        />
      </RadioGroup>
    </DocPage>
  );
}
