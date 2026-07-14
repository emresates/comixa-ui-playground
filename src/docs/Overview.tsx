import { Badge, SoundBadge } from "comixa-ui";
import { COMPONENT_BLURBS } from "./nav";

export function Overview({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide">
          Comixa UI
        </h1>
        <p className="pg-fg-muted max-w-2xl text-lg">
          Comic-themed React components built with Tailwind. Pick a component
          below or from the sidebar to see import, examples, code, and props.
        </p>
      </div>
      <pre className="overflow-x-auto rounded-lg border-2 border-ink bg-ink p-4 font-mono text-sm text-paper shadow-comic">
        <code>{`npm i comixa-ui\n\nimport { Button } from "comixa-ui";`}</code>
      </pre>
      <div className="flex flex-wrap gap-2">
        <SoundBadge variant="pow" size="sm" />
        <SoundBadge variant="bam" size="sm" />
        <Badge variant="yellow">Docs playground</Badge>
      </div>
      <section className="flex flex-col gap-3">
        <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">
          Components
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {COMPONENT_BLURBS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onNavigate(item.id)}
                className="pg-surface pg-border flex w-full flex-col gap-1 rounded-xl border-2 px-4 py-3 text-left shadow-comic-sm transition hover:-translate-y-0.5 hover:opacity-95"
              >
                <span className="pg-fg font-comic text-sm uppercase tracking-wide">
                  {item.label}
                </span>
                <span className="pg-fg-muted text-sm">{item.blurb}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
