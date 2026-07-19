"use client";

import { useEffect } from "react";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onMatch: () => void) {
  useEffect(() => {
    let index = 0;

    function onKeyDown(event: KeyboardEvent) {
      const expected = sequence[index];

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === expected) {
        index++;

        if (index === sequence.length) {
          onMatch();
          index = 0;
        }
      } else {
        index = key === sequence[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onMatch]);
}
