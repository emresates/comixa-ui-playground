import { useEffect, useRef, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ComicPanel,
  ComixaProvider,
  Ribbon,
  SoundBadge,
  SpeechBubble,
  Sticker,
  ToastProvider,
  toast,
} from "comixa-ui";

type CursorMode = "dot" | "burst" | "read" | "shop" | "drag" | "play";

const strips = [
  {
    n: "01",
    title: "The Revenge of Fun",
    copy: "Why maximalism is eating minimalist interfaces for breakfast.",
    tone: "pink",
  },
  {
    n: "02",
    title: "Plastic Paradise",
    copy: "A photo essay about cheerful objects that refuse to disappear.",
    tone: "cyan",
  },
  {
    n: "03",
    title: "Noise Department",
    copy: "Six studios refusing to whisper in a grayscale industry.",
    tone: "yellow",
  },
];

const products = [
  ["01", "Electric Tomato", "Mina Voltage", "$48", "red"],
  ["02", "Monday Meltdown", "Studio Uh-Oh", "$56", "cyan"],
  ["03", "Plastic Paradise", "Leo Soda", "$42", "blue"],
];

const labels: Record<CursorMode, string> = {
  dot: "",
  burst: "POW!",
  read: "READ",
  shop: "GRAB!",
  drag: "DRAG",
  play: "PLAY",
};

