import { memo, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Copy,
  EyeOff,
  GripVertical,
  LayoutTemplate,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Background, Button, ComicCursor, Sticker, ThemeScope } from "comixa-ui";
import { SECTION_MAP } from "./layouts";
import { PreviewSection } from "./PreviewSections";
import { providerTheme, type GeneratorState, type PageSection, type SectionType } from "./types";

const PATTERN_VARIANTS = {
  none: "comic-paper",
  paper: "comic-paper",
  halftone: "pop-art",
  dots: "dots",
  "cross-hatch": "comic-paper",
} as const;

const PAGE_STICKERS = [
  { id: "pow", label: "POW!", variant: "yellow", className: "is-one" },
  { id: "wow", label: "WOW", variant: "pink", className: "is-two" },
  { id: "zap", label: "ZAP!", variant: "blue", className: "is-three" },
  { id: "new", label: "NEW", variant: "green", className: "is-four" },
  { id: "bam", label: "BAM!", variant: "orange", className: "is-five" },
] as const;

const STICKER_COUNTS: Record<GeneratorState["stickerDensity"], number> = {
  none: 0,
  low: 1,
  medium: 3,
  high: 5,
};

function PreviewCursor({ state }: { state: GeneratorState }) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <ThemeScope
      theme={providerTheme(state.theme)}
      className="cg-cursor-portal"
    >
      <ComicCursor
        variant={state.cursor}
        enabled={state.effects}
        animated={state.animation !== "none"}
        hideNativeCursor={false}
        trailCount={state.animation === "playful" ? 5 : 2}
      />
    </ThemeScope>,
    document.body,
  );
}

type GeneratedPageProps = {
  state: GeneratorState;
  selectedId: string | null;
  onSelect: (id: string, node?: string) => void;
  onRemove: (id: string) => void;
  onMove: (id: string, direction: -1 | 1) => void;
  onDuplicate: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onShowAllSections: () => void;
  onAddSection: (type: SectionType) => void;
};

function EmptyCanvas({ onAddSection }: Pick<GeneratedPageProps, "onAddSection">) {
  return (
    <motion.div
      className="cg-empty-canvas"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="cg-empty-illustration" aria-hidden="true">
        <LayoutTemplate />
        <Sparkles />
      </div>
      <div>
        <span>Blank issue</span>
        <h2>Build your opening panel.</h2>
        <p>Add a hero to start strong, or a navbar to establish the frame.</p>
      </div>
      <div className="cg-empty-actions">
        <Button variant="primary" onClick={() => onAddSection("hero")}>
          <Plus aria-hidden="true" /> Add hero
        </Button>
        <Button variant="outline" onClick={() => onAddSection("navbar")}>
          Add navbar
        </Button>
      </div>
      <small>Tip: press <kbd>/</kbd> to search the section library.</small>
    </motion.div>
  );
}

function HiddenCanvas({ onShowAllSections }: Pick<GeneratedPageProps, "onShowAllSections">) {
  return (
    <motion.div className="cg-empty-canvas" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="cg-empty-illustration" aria-hidden="true"><EyeOff /><Sparkles /></div>
      <div><span>Layers hidden</span><h2>Your page is still here.</h2><p>Every section is hidden. Reveal all layers or use the eye controls in Page structure.</p></div>
      <Button variant="primary" onClick={onShowAllSections}>Show all sections</Button>
    </motion.div>
  );
}

