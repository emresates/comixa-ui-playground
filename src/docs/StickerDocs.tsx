import {
  Background,
  Sticker,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function StickerDocs() {
  return (
    <DocPage
      title="Sticker"
      description='Tilted promo stickers for "New", "Hot", limited drops, and other accents.'
      importCode={`import { Sticker } from "comixa-ui";`}
      exampleCode={`<Sticker variant="yellow" tilt="left">New!</Sticker>\n<Sticker variant="red" shape="circle" tilt="right">Hot</Sticker>`}
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
        <Sticker variant="yellow">New!</Sticker>
        <Sticker variant="red" tilt="right" shape="circle">
          Hot
        </Sticker>
        <Sticker variant="blue" tilt="wild" size="lg">
          Limited
        </Sticker>
        <Sticker variant="ink" size="sm">
          #1
        </Sticker>
      </div>
    </DocPage>
  );
}
