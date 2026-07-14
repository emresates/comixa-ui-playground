import {
  Badge,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function BadgeDocs() {
  return (
    <DocPage
      title="Badge"
      description="Small ink-bordered labels for status, categories, and short tags."
      importCode={`import { Badge } from "comixa-ui";`}
      exampleCode={`<Badge variant="yellow">New</Badge>\n<Badge variant="ink" size="lg">Hero</Badge>`}
      props={[
        {
          name: "variant",
          type: `"yellow" | "red" | "blue" | "green" | "pink" | "orange" | "outline" | "ink" | "soft"`,
          default: `"yellow"`,
          description: "Color / emphasis",
        },
        {
          name: "size",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Padding and type size",
        },
      ]}
    >
      <div className="flex flex-wrap gap-2">
        <Badge variant="yellow">Yellow</Badge>
        <Badge variant="red">Red</Badge>
        <Badge variant="blue">Blue</Badge>
        <Badge variant="green">Green</Badge>
        <Badge variant="ink">Ink</Badge>
        <Badge variant="soft">Soft</Badge>
        <Badge size="lg" variant="orange">
          Large
        </Badge>
      </div>
    </DocPage>
  );
}
