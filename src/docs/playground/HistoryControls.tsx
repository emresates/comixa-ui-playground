import { memo, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, History, Redo2, Undo2 } from "lucide-react";
import type { GeneratorHistoryItem } from "./use-generator-state";

type HistoryControlsProps = {
  items: GeneratorHistoryItem[];
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onRestore: (id: string) => void;
};

function HistoryControlsComponent({
  items,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onRestore,
}: HistoryControlsProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const visibleItems = [...items].reverse();

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="cg-history-controls" ref={rootRef}>
      <button
        type="button"
        className={open ? "is-active" : ""}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="cg-history-panel"
        title="History"
      >
        <History aria-hidden="true" /><span>History</span>
      </button>
      <button type="button" onClick={onUndo} disabled={!canUndo} aria-label="Undo last change" title="Undo (⌘Z)"><Undo2 aria-hidden="true" /></button>
      <button type="button" onClick={onRedo} disabled={!canRedo} aria-label="Redo last change" title="Redo (⇧⌘Z)"><Redo2 aria-hidden="true" /></button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="cg-history-panel"
            className="cg-history-panel"
            role="dialog"
            aria-label="Builder history"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.985 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cg-history-heading"><span>Builder history</span><small>{items.length} states</small></div>
            <div className="cg-history-list">
              {visibleItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`is-${item.status}`}
                  onClick={() => {
                    onRestore(item.id);
                    setOpen(false);
                  }}
                  disabled={item.status === "current"}
                  aria-current={item.status === "current" ? "step" : undefined}
                >
                  <i aria-hidden="true">{item.status === "current" ? <Check /> : null}</i>
                  <span><strong>{item.label}</strong><small>{item.status === "future" ? "Redo state" : item.status === "current" ? "Current" : "Previous"}</small></span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export const HistoryControls = memo(HistoryControlsComponent);
