import {
  Background,
  ComicPaperBackground,
  DotsBackground,
  ExplosionBackground,
  GridBackground,
  LinesBackground,
  PatternBackground,
  PopArtBackground,
  VintagePaperBackground,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function BackgroundDocs() {
  return (
    <DocPage
      title="Background"
      description="Decorative surfaces under your content: dots, grid, lines, pattern, explosion, comic paper, pop art, and vintage paper."
      importCode={`import {\n  Background,\n  DotsBackground,\n  GridBackground,\n  LinesBackground,\n  PatternBackground,\n  ExplosionBackground,\n  ComicPaperBackground,\n  PopArtBackground,\n  VintagePaperBackground,\n} from "comixa-ui";`}
      exampleCode={`<PopArtBackground className="min-h-28 p-4">\n  Pop art\n</PopArtBackground>\n\n<VintagePaperBackground className="min-h-28 p-4">\n  Vintage paper\n</VintagePaperBackground>`}
      props={[
        {
          name: "variant",
          type: `"dots" | "grid" | "lines" | "pattern" | "explosion" | "comic-paper" | "pop-art" | "vintage-paper"`,
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
        <PopArtBackground
          tone="yellow"
          className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm"
        >
          <p className="font-comic uppercase">Pop art</p>
        </PopArtBackground>
        <VintagePaperBackground
          tone="cream"
          className="min-h-28 rounded-xl border-2 border-ink p-4 shadow-comic-sm"
        >
          <p className="font-comic uppercase">Vintage paper</p>
        </VintagePaperBackground>
      </div>
    </DocPage>
  );
}
