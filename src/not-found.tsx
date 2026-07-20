"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./components/not-found.module.css";
import { ComicCursor } from "./components/comic-cursor";
import { PanelIntro } from "./components/panel-intro";
import { FloatingStickers } from "./components/floating-stickers";
import { useKonamiCode } from "./components/useKonamiCode";

const IMPACT_WORDS = [
  "BOOM!",
  "POW!",
  "KAPOW!",
  "WHAM!",
  "ZAP!",
  "BAM!",
] as const;
const THEMES = ["comic", "retro", "pop-art", "manga", "vintage"] as const;

type ThemeName = (typeof THEMES)[number];

const themeLabels: Record<ThemeName, string> = {
  comic: "Comic",
  retro: "Retro",
  "pop-art": "Pop Art",
  manga: "Manga",
  vintage: "Vintage",
};

export default function NotFound() {
  const reducedMotion = useReducedMotion();
  const [theme, setTheme] = useState<ThemeName>("retro");
  const [introDone, setIntroDone] = useState(false);
  const [impactWord, setImpactWord] =
    useState<(typeof IMPACT_WORDS)[number]>("ZAP!");
  const [hitCount, setHitCount] = useState(0);
  const [secretOpen, setSecretOpen] = useState(false);

  useKonamiCode(() => setSecretOpen(true));

  useEffect(() => {
    setImpactWord(
      IMPACT_WORDS[Math.floor(Math.random() * IMPACT_WORDS.length)],
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIntroDone(true);
      return;
    }

    const timer = window.setTimeout(() => setIntroDone(true), 1350);
    return () => window.clearTimeout(timer);
  }, [reducedMotion]);

  const panelLines = useMemo(
    () => ["THE PAGE IS MISSING", "THE STORY CONTINUES", "RETURN TO THE PANEL"],
    [],
  );

  function handle404Click() {
    const next = hitCount + 1;
    setHitCount(next);

    if (next >= 5) {
      setSecretOpen(true);
      setHitCount(0);
    }
  }

  return (
    <main className={styles.page} data-comixa-theme={theme}>
      <ComicCursor />

      <AnimatePresence>
        {!introDone && (
          <PanelIntro word={impactWord} onComplete={() => setIntroDone(true)} />
        )}
      </AnimatePresence>

      <div className={styles.paperTexture} aria-hidden="true" />
      <div className={styles.halftone} aria-hidden="true" />
      <div className={styles.speedLines} aria-hidden="true" />

      <FloatingStickers />

      <header className={styles.topbar}>
        <a href="/" className={styles.brand} data-cursor="HOME">
          <img src="/logo.png" alt="Comixa UI" className="w-14 h-14 object-cover" />
          <span>COMIXA UI</span>
        </a>
      </header>

      <motion.section
        className={styles.stage}
        initial={reducedMotion ? false : { opacity: 0, y: 40, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.75, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className={styles.panelNumber}>LOST PANEL / 404</div>

        <div className={styles.grid}>
          <section className={styles.mainPanel}>
            <div className={styles.cornerTape} aria-hidden="true" />

            <motion.div
              className={styles.impact}
              initial={reducedMotion ? false : { scale: 0.6, rotate: -12 }}
              animate={{ scale: 1, rotate: -6 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 16,
                delay: 0.65,
              }}
            >
              {impactWord}
            </motion.div>

            <button
              type="button"
              className={styles.errorCode}
              onClick={handle404Click}
              data-cursor="BOOM"
              aria-label="404. Click five times to unlock a secret panel."
            >
              <span>4</span>
              <motion.span
                className={styles.zero}
                animate={
                  reducedMotion
                    ? undefined
                    : { rotate: [-4, 5, -4], scale: [1, 1.06, 1] }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                0
              </motion.span>
              <span>4</span>
            </button>

            <div className={styles.copy}>
              <span className={styles.eyebrow}>PLOT TWIST!</span>
              <h1>This page escaped from the comic.</h1>
              <p>
                The route you followed has fallen between panels. No worries:
                the next scene is one click away.
              </p>
            </div>

            <div className={styles.actions}>
              <a href="/" className={styles.primaryAction} data-cursor="HOME">
                <span>Back to Home</span>
                <strong>→</strong>
              </a>

              <a
                href="/docs"
                className={styles.secondaryAction}
                data-cursor="READ"
              >
                Open Documentation
              </a>
            </div>

            <div className={styles.progress}>
              {panelLines.map((line, index) => (
                <span key={line}>
                  <b>0{index + 1}</b>
                  {line}
                </span>
              ))}
            </div>
          </section>

          <aside className={styles.sidePanel}>
            <div className={styles.character} aria-hidden="true">
              <div className={styles.characterHead}>
                <span className={styles.eyeLeft} />
                <span className={styles.eyeRight} />
                <span className={styles.mouth} />
              </div>
              <div className={styles.characterBody} />
            </div>

            <motion.div
              className={styles.speechBubble}
              initial={
                reducedMotion ? false : { opacity: 0, x: 24, scale: 0.88 }
              }
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.9,
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
            >
              “I checked every panel. It’s definitely gone.”
            </motion.div>

            <div className={styles.clueCard}>
              <span>EDITOR’S NOTE</span>
              <p>
                Try the home page, browse the docs, or press ↑ ↑ ↓ ↓ ← → ← → B
                A.
              </p>
            </div>
          </aside>
        </div>
      </motion.section>

      <footer className={styles.footer}>
        <span>COMIXA ERROR SYSTEM</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>

      <AnimatePresence>
        {secretOpen && (
          <motion.div
            className={styles.secretBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="secret-title"
          >
            <motion.section
              className={styles.secretPanel}
              initial={{ scale: 0.72, rotate: -5, y: 80 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <button
                type="button"
                className={styles.secretClose}
                onClick={() => setSecretOpen(false)}
                aria-label="Close secret panel"
              >
                ×
              </button>
              <span className={styles.secretKicker}>SECRET PANEL UNLOCKED</span>
              <h2 id="secret-title">To be continued…</h2>
              <p>
                You found Comixa’s hidden panel. The missing page may return in
                the next issue.
              </p>
              <a href="/playground" data-cursor="PLAY">
                Enter Playground →
              </a>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