function SectionFrame({
  section,
  index,
  count,
  selected,
  animation,
  onSelect,
  onRemove,
  onMove,
  onDuplicate,
  onToggleVisibility,
}: {
  section: PageSection;
  index: number;
  count: number;
  selected: boolean;
  animation: GeneratorState["animation"];
  onSelect: (id: string, node?: string) => void;
  onRemove: (id: string) => void;
  onMove: (id: string, direction: -1 | 1) => void;
  onDuplicate: (id: string) => void;
  onToggleVisibility: (id: string) => void;
}) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      if ((event.target as HTMLElement).closest("input, textarea, button, a")) return;
      event.preventDefault();
      onRemove(section.id);
    }
    if (event.altKey && (event.key === "ArrowUp" || event.key === "ArrowDown")) {
      event.preventDefault();
      onMove(section.id, event.key === "ArrowUp" ? -1 : 1);
    }
  };

  return (
    <motion.div
      layout="position"
      initial={animation === "none" ? false : { opacity: 0, y: 18, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.985, y: -8 }}
      transition={{
        type: "spring",
        stiffness: animation === "playful" ? 350 : 520,
        damping: animation === "playful" ? 24 : 38,
        mass: 0.7,
      }}
      className={`cg-canvas-section ${selected ? "is-selected" : ""}`}
      data-section-id={section.id}
      role="group"
      tabIndex={0}
      aria-label={`${section.type} section, ${section.variant} layout. Alt plus arrow keys reorder; Delete removes.`}
      onFocus={(event) => {
        if (event.target === event.currentTarget) onSelect(section.id);
      }}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        event.stopPropagation();
        const target = event.target as HTMLElement;
        const node = target.closest<HTMLElement>("[data-editor-node]")?.dataset.editorNode ?? "Section";
        onSelect(section.id, node);
      }}
    >
      <div className="cg-section-tools" role="toolbar" aria-label={`${section.type} section controls`}>
        <span><GripVertical aria-hidden="true" />{SECTION_MAP[section.type].label} <i /> {section.variant}</span>
        <button type="button" onClick={(event) => { event.stopPropagation(); onDuplicate(section.id); }} title="Duplicate"><Copy /><b>Duplicate</b></button>
        <div className="cg-move-tools" role="group" aria-label={`Move ${section.type}`}>
          <button type="button" onClick={(event) => { event.stopPropagation(); onMove(section.id, -1); }} disabled={index === 0} aria-label={`Move ${section.type} up`} title="Move up (Alt + ↑)"><ArrowUp /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); onMove(section.id, 1); }} disabled={index === count - 1} aria-label={`Move ${section.type} down`} title="Move down (Alt + ↓)"><ArrowDown /></button>
          <b>Move</b>
        </div>
        <button type="button" onClick={(event) => { event.stopPropagation(); onToggleVisibility(section.id); }} title="Hide"><EyeOff /><b>Hide</b></button>
        <button className="is-danger" type="button" onClick={(event) => { event.stopPropagation(); onRemove(section.id); }} title="Delete (Delete key)"><Trash2 /><b>Delete</b></button>
      </div>
      <PreviewSection section={section} />
    </motion.div>
  );
}

function GeneratedPageComponent({
  state,
  selectedId,
  onSelect,
  onRemove,
  onMove,
  onDuplicate,
  onToggleVisibility,
  onShowAllSections,
  onAddSection,
}: GeneratedPageProps) {
  const visibleSections = state.sections.filter((section) => !section.hidden);
  const stickerCount = STICKER_COUNTS[state.stickerDensity];
  return (
    <ThemeScope theme={providerTheme(state.theme)} className="cg-preview-theme">
      <Background
        variant={PATTERN_VARIANTS[state.pattern]}
        tone={state.background}
        intensity={state.pattern === "halftone" ? "lg" : "sm"}
        className={`cg-generated-page cg-pattern-${state.pattern} cg-bg-${state.background} cg-spacing-${state.spacing} cg-container-${state.container} cg-border-${state.border} cg-shadow-${state.shadow} cg-radius-${state.radius} cg-stickers-${state.stickerDensity} cg-noise-${state.noise}`}
      >
        <PreviewCursor state={state} />
        {stickerCount ? (
          <div className="cg-page-stickers" aria-hidden="true">
            {PAGE_STICKERS.slice(0, stickerCount).map((sticker) => (
              <Sticker key={sticker.id} className={sticker.className} variant={sticker.variant}>{sticker.label}</Sticker>
            ))}
          </div>
        ) : null}
        <LayoutGroup>
          <AnimatePresence initial={false} mode="popLayout">
            {visibleSections.length ? visibleSections.map((section, index) => (
              <SectionFrame
                key={section.id}
                section={section}
                index={index}
                count={visibleSections.length}
                selected={selectedId === section.id}
                animation={state.animation}
                onSelect={onSelect}
                onRemove={onRemove}
                onMove={onMove}
                onDuplicate={onDuplicate}
                onToggleVisibility={onToggleVisibility}
              />
            )) : state.sections.length
              ? <HiddenCanvas key="hidden" onShowAllSections={onShowAllSections} />
              : <EmptyCanvas key="empty" onAddSection={onAddSection} />}
          </AnimatePresence>
        </LayoutGroup>
      </Background>
    </ThemeScope>
  );
}

export const GeneratedPage = memo(GeneratedPageComponent);
