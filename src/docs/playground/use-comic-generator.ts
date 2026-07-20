import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "comixa-ui";
import { SECTION_DEFINITIONS, SECTION_MAP } from "./layouts";
import { createSection, useGeneratorState } from "./use-generator-state";
import { DEFAULT_STATE, type GeneratorState, type SectionType } from "./types";

const RANDOM_VALUES = {
  theme: ["classic", "retro", "pop-art", "manga", "vintage"],
  spacing: ["compact", "balanced", "airy"],
  container: ["narrow", "standard", "wide"],
  border: ["sharp", "soft"],
  shadow: ["comic", "heavy", "offset"],
  pattern: ["paper", "halftone", "dots", "cross-hatch"],
  background: ["paper", "cream"],
  cursor: ["classic", "ring", "spark"],
  animation: ["subtle", "playful"],
  radius: ["sharp", "soft", "round"],
  stickerDensity: ["none", "low", "medium", "high"],
  noise: ["none", "low", "medium", "high"],
} as const;

function randomItem<T>(items: readonly T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffled<T>(items: readonly T[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function randomState(current: GeneratorState): GeneratorState {
  const optional = shuffled(
    SECTION_DEFINITIONS.filter(
      (item) => !["navbar", "hero", "footer"].includes(item.type),
    ).map((item) => item.type),
  ).slice(0, 4 + Math.floor(Math.random() * 2));
  const types: SectionType[] = ["navbar", "hero", ...optional, "footer"];
  const stamp = Date.now();
  return {
    ...current,
    theme: randomItem(RANDOM_VALUES.theme),
    spacing: randomItem(RANDOM_VALUES.spacing),
    container: randomItem(RANDOM_VALUES.container),
    border: randomItem(RANDOM_VALUES.border),
    shadow: randomItem(RANDOM_VALUES.shadow),
    pattern: randomItem(RANDOM_VALUES.pattern),
    background: randomItem(RANDOM_VALUES.background),
    cursor: randomItem(RANDOM_VALUES.cursor),
    effects: true,
    animation: randomItem(RANDOM_VALUES.animation),
    radius: randomItem(RANDOM_VALUES.radius),
    stickerDensity: randomItem(RANDOM_VALUES.stickerDensity),
    noise: randomItem(RANDOM_VALUES.noise),
    sections: types.map((type, index) => ({
      id: `${type}-random-${stamp}-${index}`,
      type,
      variant: randomItem(SECTION_MAP[type].variants).id,
    })),
  };
}

function defaultState(): GeneratorState {
  const stamp = Date.now();
  return {
    ...DEFAULT_STATE,
    sections: DEFAULT_STATE.sections.map((section, index) => ({
      ...section,
      id: `${section.type}-reset-${stamp}-${index}`,
    })),
  };
}

export function useComicGenerator() {
  const {
    state,
    setState,
    patch,
    canUndo,
    canRedo,
    historyItems,
    undo,
    redo,
    restoreHistory,
  } = useGeneratorState();
  const [selectedId, setSelectedId] = useState<string | null>(
    state.sections.find((item) => item.type === "hero")?.id ?? null,
  );
  const [announcement, setAnnouncement] = useState("");
  const [selectedNode, setSelectedNode] = useState("Section");
  const [isRandomizing, setIsRandomizing] = useState(false);
  const randomTimerRef = useRef<number | null>(null);
  const selected = useMemo(
    () => state.sections.find((item) => item.id === selectedId) ?? null,
    [selectedId, state.sections],
  );

  const selectSection = useCallback((id: string | null, node = "Section") => {
    setSelectedId(id);
    setSelectedNode(id ? node : "Section");
  }, []);

  const addSection = useCallback((type: SectionType) => {
    const section = createSection(type, state.sections.length);
    setState(
      (current) => ({ ...current, sections: [...current.sections, section] }),
      `${SECTION_MAP[type].label} added`,
    );
    setSelectedId(section.id);
    setSelectedNode("Section");
    setAnnouncement(`${SECTION_MAP[type].label} added and selected.`);
    toast({ title: `${SECTION_MAP[type].label} added`, description: "The new section is selected and ready to customize.", variant: "info" });
  }, [setState, state.sections.length]);

  const removeSection = useCallback((id: string) => {
    const index = state.sections.findIndex((section) => section.id === id);
    const removed = state.sections[index];
    const remaining = state.sections.filter((section) => section.id !== id);
    const nextFocus = remaining[Math.min(index, remaining.length - 1)]?.id;
    setState(
      (current) => ({ ...current, sections: current.sections.filter((section) => section.id !== id) }),
      `${removed ? SECTION_MAP[removed.type].label : "Section"} deleted`,
    );
    setSelectedId((current) => (current === id ? null : current));
    if (selectedId === id) setSelectedNode("Section");
    setAnnouncement(`${removed ? SECTION_MAP[removed.type].label : "Section"} removed.`);
    window.requestAnimationFrame(() => {
      if (nextFocus) document.querySelector<HTMLElement>(`[data-section-id="${nextFocus}"]`)?.focus();
      else document.getElementById("cg-canvas")?.focus();
    });
  }, [selectedId, setState, state.sections]);

  const duplicateSection = useCallback((id: string) => {
    const source = state.sections.find((section) => section.id === id);
    if (!source) return;
    const duplicate = {
      ...source,
      id: createSection(source.type, state.sections.length).id,
      hidden: false,
    };
    setState((current) => {
      const index = current.sections.findIndex((section) => section.id === id);
      const sections = [...current.sections];
      sections.splice(index + 1, 0, duplicate);
      return { ...current, sections };
    }, `${SECTION_MAP[source.type].label} duplicated`);
    setSelectedId(duplicate.id);
    setSelectedNode("Section");
    setAnnouncement(`${SECTION_MAP[source.type].label} duplicated.`);
  }, [setState, state.sections]);

  const toggleSectionVisibility = useCallback((id: string) => {
    const section = state.sections.find((item) => item.id === id);
    if (!section) return;
    setState((current) => ({
      ...current,
      sections: current.sections.map((item) =>
        item.id === id ? { ...item, hidden: !item.hidden } : item,
      ),
    }), `${SECTION_MAP[section.type].label} ${section.hidden ? "shown" : "hidden"}`);
    setAnnouncement(`${SECTION_MAP[section.type].label} ${section.hidden ? "shown" : "hidden"}.`);
  }, [setState, state.sections]);

  const showAllSections = useCallback(() => {
    setState((current) => ({
      ...current,
      sections: current.sections.map((section) => ({ ...section, hidden: false })),
    }), "All sections shown");
    setAnnouncement("All hidden sections are visible.");
  }, [setState]);

  const reorderSection = useCallback((sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;
    const source = state.sections.find((section) => section.id === sourceId);
    setState((current) => {
      const sourceIndex = current.sections.findIndex((section) => section.id === sourceId);
      const targetIndex = current.sections.findIndex((section) => section.id === targetId);
      if (sourceIndex < 0 || targetIndex < 0) return current;
      const sections = [...current.sections];
      const [moved] = sections.splice(sourceIndex, 1);
      sections.splice(targetIndex, 0, moved);
      return { ...current, sections };
    }, `${source ? SECTION_MAP[source.type].label : "Section"} reordered`);
    if (source) setAnnouncement(`${SECTION_MAP[source.type].label} reordered.`);
  }, [setState, state.sections]);

  const moveSection = useCallback((id: string, direction: -1 | 1) => {
    const section = state.sections.find((item) => item.id === id);
    setState((current) => {
      const index = current.sections.findIndex((section) => section.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= current.sections.length) return current;
      const sections = [...current.sections];
      [sections[index], sections[target]] = [sections[target], sections[index]];
      return { ...current, sections };
    }, `${section ? SECTION_MAP[section.type].label : "Section"} moved ${direction < 0 ? "up" : "down"}`);
    if (section) setAnnouncement(`${SECTION_MAP[section.type].label} moved ${direction < 0 ? "up" : "down"}.`);
  }, [setState, state.sections]);

  const updateSelectedVariant = useCallback((variant: string) => {
    if (!selectedId) return;
    const section = state.sections.find((item) => item.id === selectedId);
    setState((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === selectedId ? { ...section, variant } : section,
      ),
    }), `${section ? SECTION_MAP[section.type].label : "Section"} layout changed`);
  }, [selectedId, setState, state.sections]);

  const resetGenerator = useCallback(() => {
    const next = defaultState();
    setState(next, "Generator reset");
    setSelectedId(next.sections.find((section) => section.type === "hero")?.id ?? null);
    setSelectedNode("Section");
    setAnnouncement("Generator reset to the default composition.");
    toast({ title: "Generator reset", description: "The default Comixa composition is back.", variant: "default" });
  }, [setState]);

  useEffect(() => () => {
    if (randomTimerRef.current !== null) window.clearTimeout(randomTimerRef.current);
  }, []);

  const randomize = useCallback(() => {
    if (isRandomizing) return;
    setIsRandomizing(true);
    randomTimerRef.current = window.setTimeout(() => {
      const next = randomState(state);
      setState(next, "Random comic generated");
      setSelectedId(next.sections.find((item) => item.type === "hero")?.id ?? null);
      setSelectedNode("Section");
      setAnnouncement(`A new ${next.theme} comic was generated.`);
      toast({ title: "New comic universe!", description: `${next.sections.length} sections composed in ${next.theme} style.`, variant: "pop" });
      setIsRandomizing(false);
      randomTimerRef.current = null;
    }, 300);
  }, [isRandomizing, setState, state]);

  const undoLastChange = useCallback(() => {
    if (!canUndo) return;
    undo();
    selectSection(null);
    setAnnouncement("Last builder change undone.");
  }, [canUndo, selectSection, undo]);

  const redoLastChange = useCallback(() => {
    if (!canRedo) return;
    redo();
    selectSection(null);
    setAnnouncement("Builder change restored.");
  }, [canRedo, redo, selectSection]);

  const restoreHistoryPoint = useCallback((id: string) => {
    restoreHistory(id);
    selectSection(null);
    setAnnouncement("Builder history restored.");
  }, [restoreHistory, selectSection]);

  return {
    state,
    patch,
    selected,
    selectedId,
    selectedNode,
    selectSection,
    announcement,
    isRandomizing,
    canUndo,
    canRedo,
    historyItems,
    addSection,
    removeSection,
    duplicateSection,
    toggleSectionVisibility,
    showAllSections,
    reorderSection,
    moveSection,
    updateSelectedVariant,
    resetGenerator,
    randomize,
    undoLastChange,
    redoLastChange,
    restoreHistoryPoint,
  };
}
