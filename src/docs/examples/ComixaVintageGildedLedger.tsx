import { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ComicPanel,
  ComixaProvider,
  Divider,
  Highlight,
  Ribbon,
  SpeechBubble,
  Sticker,
  ToastProvider,
  toast,
} from "comixa-ui";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Feather,
  Gem,
  Heart,
  Mail,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

const lots = [
  {
    no: "LOT 017",
    title: "The Astronomer's Pocket Watch",
    era: "Geneva, c. 1884",
    estimate: "$1,200 - $1,600",
    kind: "watch",
  },
  {
    no: "LOT 024",
    title: "Botanical Letters of Elodie March",
    era: "Paris, c. 1907",
    estimate: "$680 - $940",
    kind: "letters",
  },
  {
    no: "LOT 031",
    title: "The Cartographer's Brass Compass",
    era: "London, c. 1861",
    estimate: "$900 - $1,300",
    kind: "compass",
  },
];

const ledgerStyles = `
.gilded-ledger {
  --font-display: "Antonio", "Arial Narrow", Impact, sans-serif;
  --font-serif: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  --font-body: Georgia, "Times New Roman", serif;
  min-height: 100%;
  overflow: hidden;
  background: #eee2c7;
  color: #35291f;
  font-family: var(--font-body);
}
.gilded-ledger * { box-sizing: border-box; }
.gilded-ledger a { color: inherit; text-decoration: none; }
.gilded-ledger .brand-mark {
  font-family: var(--font-serif);
  font-weight: 900;
  letter-spacing: 0.13em;
}
.gilded-ledger .display-title {
  font-family: var(--font-display);
  font-weight: 900;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}
.gilded-ledger .serif-title {
  font-family: var(--font-serif);
  font-weight: 700;
}
.gilded-ledger .eyebrow {
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.gilded-ledger .paper-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.42;
  background-image: radial-gradient(rgba(61, 45, 31, 0.23) 0.65px, transparent 0.7px), linear-gradient(90deg, rgba(255, 255, 255, 0.12), transparent 45%, rgba(61, 45, 31, 0.06));
  background-size: 5px 5px, 100% 100%;
}
.gilded-ledger .topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 2px solid #594632;
  background: rgba(238, 226, 199, 0.95);
  padding: 14px 16px;
  backdrop-filter: blur(10px);
}
.gilded-ledger .topbar-inner {
  margin-inline: auto;
  display: flex;
  max-width: 1380px;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}
.gilded-ledger .topbar nav {
  display: flex;
  align-items: center;
  gap: 32px;
}
.gilded-ledger .topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.gilded-ledger .hero-shell {
  position: relative;
  border-bottom: 2px solid #594632;
  background: linear-gradient(110deg, #eadbbd, #f4ead4 54%, #dfcba5);
  padding: 56px 32px;
}
.gilded-ledger .hero-grid {
  margin-inline: auto;
  display: grid;
  max-width: 1380px;
  gap: 24px;
  grid-template-columns: 1.08fr 0.92fr;
}
.gilded-ledger .hero-copy {
  position: relative;
  min-height: 690px;
  background: linear-gradient(rgba(255, 255, 255, 0.23), rgba(255, 255, 255, 0.08));
  padding: 20px;
}
.gilded-ledger .ornament {
  position: absolute;
  right: 28px;
  top: 20px;
  font-size: 2rem;
  color: #9a7440;
}
.gilded-ledger .stat {
  display: block;
  font: 900 2rem var(--font-serif);
}
.gilded-ledger .hero-copy span { display: block; }
.gilded-ledger .hero-object-wrap {
  position: relative;
  min-height: 700px;
  padding: 32px 22px 50px;
}
.gilded-ledger .catalogue-number {
  position: absolute;
  right: 8px;
  top: 0;
  z-index: 3;
  border: 2px solid #594632;
  background: #35423a;
  color: #f1e6cd;
  padding: 10px 18px;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.25em;
  transform: rotate(2deg);
}
.gilded-ledger .hero-frame {
  height: 100%;
  min-height: 630px;
  border: 12px solid #6d5234;
  outline: 2px solid #33271e;
  outline-offset: -7px;
  background: #d8c4a0;
  padding: 26px;
  box-shadow: 12px 14px 0 rgba(53, 41, 31, 0.18);
}
.gilded-ledger .museum-label {
  border-top: 2px solid #594632;
  background: #f5ecd9;
  padding: 18px;
  text-align: center;
}
.gilded-ledger .museum-label span,
.gilded-ledger .museum-label strong,
.gilded-ledger .museum-label small { display: block; }
.gilded-ledger .museum-label span {
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.gilded-ledger .museum-label strong {
  margin-top: 7px;
  font: 700 1.45rem var(--font-serif);
}
.gilded-ledger .museum-label small { margin-top: 4px; color: #756048; }
.gilded-ledger .hero-object-wrap [class*="speech"] {
  position: absolute;
  left: -28px;
  bottom: 16px;
  max-width: 290px;
  transform: rotate(-2deg);
}
.gilded-ledger .artifact {
  position: relative;
  min-height: 420px;
  overflow: hidden;
  background: #cdb68d;
  isolation: isolate;
}
.gilded-ledger .artifact::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 36%, rgba(255, 250, 232, 0.9), transparent 36%), repeating-linear-gradient(0deg, rgba(73, 53, 34, 0.05) 0 1px, transparent 1px 6px);
}
.gilded-ledger .artifact-halo {
  position: absolute;
  left: 50%;
  top: 46%;
  width: 290px;
  aspect-ratio: 1;
  border: 1px solid rgba(86, 63, 40, 0.28);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 22px rgba(255, 255, 255, 0.12), 0 0 0 44px rgba(255, 255, 255, 0.08);
}
.gilded-ledger .artifact-object {
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
}
.gilded-ledger .artifact-shadow {
  position: absolute;
  left: 50%;
  bottom: 12%;
  width: 48%;
  height: 25px;
  border-radius: 50%;
  background: rgba(47, 34, 22, 0.25);
  filter: blur(10px);
  transform: translateX(-50%);
}
.gilded-ledger .watch-face {
  position: relative;
  display: block;
  width: 220px;
  aspect-ratio: 1;
  border: 14px solid #7f633a;
  border-radius: 50%;
  background: radial-gradient(circle, #f8edd6 0 58%, #d7c39c 59% 65%, #f4e7cb 66%);
  box-shadow: inset 0 0 0 3px #3f3123, 0 14px 0 #5d472d;
}
.gilded-ledger .watch-face::before,
.gilded-ledger .watch-face::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5px;
  background: #3d2d20;
  transform-origin: bottom;
}
.gilded-ledger .watch-face::before { height: 65px; transform: translate(-50%, -100%) rotate(48deg); }
.gilded-ledger .watch-face::after { height: 50px; transform: translate(-50%, -100%) rotate(180deg); }
.gilded-ledger .watch-face i {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 13px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #3d2d20;
  transform: translate(-50%, -50%);
}
.gilded-ledger .watch-face b,
.gilded-ledger .watch-face em {
  position: absolute;
  font: 700 1rem var(--font-serif);
  font-style: normal;
}
.gilded-ledger .watch-face b { top: 12px; left: 50%; transform: translateX(-50%); }
.gilded-ledger .watch-face em { bottom: 12px; left: 50%; transform: translateX(-50%); }
.gilded-ledger .watch-crown {
  position: absolute;
  left: 50%;
  top: -45px;
  width: 48px;
  height: 55px;
  border: 9px solid #765933;
  border-radius: 20px 20px 4px 4px;
  transform: translateX(-50%);
}
.gilded-ledger .letter {
  position: absolute;
  display: block;
  width: 230px;
  height: 150px;
  border: 2px solid #755b3c;
  background: #efe1c2;
  box-shadow: 8px 9px 0 rgba(70, 49, 29, 0.18);
}
.gilded-ledger .letter::after {
  content: "Dearest E.,\\A The roses survived the frost.";
  white-space: pre;
  position: absolute;
  left: 24px;
  top: 30px;
  font: italic 15px/1.8 var(--font-serif);
  color: #6a4f35;
}
.gilded-ledger .letter-a { transform: translate(-52%, -40%) rotate(-7deg); }
.gilded-ledger .letter-b { transform: translate(-43%, -20%) rotate(5deg); }
.gilded-ledger .wax-seal {
  position: absolute;
  left: 35px;
  top: 48px;
  display: grid;
  width: 58px;
  aspect-ratio: 1;
  place-items: center;
  border-radius: 50%;
  background: #7a2f26;
  color: #eadab9;
  font: 700 1.3rem var(--font-serif);
  box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.12);
}
.gilded-ledger .compass-ring {
  display: block;
  width: 230px;
  aspect-ratio: 1;
  border: 18px solid #735633;
  border-radius: 50%;
  background: #b99357;
  box-shadow: inset 0 0 0 5px #3d2d20, 0 13px 0 #4e3925;
}
.gilded-ledger .compass-face {
  position: absolute;
  inset: 23px;
  display: grid;
  place-items: center;
  border: 3px solid #4a3828;
  border-radius: 50%;
  background: repeating-conic-gradient(from 0deg, #eadbb8 0 8deg, #d1bb90 8deg 16deg);
}
.gilded-ledger .compass-face i {
  position: absolute;
  top: 10px;
  font-style: normal;
  font-weight: 900;
}
.gilded-ledger .compass-face b { font-size: 5rem; color: #3d2d20; }
.gilded-ledger .lot-card { transition: transform 0.2s; }
.gilded-ledger .lot-card:hover { transform: translateY(-5px); }
.gilded-ledger .lot-card .artifact { min-height: 380px; }
.gilded-ledger .journal-section {
  background: #ded0b3;
  background-image: linear-gradient(rgba(82, 60, 39, 0.07) 1px, transparent 1px);
  background-size: 100% 32px;
}
.gilded-ledger .journal-grid { display: grid; gap: 18px; grid-template-columns: 1fr 1fr; }
.gilded-ledger .journal-feature { grid-column: 1 / -1; }
.gilded-ledger .salon-grid {
  display: grid;
  gap: 48px;
  align-items: center;
  grid-template-columns: 1.2fr 0.8fr;
  background: linear-gradient(120deg, #f2e5c9, #e0c79b);
  padding: 56px;
}
.gilded-ledger .detail-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid #8c7353;
  padding-top: 10px;
}
.gilded-ledger .invitation-card {
  position: relative;
  border: 2px solid #5c472f;
  outline: 1px solid #5c472f;
  outline-offset: -9px;
  background: #f7ecd3;
  padding: 42px 32px;
  text-align: center;
  box-shadow: 8px 9px 0 rgba(73, 52, 32, 0.16);
}
.gilded-ledger .invitation-card::before,
.gilded-ledger .invitation-card::after {
  content: "";
  position: absolute;
  width: 30px;
  aspect-ratio: 1;
  border: 2px solid #5c472f;
  border-radius: 50%;
  background: #e5d2ad;
  top: 50%;
  transform: translateY(-50%);
}
.gilded-ledger .invitation-card::before { left: -17px; }
.gilded-ledger .invitation-card::after { right: -17px; }
.gilded-ledger .ornament-rule { display: flex; align-items: center; gap: 12px; }
.gilded-ledger .ornament-rule::before,
.gilded-ledger .ornament-rule::after {
  content: "";
  height: 1px;
  flex: 1;
  background: #806646;
}
.gilded-ledger .ticket-code {
  display: block;
  margin-top: 30px;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.3em;
}
@media (max-width: 1024px) {
  .gilded-ledger .topbar nav { display: none; }
  .gilded-ledger .hero-grid { grid-template-columns: 1fr; }
  .gilded-ledger .hero-copy { min-height: auto; }
  .gilded-ledger .hero-object-wrap { min-height: 620px; }
  .gilded-ledger .salon-grid { grid-template-columns: 1fr; }
  .gilded-ledger .invitation-card { max-width: 520px; }
}
@media (max-width: 700px) {
  .gilded-ledger .topbar-inner { align-items: flex-start; flex-direction: column; }
  .gilded-ledger .topbar-actions { flex-wrap: wrap; }
  .gilded-ledger .display-title { font-size: 3.5rem; }
  .gilded-ledger .hero-shell { padding: 32px 14px; }
  .gilded-ledger .hero-copy { padding: 28px; }
  .gilded-ledger .hero-object-wrap { min-height: 590px; padding-inline: 0; }
  .gilded-ledger .hero-frame { min-height: 560px; padding: 16px; }
  .gilded-ledger .artifact { min-height: 360px; }
  .gilded-ledger .watch-face { width: 180px; }
  .gilded-ledger .journal-grid { grid-template-columns: 1fr; }
  .gilded-ledger .journal-feature { grid-column: auto; }
  .gilded-ledger .salon-grid { padding: 24px; }
  .gilded-ledger .hero-object-wrap [class*="speech"] { left: 8px; }
  .gilded-ledger .stat { font-size: 1.5rem; }
}
`;

