import { Sticker } from "comixa-ui";
import { DocPage } from "./DocPage";

export function StickerDocs() {
  return (
    <DocPage
      title="Sticker"
      description='Tilted promo stickers for "New", "Hot", limited drops, and other accents.'
      importCode={`import { Sticker } from "comixa-ui";`}
      exampleCode={`<Sticker variant="default">Default</Sticker>
<Sticker variant="yellow">Yellow</Sticker>
<Sticker variant="red">Red</Sticker>
<Sticker variant="blue">Blue</Sticker>
<Sticker variant="green">Green</Sticker>
<Sticker variant="pink">Pink</Sticker>
<Sticker variant="orange">Orange</Sticker>
<Sticker variant="ink">Ink</Sticker>`}
      props={[
        {
          name: "variant",
          type: `"default" | "yellow" | "red" | "blue" | "green" | "pink" | "orange" | "ink"`,
          default: `"yellow"`,
          description: "Background color",
        },
        {
          name: "size",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Overall scale",
        },
        {
          name: "tilt",
          type: `"none" | "left" | "right" | "wild"`,
          default: `"left"`,
          description: "Rotation angle",
        },
        {
          name: "shape",
          type: `"square" | "circle" | "ticket"`,
          default: `"square"`,
          description: "Outer silhouette",
        },
      ]}
    >
      <div className="flex flex-wrap items-center gap-4">
        <Sticker variant="default" tilt="none">
          Default
        </Sticker>
        <Sticker variant="yellow">New!</Sticker>
        <Sticker variant="red" tilt="right" shape="circle">
          Hot
        </Sticker>
        <Sticker variant="blue" tilt="wild" size="lg">
          Limited
        </Sticker>
        <Sticker variant="green" tilt="right">
          Green
        </Sticker>
        <Sticker variant="pink">Pink</Sticker>
        <Sticker variant="orange" tilt="none">
          Orange
        </Sticker>
        <Sticker variant="ink" size="sm">
          Ink
        </Sticker>
        <Sticker variant="ink" size="sm" shape="circle" tilt="right">
          #1
        </Sticker>
      </div>
    </DocPage>
  );
}
