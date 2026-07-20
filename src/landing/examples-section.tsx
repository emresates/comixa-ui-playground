import { useState, type ComponentType } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "comixa-ui";
import { ComixaPopArtExperience } from "../docs/examples/ComixaPopArtExperience";
import { ComixaRetroFM79 } from "../docs/examples/ComixaRetroFM79";
import { ComixaVintageGildedLedger } from "../docs/examples/ComixaVintageGildedLedger";
import { PanelPressBlog } from "../docs/examples/PanelPressBlog";

type Example = {
  theme: string;
  type: string;
  title: string;
  mark: string;
  cursor: string;
  previewTitle: string;
  component: ComponentType;
};

const examples: readonly Example[] = [
  {
    theme: "RETRO",
    type: "RADIO ARCHIVE",
    title: "FM 79",
    mark: "79",
    cursor: "TUNE",
    previewTitle: "FM 79 Retro Radio",
    component: ComixaRetroFM79,
  },
  {
    theme: "MANGA",
    type: "WEEKLY STORIES",
    title: "INK//VERSE",
    mark: "墨",
    cursor: "READ",
    previewTitle: "Panel Press Blog",
    component: PanelPressBlog,
  },
  {
    theme: "VINTAGE",
    type: "CURIO CABINET",
    title: "THE LEDGER",
    mark: "L",
    cursor: "OPEN",
    previewTitle: "The Gilded Ledger",
    component: ComixaVintageGildedLedger,
  },
  {
    theme: "POP ART",
    type: "CULTURE DROP",
    title: "POP//DROP",
    mark: "!",
    cursor: "POW",
    previewTitle: "POP//DROP Experience",
    component: ComixaPopArtExperience,
  },
];

export function ExamplesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeExample =
    activeIndex === null ? null : examples[activeIndex] ?? null;
  const ActivePreview = activeExample?.component;

  return (
    <section id="examples" className="section examples-section shell-pad">
      <div className="section-heading">
        <div>
          <span className="eyebrow">BUILT WITH COMIXA / 03</span>
          <h2>Proof, not promises.</h2>
        </div>
        <p>Four distinct worlds. One component foundation.</p>
      </div>
      <div className="example-grid">
        {examples.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={`example-card example-${index + 1}`}
            data-cursor={item.cursor}
            data-cursor-shape={
              index === 3 ? "burst" : index === 1 ? "diamond" : "square"
            }
            aria-label={`Open ${item.previewTitle} preview`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="example-meta">
              <span>{item.theme}</span>
              <span>0{index + 1}</span>
            </div>
            <div className="example-visual">
              <div className="example-mark">{item.mark}</div>
              <div className="scanline" />
            </div>
            <div className="example-copy">
              <small>{item.type}</small>
              <h3>{item.title}</h3>
              <span>Open experience ↗</span>
            </div>
          </button>
        ))}
      </div>

      <Dialog
        open={Boolean(activeExample)}
        onOpenChange={(open) => !open && setActiveIndex(null)}
      >
        <DialogContent
          variant="panel"
          effect="none"
          showClose
          className="example-preview-dialog landing-example-dialog !flex !h-[calc(100dvh-2rem)] !w-[calc(100vw-2rem)] !max-w-7xl !flex-col !overflow-hidden !p-0"
        >
          <DialogHeader className="landing-example-dialog-header shrink-0 border-b-4 border-ink bg-comic-yellow px-5 py-4 pr-14">
            <DialogTitle>{activeExample?.previewTitle}</DialogTitle>
            <DialogDescription>
              Full-page preview built with Comixa components.
            </DialogDescription>
          </DialogHeader>
          <div className="landing-example-dialog-body min-h-0 flex-1 overflow-y-auto bg-paper-cream">
            {ActivePreview ? <ActivePreview /> : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
