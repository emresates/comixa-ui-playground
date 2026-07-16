import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Input } from "comixa-ui";
import { NAV } from "./nav";

const ALL_ITEMS = NAV.flatMap((group) =>
  group.items.map((item) => ({
    id: item.id,
    label: item.label,
    group: group.label,
  })),
);

type NavSearchProps = {
  onSelect: (id: string) => void;
};

export function NavSearch({ onSelect }: NavSearchProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_ITEMS;
    return ALL_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => {
    setHighlight(0);
  }, [query]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const mod = event.metaKey || event.ctrlKey;
      if (mod && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const pick = (id: string) => {
    onSelect(id);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  const shortcutHint =
    typeof navigator !== "undefined" &&
    /Mac|iPhone|iPad|iPod/i.test(navigator.platform)
      ? "⌘K"
      : "Ctrl K";

  return (
    <div ref={rootRef} className="relative min-w-0 flex-1 max-w-md">
      <Input
        ref={inputRef}
        type="search"
        inputSize="sm"
        variant="filled"
        value={query}
        placeholder="Search components…"
        aria-label="Search components"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        role="combobox"
        className="w-full bg-paper pr-14"
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
            inputRef.current?.blur();
            return;
          }
          if (!open || results.length === 0) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            setHighlight((i) => (i + 1) % results.length);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setHighlight((i) => (i - 1 + results.length) % results.length);
          } else if (event.key === "Enter") {
            event.preventDefault();
            const item = results[highlight];
            if (item) pick(item.id);
          }
        }}
      />
      {!query && (
        <kbd className="pg-fg-muted pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-ink/20 px-1.5 py-0.5 font-mono text-[10px] md:inline">
          {shortcutHint}
        </kbd>
      )}

      {open && (
        <ul
          id={listId}
          role="listbox"
          className="pg-surface absolute left-0 right-0 top-[calc(100%+0.35rem)] z-50 max-h-72 overflow-y-auto rounded-xl border-2 border-ink shadow-comic"
        >
          {results.length === 0 ? (
            <li className="pg-fg-muted px-3 py-3 font-body text-sm">
              No matches for “{query.trim()}”
            </li>
          ) : (
            results.map((item, index) => {
              const selected = index === highlight;
              return (
                <li key={item.id} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    className={
                      selected
                        ? "flex w-full items-center justify-between gap-3 bg-comic-yellow px-3 py-2.5 text-left text-ink"
                        : "pg-fg flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left hover:bg-black/5"
                    }
                    onMouseEnter={() => setHighlight(index)}
                    onClick={() => pick(item.id)}
                  >
                    <span className="font-comic text-sm uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span className="pg-fg-muted shrink-0 font-body text-xs">
                      {item.group}
                    </span>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}
