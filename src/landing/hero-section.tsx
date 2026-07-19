"use client";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  SoundBadge,
  SpeechBubble,
  Sticker,
} from "comixa-ui";
import { useCopyInstall } from "./use-copy-install";
export function HeroSection() {
  const { copied, copyInstall } = useCopyInstall();
  return (
    <section id="top" className="hero shell-pad">
      <div className="hero-copy">
        <Badge variant="yellow">React UI, but with a personality.</Badge>
        <h1>
          Interfaces
          <br />
          <span>with a pulse.</span>
        </h1>
        <p>
          Comixa is a character-first React component library for products that
          refuse to look like every other dashboard on the internet.
        </p>
        <div className="hero-actions">
          <Button
            size="lg"
            variant="primary"
            onClick={() => window.location.assign("/components/button")}
            data-cursor="BUILD"
            data-cursor-shape="burst"
          >
            Start building
          </Button>
          <button
            className="install-pill"
            onClick={copyInstall}
            data-cursor="COPY"
            data-cursor-shape="square"
          >
            <code>npm i comixa-ui</code>
            <span>{copied ? "COPIED!" : "⌘ C"}</span>
          </button>
        </div>
        <div className="trust-strip">
          <span>MIT LICENSED</span>
          <b>•</b>
          <span>REACT 18 + 19</span>
          <b>•</b>
          <span>TAILWIND 3 + 4</span>
        </div>
      </div>
      <div
        className="hero-stage"
        data-cursor="DRAG"
        data-cursor-shape="diamond"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <Sticker className="stage-sticker">5 THEMES</Sticker>
        <SoundBadge word="POW" className="pow-badge" />
        <div className="floating-card card-a">
          <Card>
            <CardHeader>
              <Badge variant="green">SUCCESS</Badge>
              <CardTitle>Shipment launched!</CardTitle>
              <CardDescription>
                Your comic-powered release is live.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="success">View release</Button>
            </CardContent>
          </Card>
        </div>
        <div className="floating-card card-b">
          <SpeechBubble tail="bottomLeft">
            This button has main-character energy.
          </SpeechBubble>
        </div>
        <div className="floating-card card-c">
          <Input placeholder="Name your next big thing…" />
        </div>
        <div className="stage-core">
          <span className="core-small">BUILD</span>
          <strong>LOUD</strong>
          <span className="core-small">SHIP FAST</span>
        </div>
      </div>
    </section>
  );
}
