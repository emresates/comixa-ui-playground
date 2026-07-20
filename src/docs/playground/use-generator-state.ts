import { useCallback, useEffect, useMemo, useState, type SetStateAction } from "react";
import { SECTION_MAP } from "./layouts";
import {
  DEFAULT_STATE,
  SECTION_TYPES,
  type GeneratorState,
  type PageSection,
  type SectionType,
} from "./types";

const GLOBAL_KEYS = [
  "theme",
  "spacing",
  "container",
  "border",
  "shadow",
  "pattern",
  "background",
  "cursor",
  "animation",
  "radius",
  "stickerDensity",
  "noise",
] as const;

const HISTORY_LIMIT = 50;
let historySequence = 0;

type HistorySnapshot = {
  id: string;
  label: string;
  state: GeneratorState;
};

type GeneratorHistory = {
  past: HistorySnapshot[];
  present: HistorySnapshot;
  future: HistorySnapshot[];
};

export type GeneratorHistoryItem = Pick<HistorySnapshot, "id" | "label"> & {
  status: "past" | "current" | "future";
};

function createSnapshot(state: GeneratorState, label: string): HistorySnapshot {
  historySequence += 1;
  return { id: `history-${Date.now()}-${historySequence}`, label, state };
}

const PATCH_LABELS: Partial<Record<keyof GeneratorState, string>> = {
  theme: "Theme changed",
  spacing: "Section spacing changed",
  container: "Container width changed",
  border: "Border style changed",
  shadow: "Shadow changed",
  pattern: "Pattern changed",
  background: "Background changed",
  cursor: "Cursor style changed",
  effects: "Comic effects toggled",
  animation: "Animation changed",
  radius: "Border radius changed",
  stickerDensity: "Sticker density changed",
  noise: "Noise amount changed",
};

function validValue<T extends string>(
  value: string | null,
  values: readonly T[],
  fallback: T,
): T {
  return value && values.includes(value as T) ? (value as T) : fallback;
}

function sectionId(type: SectionType, index: number) {
  return `${type}-${index + 1}`;
}

export function readGeneratorState(search = window.location.search) {
  const params = new URLSearchParams(search);
  const sectionEntries = (params.get("sections") ?? "")
    .split(",")
    .map((entry) => {
      const [type, variant, visibility] = entry.split(":");
      return { type, variant, visibility };
    })
    .filter((entry): entry is { type: SectionType; variant: string; visibility: string } =>
      SECTION_TYPES.includes(entry.type as SectionType),
    );
  const sections: PageSection[] = sectionEntries.map((entry, index) => {
    const type = entry.type;
    const variants = SECTION_MAP[type].variants.map((item) => item.id);
    return {
      id: sectionId(type, index),
      type,
      variant: validValue(
        entry.variant || params.get(type),
        variants,
        SECTION_MAP[type].variants[0].id,
      ),
      hidden: entry.visibility === "hidden",
    };
  });

  return {
    theme: validValue(
      params.get("theme"),
      ["classic", "retro", "pop-art", "manga", "vintage"],
      DEFAULT_STATE.theme,
    ),
    spacing: validValue(
      params.get("spacing"),
      ["compact", "balanced", "airy"],
      DEFAULT_STATE.spacing,
    ),
    container: validValue(
      params.get("container"),
      ["narrow", "standard", "wide"],
      DEFAULT_STATE.container,
    ),
    border: validValue(
      params.get("border"),
      ["none", "sharp", "soft"],
      DEFAULT_STATE.border,
    ),
    shadow: validValue(
      params.get("shadow") === "bold"
        ? "comic"
        : params.get("shadow") === "small"
          ? "offset"
          : params.get("shadow"),
      ["none", "comic", "heavy", "offset"],
      DEFAULT_STATE.shadow,
    ),
    pattern: validValue(
      params.get("pattern"),
      ["none", "paper", "halftone", "dots", "cross-hatch"],
      DEFAULT_STATE.pattern,
    ),
    background: validValue(
      params.get("background"),
      ["paper", "cream", "ink"],
      DEFAULT_STATE.background,
    ),
    cursor: validValue(
      params.get("cursor"),
      ["classic", "ring", "spark"],
      DEFAULT_STATE.cursor,
    ),
    effects: params.get("effects") !== "0",
    animation: validValue(
      params.get("animation"),
      ["none", "subtle", "playful"],
      DEFAULT_STATE.animation,
    ),
    radius: validValue(
      params.get("radius"),
      ["sharp", "soft", "round"],
      DEFAULT_STATE.radius,
    ),
    stickerDensity: validValue(
      params.get("stickerDensity"),
      ["none", "low", "medium", "high"],
      DEFAULT_STATE.stickerDensity,
    ),
    noise: validValue(
      params.get("noise"),
      ["none", "low", "medium", "high"],
      DEFAULT_STATE.noise,
    ),
    sections: sections.length ? sections : DEFAULT_STATE.sections,
  } satisfies GeneratorState;
}

