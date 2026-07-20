import { memo, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MousePointer2, RotateCcw, SlidersHorizontal } from "lucide-react";
import { Select, Switch } from "comixa-ui";
import { SECTION_MAP } from "./layouts";
import type { GeneratorState, PageSection } from "./types";

const THEMES = ["classic", "retro", "pop-art", "manga", "vintage"] as const;
const SPACING = ["compact", "balanced", "airy"] as const;
const BACKGROUNDS = ["paper", "cream", "ink"] as const;
const SELECT_OPTIONS = {
  container: ["narrow", "standard", "wide"],
  radius: ["sharp", "soft", "round"],
  border: ["none", "sharp", "soft"],
  shadow: ["comic", "heavy", "offset", "none"],
  pattern: ["paper", "halftone", "dots", "cross-hatch", "none"],
  stickerDensity: ["none", "low", "medium", "high"],
  noise: ["none", "low", "medium", "high"],
  cursor: ["classic", "ring", "spark"],
  animation: ["none", "subtle", "playful"],
} as const;

const titleCase = (value: string) =>
  value.replace(/-/g, " ").replace(/\b\w/g, (letter: string) => letter.toUpperCase());

function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div className="cg-inspector-field"><span>{label}</span>{children}</div>;
}

function Segmented({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="cg-segmented" role="group" aria-label={label}>
      {values.map((item) => (
        <button
          key={item}
          type="button"
          className={value === item ? "is-active" : ""}
          aria-pressed={value === item}
          onClick={() => onChange(item)}
        >
          {value === item ? <Check aria-hidden="true" /> : null}{titleCase(item)}
        </button>
      ))}
    </div>
  );
}

function options(values: readonly string[]) {
  return values.map((value) => ({ value, label: titleCase(value) }));
}

function SelectField({
  label,
  value,
  values,
  onChange,
}: {
  label: string;
  value: string;
  values: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <Field label={label}>
      <Select
        value={value}
        options={options(values)}
        onValueChange={onChange}
        selectSize="sm"
        aria-label={label}
      />
    </Field>
  );
}

type InspectorProps = {
  state: GeneratorState;
  selected: PageSection | null;
  selectedNode: string;
  onPatch: (patch: Partial<GeneratorState>) => void;
  onSectionVariant: (variant: string) => void;
  onReset: () => void;
};

function InspectorComponent({
  state,
  selected,
  selectedNode,
  onPatch,
  onSectionVariant,
  onReset,
}: InspectorProps) {
  return (
    <aside className="cg-inspector cg-tool-panel" aria-label="Page inspector">
      <div className="cg-panel-heading">
        <div><span>03</span><div><h2>Inspector</h2><p>Shape the whole page</p></div></div>
        <button type="button" className="cg-icon-button" onClick={onReset} aria-label="Reset generator settings" title="Reset generator"><RotateCcw aria-hidden="true" /></button>
      </div>
      <div className="cg-inspector-scroll">
        <AnimatePresence mode="wait" initial={false}>
          {selected ? (
            <motion.section
              key={selected.id}
              className="cg-inspector-group cg-selected-settings"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.16 }}
            >
              <div className="cg-group-title"><span>Selected section</span><small>{selected.type}</small></div>
              <nav className="cg-inspector-breadcrumb" aria-label="Selection path"><span>Landing</span><i>/</i><span>{SECTION_MAP[selected.type].label}</span><i>/</i><strong>{selectedNode}</strong></nav>
              <div className="cg-selection-name"><strong>{SECTION_MAP[selected.type].label}</strong><p>{SECTION_MAP[selected.type].description}</p></div>
              <SelectField
                label="Layout variant"
                value={selected.variant}
                values={SECTION_MAP[selected.type].variants.map((item) => item.id)}
                onChange={onSectionVariant}
              />
              <p className="cg-keyboard-hint"><kbd>⌥</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> reorder · <kbd>Del</kbd> remove</p>
            </motion.section>
          ) : (
            <motion.section key="empty-selection" className="cg-inspector-empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span><MousePointer2 aria-hidden="true" /></span>
              <div><strong>No section selected</strong><p>Select a canvas section to edit its layout.</p></div>
            </motion.section>
          )}
        </AnimatePresence>

        <section className="cg-inspector-group">
          <div className="cg-group-title"><span>Art direction</span><small>Theme</small></div>
          <div className="cg-theme-grid" role="group" aria-label="Page theme">
            {THEMES.map((theme) => (
              <button key={theme} type="button" data-theme-chip={theme} className={state.theme === theme ? "is-active" : ""} aria-pressed={state.theme === theme} onClick={() => onPatch({ theme })}>
                <i aria-hidden="true" />{titleCase(theme)}{state.theme === theme ? <Check aria-hidden="true" /> : null}
              </button>
            ))}
          </div>
        </section>

        <section className="cg-inspector-group">
          <div className="cg-group-title"><span>Layout</span><small>Structure</small></div>
          <Field label="Section spacing"><Segmented label="Section spacing" value={state.spacing} values={SPACING} onChange={(spacing) => onPatch({ spacing: spacing as GeneratorState["spacing"] })} /></Field>
          <SelectField label="Container width" value={state.container} values={SELECT_OPTIONS.container} onChange={(container) => onPatch({ container: container as GeneratorState["container"] })} />
          <SelectField label="Border radius" value={state.radius} values={SELECT_OPTIONS.radius} onChange={(radius) => onPatch({ radius: radius as GeneratorState["radius"] })} />
        </section>

        <section className="cg-inspector-group">
          <div className="cg-group-title"><span>Surface</span><small>Ink & paper</small></div>
          <Field label="Background"><Segmented label="Background" value={state.background} values={BACKGROUNDS} onChange={(background) => onPatch({ background: background as GeneratorState["background"] })} /></Field>
          <SelectField label="Border style" value={state.border} values={SELECT_OPTIONS.border} onChange={(border) => onPatch({ border: border as GeneratorState["border"] })} />
          <SelectField label="Shadow" value={state.shadow} values={SELECT_OPTIONS.shadow} onChange={(shadow) => onPatch({ shadow: shadow as GeneratorState["shadow"] })} />
          <SelectField label="Pattern" value={state.pattern} values={SELECT_OPTIONS.pattern} onChange={(pattern) => onPatch({ pattern: pattern as GeneratorState["pattern"] })} />
          <SelectField label="Sticker density" value={state.stickerDensity} values={SELECT_OPTIONS.stickerDensity} onChange={(stickerDensity) => onPatch({ stickerDensity: stickerDensity as GeneratorState["stickerDensity"] })} />
          <SelectField label="Noise amount" value={state.noise} values={SELECT_OPTIONS.noise} onChange={(noise) => onPatch({ noise: noise as GeneratorState["noise"] })} />
        </section>

        <section className="cg-inspector-group">
          <div className="cg-group-title"><span>Interaction</span><small>Motion</small></div>
          <SelectField label="Cursor style" value={state.cursor} values={SELECT_OPTIONS.cursor} onChange={(cursor) => onPatch({ cursor: cursor as GeneratorState["cursor"] })} />
          <SelectField label="Animation" value={state.animation} values={SELECT_OPTIONS.animation} onChange={(animation) => onPatch({ animation: animation as GeneratorState["animation"] })} />
          <div className="cg-switch-row"><div><span>Comic effects</span><small>Cursor trails and visual punch</small></div><Switch checked={state.effects} onCheckedChange={(effects) => onPatch({ effects })} switchSize="sm" aria-label="Comic effects" /></div>
        </section>
      </div>
    </aside>
  );
}

export const Inspector = memo(InspectorComponent);
