import { Badge, Button, SoundBadge } from "comixa-ui";
export type ThemeName = "comic" | "retro" | "pop-art" | "manga" | "vintage";
const themes: ReadonlyArray<{ id: ThemeName; label: string; note: string }> = [
  { id: "comic", label: "Comic", note: "Punchy & bright" },
  { id: "retro", label: "Retro", note: "Warm & analog" },
  { id: "pop-art", label: "Pop Art", note: "Bold & electric" },
  { id: "manga", label: "Manga", note: "Ink & screentone" },
  { id: "vintage", label: "Vintage", note: "Editorial & aged" },
];
interface Props {
  theme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
}
export function ThemesSection({ theme, onThemeChange }: Props) {
  const active = themes.find((item) => item.id === theme) ?? themes[0];
  return (
    <section id="themes" className="section themes-section shell-pad">
      <div className="section-heading align-end">
        <div>
          <span className="eyebrow">VISUAL SYSTEMS / 02</span>
          <h2>
            One API.
            <br />
            Five worlds.
          </h2>
        </div>
        <p>
          Theme at the provider level. Override locally only when the story asks
          for it.
        </p>
      </div>
      <div className="theme-console">
        <div className="theme-tabs" role="tablist" aria-label="Comixa themes">
          {themes.map((item, index) => (
            <button
              key={item.id}
              className={theme === item.id ? "active" : ""}
              onClick={() => onThemeChange(item.id)}
              data-cursor={item.label.toUpperCase()}
              data-cursor-shape={index % 2 ? "diamond" : "burst"}
            >
              <span>0{index + 1}</span>
              <strong>{item.label}</strong>
              <small>{item.note}</small>
            </button>
          ))}
        </div>
        <div
          className="theme-preview"
          data-cursor="EXPLORE"
          data-cursor-shape="burst"
        >
          <div className="preview-topline">
            <span>ACTIVE SYSTEM</span>
            <b>{active.label.toUpperCase()}</b>
          </div>
          <div className="preview-canvas">
            <div className="preview-copy">
              <Badge variant="yellow">{active.note}</Badge>
              <h3>
                Same structure.
                <br />
                Different universe.
              </h3>
              <p>
                Typography, borders, shadows, patterns and motion shift together
                as one coherent language.
              </p>
              <Button variant="primary">Launch experience</Button>
            </div>
            <div className="preview-art">
              <div className="shape shape-1" />
              <div className="shape shape-2" />
              <div className="shape shape-3" />
              <SoundBadge word={theme === "manga" ? "BAM" : "WOW"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
