import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type DragEvent,
} from "react";
import { ChevronDown, ChevronUp, Dice5, Sparkles } from "lucide-react";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "comixa-ui";
import { CanvasToolbar, DEVICE_WIDTHS } from "./CanvasToolbar";
import { CodePanel } from "./CodePanel";
import { GeneratedPage } from "./GeneratedPage";
import { Inspector } from "./Inspector";
import { SECTION_MAP } from "./layouts";
import { SectionLibrary } from "./SectionLibrary";
import { useComicGenerator } from "./use-comic-generator";
import { SECTION_TYPES, type Device, type GeneratorState, type SectionType } from "./types";

export function ComicGeneratorPage() {
  const {
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
  } = useComicGenerator();
  const [device, setDevice] = useState<Device>("desktop");
  const [zoom, setZoom] = useState(80);
  const [codeOpen, setCodeOpen] = useState(true);
  const [mobilePane, setMobilePane] = useState<"library" | "canvas" | "inspector">("canvas");
  const [searchFocusToken, setSearchFocusToken] = useState(0);
  const [isDropActive, setIsDropActive] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);
  const dragDepth = useRef(0);

  const cycleBackground = useCallback(() => {
    const values: GeneratorState["background"][] = ["paper", "cream", "ink"];
    patch({ background: values[(values.indexOf(state.background) + 1) % values.length] });
  }, [patch, state.background]);

  const handleAddSection = useCallback((type: SectionType) => {
    addSection(type);
    setMobilePane("canvas");
  }, [addSection]);

  const requestReset = useCallback(() => setResetOpen(true), []);

  const dropSection = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragDepth.current = 0;
    setIsDropActive(false);
    const type = event.dataTransfer.getData("application/comixa-section");
    if (SECTION_TYPES.includes(type as SectionType)) handleAddSection(type as SectionType);
  };

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const editing = Boolean(target.closest("input, textarea, [contenteditable='true']"));
      if (event.key === "/" && !editing) {
        event.preventDefault();
        setMobilePane("library");
        setSearchFocusToken((token) => token + 1);
      }
      if (event.key === "Escape" && !editing) selectSection(null);
      if ((event.metaKey || event.ctrlKey) && ["1", "2", "3"].includes(event.key)) {
        event.preventDefault();
        setDevice(({ "1": "desktop", "2": "tablet", "3": "mobile" } as const)[event.key as "1" | "2" | "3"]);
      }
      if (!editing && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z") {
        event.preventDefault();
        if (event.shiftKey) redoLastChange();
        else undoLastChange();
      }
      if (!editing && event.ctrlKey && event.key.toLowerCase() === "y") {
        event.preventDefault();
        redoLastChange();
      }
      if (!editing && (event.key === "+" || event.key === "=")) setZoom((value) => Math.min(120, value + 10));
      if (!editing && event.key === "-") setZoom((value) => Math.max(40, value - 10));
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [redoLastChange, selectSection, undoLastChange]);

  return (
    <article className="cg-app">
      <a href="#cg-canvas" className="cg-skip-link">Skip to canvas</a>
      <header className="cg-app-header">
        <div className="cg-title-lockup">
          <span className="cg-title-mark" aria-hidden="true">C</span>
          <div><div><Badge variant="pink">New</Badge><small>Visual page builder</small></div><h1>Comic Generator</h1></div>
        </div>
        <div className="cg-header-status" aria-live="polite"><i /> Live · {state.sections.filter((section) => !section.hidden).length}/{state.sections.length} visible</div>
        <div className="cg-mobile-tabs" role="group" aria-label="Generator panels">
          {(["library", "canvas", "inspector"] as const).map((pane) => (
            <button key={pane} type="button" className={mobilePane === pane ? "is-active" : ""} aria-pressed={mobilePane === pane} onClick={() => setMobilePane(pane)}>
              {pane === "library" ? "Sections" : pane === "inspector" ? "Settings" : "Canvas"}
            </button>
          ))}
        </div>
        <Button size="lg" variant="danger" effect="pop" className="cg-random-button" onClick={randomize} loading={isRandomizing} disabled={isRandomizing}>
          {!isRandomizing ? <Dice5 aria-hidden="true" /> : null}{isRandomizing ? "Shuffling Panels…" : "Random Comic"}
        </Button>
      </header>

      <div className={`cg-workspace cg-pane-${mobilePane} ${codeOpen ? "has-code" : ""}`}>
        <SectionLibrary
          sections={state.sections}
          selectedId={selectedId}
          onAdd={handleAddSection}
          onSelect={(id) => { selectSection(id); setMobilePane("canvas"); }}
          onReorder={reorderSection}
          onToggleVisibility={toggleSectionVisibility}
          focusToken={searchFocusToken}
        />

        <main className="cg-canvas-area" id="cg-canvas" tabIndex={-1}>
          <CanvasToolbar
            device={device}
            theme={state.theme}
            zoom={zoom}
            selectedLabel={selected ? SECTION_MAP[selected.type].label : undefined}
            selectedNode={selectedNode}
            historyItems={historyItems}
            canUndo={canUndo}
            canRedo={canRedo}
            onDeviceChange={setDevice}
            onZoomChange={setZoom}
            onCycleBackground={cycleBackground}
            onUndo={undoLastChange}
            onRedo={redoLastChange}
            onRestoreHistory={restoreHistoryPoint}
          />
          <div
            className={`cg-canvas-scroll ${isDropActive ? "is-drop-active" : ""}`}
            onDragEnter={(event) => {
              event.preventDefault();
              dragDepth.current += 1;
              setIsDropActive(true);
            }}
            onDragOver={(event) => { event.preventDefault(); event.dataTransfer.dropEffect = "copy"; }}
            onDragLeave={() => {
              dragDepth.current -= 1;
              if (dragDepth.current <= 0) { dragDepth.current = 0; setIsDropActive(false); }
            }}
            onDrop={dropSection}
            onClick={() => selectSection(null)}
          >
            <div className="cg-drop-overlay" aria-hidden="true"><Sparkles /><strong>Drop to add section</strong><span>It will appear at the end of the page</span></div>
            <div
              className="cg-preview-device"
              data-device={device}
              style={{ width: DEVICE_WIDTHS[device], transform: `scale(${zoom / 100})` }}
            >
              <GeneratedPage
                state={state}
                selectedId={selectedId}
                onSelect={selectSection}
                onRemove={removeSection}
                onMove={moveSection}
                onDuplicate={duplicateSection}
                onToggleVisibility={toggleSectionVisibility}
                onShowAllSections={showAllSections}
                onAddSection={handleAddSection}
              />
            </div>
          </div>
        </main>

        <Inspector
          state={state}
          selected={selected}
          selectedNode={selectedNode}
          onPatch={patch}
          onSectionVariant={updateSelectedVariant}
          onReset={requestReset}
        />

        <div className={`cg-bottom-dock ${codeOpen ? "is-open" : ""}`}>
          <button type="button" className="cg-dock-toggle" onClick={() => setCodeOpen((open) => !open)} aria-expanded={codeOpen} aria-controls="cg-code-panel">
            <span>04 · Code & export</span><small>{state.sections.length} sections · synced</small>{codeOpen ? <ChevronDown /> : <ChevronUp />}
          </button>
          <div id="cg-code-panel">{codeOpen ? <CodePanel state={state} /> : null}</div>
        </div>
      </div>
      <div className="sr-only" aria-live="polite">{announcement}</div>
      <Dialog open={resetOpen} onOpenChange={setResetOpen}>
        <DialogContent variant="panel" size="sm" showClose className="cg-reset-dialog">
          <DialogHeader>
            <DialogTitle>Reset this comic?</DialogTitle>
            <DialogDescription>
              This replaces the current composition and visual settings with the default seven-section page.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setResetOpen(false)}>Keep editing</Button>
            <Button variant="danger" onClick={() => { resetGenerator(); setResetOpen(false); }}>Reset generator</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </article>
  );
}
