import { memo, useEffect, useMemo, useRef, useState, type DragEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Eye, EyeOff, GripVertical, Layers3, LayoutGrid, Plus, Search, SearchX } from "lucide-react";
import { Button, Input } from "comixa-ui";
import { CATEGORIES, SECTION_DEFINITIONS, SECTION_MAP } from "./layouts";
import type { PageSection, SectionType } from "./types";

type SectionLibraryProps = {
  sections: PageSection[];
  selectedId: string | null;
  onAdd: (type: SectionType) => void;
  onSelect: (id: string) => void;
  onReorder: (sourceId: string, targetId: string) => void;
  onToggleVisibility: (id: string) => void;
  focusToken: number;
};

function SectionLibraryComponent({
  sections,
  selectedId,
  onAdd,
  onSelect,
  onReorder,
  onToggleVisibility,
  focusToken,
}: SectionLibraryProps) {
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState<string[]>([...CATEGORIES]);
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dropTargetId, setDropTargetId] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle
      ? SECTION_DEFINITIONS.filter((item) =>
          `${item.label} ${item.description} ${item.variants.map((variant) => variant.label).join(" ")}`
            .toLowerCase()
            .includes(needle),
        )
      : SECTION_DEFINITIONS;
  }, [query]);

  useEffect(() => {
    if (focusToken > 0) searchRef.current?.focus();
  }, [focusToken]);

  const toggleCategory = (category: string) => {
    setOpenCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category],
    );
  };

  const startDrag = (event: DragEvent, type: SectionType) => {
    event.dataTransfer.setData("application/comixa-section", type);
    event.dataTransfer.effectAllowed = "copy";
  };

  const startOutlineDrag = (event: DragEvent, id: string) => {
    event.stopPropagation();
    event.dataTransfer.setData("application/comixa-reorder", id);
    event.dataTransfer.effectAllowed = "move";
    setDraggedId(id);
  };

  const dropOutlineItem = (event: DragEvent, targetId: string) => {
    const sourceId = event.dataTransfer.getData("application/comixa-reorder");
    if (!sourceId) return;
    event.preventDefault();
    event.stopPropagation();
    onReorder(sourceId, targetId);
    setDraggedId(null);
    setDropTargetId(null);
  };

  return (
    <aside className="cg-library cg-tool-panel" aria-label="Section library">
      <div className="cg-panel-heading">
        <div><span>01</span><div><h2>Sections</h2><p>Compose your page</p></div></div>
        <kbd>/</kbd>
      </div>
      <div className="cg-search-field">
        <Search aria-hidden="true" />
        <Input
          ref={searchRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search sections or layouts…"
          inputSize="sm"
          aria-label="Search sections"
        />
        {query ? <button type="button" onClick={() => { setQuery(""); searchRef.current?.focus(); }} aria-label="Clear section search">×</button> : null}
      </div>

      <div className="cg-library-meta">
        <span><LayoutGrid aria-hidden="true" />{filtered.length} blocks</span>
        <small>Drag or press +</small>
      </div>

      <div className="cg-library-scroll">
        <section className="cg-page-outline" aria-labelledby="cg-page-outline-title">
          <div className="cg-outline-heading">
            <span id="cg-page-outline-title"><Layers3 aria-hidden="true" />Page structure</span>
            <small>{sections.length} layers</small>
          </div>
          {sections.length ? (
            <ol className="cg-outline-list">
              {sections.map((section, index) => (
                <li
                  key={section.id}
                  draggable
                  className={`${selectedId === section.id ? "is-selected" : ""} ${section.hidden ? "is-hidden" : ""} ${draggedId === section.id ? "is-dragging" : ""} ${dropTargetId === section.id ? "is-drop-target" : ""}`}
                  onDragStart={(event) => startOutlineDrag(event, section.id)}
                  onDragEnd={() => { setDraggedId(null); setDropTargetId(null); }}
                  onDragEnter={(event) => {
                    if (!event.dataTransfer.types.includes("application/comixa-reorder")) return;
                    event.preventDefault();
                    setDropTargetId(section.id);
                  }}
                  onDragOver={(event) => {
                    if (!event.dataTransfer.types.includes("application/comixa-reorder")) return;
                    event.preventDefault();
                    event.stopPropagation();
                    event.dataTransfer.dropEffect = "move";
                  }}
                  onDrop={(event) => dropOutlineItem(event, section.id)}
                >
                  <GripVertical className="cg-outline-grip" aria-hidden="true" />
                  <button
                    type="button"
                    className="cg-outline-select"
                    onClick={() => onSelect(section.id)}
                    onKeyDown={(event) => {
                      if (!event.altKey || !["ArrowUp", "ArrowDown"].includes(event.key)) return;
                      const targetIndex = index + (event.key === "ArrowUp" ? -1 : 1);
                      const target = sections[targetIndex];
                      if (!target) return;
                      event.preventDefault();
                      onReorder(section.id, target.id);
                    }}
                    aria-pressed={selectedId === section.id}
                    aria-label={`${SECTION_MAP[section.type].label}, ${section.variant} layout. Alt plus arrow keys reorder.`}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span><strong>{SECTION_MAP[section.type].label}</strong><small>{section.variant}</small></span>
                  </button>
                  <button
                    type="button"
                    className="cg-outline-visibility"
                    onClick={() => onToggleVisibility(section.id)}
                    aria-label={`${section.hidden ? "Show" : "Hide"} ${SECTION_MAP[section.type].label}`}
                    aria-pressed={section.hidden}
                    title={section.hidden ? "Show section" : "Hide section"}
                  >
                    {section.hidden ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="cg-outline-empty">Drag a block below to start your page.</p>
          )}
          <p className="cg-outline-help"><GripVertical aria-hidden="true" /> Drag layers or use Alt + arrows</p>
        </section>

        {CATEGORIES.map((category) => {
          const items = filtered.filter((item) => item.category === category);
          if (!items.length) return null;
          const open = openCategories.includes(category);
          const regionId = `cg-library-${category.toLowerCase()}`;
          return (
            <section key={category} className="cg-library-category">
              <button
                type="button"
                className="cg-category-toggle"
                onClick={() => toggleCategory(category)}
                aria-expanded={open}
                aria-controls={regionId}
              >
                <span>{category}</span><small>{items.length}</small><ChevronDown className={open ? "is-open" : ""} aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    id={regionId}
                    className="cg-section-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {items.map((item) => (
                      <article
                        key={item.type}
                        className="cg-library-card"
                        draggable
                        onDragStart={(event) => startDrag(event, item.type)}
                      >
                        <div className={`cg-section-thumb cg-thumb-${item.type}`} aria-hidden="true">
                          {item.thumbnail.map((width, index) => <i key={`${width}-${index}`} style={{ width: `${width}%` }} />)}
                        </div>
                        <div className="cg-library-card-copy">
                          <span><GripVertical aria-hidden="true" />{item.label}</span>
                          <p>{item.description}</p>
                          <small>{item.variants.length} layouts</small>
                        </div>
                        <button type="button" onClick={() => onAdd(item.type)} aria-label={`Add ${item.label}`} title={`Add ${item.label}`}><Plus aria-hidden="true" /></button>
                      </article>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </section>
          );
        })}
        {!filtered.length ? (
          <motion.div className="cg-no-results" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} role="status">
            <span><SearchX aria-hidden="true" /></span>
            <h3>No matching panels</h3>
            <p>Try “hero”, “pricing”, or a layout name such as “magazine”.</p>
            <Button size="sm" variant="outline" onClick={() => { setQuery(""); searchRef.current?.focus(); }}>Clear search</Button>
          </motion.div>
        ) : null}
      </div>
    </aside>
  );
}

export const SectionLibrary = memo(SectionLibraryComponent);
