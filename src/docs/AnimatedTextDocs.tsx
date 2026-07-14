import {
  ComicText,
  Highlight,
  LetterReveal,
  Typewriter,
} from "comixa-ui";
import { DocPage } from "./DocPage";
import { DemoLabel } from "./shared";

export function AnimatedTextDocs() {
  return (
    <DocPage
      title="AnimatedText"
      description="Letter reveal, typewriter, comic display text, and marker highlight. Animations replay with the repeat prop (Infinity = forever)."
      importCode={`import {\n  LetterReveal,\n  Typewriter,\n  ComicText,\n  Highlight,\n} from "comixa-ui";`}
      exampleCode={`import {\n  LetterReveal,\n  Typewriter,\n  ComicText,\n  Highlight,\n} from "comixa-ui";\n\nexport function AnimatedTextDemo() {\n  return (\n    <div className="flex flex-col gap-6">\n      {/* Letters stagger in, then restart forever */}\n      <LetterReveal\n        as="h2"\n        className="text-3xl"\n        stagger={35}\n        duration={450}\n        pause={900}\n        repeat={Infinity}\n      >\n        Boom Town\n      </LetterReveal>\n\n      {/* Play the letter reveal only 3 times */}\n      <LetterReveal repeat={3} pause={600}>\n        Limited runs\n      </LetterReveal>\n\n      {/* Typewriter with caret — loops forever */}\n      <Typewriter\n        as="p"\n        className="text-lg"\n        speed={40}\n        pause={1200}\n        repeat={Infinity}\n        caret\n      >\n        Typing with a comic caret…\n      </Typewriter>\n\n      {/* Type once */}\n      <Typewriter repeat={1} caret={false}>\n        One shot only\n      </Typewriter>\n\n      {/* Comic display effects that replay */}\n      <div className="flex flex-wrap items-end gap-4">\n        <ComicText size="lg" effect="pop" tilt="left" repeat={Infinity}>\n          Kapow!\n        </ComicText>\n        <ComicText size="md" tone="red" effect="shake" repeat={Infinity}>\n          Danger\n        </ComicText>\n        <ComicText size="md" tone="blue" tilt="wild" effect="wiggle" repeat={2}>\n          Zap\n        </ComicText>\n      </div>\n\n      {/* Marker wipe highlights */}\n      <p className="text-lg">\n        Ship{" "}\n        <Highlight tone="yellow" repeat={Infinity}>\n          faster\n        </Highlight>{" "}\n        pages with{" "}\n        <Highlight tone="pink" repeat={Infinity}>\n          comic energy\n        </Highlight>\n        .\n      </p>\n    </div>\n  );\n}`}
      props={[
        {
          name: "repeat",
          type: "number | Infinity",
          default: "Infinity",
          description: "How many times the animation plays (all four components)",
        },
        {
          name: "pause",
          type: "number",
          description: "Ms to wait before restarting (LetterReveal / Typewriter / Highlight / ComicText)",
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
          name: "start / once",
          type: `"inView" | "immediate" / boolean`,
          default: `"inView" / true`,
          description: "When the animation first begins",
        },
      ]}
    >
      <div className="flex flex-col gap-6">
        <div>
          <DemoLabel>LetterReveal — repeat forever</DemoLabel>
          <LetterReveal as="h2" className="text-3xl" repeat={Infinity}>
            Boom Town
          </LetterReveal>
        </div>
        <div>
          <DemoLabel>Typewriter — repeat forever</DemoLabel>
          <Typewriter as="p" className="text-lg" speed={40} repeat={Infinity}>
            Typing with a comic caret…
          </Typewriter>
        </div>
        <div>
          <DemoLabel>ComicText — effects replay</DemoLabel>
          <div className="flex flex-wrap items-end gap-4">
            <ComicText size="lg" effect="pop" tilt="left" repeat={Infinity}>
              Kapow!
            </ComicText>
            <ComicText size="md" tone="red" effect="shake" repeat={Infinity}>
              Danger
            </ComicText>
            <ComicText
              size="md"
              tone="blue"
              tilt="wild"
              effect="wiggle"
              repeat={Infinity}
            >
              Zap
            </ComicText>
          </div>
        </div>
        <div>
          <DemoLabel>Highlight — wipe repeats</DemoLabel>
          <p className="text-lg text-ink">
            Ship{" "}
            <Highlight tone="yellow" repeat={Infinity}>
              faster
            </Highlight>{" "}
            pages with{" "}
            <Highlight tone="pink" repeat={Infinity}>
              comic energy
            </Highlight>
            .
          </p>
        </div>
      </div>
    </DocPage>
  );
}