function stateSearch(state: GeneratorState) {
  const params = new URLSearchParams();
  for (const key of GLOBAL_KEYS) params.set(key, state[key]);
  params.set("effects", state.effects ? "1" : "0");
  params.set(
    "sections",
    state.sections
      .map((item) => `${item.type}:${item.variant}:${item.hidden ? "hidden" : "visible"}`)
      .join(","),
  );
  for (const section of state.sections) params.set(section.type, section.variant);
  return params.toString();
}

export function useGeneratorState() {
  const [history, setHistory] = useState<GeneratorHistory>(() => ({
    past: [],
    present: createSnapshot(readGeneratorState(), "Initial composition"),
    future: [],
  }));
  const state = history.present.state;

  const setState = useCallback((
    update: SetStateAction<GeneratorState>,
    label = "Page updated",
  ) => {
    setHistory((current) => {
      const nextState = typeof update === "function"
        ? update(current.present.state)
        : update;
      if (nextState === current.present.state) return current;
      return {
        past: [...current.past, current.present].slice(-HISTORY_LIMIT),
        present: createSnapshot(nextState, label),
        future: [],
      };
    });
  }, []);

  useEffect(() => {
    const search = stateSearch(state);
    const nextUrl = `${window.location.pathname}?${search}`;
    window.history.replaceState(window.history.state, "", nextUrl);
  }, [state]);

  useEffect(() => {
    const restore = () => setHistory({
      past: [],
      present: createSnapshot(readGeneratorState(), "URL state restored"),
      future: [],
    });
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, []);

  const patch = useCallback((next: Partial<GeneratorState>) => {
    const keys = Object.keys(next) as (keyof GeneratorState)[];
    const label = keys.length === 1 ? PATCH_LABELS[keys[0]] ?? "Setting changed" : "Settings changed";
    setState((current) => {
      const changed = keys.some((key) => current[key] !== next[key]);
      return changed ? { ...current, ...next } : current;
    }, label);
  }, [setState]);

  const undo = useCallback(() => {
    setHistory((current) => {
      const previous = current.past[current.past.length - 1];
      if (!previous) return current;
      return {
        past: current.past.slice(0, -1),
        present: previous,
        future: [current.present, ...current.future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setHistory((current) => {
      const next = current.future[0];
      if (!next) return current;
      return {
        past: [...current.past, current.present].slice(-HISTORY_LIMIT),
        present: next,
        future: current.future.slice(1),
      };
    });
  }, []);

  const restoreHistory = useCallback((id: string) => {
    setHistory((current) => {
      const timeline = [...current.past, current.present, ...current.future];
      const targetIndex = timeline.findIndex((snapshot) => snapshot.id === id);
      if (targetIndex < 0 || timeline[targetIndex].id === current.present.id) return current;
      return {
        past: timeline.slice(0, targetIndex).slice(-HISTORY_LIMIT),
        present: timeline[targetIndex],
        future: timeline.slice(targetIndex + 1),
      };
    });
  }, []);

  const historyItems = useMemo<GeneratorHistoryItem[]>(() => [
    ...history.past.map(({ id, label }) => ({ id, label, status: "past" as const })),
    { id: history.present.id, label: history.present.label, status: "current" as const },
    ...history.future.map(({ id, label }) => ({ id, label, status: "future" as const })),
  ], [history]);

  return {
    state,
    setState,
    patch,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    historyItems,
    undo,
    redo,
    restoreHistory,
  };
}

export function createSection(type: SectionType, count: number): PageSection {
  const uniqueId = typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${count}`;
  return {
    id: `${type}-${uniqueId}`,
    type,
    variant: SECTION_MAP[type].variants[0].id,
  };
}
