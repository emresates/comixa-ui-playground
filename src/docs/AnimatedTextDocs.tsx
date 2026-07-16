import { ComicText, Highlight, LetterReveal, Typewriter } from "comixa-ui";
import { DocPage } from "./DocPage";
import { DemoLabel } from "./shared";

export function AnimatedTextDocs() {
  return (
    <DocPage
      title="AnimatedText"
      description="Letter reveal, typewriter, comic display text, and marker highlight. Animations can run immediately or start when they enter the viewport."
      importCode={`import {
  LetterReveal,
  Typewriter,
  ComicText,
  Highlight,
} from "comixa-ui";`}
      exampleCode={`import { ComicText, LetterReveal, Typewriter, Highlight } from "comixa-ui";

export function AnimatedTextDemo() {
  return (
    <div className="flex flex-col gap-6">
      <LetterReveal triggerOnView repeat={Infinity}>
        Boom Town
      </LetterReveal>

      <Typewriter triggerOnView repeat={Infinity}>
        Typing with ink...
      </Typewriter>

      <div className="flex flex-wrap gap-4">
        <ComicText effect="pop" triggerOnView repeat={Infinity}>
          Kapow!
        </ComicText>
        <ComicText effect="shake" triggerOnView repeat={Infinity}>
          Danger
        </ComicText>
        <ComicText effect="wiggle" triggerOnView repeat={Infinity}>
          Zap
        </ComicText>
      </div>

      <p>
        Ship <Highlight triggerOnView repeat={Infinity}>faster</Highlight> pages.
      </p>

      <div className="h-64 overflow-y-auto rounded-xl border-2 border-ink p-5">
        <div className="h-[32rem]">Scroll to the bottom</div>
        <ComicText effect="pop" triggerOnView repeat={Infinity}>
          This triggers down here!
        </ComicText>
      </div>
    </div>
  );
}`}
      props={[
        {
          name: "repeat",
          type: "number | Infinity",
          default: "Infinity",
          description:
            "How many times the animation plays (all four components)",
        },
        {
          name: "pause",
          type: "number",
          description:
            "Ms to wait before restarting (LetterReveal / Typewriter / Highlight / ComicText)",
        },
        {
          name: "LetterReveal: delay / duration / stagger",
          type: "number",
          default: "0 / 450 / 35",
          description: "Timing for each letter",
        },
        {
          name: "Typewriter: speed / caret",
          type: "number / boolean",
          default: "45 / true",
          description: "Typing rate and blinking caret",
        },
        {
          name: "ComicText: size / effect / tilt / tone",
          type: "variants",
          description: "Display style + motion effect",
        },
        {
          name: "Highlight: tone / duration",
          type: `"yellow" | "pink" | "blue" | "green" | "orange"`,
          default: `"yellow" / 700`,
          description: "Marker color and wipe length",
        },
        {
          name: "triggerOnView",
          type: "boolean",
          default:
            "LetterReveal / Typewriter / Highlight: true, ComicText: false",
          description:
            "Starts the animation when the existing animation enters the viewport",
        },
        {
          name: "once",
          type: "boolean",
          default: "true",
          description:
            "With triggerOnView, play only the first time it enters view",
        },
      ]}
    >
      <div className="flex flex-col gap-6">
        <div>
          <DemoLabel>LetterReveal - trigger on view</DemoLabel>
          <LetterReveal
            as="h2"
            className="text-3xl"
            triggerOnView
            repeat={Infinity}
          >
            Boom Town
          </LetterReveal>
        </div>

        <div>
          <DemoLabel>Typewriter - trigger on view</DemoLabel>
          <Typewriter
            as="p"
            className="text-lg"
            speed={40}
            triggerOnView
            repeat={Infinity}
          >
            Typing with a comic caret...
          </Typewriter>
        </div>

        <div>
          <DemoLabel>ComicText - effects trigger on view</DemoLabel>
          <div className="flex flex-wrap items-end gap-4">
            <ComicText
              size="lg"
              effect="pop"
              tilt="left"
              triggerOnView
              repeat={Infinity}
            >
              Kapow!
            </ComicText>
            <ComicText
              size="md"
              tone="red"
              effect="shake"
              triggerOnView
              repeat={Infinity}
            >
              Danger
            </ComicText>
            <ComicText
              size="md"
              tone="blue"
              tilt="wild"
              effect="wiggle"
              triggerOnView
              repeat={Infinity}
            >
              Zap
            </ComicText>
          </div>
        </div>

        <div>
          <DemoLabel>Highlight - trigger on view</DemoLabel>
          <p className="text-lg text-ink">
            Ship{" "}
            <Highlight tone="yellow" triggerOnView repeat={Infinity}>
              faster
            </Highlight>{" "}
            pages with{" "}
            <Highlight tone="pink" triggerOnView repeat={Infinity}>
              comic energy
            </Highlight>
            .
          </p>
        </div>

        <div>
          <DemoLabel>Scrollable trigger demo</DemoLabel>
          <div
            className="h-64 overflow-y-auto rounded-xl border-2 border-dashed border-ink bg-paper-cream p-5 shadow-comic-sm"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(26,26,26,.18) 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="flex h-[32rem] items-start">
              <span className="rounded-full border-2 border-ink bg-paper px-3 py-1 font-comic text-sm uppercase shadow-comic-sm">
                Scroll to the bottom
              </span>
            </div>

            <div className="flex min-h-80 items-end pb-3">
              <ComicText
                size="lg"
                effect="pop"
                tone="green"
                triggerOnView
                repeat={1}
              >
                This triggers down here!
              </ComicText>
            </div>
          </div>
        </div>
      </div>
    </DocPage>
  );
}
