import { memo, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Check, Clipboard, Download, ExternalLink, FileCode2, Link2, Loader2 } from "lucide-react";
import { Button, toast } from "comixa-ui";
import { generateCode } from "./codegen";
import type { CodeTab, GeneratorState } from "./types";

const TABS: readonly { id: CodeTab; label: string }[] = [
  { id: "preview", label: "Preview" },
  { id: "jsx", label: "JSX" },
  { id: "tsx", label: "TSX" },
  { id: "json", label: "JSON" },
];

type ActionStatus = "idle" | "copying" | "copied" | "exporting" | "error";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function CodePanelComponent({ state }: { state: GeneratorState }) {
  const [tab, setTab] = useState<CodeTab>("preview");
  const [status, setStatus] = useState<ActionStatus>("idle");
  const resetTimer = useRef<number | null>(null);
  const values = useMemo(() => ({
    jsx: generateCode(state),
    tsx: generateCode(state, true),
    json: JSON.stringify(state, null, 2),
  }), [state]);
  const activeCode = tab === "preview" ? window.location.href : values[tab];
  const lineCount = tab === "preview" ? 1 : activeCode.split("\n").length;

  const resetStatusLater = () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 1600);
  };

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
  }, []);

  const copy = async () => {
    setStatus("copying");
    try {
      await copyText(activeCode);
      setStatus("copied");
      resetStatusLater();
    } catch {
      setStatus("error");
      toast({ title: "Copy failed", description: "Your browser blocked clipboard access. Select the code and copy it manually.", variant: "danger" });
      resetStatusLater();
    }
  };

  const exportFile = () => {
    setStatus("exporting");
    window.requestAnimationFrame(() => {
      const exportTab = tab === "preview" ? "json" : tab;
      const contents = exportTab === "json" ? values.json : values[exportTab];
      const blob = new Blob([contents], { type: exportTab === "json" ? "application/json" : "text/plain" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `comixa-landing.${exportTab}`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
      setStatus("idle");
      toast({ title: "Export ready", description: `comixa-landing.${exportTab} was downloaded.`, variant: "success" });
    });
  };

  const handleTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const index = TABS.findIndex((item) => item.id === tab);
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? TABS.length - 1
        : (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setTab(TABS[nextIndex].id);
    document.getElementById(`cg-code-tab-${TABS[nextIndex].id}`)?.focus();
  };

  return (
    <section className="cg-code-panel" aria-label="Generated code">
      <div className="cg-code-tabs">
        <div role="tablist" aria-label="Generated output" onKeyDown={handleTabsKeyDown}>
          {TABS.map((item) => (
            <button
              key={item.id}
              id={`cg-code-tab-${item.id}`}
              type="button"
              role="tab"
              className={tab === item.id ? "is-active" : ""}
              aria-selected={tab === item.id}
              aria-controls="cg-code-output"
              tabIndex={tab === item.id ? 0 : -1}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="cg-code-stats"><FileCode2 aria-hidden="true" />{lineCount} {lineCount === 1 ? "line" : "lines"}</div>
        <div className="cg-code-actions">
          <Button size="sm" variant="ghost" onClick={copy} disabled={status === "copying"}>
            {status === "copying" ? <Loader2 className="cg-spin" /> : status === "copied" ? <Check /> : <Clipboard />}
            {status === "copied" ? "Copied" : status === "copying" ? "Copying" : "Copy"}
          </Button>
          <Button size="sm" variant="outline" onClick={exportFile} disabled={status === "exporting"}>
            {status === "exporting" ? <Loader2 className="cg-spin" /> : <Download />}
            {status === "exporting" ? "Preparing" : "Export"}
          </Button>
        </div>
      </div>
      <div className="cg-code-body" id="cg-code-output" role="tabpanel" aria-labelledby={`cg-code-tab-${tab}`} tabIndex={0}>
        {tab === "preview" ? (
          <div className="cg-share-preview">
            <span className="cg-share-icon"><Link2 aria-hidden="true" /></span>
            <div className="cg-share-copy"><span>Shareable build</span><strong>Every setting lives in this URL.</strong><p>{window.location.href}</p></div>
            <div className="cg-share-actions"><BadgeList state={state} /><Button size="sm" variant="ghost" onClick={copy}>Copy link</Button><a href={window.location.href} target="_blank" rel="noreferrer" aria-label="Open shared build in a new tab"><ExternalLink /></a></div>
          </div>
        ) : (
          <pre><code>{values[tab]}</code></pre>
        )}
      </div>
      <div className="sr-only" aria-live="polite">{status === "copied" ? "Copied to clipboard" : status === "error" ? "Copy failed" : status === "exporting" ? "Preparing export" : ""}</div>
    </section>
  );
}

function BadgeList({ state }: { state: GeneratorState }) {
  return <div className="cg-state-badges"><span>{state.theme}</span><span>{state.sections.length} sections</span><span>{state.spacing}</span></div>;
}

export const CodePanel = memo(CodePanelComponent);
