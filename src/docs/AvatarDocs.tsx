import { type ReactNode } from "react";
import {
  Avatar,
  AvatarGroup,
  Background,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function AvatarDocs() {
  return (
    <DocPage
      title="Avatar"
      description="Character face from initials or image, with comic borders. Stack several with AvatarGroup."
      importCode={`import { Avatar, AvatarGroup } from "comixa-ui";`}
      exampleCode={`<Avatar name="Captain Zap" variant="yellow" />\n<AvatarGroup>\n  <Avatar name="A B" shape="circle" />\n  <Avatar name="C D" shape="circle" />\n</AvatarGroup>`}
      props={[
        {
          name: "variant",
          type: `"default" | "yellow" | "blue" | "red" | "green" | "pink" | "ink"`,
          default: `"default"`,
          description: "Background accent",
        },
        {
          name: "size",
          type: `"sm" | "md" | "lg" | "xl"`,
          default: `"md"`,
          description: "Avatar diameter",
        },
        {
          name: "shape",
          type: `"rounded" | "square" | "circle"`,
          default: `"rounded"`,
          description: "Outer mask",
        },
        {
          name: "name",
          type: "string",
          description: "Used to derive initials",
        },
        {
          name: "src",
          type: "string",
          description: "Optional image URL",
        },
        {
          name: "fallback",
          type: "ReactNode",
          description: "Custom content if no image",
        },
      ]}
    >
      <div className="flex flex-wrap items-center gap-3">
        <Avatar name="Captain Zap" variant="yellow" />
        <Avatar name="Boom Knight" variant="red" size="lg" />
        <Avatar name="Ink Mage" variant="blue" shape="circle" />
        <AvatarGroup>
          <Avatar name="A B" variant="yellow" shape="circle" />
          <Avatar name="C D" variant="blue" shape="circle" />
          <Avatar name="E F" variant="green" shape="circle" />
        </AvatarGroup>
      </div>
    </DocPage>
  );
}
