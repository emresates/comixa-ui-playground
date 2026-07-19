"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./comic-cursor.module.css";

type CursorState = {
  x: number;
  y: number;
  label: string;
  visible: boolean;
  pressed: boolean;
};

export function ComicCursor() {
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    label: "LOOK",
    visible: false,
    pressed: false,
  });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const update = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.2;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.2;

      setState((prev) => ({
        ...prev,
        x: currentRef.current.x,
        y: currentRef.current.y,
      }));

      frameRef.current = window.requestAnimationFrame(update);
    };

    const onMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setState((prev) => ({ ...prev, visible: true }));
    };

    const onLeave = () => setState((prev) => ({ ...prev, visible: false }));
    const onDown = () => setState((prev) => ({ ...prev, pressed: true }));
    const onUp = () => setState((prev) => ({ ...prev, pressed: false }));

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setState((prev) => ({
        ...prev,
        label: target?.dataset.cursor || "LOOK",
      }));
    };

    frameRef.current = window.requestAnimationFrame(update);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} comixa-cursor`}
      style={{
        transform: `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.pressed ? 0.86 : 1})`,
        opacity: state.visible ? 1 : 0,
      }}
      aria-hidden="true"
    >
      <span>{state.label}</span>
    </div>
  );
}