const popArtStyles = `
.pop-drop {
  --yellow: #ffe63b;
  --pink: #ff4f87;
  --blue: #3979ff;
  --cyan: #48e5e0;
  --red: #f0443c;
  --cream: #fff8dd;
  --ink-local: #121212;
  --green: #79df62;
  min-height: 100%;
  overflow-x: hidden;
  background: var(--cream);
  color: var(--ink-local);
  font-family: "Baloo 2", "Comic Neue", system-ui, sans-serif;
}
.pop-drop * { box-sizing: border-box; }
.pop-drop a { color: inherit; text-decoration: none; }
.pop-drop .shell { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
.pop-drop .section { padding: 105px 0; }
.pop-drop .grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.04;
  background-image: radial-gradient(#121212 1px, transparent 1px);
  background-size: 7px 7px;
}
.pop-drop .topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 13px 20px;
  border-bottom: 4px solid var(--ink-local);
  background: rgba(255, 248, 221, 0.94);
  backdrop-filter: blur(12px);
}
.pop-drop .topbar nav { display: flex; gap: 8px; font-weight: 900; }
.pop-drop .topbar nav a {
  padding: 8px 13px;
  border: 2px solid transparent;
  transition: 0.18s ease;
}
.pop-drop .topbar nav a:hover,
.pop-drop .topbar nav a.active {
  background: var(--yellow);
  border-color: var(--ink-local);
  box-shadow: 3px 3px 0 var(--ink-local);
  transform: translate(-2px, -2px);
}
.pop-drop .brand {
  font-family: "Baloo 2", "Bangers", Impact, sans-serif;
  font-size: 31px;
  font-weight: 900;
  letter-spacing: 0.06em;
}
.pop-drop .brand span { color: var(--pink); }
.pop-drop .hero {
  min-height: 790px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 72px;
  padding-top: 80px;
  padding-bottom: 90px;
}
.pop-drop .hero-kicker {
  display: flex;
  align-items: center;
  gap: 18px;
  font-weight: 900;
  font-size: 13px;
  text-transform: uppercase;
}
.pop-drop .hero h1,
.pop-drop .section h2,
.pop-drop .page-hero h1 {
  font-family: "Baloo 2", "Bangers", Impact, sans-serif;
  letter-spacing: 0.025em;
}
.pop-drop .hero h1 {
  font-size: clamp(65px, 7.2vw, 109px);
  line-height: 0.88;
  margin: 24px 0;
}
.pop-drop .hero h1 em,
.pop-drop .page-hero h1 em {
  font-style: normal;
  color: var(--pink);
  text-shadow: 6px 6px 0 var(--ink-local);
  -webkit-text-stroke: 2px var(--ink-local);
}
.pop-drop .hero-copy > p { font-size: 20px; line-height: 1.65; max-width: 620px; }
.pop-drop .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin: 31px 0; }
.pop-drop .editor-note { max-width: 430px; transform: rotate(-1.8deg); }
.pop-drop .hero-machine {
  position: relative;
  min-height: 590px;
  display: grid;
  place-items: center;
  perspective: 1000px;
}
.pop-drop .cover-stack {
  position: relative;
  width: min(430px, 80vw);
  height: 535px;
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.pop-drop .hero-machine:hover .cover-stack { transform: rotateY(-7deg) rotateX(4deg) scale(1.02); }
.pop-drop .cover {
  position: absolute;
  inset: 0;
  border: 5px solid var(--ink-local);
  padding: 22px;
  overflow: hidden;
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.pop-drop .cover-back {
  background: var(--cyan);
  transform: rotate(-9deg) translate(-45px, 15px);
  box-shadow: 12px 12px 0 var(--ink-local);
}
.pop-drop .cover-mid {
  background: var(--pink);
  transform: rotate(8deg) translate(40px, 8px);
  box-shadow: 12px 12px 0 var(--blue);
}
.pop-drop .hero-machine:hover .cover-back { transform: rotate(-13deg) translate(-70px, 28px); }
.pop-drop .hero-machine:hover .cover-mid { transform: rotate(12deg) translate(66px, 20px); }
.pop-drop .cover-back b,
.pop-drop .cover-mid b {
  font-family: "Bangers", "Baloo 2", Impact, sans-serif;
  font-size: 72px;
  line-height: 0.83;
}
.pop-drop .cover-front { z-index: 3; background: var(--yellow); box-shadow: 16px 17px 0 var(--blue); }
.pop-drop .cover-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--ink-local) 1.6px, transparent 1.6px);
  background-size: 11px 11px;
  opacity: 0.13;
}
.pop-drop .issue { position: relative; z-index: 2; font-weight: 900; }
.pop-drop .face-pop {
  position: absolute;
  width: 250px;
  height: 250px;
  right: -18px;
  top: 68px;
  border: 5px solid var(--ink-local);
  border-radius: 50%;
  background: #ffd2b3;
  box-shadow: -15px 15px 0 var(--pink);
}
.pop-drop .face-pop::before {
  content: "";
  position: absolute;
  inset: -18px 10px 135px -16px;
  border-radius: 55% 50% 25% 30%;
  background: var(--blue);
  border: 5px solid var(--ink-local);
  transform: rotate(-8deg);
}
.pop-drop .face-pop i {
  position: absolute;
  width: 32px;
  height: 17px;
  top: 94px;
  border-top: 6px solid var(--ink-local);
  border-radius: 50%;
}
.pop-drop .face-pop i:first-child { left: 48px; }
.pop-drop .face-pop i:nth-child(2) { right: 48px; }
.pop-drop .face-pop b {
  position: absolute;
  left: 96px;
  bottom: 44px;
  width: 56px;
  height: 62px;
  border: 5px solid var(--ink-local);
  border-radius: 50%;
  background: var(--red);
  display: grid;
  place-items: center;
  color: white;
  font-family: "Bangers", Impact, sans-serif;
  font-size: 32px;
}
.pop-drop .cover-front h2 {
  position: absolute;
  z-index: 4;
  left: 18px;
  bottom: 55px;
  margin: 0;
  font-family: "Bangers", Impact, sans-serif;
  font-size: 86px;
  line-height: 0.74;
  color: white;
  -webkit-text-stroke: 3px var(--ink-local);
  text-shadow: 6px 6px 0 var(--pink);
}
.pop-drop .cover-front small {
  position: absolute;
  z-index: 4;
  right: 18px;
  bottom: 18px;
  background: var(--ink-local);
  color: white;
  padding: 5px 8px;
  font-weight: 900;
}
.pop-drop .orbit {
  position: absolute;
  border: 4px solid var(--ink-local);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: "Bangers", Impact, sans-serif;
  z-index: 7;
  animation: pop-floaty 3.4s ease-in-out infinite;
}
.pop-drop .orbit-a { width: 78px; height: 78px; top: 35px; left: -5px; background: var(--cyan); transform: rotate(-12deg); }
.pop-drop .orbit-b { width: 62px; height: 62px; bottom: 44px; right: -8px; background: var(--pink); color: white; animation-delay: -1.3s; }
.pop-drop .very-limited { position: absolute !important; right: 0; top: 0; z-index: 8; transform: rotate(10deg); }
.pop-drop .wow-badge { position: absolute !important; left: -8px; bottom: 10px; z-index: 8; transform: rotate(-13deg); }
.pop-drop .marquee {
  overflow: hidden;
  background: var(--ink-local);
  color: white;
  border-block: 5px solid var(--pink);
  font-weight: 900;
  white-space: nowrap;
}
.pop-drop .marquee > div {
  display: inline-flex;
  gap: 28px;
  align-items: center;
  padding: 15px 0;
  min-width: max-content;
  animation: pop-marquee 20s linear infinite;
}
.pop-drop .marquee span { font-size: 18px; }
.pop-drop .marquee b { color: var(--yellow); font-size: 24px; }
.pop-drop .section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  margin-bottom: 46px;
}
.pop-drop .section-heading h2 {
  font-size: clamp(46px, 5vw, 76px);
  margin: 5px 0 0;
  line-height: 0.95;
}
.pop-drop .section-heading > p,
.pop-drop .heading-copy { max-width: 420px; line-height: 1.65; }
.pop-drop .eyebrow { font-weight: 900; letter-spacing: 0.16em; font-size: 13px; }
.pop-drop .issue-map { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; }
.pop-drop .issue-strip {
  grid-column: 1;
  display: grid;
  grid-template-columns: 72px 1fr auto;
  align-items: center;
  gap: 25px;
  padding: 27px;
  border: 4px solid var(--ink-local);
  box-shadow: 7px 7px 0 var(--ink-local);
  transition: 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.pop-drop .issue-strip:hover {
  transform: translate(8px, -6px) rotate(-1deg);
  box-shadow: 12px 13px 0 var(--ink-local);
}
.pop-drop .issue-strip > span { font-family: "Bangers", Impact, sans-serif; font-size: 46px; }
.pop-drop .issue-strip small { font-weight: 900; letter-spacing: 0.13em; }
.pop-drop .issue-strip h3 { font-size: 28px; margin: 4px 0; }
.pop-drop .issue-strip p { margin: 0; }
.pop-drop .issue-strip > b { font-size: 32px; }
.pop-drop .pink { background: var(--pink); }
.pop-drop .cyan { background: var(--cyan); }
.pop-drop .yellow { background: var(--yellow); }
.pop-drop .sound-board {
  grid-column: 2;
  grid-row: 1 / 4;
  position: relative;
  overflow: hidden;
  background: var(--blue);
  color: white;
  border: 5px solid var(--ink-local);
  box-shadow: 11px 11px 0 var(--pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 38px;
}
.pop-drop .sound-board::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: repeating-conic-gradient(var(--yellow) 0 8deg, transparent 8deg 18deg);
  animation: pop-spin 22s linear infinite;
  opacity: 0.25;
}
.pop-drop .sound-board > * { position: relative; z-index: 2; }
.pop-drop .sound-board p { font-weight: 900; letter-spacing: 0.16em; }
.pop-drop .sound-board button {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 7px solid var(--ink-local);
  background: var(--red);
  color: white;
  font-family: "Bangers", Impact, sans-serif;
  font-size: 48px;
  box-shadow: 0 14px 0 #891d25;
  transition: 0.12s ease;
}
.pop-drop .sound-board button:active { transform: translateY(10px); box-shadow: 0 4px 0 #891d25; }
.pop-drop .meter { display: flex; align-items: end; gap: 7px; height: 68px; margin-top: 25px; }
.pop-drop .meter i {
  width: 14px;
  background: var(--yellow);
  border: 2px solid var(--ink-local);
  animation: pop-meter 0.8s ease-in-out infinite alternate;
}
.pop-drop .meter i:nth-child(1) { height: 20px; }
.pop-drop .meter i:nth-child(2) { height: 42px; animation-delay: -0.2s; }
.pop-drop .meter i:nth-child(3) { height: 60px; animation-delay: -0.45s; }
.pop-drop .meter i:nth-child(4) { height: 36px; animation-delay: -0.1s; }
.pop-drop .meter i:nth-child(5) { height: 54px; animation-delay: -0.6s; }
.pop-drop .meter i:nth-child(6) { height: 27px; animation-delay: -0.3s; }
.pop-drop .lab {
  background: var(--blue);
  color: white;
  border-block: 6px solid var(--ink-local);
}
.pop-drop .lab-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 70px; align-items: center; }
.pop-drop .lab-copy h2 { font-size: clamp(48px, 5.4vw, 80px); line-height: 0.95; margin: 20px 0; }
.pop-drop .lab-copy p { font-size: 19px; line-height: 1.7; margin-bottom: 28px; }
.pop-drop .kinetic-board {
  position: relative;
  min-height: 520px;
  background: var(--cream);
  border: 5px solid var(--ink-local);
  box-shadow: 14px 14px 0 var(--pink);
  overflow: hidden;
}
.pop-drop .rayburst {
  position: absolute;
  inset: -40%;
  background: repeating-conic-gradient(var(--yellow) 0 10deg, var(--pink) 10deg 20deg);
  animation: pop-spin 30s linear infinite;
}
.pop-drop .shape {
  position: absolute;
  z-index: 2;
  border: 5px solid var(--ink-local);
  font-family: "Bangers", Impact, sans-serif;
  display: grid;
  place-items: center;
  transition: 0.4s cubic-bezier(0.2, 0.9, 0.2, 1);
  box-shadow: 8px 8px 0 var(--ink-local);
}
.pop-drop .shape-1 { width: 170px; height: 120px; background: var(--cyan); left: 8%; top: 12%; transform: rotate(-9deg); font-size: 62px; }
.pop-drop .shape-2 { width: 190px; height: 190px; border-radius: 50%; background: var(--red); color: white; right: 10%; top: 9%; font-size: 70px; }
.pop-drop .shape-3 { width: 120px; height: 210px; background: var(--yellow); left: 21%; bottom: 8%; font-size: 58px; }
.pop-drop .shape-4 { width: 250px; height: 120px; background: white; right: 7%; bottom: 12%; transform: rotate(7deg); font-size: 58px; }
.pop-drop .kinetic-board:hover .shape-1 { transform: translate(25px, 18px) rotate(8deg); }
.pop-drop .kinetic-board:hover .shape-2 { transform: translate(-38px, 35px) scale(1.08); }
.pop-drop .kinetic-board:hover .shape-3 { transform: translate(45px, -30px) rotate(-10deg); }
.pop-drop .kinetic-board:hover .shape-4 { transform: translate(-30px, -22px) rotate(-5deg); }
.pop-drop .world-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
.pop-drop .world {
  min-height: 330px;
  padding: 34px !important;
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  color: var(--ink-local) !important;
  transition: 0.25s ease;
}
.pop-drop .world:hover { transform: translateY(-10px) rotate(1deg); }
.pop-drop .world > span { font-family: "Bangers", Impact, sans-serif; font-size: 55px; }
.pop-drop .world h3 { font-size: 34px; line-height: 1; margin: 12px 0; }
.pop-drop .world p { line-height: 1.6; }
.pop-drop .world button { font-weight: 900; border-bottom: 3px solid; }
.pop-drop .world-editorial { background: var(--pink) !important; }
.pop-drop .world-shop { background: var(--yellow) !important; transform: translateY(26px); }
.pop-drop .world-studio { background: var(--cyan) !important; }
.pop-drop .club { background: var(--yellow); border-block: 6px solid var(--ink-local); }
.pop-drop .club-inner { display: grid; grid-template-columns: 1.1fr 0.75fr 0.7fr; gap: 45px; align-items: center; }
.pop-drop .club h2 { font-size: 67px; margin: 10px 0; }
.pop-drop .club p { font-size: 18px; line-height: 1.65; }
.pop-drop .membership-card {
  background: var(--pink);
  border: 5px solid var(--ink-local);
  padding: 25px;
  box-shadow: 11px 11px 0 var(--blue);
  transform: rotate(-4deg);
  transition: 0.25s ease;
}
.pop-drop .membership-card:hover { transform: rotate(3deg) scale(1.05); }
.pop-drop .membership-card small,
.pop-drop .membership-card b { display: block; }
.pop-drop .membership-card b { font-size: 34px; }
.pop-drop .membership-card div {
  font-family: "Bangers", Impact, sans-serif;
  font-size: 38px;
  color: white;
  margin: 35px 0 18px;
  -webkit-text-stroke: 1px var(--ink-local);
}
.pop-drop .membership-card i {
  display: block;
  height: 48px;
  background: repeating-linear-gradient(90deg, var(--ink-local) 0 3px, transparent 3px 7px, var(--ink-local) 7px 10px, transparent 10px 15px);
}
.pop-drop .club-action { display: flex; flex-direction: column; gap: 17px; }
.pop-drop .club-action strong { font-size: 34px; font-weight: 900; }
.pop-drop .shop-zone { background: var(--cyan); }
.pop-drop .product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.pop-drop .product-card { transition: 0.25s ease; }
.pop-drop .product-card:hover { transform: translateY(-12px) rotate(1deg); }
.pop-drop .product-art {
  aspect-ratio: 4 / 5;
  border: 4px solid var(--ink-local);
  position: relative;
  overflow: hidden;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 18px;
}
.pop-drop .product-art::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: repeating-conic-gradient(transparent 0 12deg, rgba(0, 0, 0, 0.15) 12deg 18deg);
  transition: transform 0.5s ease;
}
.pop-drop .product-card:hover .product-art::before { transform: rotate(18deg) scale(1.1); }
.pop-drop .product-art span,
.pop-drop .product-art b { position: relative; z-index: 2; }
.pop-drop .product-art span { font-weight: 900; }
.pop-drop .product-art b {
  font-family: "Bangers", Impact, sans-serif;
  font-size: 46px;
  line-height: 0.9;
  max-width: 85%;
}
.pop-drop .product-art i {
  position: absolute;
  width: 180px;
  height: 180px;
  border: 5px solid var(--ink-local);
  border-radius: 50%;
  right: -30px;
  top: 80px;
  background: white;
  box-shadow: -20px 22px 0 var(--blue);
}
.pop-drop .product-art.red { background: var(--red); }
.pop-drop .product-art.cyan { background: var(--cyan); }
.pop-drop .product-art.blue { background: var(--blue); color: white; }
.pop-drop .product-buy { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.pop-drop .product-buy strong { font-size: 30px; font-weight: 900; }
.pop-drop .footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-block: 38px;
  font-size: 14px;
}
.pop-drop .pop-cursor {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border: 3px solid var(--ink-local);
  border-radius: 50%;
  background: var(--yellow);
  pointer-events: none;
  transition: width 0.16s, height 0.16s, margin 0.16s, border-radius 0.16s, background 0.16s, clip-path 0.16s;
  display: grid;
  place-items: center;
  will-change: transform;
}
.pop-drop .pop-cursor span { font-family: "Bangers", Impact, sans-serif; font-size: 0; white-space: nowrap; }
.pop-drop .pop-cursor--burst,
.pop-drop .pop-cursor--shop,
.pop-drop .pop-cursor--read,
.pop-drop .pop-cursor--play,
.pop-drop .pop-cursor--drag {
  width: 80px;
  height: 80px;
  margin: -40px 0 0 -40px;
  border-radius: 0;
  clip-path: polygon(50% 0, 61% 27%, 84% 9%, 77% 37%, 100% 42%, 75% 56%, 92% 78%, 64% 70%, 56% 100%, 43% 73%, 17% 93%, 26% 63%, 0 54%, 27% 43%, 8% 20%, 38% 30%);
  background: var(--yellow);
  border: 0;
  filter: drop-shadow(4px 4px 0 var(--ink-local));
}
.pop-drop .pop-cursor--shop { background: var(--pink); }
.pop-drop .pop-cursor--read { background: var(--cyan); clip-path: polygon(5% 10%, 95% 3%, 90% 90%, 8% 98%); }
.pop-drop .pop-cursor--play { background: var(--red); color: white; clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); }
.pop-drop .pop-cursor--drag { background: white; clip-path: polygon(50% 0, 63% 34%, 100% 34%, 70% 55%, 82% 100%, 50% 72%, 18% 100%, 30% 55%, 0 34%, 37% 34%); }
.pop-drop .pop-cursor--burst span,
.pop-drop .pop-cursor--shop span,
.pop-drop .pop-cursor--read span,
.pop-drop .pop-cursor--play span,
.pop-drop .pop-cursor--drag span { font-size: 19px; color: var(--ink-local); -webkit-text-stroke: 0.3px var(--ink-local); }
.pop-drop .pop-cursor--play span { color: white; }
@keyframes pop-marquee { to { transform: translateX(-50%); } }
@keyframes pop-spin { to { transform: rotate(360deg); } }
@keyframes pop-floaty { 50% { transform: translateY(-12px) rotate(5deg); } }
@keyframes pop-meter { to { height: 14px; } }
@media (max-width: 960px) {
  .pop-drop .topbar nav { display: none; }
  .pop-drop .hero,
  .pop-drop .lab-grid { grid-template-columns: 1fr; }
  .pop-drop .hero { gap: 15px; }
  .pop-drop .hero-machine { margin-top: 20px; }
  .pop-drop .issue-map { grid-template-columns: 1fr; }
  .pop-drop .issue-strip { grid-column: auto; }
  .pop-drop .sound-board { grid-column: auto; grid-row: auto; min-height: 500px; }
  .pop-drop .world-grid,
  .pop-drop .product-grid { grid-template-columns: 1fr; }
  .pop-drop .world-shop { transform: none; }
  .pop-drop .club-inner { grid-template-columns: 1fr; }
  .pop-drop .footer { flex-direction: column; text-align: center; }
}
@media (max-width: 650px) {
  .pop-drop .shell { width: min(100% - 24px, 1180px); }
  .pop-drop .section { padding: 70px 0; }
  .pop-drop .hero { min-height: auto; padding-top: 55px; padding-bottom: 65px; }
  .pop-drop .hero h1 { font-size: 54px; }
  .pop-drop .hero-machine { min-height: 460px; }
  .pop-drop .cover-stack { width: 300px; height: 390px; }
  .pop-drop .cover-front h2 { font-size: 58px; }
  .pop-drop .face-pop { width: 190px; height: 190px; }
  .pop-drop .cover-back b,
  .pop-drop .cover-mid b { font-size: 52px; }
  .pop-drop .section-heading { align-items: flex-start; flex-direction: column; }
  .pop-drop .issue-strip { grid-template-columns: 48px 1fr; padding: 20px; }
  .pop-drop .issue-strip > b { display: none; }
  .pop-drop .issue-strip h3 { font-size: 23px; }
  .pop-drop .sound-board button { width: 180px; height: 180px; }
  .pop-drop .kinetic-board { min-height: 420px; }
  .pop-drop .shape-1 { width: 125px; height: 90px; font-size: 44px; }
  .pop-drop .shape-2 { width: 140px; height: 140px; font-size: 50px; }
  .pop-drop .shape-3 { width: 90px; height: 165px; font-size: 42px; }
  .pop-drop .shape-4 { width: 180px; height: 90px; font-size: 43px; }
  .pop-drop .product-buy { align-items: flex-start; flex-direction: column; }
  .pop-drop .pop-cursor { display: none; }
}
`;

