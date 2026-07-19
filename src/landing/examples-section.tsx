const examples = [
  {
    theme: "RETRO",
    type: "RADIO ARCHIVE",
    title: "FM 79",
    mark: "79",
    cursor: "TUNE",
  },
  {
    theme: "MANGA",
    type: "WEEKLY STORIES",
    title: "INK//VERSE",
    mark: "墨",
    cursor: "READ",
  },
  {
    theme: "VINTAGE",
    type: "CURIO CABINET",
    title: "THE LEDGER",
    mark: "L",
    cursor: "OPEN",
  },
  {
    theme: "POP ART",
    type: "CULTURE DROP",
    title: "POP//DROP",
    mark: "!",
    cursor: "POW",
  },
] as const;
export function ExamplesSection() {
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
          <article
            key={item.title}
            className={`example-card example-${index + 1}`}
            data-cursor={item.cursor}
            data-cursor-shape={
              index === 3 ? "burst" : index === 1 ? "diamond" : "square"
            }
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
          </article>
        ))}
      </div>
    </section>
  );
}
