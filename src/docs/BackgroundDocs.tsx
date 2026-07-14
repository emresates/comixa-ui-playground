import {
  Background,
  ComicPaperBackground,
  DotsBackground,
  ExplosionBackground,
  GridBackground,
  LinesBackground,
  PatternBackground,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function BackgroundDocs() {
  return (
    <DocPage
      title="Background"
      description="Decorative surfaces under your content: dots, grid, lines, pattern, explosion, comic paper."
      importCode={`import {\n  Background,\n  DotsBackground,\n  GridBackground,\n  LinesBackground,\n  PatternBackground,\n  ExplosionBackground,\n  ComicPaperBackground,\n} from "comixa-ui";`}
      exampleCode={`import {\n  Background,\n  DotsBackground,\n  GridBackground,\n  LinesBackground,\n  PatternBackground,\n  ExplosionBackground,\n  ComicPaperBackground,\n} from "comixa-ui";\n\nexport function BackgroundDemo() {\n  return (\n    <div className="grid gap-3 sm:grid-cols-2">\n      {/* dots */}\n      <DotsBackground\n        className="min-h-28 rounded-xl border-2 border-ink p-4"\n        intensity="md"\n      >\n        <p>Dots</p>\n      </DotsBackground>\n\n      {/* grid */}\n      <GridBackground\n        tone="cream"\n        intensity="md"\n        className="min-h-28 rounded-xl border-2 border-ink p-4"\n      >\n        <p>Grid</p>\n      </GridBackground>\n\n      {/* lines */}\n      <LinesBackground\n        intensity="lg"\n        className="min-h-28 rounded-xl border-2 border-ink p-4"\n      >\n        <p>Lines</p>\n      </LinesBackground>\n\n      {/* pattern */}\n      <PatternBackground\n        intensity="sm"\n        className="min-h-28 rounded-xl border-2 border-ink p-4"\n      >\n        <p>Pattern</p>\n      </PatternBackground>\n\n      {/* explosion */}\n      <ExplosionBackground\n        tone="yellow"\n        intensity="md"\n        className="min-h-28 rounded-xl border-2 border-ink p-4"\n      >\n        <p>Explosion</p>\n      </ExplosionBackground>\n\n      {/* comic-paper */}\n      <ComicPaperBackground className="min-h-28 rounded-xl p-4">\n        <p>Comic paper</p>\n      </ComicPaperBackground>\n\n      {/* Same types via Background + variant */}\n      <Background variant="dots" tone="paper" intensity="md" className="p-4">\n        Dots via variant\n      </Background>\n      <Background variant="grid" tone="cream">\n        Grid via variant\n      </Background>\n      <Background variant="lines">Lines via variant</Background>\n      <Background variant="pattern">Pattern via variant</Background>\n      <Background variant="explosion" tone="yellow">\n        Explosion via variant\n      </Background>\n      <Background variant="comic-paper">Comic paper via variant</Background>\n    </div>\n  );\n}`}
      props={[
        {
          name: "variant",
          type: `"dots" | "grid" | "lines" | "pattern" | "explosion" | "comic-paper"`,
          default: `"dots"`,
          description: "Or use named exports",
        },
        {
          name: "tone",
          type: `"paper" | "cream" | "yellow" | "ink"`,
          default: `"paper"`,
          description: "Base fill color",
        },
        {
          name: "intensity",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Pattern density / strength",
        },
      ]}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <DotsBackground className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm">
          <p className="font-comic uppercase">Dots</p>
        </DotsBackground>
        <GridBackground
          tone="cream"
          className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm"
        >
          <p className="font-comic uppercase">Grid</p>
        </GridBackground>
        <LinesBackground className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm">
          <p className="font-comic uppercase">Lines</p>
        </LinesBackground>
        <PatternBackground className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm">
          <p className="font-comic uppercase">Pattern</p>
        </PatternBackground>
        <ExplosionBackground
          tone="yellow"
          className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm"
        >
          <p className="font-comic uppercase">Explosion</p>
        </ExplosionBackground>
        <ComicPaperBackground className="min-h-28 rounded-xl p-4 shadow-comic-sm">
          <p className="font-comic uppercase">Comic paper</p>
        </ComicPaperBackground>
      </div>
    </DocPage>
  );
}
