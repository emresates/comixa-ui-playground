"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./floating-stickers.module.css";

const stickers = [
  { label: "POW!", x: "4%", y: "20%", rotate: -12, delay: 0 },
  { label: "ZAP!", x: "87%", y: "17%", rotate: 8, delay: 0.4 },
  { label: "???", x: "3%", y: "78%", rotate: 6, delay: 0.8 },
  { label: "WHAM!", x: "88%", y: "78%", rotate: -8, delay: 0.2 },
];

export function FloatingStickers() {
  const reducedMotion = useReducedMotion();

  return (
    <div className={styles.layer} aria-hidden="true">
      {stickers.map((sticker) => (
        <motion.span
          key={sticker.label}
          style={{ left: sticker.x, top: sticker.y, rotate: sticker.rotate }}
          animate={
            reducedMotion
              ? undefined
              : { y: [0, -12, 0], rotate: [sticker.rotate, sticker.rotate + 4, sticker.rotate] }
          }
          transition={{
            duration: 3.8,
            repeat: Infinity,
            delay: sticker.delay,
            ease: "easeInOut",
          }}
        >
          {sticker.label}
        </motion.span>
      ))}
    </div>
  );
}
