"use client";

import { motion } from "framer-motion";
import styles from "./panel-intro.module.css";

type PanelIntroProps = {
  word: string;
  onComplete: () => void;
};

export function PanelIntro({ word, onComplete }: PanelIntroProps) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onAnimationComplete={onComplete}
      aria-hidden="true"
    >
      <motion.div
        className={styles.left}
        initial={{ x: 0 }}
        animate={{ x: "-105%" }}
        transition={{ delay: 0.85, duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
      />
      <motion.div
        className={styles.right}
        initial={{ x: 0 }}
        animate={{ x: "105%" }}
        transition={{ delay: 0.85, duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
      />

      <motion.div
        className={styles.word}
        initial={{ scale: 0.25, rotate: -16, opacity: 0 }}
        animate={{ scale: [0.25, 1.18, 1], rotate: [-16, 4, -3], opacity: 1 }}
        exit={{ scale: 1.7, opacity: 0 }}
        transition={{ duration: 0.7, ease: "backOut" }}
      >
        {word}
      </motion.div>
    </motion.div>
  );
}
