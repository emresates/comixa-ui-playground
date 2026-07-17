import { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
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

const shows = [
  { time: "08:00", title: "Sunrise Stereo", host: "Mara Miles", mood: "soft rock / soul" },
  { time: "12:30", title: "Lunchbox Jukebox", host: "Johnny Tape", mood: "funk / disco" },
  { time: "18:00", title: "Highway Afterglow", host: "Cass Vega", mood: "city pop / synth" },
];

const records = [
  { no: "01", title: "Velvet Satellite", artist: "The Night Operators", year: "1978" },
  { no: "02", title: "Plastic Moon", artist: "Juniper Drive", year: "1982" },
  { no: "03", title: "Telephone Hearts", artist: "Ruby Static", year: "1976" },
  { no: "04", title: "Last Exit Radio", artist: "The Commuters", year: "1984" },
];

const retroFmStyles = `
.retro-fm {
  --cream: #f3dfb5;
  --paper: #fbefd3;
  --ink-local: #30251f;
  --orange: #d45d32;
  --mustard: #ddb54f;
  --green: #6e8460;
  --blue: #587c87;
  min-height: 100%;
  background: var(--cream);
  color: var(--ink-local);
  font-family: "Comic Neue", "DM Sans", system-ui, sans-serif;
}
.retro-fm * { box-sizing: border-box; }
.retro-fm a { color: inherit; text-decoration: none; }
.retro-fm .shell { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
.retro-fm .section { padding: 92px 0; }
.retro-fm .topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 40px;
  border-bottom: 3px solid var(--ink-local);
  background: rgba(243, 223, 181, 0.96);
  backdrop-filter: blur(8px);
}
.retro-fm .topbar nav { display: flex; gap: 28px; font-weight: 800; }
.retro-fm .topbar nav a:hover { text-decoration: underline; }
.retro-fm .brand {
  font-family: "Lilita One", "Bangers", Impact, sans-serif;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 0.02em;
}
.retro-fm .brand span {
  background: var(--orange);
  color: var(--paper);
  padding: 3px 7px;
  border: 2px solid var(--ink-local);
  box-shadow: 3px 3px 0 var(--ink-local);
}
.retro-fm .hero {
  min-height: 720px;
  display: grid;
  grid-template-columns: 1.03fr 0.97fr;
  align-items: center;
  gap: 70px;
  padding-top: 68px;
  padding-bottom: 72px;
}
.retro-fm .hero h1,
.retro-fm .section h2,
.retro-fm .display-font {
  font-family: "Lilita One", "Bangers", Impact, sans-serif;
  letter-spacing: 0.01em;
}
.retro-fm .hero h1 {
  font-size: clamp(58px, 7vw, 104px);
  line-height: 0.93;
  margin: 22px 0;
}
.retro-fm .hero h1 em {
  color: var(--orange);
  font-style: normal;
  text-shadow: 4px 4px 0 var(--ink-local);
  -webkit-text-stroke: 1px var(--ink-local);
}
.retro-fm .hero-copy > p { font-size: 19px; line-height: 1.65; max-width: 620px; }
.retro-fm .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin: 30px 0; }
.retro-fm .dj-note { max-width: 430px; transform: rotate(-1deg); }
.retro-fm .radio-wrap { position: relative; padding: 70px 10px; }
.retro-fm .radio {
  position: relative;
  background: var(--orange);
  border: 5px solid var(--ink-local);
  border-radius: 26px;
  padding: 28px;
  box-shadow: 14px 16px 0 var(--ink-local);
  transform: rotate(2deg);
}
.retro-fm .radio::before {
  content: "";
  position: absolute;
  width: 65%;
  height: 18px;
  border: 5px solid var(--ink-local);
  border-bottom: 0;
  border-radius: 24px 24px 0 0;
  left: 18%;
  top: -50px;
}
.retro-fm .radio-grid { display: grid; grid-template-columns: 1fr 1.15fr; gap: 25px; }
.retro-fm .speaker {
  aspect-ratio: 1;
  border: 4px solid var(--ink-local);
  border-radius: 50%;
  padding: 15px;
  background: repeating-radial-gradient(circle, var(--ink-local) 0 2px, transparent 2px 7px);
}
.retro-fm .speaker span {
  display: block;
  width: 100%;
  height: 100%;
  border: 3px solid var(--ink-local);
  border-radius: 50%;
}
.retro-fm .radio-face { display: flex; flex-direction: column; justify-content: space-between; }
.retro-fm .frequency {
  position: relative;
  background: #e9d89c;
  border: 4px solid var(--ink-local);
  padding: 14px;
  text-align: center;
  overflow: hidden;
}
.retro-fm .frequency small { display: block; font-weight: 900; }
.retro-fm .frequency strong {
  display: block;
  font-family: "Lilita One", Impact, sans-serif;
  font-size: 46px;
}
.retro-fm .needle {
  position: absolute;
  width: 3px;
  background: var(--orange);
  height: 100%;
  left: 63%;
  top: 0;
}
.retro-fm .knobs { display: flex; justify-content: space-around; margin-top: 18px; }
.retro-fm .knobs i {
  display: block;
  width: 45px;
  height: 45px;
  border: 4px solid var(--ink-local);
  border-radius: 50%;
  background: var(--mustard);
  box-shadow: 3px 3px 0 var(--ink-local);
}
.retro-fm .radio-name { text-align: right; margin-top: 20px; font-weight: 900; letter-spacing: 0.15em; }
.retro-fm .on-air { position: absolute !important; right: -5px; top: 10px; z-index: 4; transform: rotate(9deg); }
.retro-fm .click-badge { position: absolute !important; left: -30px; bottom: 20px; transform: rotate(-15deg); }
.retro-fm .ticker {
  display: flex;
  justify-content: center;
  gap: 36px;
  align-items: center;
  background: var(--ink-local);
  color: var(--paper);
  padding: 16px 24px;
  border-block: 4px solid var(--orange);
  letter-spacing: 0.08em;
}
.retro-fm .ticker span:first-child { background: var(--orange); padding: 5px 10px; font-weight: 900; }
.retro-fm .section-heading {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: end;
  margin-bottom: 42px;
}
.retro-fm .section-heading h2 { font-size: clamp(42px, 5vw, 70px); margin: 5px 0 0; }
.retro-fm .eyebrow { font-weight: 900; letter-spacing: 0.16em; font-size: 13px; }
.retro-fm .schedule-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
.retro-fm .show-time {
  font-family: "Lilita One", Impact, sans-serif;
  font-size: 32px;
  color: var(--orange);
}
.retro-fm .schedule-grid p { font-weight: 800; margin-bottom: 18px; }
.retro-fm .archive {
  background: var(--ink-local);
  color: var(--paper);
  border-block: 7px double var(--mustard);
}
.retro-fm .section-heading.light > p { max-width: 360px; line-height: 1.6; color: #dfcfaa; }
.retro-fm .record-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
.retro-fm .record h3 {
  font-family: "Lilita One", Impact, sans-serif;
  font-size: 21px;
  margin: 18px 0 4px;
}
.retro-fm .record p { margin: 0; color: #dfcfaa; }
.retro-fm .sleeve {
  aspect-ratio: 1;
  position: relative;
  border: 4px solid #15110f;
  box-shadow: 8px 8px 0 var(--orange);
  overflow: hidden;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.retro-fm .sleeve span,
.retro-fm .sleeve b { position: relative; z-index: 2; }
.retro-fm .sleeve b {
  font-family: "Lilita One", Impact, sans-serif;
  font-size: 25px;
  max-width: 80%;
}
.retro-fm .vinyl {
  position: absolute;
  width: 86%;
  height: 86%;
  border-radius: 50%;
  background: repeating-radial-gradient(circle, #191615 0 3px, #35302d 3px 7px);
  right: -34%;
  top: 7%;
  border: 5px solid #0c0a09;
}
.retro-fm .vinyl::after {
  content: "";
  position: absolute;
  width: 24%;
  height: 24%;
  border-radius: 50%;
  background: var(--mustard);
  top: 38%;
  left: 38%;
  border: 3px solid #17120f;
}
.retro-fm .sleeve-1 { background: var(--blue); }
.retro-fm .sleeve-2 { background: var(--mustard); }
.retro-fm .sleeve-3 { background: var(--orange); }
.retro-fm .sleeve-4 { background: var(--green); }
.retro-fm .story { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
.retro-fm .call-panel { padding: 48px !important; background: var(--paper) !important; }
.retro-fm .call-panel blockquote {
  font-family: "Lilita One", Impact, sans-serif;
  font-size: clamp(28px, 3vw, 44px);
  line-height: 1.3;
  margin: 24px 0;
}
.retro-fm .story-copy h2 { font-size: 62px; margin: 18px 0; }
.retro-fm .story-copy > p { font-size: 18px; line-height: 1.7; margin-bottom: 26px; }
.retro-fm .club { background: var(--green); border-block: 5px solid var(--ink-local); }
.retro-fm .club-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.75fr 0.65fr;
  gap: 50px;
  align-items: center;
}
.retro-fm .club h2 { font-size: 60px; margin: 8px 0 16px; }
.retro-fm .club p { line-height: 1.6; }
.retro-fm .cassette {
  background: #e7d08d;
  border: 5px solid var(--ink-local);
  border-radius: 16px;
  padding: 22px;
  box-shadow: 10px 10px 0 var(--ink-local);
  transform: rotate(-4deg);
}
.retro-fm .cassette-label {
  border: 3px solid var(--ink-local);
  padding: 10px;
  text-align: center;
  background: var(--paper);
}
.retro-fm .cassette-label b,
.retro-fm .cassette-label span { display: block; }
.retro-fm .cassette-label b {
  font-family: "Lilita One", Impact, sans-serif;
  font-size: 28px;
}
.retro-fm .reels { display: flex; justify-content: space-around; margin-top: 22px; }
.retro-fm .reels i {
  width: 66px;
  height: 66px;
  border: 8px dotted var(--ink-local);
  border-radius: 50%;
  background: var(--paper);
}
.retro-fm .club-action { display: flex; flex-direction: column; gap: 16px; }
.retro-fm .club-action > strong {
  font-family: "Lilita One", Impact, sans-serif;
  font-size: 33px;
}
.retro-fm .footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-block: 36px;
  font-size: 14px;
}
@media (max-width: 900px) {
  .retro-fm .topbar nav { display: none; }
  .retro-fm .hero,
  .retro-fm .story,
  .retro-fm .club-inner { grid-template-columns: 1fr; }
  .retro-fm .hero { gap: 20px; }
  .retro-fm .radio-wrap { max-width: 620px; margin: auto; }
  .retro-fm .schedule-grid { grid-template-columns: 1fr; }
  .retro-fm .record-grid { grid-template-columns: repeat(2, 1fr); }
  .retro-fm .club-action { align-items: flex-start; }
  .retro-fm .section-heading { align-items: flex-start; flex-direction: column; }
  .retro-fm .footer { flex-direction: column; text-align: center; }
}
@media (max-width: 560px) {
  .retro-fm .shell { width: min(100% - 24px, 1180px); }
  .retro-fm .section { padding: 65px 0; }
  .retro-fm .hero { min-height: auto; padding-top: 45px; }
  .retro-fm .hero h1 { font-size: 54px; }
  .retro-fm .radio { padding: 18px; }
  .retro-fm .radio-grid { gap: 12px; }
  .retro-fm .frequency strong { font-size: 30px; }
  .retro-fm .knobs i { width: 34px; height: 34px; }
  .retro-fm .record-grid { grid-template-columns: 1fr; }
  .retro-fm .ticker { font-size: 11px; gap: 10px; flex-wrap: wrap; }
  .retro-fm .story-copy h2,
  .retro-fm .club h2 { font-size: 43px; }
  .retro-fm .call-panel { padding: 28px !important; }
  .retro-fm .footer p { margin: 0; }
}
`;

function useRetroFmStyles() {
  useEffect(() => {
    if (document.getElementById("retro-fm-example-styles")) return;

    const style = document.createElement("style");
    style.id = "retro-fm-example-styles";
    style.textContent = retroFmStyles;
    document.head.appendChild(style);
  }, []);
}

export function ComixaRetroFM79() {
  useRetroFmStyles();

  return (
    <ToastProvider position="bottom-right">
      <ComixaProvider theme="retro" className="retro-fm">
        <main>
          <header className="topbar">
            <a className="brand" href="#retro-fm-top">
              <span>FM</span> 79
            </a>
            <nav aria-label="Primary navigation">
              <a href="#retro-fm-schedule">Schedule</a>
              <a href="#retro-fm-archive">Archive</a>
              <a href="#retro-fm-club">Tape Club</a>
            </nav>
            <Button
              size="sm"
              variant="warning"
              onClick={() =>
                toast({
                  title: "You are live!",
                  description: "FM 79 is now playing in your imaginary kitchen.",
                })
              }
            >
              Tune in
            </Button>
          </header>

          <section id="retro-fm-top" className="hero shell">
            <div className="hero-copy">
              <Badge variant="yellow">Broadcasting since 1979</Badge>
              <h1>
                Turn the dial.
                <br />
                <em>Find your decade.</em>
              </h1>
              <p>
                One fictional radio station. Forty years of forgotten grooves,
                midnight call-ins and songs recorded from the air onto worn-out cassettes.
              </p>
              <div className="hero-actions">
                <Button
                  size="lg"
                  variant="danger"
                  onClick={() => toast("Now playing: Velvet Satellite")}
                >
                  Play live radio
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector("#retro-fm-archive")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Browse archive
                </Button>
              </div>
              <SpeechBubble shape="speech" tone="cream" tail="bottomLeft" className="dj-note">
                "No algorithms. Just excellent taste." - Cass, evening DJ
              </SpeechBubble>
            </div>

            <div className="radio-wrap" aria-label="Vintage FM radio illustration">
              <Sticker className="on-air">ON AIR</Sticker>
              <div className="radio">
                <div className="radio-grid">
                  <div className="speaker">
                    <span />
                  </div>
                  <div className="radio-face">
                    <div className="frequency">
                      <small>FM STEREO</small>
                      <strong>79.9</strong>
                      <div className="needle" />
                    </div>
                    <div className="knobs">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
                <div className="radio-name">PANORAMA 2000</div>
              </div>
              <SoundBadge variant="bam" word="CLICK!" className="click-badge" />
            </div>
          </section>

          <section className="ticker" aria-label="Now playing">
            <span>Now playing</span>
            <strong>The Night Operators - Velvet Satellite</strong>
            <span>03:42</span>
          </section>

          <section id="retro-fm-schedule" className="shell section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Today on 79.9</p>
                <h2>The daily transmission</h2>
              </div>
              <Ribbon variant="ticket">Live schedule</Ribbon>
            </div>
            <div className="schedule-grid">
              {shows.map((show, index) => (
                <Card key={show.title} variant={index === 1 ? "speech" : "default"}>
                  <CardHeader>
                    <div className="show-time">{show.time}</div>
                    <CardTitle>{show.title}</CardTitle>
                    <CardDescription>with {show.host}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{show.mood}</p>
                    <Button
                      size="sm"
                      variant={index === 1 ? "danger" : "outline"}
                      onClick={() => toast(`Reminder set for ${show.title}`)}
                    >
                      Remind me
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="retro-fm-archive" className="archive section">
            <div className="shell">
              <div className="section-heading light">
                <div>
                  <p className="eyebrow">The dusty shelf</p>
                  <h2>Lost records of the week</h2>
                </div>
                <p>Recovered from basements, gloveboxes and one suspicious bowling alley.</p>
              </div>
              <div className="record-grid">
                {records.map((record, index) => (
                  <article className="record" key={record.title}>
                    <div className={`sleeve sleeve-${index + 1}`}>
                      <div className="vinyl" />
                      <span>{record.no}</span>
                      <b>{record.title}</b>
                    </div>
                    <h3>{record.title}</h3>
                    <p>
                      {record.artist} / {record.year}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="shell section story">
            <ComicPanel className="call-panel">
              <p className="eyebrow">Caller 04 / Tuesday 11:48 PM</p>
              <blockquote>
                "I heard this song once through the wall of a motel room in Nevada. I have
                been looking for it for twenty-seven years."
              </blockquote>
              <p>
                We found it. Side B, track 3: <strong>Telephone Hearts.</strong>
              </p>
            </ComicPanel>
            <div className="story-copy">
              <Badge variant="green">Found tape #214</Badge>
              <h2 className="display-font">Every cassette has a story.</h2>
              <p>
                Listeners mail us unlabeled tapes. We clean them, digitize them, identify
                what we can, and publish the mystery for everyone else.
              </p>
              <Button variant="primary" onClick={() => toast("Submission desk is open")}>
                Submit a mystery tape
              </Button>
            </div>
          </section>

          <section id="retro-fm-club" className="club section">
            <div className="shell club-inner">
              <div>
                <p className="eyebrow">The monthly mix</p>
                <h2>Join the Tape Club</h2>
                <p>
                  Every month, receive a hand-numbered cassette mix, a folded mini-zine and
                  a secret frequency to unlock an online bonus show.
                </p>
              </div>
              <div className="cassette">
                <div className="cassette-label">
                  <b>FM 79</b>
                  <span>SUMMER STATIC</span>
                </div>
                <div className="reels">
                  <i />
                  <i />
                </div>
              </div>
              <div className="club-action">
                <strong>$12 / month</strong>
                <Button
                  size="lg"
                  variant="warning"
                  onClick={() =>
                    toast({
                      title: "Welcome to Tape Club",
                      description: "Your first mix is being rewound.",
                    })
                  }
                >
                  Join the club
                </Button>
                <small>Cancel whenever the music stops.</small>
              </div>
            </div>
          </section>

          <footer className="footer shell">
            <a className="brand" href="#retro-fm-top">
              <span>FM</span> 79
            </a>
            <p>Made with static, dust and Comixa UI.</p>
            <p>(c) 1979-2026, somewhere on the dial.</p>
          </footer>
        </main>
      </ComixaProvider>
    </ToastProvider>
  );
}
