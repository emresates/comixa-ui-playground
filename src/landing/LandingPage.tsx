"use client";
import { useState } from "react";
import { ComixaProvider } from "comixa-ui";
import { ComponentLab } from "./component-lab";
import { CursorMorph } from "./cursor-morph";
import { ExamplesSection } from "./examples-section";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";
import { InstallSection } from "./install-section";
import { Navbar } from "./navbar";
import { ThemesSection, type ThemeName } from "./themes-section";
export function LandingPage() {
  const [theme, setTheme] = useState<ThemeName>("comic");
  const providerTheme = theme === "comic" ? undefined : theme;
  return (
    <ComixaProvider {...(providerTheme ? { theme: providerTheme } : {})}>
      <main className={`site-shell theme-${theme}`}>
        <CursorMorph />
        <div className="ink-noise" />
        <Navbar />
        <HeroSection />
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>
              COMIC COMPONENTS ✦ RETRO SYSTEMS ✦ POP-ART MOTION ✦ MANGA
              SCREENTONES ✦ VINTAGE EDITORIAL ✦{" "}
            </span>
            <span>
              COMIC COMPONENTS ✦ RETRO SYSTEMS ✦ POP-ART MOTION ✦ MANGA
              SCREENTONES ✦ VINTAGE EDITORIAL ✦{" "}
            </span>
          </div>
        </div>
        <ComponentLab />
        <ThemesSection theme={theme} onThemeChange={setTheme} />
        <ExamplesSection />
        <InstallSection />
        <Footer />
      </main>
    </ComixaProvider>
  );
}
