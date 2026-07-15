import type { ReactNode } from "react";
import { Overview } from "./Overview";
import { ShowcasePage } from "./ShowcasePage";
import { ExamplesPage } from "./ExamplesPage";
import { ButtonDocs } from "./ButtonDocs";
import { InputDocs } from "./InputDocs";
import { SelectDocs } from "./SelectDocs";
import { CheckboxDocs } from "./CheckboxDocs";
import { RadioDocs } from "./RadioDocs";
import { SwitchDocs } from "./SwitchDocs";
import { BadgeDocs } from "./BadgeDocs";
import { SoundBadgeDocs } from "./SoundBadgeDocs";
import { StickerDocs } from "./StickerDocs";
import { DialogDocs } from "./DialogDocs";
import { ToastDocs } from "./ToastDocs";
import { TooltipDocs } from "./TooltipDocs";
import { CardDocs } from "./CardDocs";
import { DividerDocs } from "./DividerDocs";
import { ComicPageDocs } from "./ComicPageDocs";
import { SpeechBubbleDocs } from "./SpeechBubbleDocs";
import { AvatarDocs } from "./AvatarDocs";
import { TestimonialsDocs } from "./TestimonialsDocs";
import { PricingDocs } from "./PricingDocs";
import { FAQDocs } from "./FAQDocs";
import { StatsDocs } from "./StatsDocs";
import { AnimatedTextDocs } from "./AnimatedTextDocs";
import { BackgroundDocs } from "./BackgroundDocs";
import { PageTransitionDocs } from "./PageTransitionDocs";
import { ComicLoaderDocs } from "./ComicLoaderDocs";
import { GalleryDocs } from "./GalleryDocs";
import { RibbonDocs } from "./RibbonDocs";
import { ComicRevealDocs } from "./ComicRevealDocs";
import { ComicCursorDocs } from "./ComicCursorDocs";
import { FeaturesDocs } from "./FeaturesDocs";

export function renderDocsPage(
  active: string,
  onNavigate: (id: string) => void
): ReactNode {
  switch (active) {
    case "showcase":
      return <ShowcasePage />;
    case "examples":
      return <ExamplesPage />;
    case "button":
      return <ButtonDocs />;
    case "input":
      return <InputDocs />;
    case "select":
      return <SelectDocs />;
    case "checkbox":
      return <CheckboxDocs />;
    case "radio":
      return <RadioDocs />;
    case "switch":
      return <SwitchDocs />;
    case "badge":
      return <BadgeDocs />;
    case "sound-badge":
      return <SoundBadgeDocs />;
    case "sticker":
      return <StickerDocs />;
    case "dialog":
      return <DialogDocs />;
    case "toast":
      return <ToastDocs />;
    case "tooltip":
      return <TooltipDocs />;
    case "card":
      return <CardDocs />;
    case "divider":
      return <DividerDocs />;
    case "comic-page":
      return <ComicPageDocs />;
    case "speech-bubble":
      return <SpeechBubbleDocs />;
    case "avatar":
      return <AvatarDocs />;
    case "testimonials":
      return <TestimonialsDocs />;
    case "features":
      return <FeaturesDocs />;
    case "pricing":
      return <PricingDocs />;
    case "faq":
      return <FAQDocs />;
    case "stats":
      return <StatsDocs />;
    case "animated-text":
      return <AnimatedTextDocs />;
    case "background":
      return <BackgroundDocs />;
    case "page-transition":
      return <PageTransitionDocs />;
    case "comic-loader":
      return <ComicLoaderDocs />;
    case "gallery":
      return <GalleryDocs />;
    case "ribbon":
      return <RibbonDocs />;
    case "comic-reveal":
      return <ComicRevealDocs />;
    case "comic-cursor":
      return <ComicCursorDocs />;
    case "overview":
    default:
      return <Overview onNavigate={onNavigate} />;
  }
}
