import { useState } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle, CursorFollow } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

const variants = [
  "auto",
  "comic",
  "retro",
  "pop-art",
  "manga",
  "vintage",
] as const;
type CursorVariant = (typeof variants)[number];

export function ComicCursorDocs() {
  const [enabled, setEnabled] = useState(true);
  const [variant, setVariant] = useState<CursorVariant>("auto");

  return (
    <DocPage
      title="Cursor"
      description="Theme-ready cursor followers: Comic dot, Retro sticker, Pop Art burst, Manga speed lines, and Vintage stamp."
      importCode={`import { CursorFollow } from "comixa-ui";`}
      exampleCode={`function Page() {
  return (
    <>
      <CursorFollow enabled animated showLabel />
      <button data-comixa-cursor-zone>Hover target</button>
    </>
  );
}`}
      props={
        [
          {
            name: "variant",
            type: `"auto" | "comic" | "retro" | "pop-art" | "manga" | "vintage" | "dot" | "ring" | "spark"`,
            default: `"auto"`,
            description: "Follower visual style. Auto follows data-comixa-theme",
          },
          {
            name: "animated",
            type: "boolean",
            default: "true",
            description: "Smoothly follows the pointer with theme-specific easing",
          },
          {
            name: "showLabel",
            type: "boolean",
            default: "true",
            description: "Shows CLICK / POW / !!! / STAMP labels near hover zones",
          },
          {
            name: "enabled",
            type: "boolean",
            default: "true",
            description: "Mounts/unmounts the cursor follower",
          },
          {
            name: "hideNativeCursor",
            type: "boolean",
            default: "true",
            description: "Hides the browser cursor while the follower is active",
          },
          {
            name: "size",
            type: "number",
            default: "28",
            description: "Follower and trail dot size in pixels",
          },
          {
            name: "trailCount",
            type: "number",
            default: "5",
            description: "How many low-opacity trail dots follow behind",
          },
          {
            name: "data-comixa-cursor-zone",
            type: "attribute",
            description:
              "Add this to an element so the follower shows its theme label on hover",
          },
        ] satisfies PropRow[]
      }
    >
      <CursorFollow
        enabled={enabled}
        animated
        showLabel
        variant={variant}
        trailCount={6}
      />
      <div className="flex flex-col gap-5">
        <div>
          <DemoLabel>Controls</DemoLabel>
          <div className="flex flex-wrap gap-3">
            {variants.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={variant === item ? "default" : "outline"}
                onClick={() => setVariant(item)}
              >
                {item}
              </Button>
            ))}
            <Button
              size="sm"
              variant={enabled ? "danger" : "success"}
              onClick={() => setEnabled((value) => !value)}
            >
              {enabled ? "Disable" : "Enable"}
            </Button>
          </div>
        </div>
        <Card
          data-comixa-cursor-zone
          variant="pop"
          padding="lg"
        >
          <CardHeader>
            <CardTitle>Move your mouse</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="max-w-xl text-sm opacity-80">
              The cursor follower starts when this page mounts and leaves a soft
              low-opacity trail behind it. Hover this panel to see the theme
              label.
            </p>
          </CardContent>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            data-comixa-cursor-zone
            variant="danger"
          >
            <CardHeader>
              <CardTitle>Trail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-80">
                Dots follow the pointer with staggered easing.
              </p>
            </CardContent>
          </Card>
          <Card
            data-comixa-cursor-zone
            variant="panel"
          >
            <CardHeader>
              <CardTitle>Smooth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-80">
                The main dot eases toward the mouse position.
              </p>
            </CardContent>
          </Card>
          <Card
            data-comixa-cursor-zone
            variant="default"
          >
            <CardHeader>
              <CardTitle>Hover zone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm opacity-80">
                Zone elements trigger the grow and opacity response.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DocPage>
  );
}
