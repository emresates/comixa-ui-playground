import { useState } from "react";
import { Button, ComicCursor } from "comixa-ui";
import { DocPage, type PropRow } from "./DocPage";
import { DemoLabel } from "./shared";

const variants = ["dot", "ring", "spark"] as const;
type CursorVariant = (typeof variants)[number];

export function ComicCursorDocs() {
  const [enabled, setEnabled] = useState(true);
  const [variant, setVariant] = useState<CursorVariant>("dot");

  return (
    <DocPage
      title="ComicCursor"
      description="A global comic cursor follower with soft trailing dots behind the pointer."
      importCode={`import { ComicCursor } from "comixa-ui";`}
      exampleCode={`function Page() {
  return (
    <>
      <ComicCursor variant="dot" trailCount={5} />
      <button data-comixa-cursor-zone>Hover target</button>
    </>
  );
}`}
      props={
        [
          {
            name: "variant",
            type: `"dot" | "ring" | "spark"`,
            default: `"dot"`,
            description: "Follower visual style",
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
              "Add this to an element so the follower grows slightly and fades on hover",
          },
        ] satisfies PropRow[]
      }
    >
      <ComicCursor enabled={enabled} variant={variant} trailCount={6} />
      <div className="flex flex-col gap-5">
        <div>
          <DemoLabel>Controls</DemoLabel>
          <div className="flex flex-wrap gap-3">
            {variants.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={variant === item ? "pop" : "outline"}
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
        <div
          data-comixa-cursor-zone
          className="rounded-xl border-2 border-ink bg-comic-yellow p-8 shadow-comic"
        >
          <h3 className="font-comic text-4xl uppercase tracking-wide">
            Move your mouse
          </h3>
          <p className="mt-2 max-w-xl text-ink-muted">
            The cursor follower starts when this page mounts and leaves a soft
            low-opacity trail behind it. Hover this panel to see it grow and
            fade.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div
            data-comixa-cursor-zone
            className="min-h-32 rounded-xl border-2 border-ink bg-comic-pink p-5 shadow-comic"
          >
            <h3 className="font-comic text-2xl uppercase tracking-wide">
              Trail
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Dots follow the pointer with staggered easing.
            </p>
          </div>
          <div
            data-comixa-cursor-zone
            className="min-h-32 rounded-xl border-2 border-ink bg-comic-blue p-5 text-white shadow-comic"
          >
            <h3 className="font-comic text-2xl uppercase tracking-wide">
              Smooth
            </h3>
            <p className="mt-2 text-sm opacity-75">
              The main dot eases toward the mouse position.
            </p>
          </div>
          <div
            data-comixa-cursor-zone
            className="min-h-32 rounded-xl border-2 border-ink bg-paper p-5 shadow-comic"
          >
            <h3 className="font-comic text-2xl uppercase tracking-wide">
              Hover zone
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Zone elements trigger the grow and opacity response.
            </p>
          </div>
        </div>
      </div>
    </DocPage>
  );
}
