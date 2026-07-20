import { memo } from "react";
import { ChevronRight, Laptop, Maximize2, Minus, Monitor, MoonStar, Plus, Smartphone } from "lucide-react";
import { HistoryControls } from "./HistoryControls";
import type { GeneratorHistoryItem } from "./use-generator-state";
import type { Device, GeneratorState } from "./types";

export const DEVICE_WIDTHS: Record<Device, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "390px",
};

const DEVICES = [
  { id: "desktop", label: "Desktop", icon: Monitor, shortcut: "1" },
  { id: "tablet", label: "Tablet", icon: Laptop, shortcut: "2" },
  { id: "mobile", label: "Mobile", icon: Smartphone, shortcut: "3" },
] as const;

type CanvasToolbarProps = {
  device: Device;
  theme: GeneratorState["theme"];
  zoom: number;
  selectedLabel?: string;
  selectedNode?: string;
  historyItems: GeneratorHistoryItem[];
  canUndo: boolean;
  canRedo: boolean;
  onDeviceChange: (device: Device) => void;
  onZoomChange: (zoom: number) => void;
  onCycleBackground: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onRestoreHistory: (id: string) => void;
};

function CanvasToolbarComponent({
  device,
  theme,
  zoom,
  selectedLabel,
  selectedNode,
  historyItems,
  canUndo,
  canRedo,
  onDeviceChange,
  onZoomChange,
  onCycleBackground,
  onUndo,
  onRedo,
  onRestoreHistory,
}: CanvasToolbarProps) {
  return (
    <div className="cg-canvas-toolbar" role="toolbar" aria-label="Canvas controls">
      <div className="cg-device-switcher" role="group" aria-label="Preview size">
        {DEVICES.map(({ id, label, icon: Icon, shortcut }) => (
          <button
            key={id}
            type="button"
            className={device === id ? "is-active" : ""}
            onClick={() => onDeviceChange(id)}
            aria-label={`${label} preview`}
            aria-pressed={device === id}
            title={`${label} preview (⌘${shortcut})`}
          >
            <Icon aria-hidden="true" /><span>{label}</span>
          </button>
        ))}
      </div>
      <div className="cg-toolbar-center">
        <nav className="cg-breadcrumb" aria-label="Editor breadcrumb">
          <span>Landing</span>
          {selectedLabel ? <><ChevronRight aria-hidden="true" /><strong>{selectedLabel}</strong></> : null}
          {selectedLabel && selectedNode && selectedNode !== "Section" ? <><ChevronRight aria-hidden="true" /><em>{selectedNode}</em></> : null}
        </nav>
        <div className="cg-canvas-meta" aria-live="polite"><span>{DEVICE_WIDTHS[device]}</span><i />{theme}<i />{zoom}%</div>
      </div>
      <div className="cg-canvas-actions">
        <HistoryControls items={historyItems} canUndo={canUndo} canRedo={canRedo} onUndo={onUndo} onRedo={onRedo} onRestore={onRestoreHistory} />
        <div className="cg-zoom-tools" role="group" aria-label="Zoom and canvas background">
          <button type="button" onClick={() => onZoomChange(Math.max(40, zoom - 10))} disabled={zoom <= 40} aria-label="Zoom out" title="Zoom out (−)"><Minus aria-hidden="true" /></button>
          <output aria-label="Current zoom">{zoom}%</output>
          <button type="button" onClick={() => onZoomChange(Math.min(120, zoom + 10))} disabled={zoom >= 120} aria-label="Zoom in" title="Zoom in (+)"><Plus aria-hidden="true" /></button>
          <button type="button" onClick={() => onZoomChange(80)} aria-label="Reset zoom to 80 percent" title="Reset zoom"><Maximize2 aria-hidden="true" /></button>
          <span className="cg-toolbar-divider" />
          <button type="button" onClick={onCycleBackground} aria-label="Switch canvas background" title="Cycle canvas background"><MoonStar aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}

export const CanvasToolbar = memo(CanvasToolbarComponent);