function usePopArtStyles() {
  useEffect(() => {
    if (document.getElementById("pop-drop-example-styles")) return;

    const style = document.createElement("style");
    style.id = "pop-drop-example-styles";
    style.textContent = popArtStyles;
    document.head.appendChild(style);
  }, []);
}

function PopCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>("dot");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)");
    if (!finePointer.matches) return;

    let frame = 0;
    let x = -100;
    let y = -100;

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      frame = 0;
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      setMode((target?.dataset.cursor as CursorMode) || "dot");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`pop-cursor pop-cursor--${mode}`} aria-hidden="true">
      <span>{labels[mode]}</span>
    </div>
  );
}

function jumpTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function ComixaPopArtExperience() {
  usePopArtStyles();

  return (
    <ToastProvider position="bottom-right">
      <ComixaProvider theme="pop-art" className="pop-drop">
        <PopCursor />
        <div className="grain" />
        <header className="topbar">
          <button type="button" className="brand" data-cursor="burst" onClick={() => jumpTo("#pop-drop-top")}>
            POP<span>//</span>DROP
          </button>
          <nav aria-label="Primary navigation">
            <a className="active" href="#pop-drop-top" data-cursor="read">Home</a>
            <a href="#pop-drop-stories" data-cursor="read">Stories</a>
            <a href="#pop-drop-shop" data-cursor="shop">Drops</a>
            <a href="#pop-drop-club" data-cursor="read">Studio</a>
          </nav>
          <Button
            size="sm"
            variant="danger"
            data-cursor="burst"
            onClick={() =>
              toast({
                title: "LOUD MODE: ON",
                description: "Every pixel has been instructed to misbehave.",
              })
            }
          >
            Join the noise
          </Button>
        </header>

        <main id="pop-drop-top">
          <section className="hero shell">
            <div className="hero-copy">
              <div className="hero-kicker">
                <Badge variant="yellow">Issue 20 / live</Badge>
                <span>Scroll with volume on</span>
              </div>
              <h1>
                Make culture
                <br />
                <em>impossible to ignore.</em>
              </h1>
              <p>
                POP//DROP is a kinetic culture magazine, limited-edition print shop and
                visual playground for people allergic to forgettable design.
              </p>
              <div className="hero-actions">
                <Button size="lg" variant="danger" data-cursor="read" onClick={() => jumpTo("#pop-drop-stories")}>
                  Explore issue 20
                </Button>
                <Button size="lg" variant="outline" data-cursor="shop" onClick={() => jumpTo("#pop-drop-shop")}>
                  Enter the drop
                </Button>
              </div>
              <SpeechBubble shape="speech" tone="cream" tail="bottomLeft" className="editor-note">
                "Useful first. Unforgettable immediately after."
              </SpeechBubble>
            </div>

            <div className="hero-machine" data-cursor="drag">
              <div className="orbit orbit-a"><span>NEW</span></div>
              <div className="orbit orbit-b"><span>HOT</span></div>
              <div className="cover-stack">
                <div className="cover cover-back"><b>COLOR<br />CRISIS</b></div>
                <div className="cover cover-mid"><b>TOO<br />MUCH?</b></div>
                <div className="cover cover-front">
                  <div className="cover-grid" />
                  <span className="issue">ISSUE 20</span>
                  <div className="face-pop"><i /><i /><b>O</b></div>
                  <h2>LOUD<br />THINGS</h2>
                  <small>ART / STYLE / SOUND / CHAOS</small>
                </div>
              </div>
              <Sticker className="very-limited">VERY LIMITED</Sticker>
              <SoundBadge variant="pow" word="WOW!" className="wow-badge" />
            </div>
          </section>

          <section className="marquee" aria-label="Latest headlines">
            <div>
              <span>NO MORE BORING LANDING PAGES</span><b>*</b>
              <span>POSTER DROP FRIDAY</span><b>*</b>
              <span>ISSUE 20 IS TOO LOUD</span><b>*</b>
              <span>NO MORE BORING LANDING PAGES</span>
            </div>
          </section>

          <section id="pop-drop-stories" className="experience shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Interactive issue map</p>
                <h2>Choose your chaos.</h2>
              </div>
              <Ribbon variant="ticket">Hover everything</Ribbon>
            </div>
            <div className="issue-map">
              {strips.map((item, index) => (
                <button
                  type="button"
                  key={item.n}
                  className={`issue-strip ${item.tone}`}
                  data-cursor="read"
                  onClick={() => toast(`Opening feature ${index + 1}: ${item.title}`)}
                >
                  <span>{item.n}</span>
                  <div>
                    <small>FEATURE {index + 1}</small>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <b>-&gt;</b>
                </button>
              ))}
              <div className="sound-board" data-cursor="play">
                <p>PRESS THE BUTTON</p>
                <button
                  type="button"
                  onClick={() => toast("KRA-KOOM! The website is now 12% louder.")}
                >
                  KRA-KOOM!
                </button>
                <div className="meter"><i /><i /><i /><i /><i /><i /></div>
              </div>
            </div>
          </section>

          <section className="lab section">
            <div className="shell lab-grid">
              <div className="lab-copy">
                <Badge variant="green">Experiment 04</Badge>
                <h2>A website should react like a character.</h2>
                <p>
                  Move across the panels. The cursor changes language, cards tilt, shapes
                  slip out of alignment and the page answers back.
                </p>
                <Button variant="warning" data-cursor="read" onClick={() => jumpTo("#pop-drop-shop")}>
                  Visit the studio
                </Button>
              </div>
              <div className="kinetic-board" data-cursor="burst">
                <div className="shape shape-1">POP</div>
                <div className="shape shape-2">ART</div>
                <div className="shape shape-3">IS</div>
                <div className="shape shape-4">ALIVE</div>
                <div className="rayburst" />
              </div>
            </div>
          </section>

          <section className="shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Complicated on purpose</p>
                <h2>Three worlds, one issue.</h2>
              </div>
              <p className="heading-copy">
                Editorial storytelling, collectible commerce and interactive motion live in
                the same visual system.
              </p>
            </div>
            <div className="world-grid">
              <ComicPanel className="world world-editorial">
                <span>01</span>
                <h3>Editorial maze</h3>
                <p>Layered stories, pull quotes, image walls and nonlinear reading paths.</p>
                <button type="button" data-cursor="read" onClick={() => jumpTo("#pop-drop-stories")}>
                  Open stories -&gt;
                </button>
              </ComicPanel>
              <ComicPanel className="world world-shop">
                <span>02</span>
                <h3>Drop mechanics</h3>
                <p>Timed editions, animated product reveals and playful purchase feedback.</p>
                <button type="button" data-cursor="shop" onClick={() => jumpTo("#pop-drop-shop")}>
                  Shop posters -&gt;
                </button>
              </ComicPanel>
              <ComicPanel className="world world-studio">
                <span>03</span>
                <h3>Motion studio</h3>
                <p>A tiny creative studio documenting the rules behind the noise.</p>
                <button type="button" data-cursor="read" onClick={() => toast("Process notes unlocked.")}>
                  See process -&gt;
                </button>
              </ComicPanel>
            </div>
          </section>

          <section id="pop-drop-shop" className="shop-zone section">
            <div className="shell">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Limited editions</p>
                  <h2>Pick your wall problem.</h2>
                </div>
                <Ribbon variant="ticket">Only 75 each</Ribbon>
              </div>
              <div className="product-grid">
                {products.map(([n, title, artist, price, tone]) => (
                  <Card key={title} className="product-card" data-cursor="shop">
                    <CardHeader>
                      <div className={`product-art ${tone}`}>
                        <span>{n}</span>
                        <b>{title}</b>
                        <i />
                      </div>
                      <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Signed A2 archival print by {artist}.</p>
                      <div className="product-buy">
                        <strong>{price}</strong>
                        <Button
                          variant="primary"
                          onClick={() => toast(`${title} entered your cart with dramatic timing.`)}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="pop-drop-club" className="club section">
            <div className="shell club-inner">
              <div>
                <Badge variant="yellow">The good stuff</Badge>
                <h2>Drop Club</h2>
                <p>
                  Quarterly print objects, hidden pages, early drops and studio experiments
                  delivered before the internet ruins them.
                </p>
              </div>
              <div className="membership-card" data-cursor="drag">
                <small>MEMBER No.</small>
                <b>004219</b>
                <div>LOUD HUMAN</div>
                <i />
              </div>
              <div className="club-action">
                <strong>$29 / quarter</strong>
                <Button
                  size="lg"
                  variant="danger"
                  data-cursor="burst"
                  onClick={() =>
                    toast({
                      title: "WELCOME IN",
                      description: "Your card is being printed with an irresponsible amount of ink.",
                    })
                  }
                >
                  Become a member
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer shell">
          <button type="button" className="brand" data-cursor="burst" onClick={() => jumpTo("#pop-drop-top")}>
            POP<span>//</span>DROP
          </button>
          <p>Built loudly with Comixa UI.</p>
          <p>(c) 2026 / Personality is a feature.</p>
        </footer>
      </ComixaProvider>
    </ToastProvider>
  );
}
