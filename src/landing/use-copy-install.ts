"use client";
import { useEffect, useRef, useState } from "react";
export function useCopyInstall() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copyInstall = async () => {
    await navigator.clipboard.writeText("npm i comixa-ui");
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1400);
  };
  return { copied, copyInstall };
}
