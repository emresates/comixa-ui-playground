"use client";
import { useEffect, useRef } from "react";
export function CursorMorph() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (event: PointerEvent) => {
      cursor.style.setProperty("--x", `${event.clientX}px`);
      cursor.style.setProperty("--y", `${event.clientY}px`);
      cursor.dataset.visible = "true";
    };

    const over = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-cursor]",
      );
      cursor.dataset.mode = target?.dataset.cursor ?? "DOT";
      cursor.dataset.shape = target?.dataset.cursorShape ?? "circle";
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      className="morph-cursor"
      data-morph-cursor
      data-mode="DOT"
      data-shape="circle"
      aria-hidden="true"
    />
  );
}