function useLedgerStyles() {
  useEffect(() => {
    if (document.getElementById("gilded-ledger-example-styles")) return;

    const style = document.createElement("style");
    style.id = "gilded-ledger-example-styles";
    style.textContent = ledgerStyles;
    document.head.appendChild(style);
  }, []);
}

function Artifact({ kind }: { kind: string }) {
  return (
    <div className={`artifact artifact-${kind}`} aria-hidden="true">
      <div className="artifact-halo" />
      <div className="artifact-object">
        {kind === "watch" ? (
          <>
            <span className="watch-crown" />
            <span className="watch-face"><i /><b>XI</b><em>VI</em></span>
          </>
        ) : null}
        {kind === "letters" ? (
          <>
            <span className="letter letter-a" />
            <span className="letter letter-b" />
            <span className="wax-seal">L</span>
          </>
        ) : null}
        {kind === "compass" ? (
          <>
            <span className="compass-ring" />
            <span className="compass-face"><i>N</i><b>*</b></span>
          </>
        ) : null}
      </div>
      <span className="artifact-shadow" />
    </div>
  );
}

function jumpTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function ComixaVintageGildedLedger() {
  useLedgerStyles();

  return (
    <ComixaProvider theme="vintage" className="gilded-ledger">
      <ToastProvider theme="vintage" position="bottom-right">
        <header className="topbar">
          <div className="topbar-inner">
            <button type="button" className="brand-mark text-xl" onClick={() => jumpTo("#ledger-top")}>
              THE GILDED LEDGER
            </button>
            <nav aria-label="Primary navigation">
              <a href="#ledger-collection">Collection</a>
              <a href="#ledger-journal">Journal</a>
              <a href="#ledger-salon">The Salon</a>
            </nav>
            <div className="topbar-actions">
              <Button size="sm" variant="outline">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
              <Button
                size="sm"
                variant="primary"
                onClick={() =>
                  toast({
                    title: "Catalogue reserved",
                    description: "Autumn collection / Edition 12",
                    variant: "success",
                  })
                }
              >
                Reserve catalogue
              </Button>
            </div>
          </div>
        </header>

        <main id="ledger-top">
          <section className="hero-shell">
            <div className="paper-grain" />
            <div className="hero-grid">
              <ComicPanel variant="cream" shadow="lg" hover={false} caption="AUTUMN CATALOGUE / EDITION XII">
                <div className="hero-copy">
                  <div className="ornament">*</div>
                  <Badge theme="vintage" variant="soft">Private collection</Badge>
                  <p className="eyebrow mt-2">Objects with a past. Stories with a pulse.</p>
                  <h1 className="display-title mt-3 text-6xl leading-[.86] sm:text-6xl">
                    THE ART
                    <br />
                    OF <Highlight tone="yellow" triggerOnView repeat={1} className="text-7xl">REMEMBERING</Highlight>
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-[#5d4b39]">
                    A digital cabinet of curiosities for collectors, romantics and readers
                    of forgotten things. Every object arrives with provenance, correspondence
                    and one unfinished story.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      variant="primary"
                      onClick={() =>
                        toast({
                          title: "Catalogue opened",
                          description: "36 remarkable lots await.",
                          variant: "success",
                        })
                      }
                    >
                      Browse the collection <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => jumpTo("#ledger-journal")}>
                      <BookOpen className="mr-2 h-5 w-5" /> Read the journal
                    </Button>
                  </div>
                  <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-[#8b7356] pt-6 text-sm">
                    <div><strong className="stat">36</strong><span>rare objects</span></div>
                    <div><strong className="stat">11</strong><span>private estates</span></div>
                    <div><strong className="stat">04</strong><span>cities visited</span></div>
                  </div>
                </div>
              </ComicPanel>

              <div className="hero-object-wrap">
                <div className="catalogue-number">No. 017</div>
                <div className="hero-frame">
                  <Artifact kind="watch" />
                  <div className="museum-label">
                    <span>Geneva / 1884</span>
                    <strong>Celestial pocket watch</strong>
                    <small>Enamel dial, moonphase complication</small>
                  </div>
                </div>
                <SpeechBubble theme="vintage" tail="bottomLeft" caption="Curator's note">
                  It stopped at 11:43 on the night its owner disappeared.
                </SpeechBubble>
              </div>
            </div>
          </section>

          <Divider theme="vintage" variant="solid" tone="ink" label="SELECTED LOTS" />

          <section id="ledger-collection" className="px-4 py-20 md:px-8">
            <div className="mx-auto max-w-[1380px]">
              <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <Sticker theme="vintage" variant="yellow" tilt="left">Curated this week</Sticker>
                  <h2 className="display-title mt-5 text-5xl sm:text-7xl">
                    Three objects. Three lives.
                  </h2>
                </div>
                <p className="max-w-md text-[#695744]">
                  Each lot is researched like a biography: maker, owner, place, scandal and
                  the small human detail history usually leaves behind.
                </p>
              </div>

              <div className="grid gap-7 lg:grid-cols-3">
                {lots.map((lot, index) => (
                  <article key={lot.no} className="lot-card">
                    <ComicPanel variant="cream" shadow="lg" hover={false} caption={lot.no}>
                      <Artifact kind={lot.kind} />
                    </ComicPanel>
                    <div className="pt-5">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <Badge theme="vintage" variant="soft">{lot.era}</Badge>
                        <Button size="sm" variant="outline" aria-label={`Save ${lot.title}`}>
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <h3 className="serif-title text-3xl leading-tight">{lot.title}</h3>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[.16em] text-[#806c54]">
                        Estimate {lot.estimate}
                      </p>
                      <Button
                        className="mt-5 w-full"
                        variant={index === 0 ? "primary" : "outline"}
                        onClick={() =>
                          toast({
                            title: "Lot added",
                            description: lot.title,
                            variant: "success",
                          })
                        }
                      >
                        View provenance
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="ledger-journal" className="journal-section border-y-2 border-[#594632] px-4 py-20 md:px-8">
            <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[.82fr_1.18fr]">
              <div>
                <Ribbon theme="vintage" variant="ticket" tilt="left">From the journal</Ribbon>
                <h2 className="display-title mt-8 text-5xl sm:text-7xl">Notes from dusty rooms.</h2>
                <p className="mt-5 max-w-lg text-lg leading-8 text-[#66533f]">
                  Essays on provenance, obsession, restoration and the strange intimacy of
                  holding an object that outlived everyone who knew its first name.
                </p>
                <Button className="mt-8" variant="outline">
                  Visit the archive <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="journal-grid">
                <Card theme="vintage" variant="panel" padding="lg" className="journal-feature bg-[#f6ecd5]">
                  <CardHeader>
                    <Badge theme="vintage" variant="soft">Essay No. 42</Badge>
                    <CardTitle className="serif-title mt-4 text-4xl">
                      Why old letters feel heavier than books
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-[#675541]">
                      A book was written for strangers. A letter was written for one person.
                      Perhaps that is why opening one feels like entering a locked room.
                    </p>
                    <div className="mt-6 flex items-center gap-5 text-sm font-bold">
                      <span className="flex items-center gap-2"><Feather className="h-4 w-4" /> Eleanor Vale</span>
                      <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> 7 min</span>
                    </div>
                  </CardContent>
                </Card>
                <Card theme="vintage" variant="panel" padding="lg" className="bg-[#d8c4a0]">
                  <CardHeader>
                    <CardTitle className="serif-title text-3xl">
                      The quiet frauds of the antique trade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6">
                      Five clues hidden in hinges, handwriting and perfectly imperfect dust.
                    </p>
                  </CardContent>
                </Card>
                <Card theme="vintage" variant="panel" padding="lg" className="bg-[#35423a] text-[#f4ead4]">
                  <CardHeader>
                    <CardTitle className="serif-title text-3xl">
                      A field guide to mourning jewellery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-[#ded2ba]">
                      Hair, jet, enamel and the objects Victorians wore when words were not enough.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="ledger-salon" className="px-4 py-20 md:px-8">
            <div className="mx-auto max-w-[1380px]">
              <ComicPanel variant="cream" shadow="xl" hover={false} caption="INVITATION / 18 OCTOBER">
                <div className="salon-grid">
                  <div>
                    <Badge theme="vintage" variant="soft">The collector's salon</Badge>
                    <h2 className="display-title mt-5 text-5xl sm:text-7xl">
                      One night. Twelve objects. No price tags.
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[#66533f]">
                      Join our candlelit preview in Bloomsbury. Meet the conservators, hear
                      the hidden histories and inspect the autumn collection before bidding opens.
                    </p>
                    <div className="mt-7 grid gap-3 text-sm font-bold sm:grid-cols-3">
                      <span className="detail-chip"><CalendarDays className="h-4 w-4" /> 18 October</span>
                      <span className="detail-chip"><Clock3 className="h-4 w-4" /> 7:30 PM</span>
                      <span className="detail-chip"><MapPin className="h-4 w-4" /> Bloomsbury</span>
                    </div>
                    <Button
                      size="lg"
                      className="mt-8"
                      variant="primary"
                      onClick={() =>
                        toast({
                          title: "Invitation requested",
                          description: "We will send the details by post and email.",
                          variant: "success",
                        })
                      }
                    >
                      Request an invitation <Mail className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="invitation-card">
                    <Sparkles className="mx-auto h-7 w-7" />
                    <p className="mt-4 text-xs font-black uppercase tracking-[.3em]">Admit one</p>
                    <h3 className="serif-title mt-5 text-4xl">An Evening of Remarkable Things</h3>
                    <div className="ornament-rule my-7"><Gem className="h-5 w-5" /></div>
                    <p className="text-sm leading-6">Black tie optional<br />Curiosity required</p>
                    <span className="ticket-code">GL-XII-1884</span>
                  </div>
                </div>
              </ComicPanel>
            </div>
          </section>
        </main>

        <footer className="border-t-2 border-[#594632] px-4 py-10 md:px-8">
          <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="brand-mark text-2xl">THE GILDED LEDGER</p>
              <p className="mt-2 text-sm text-[#6a5844]">
                A cabinet of curiosities for the digitally inclined.
              </p>
            </div>
            <p className="text-xs font-black uppercase tracking-[.22em]">
              Built with Comixa UI / Vintage theme
            </p>
          </div>
        </footer>
      </ToastProvider>
    </ComixaProvider>
  );
}
