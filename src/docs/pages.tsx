import { lazy, Suspense, type ReactNode } from "react";
import { Overview } from "./Overview";
import { ExamplesPage } from "./ExamplesPage";
import { ButtonDocs } from "./ButtonDocs";
import { InputDocs } from "./InputDocs";
import { TextareaDocs } from "./TextareaDocs";
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
import { TimelineDocs } from "./TimelineDocs";
import { RibbonDocs } from "./RibbonDocs";
import { ComicRevealDocs } from "./ComicRevealDocs";
import { ComicCursorDocs } from "./ComicCursorDocs";
import { FeaturesDocs } from "./FeaturesDocs";
import { DocsPlaceholder } from "./DocsPlaceholder";
import { DOCS_ITEMS } from "./nav";
import { GettingStartedDocs } from "./GettingStartedDocs";
import { InstallationDocs } from "./InstallationDocs";
import { ThemingDocs } from "./ThemingDocs";
import { ComixaProviderDocs } from "./ComixaProviderDocs";
import { CustomizationDocs } from "./CustomizationDocs";
import { AnimationsDocs } from "./AnimationsDocs";
import { BestPracticesDocs } from "./BestPracticesDocs";
import { GeneralFAQDocs } from "./GeneralFAQDocs";
import { DeploymentDocs } from "./DeploymentDocs";
import { UpcomingPage } from "./UpcomingPage";
import { ComicGeneratorSkeleton } from "./playground/ComicGeneratorSkeleton";
import { ComicGeneratorErrorBoundary } from "./playground/ComicGeneratorErrorBoundary";
import { BlogPage } from "../blog/BlogPage";
import { BlogArticlePage } from "../blog/BlogArticlePage";

const ComicGeneratorPage = lazy(() =>
  import("./playground/ComicGeneratorPage").then((module) => ({
    default: module.ComicGeneratorPage,
  })),
);

export function renderDocsPage(
  active: string,
  onNavigate: (id: string) => void,
): ReactNode {
  if (active === "blog") return <BlogPage />;
  if (active === "blog-article") return <BlogArticlePage />;
  if (active === "playground") {
    return (
      <ComicGeneratorErrorBoundary>
        <Suspense fallback={<ComicGeneratorSkeleton />}>
          <ComicGeneratorPage />
        </Suspense>
      </ComicGeneratorErrorBoundary>
    );
  }
  if (active === "docs-getting-started") return <GettingStartedDocs />;
  if (active === "docs-installation") return <InstallationDocs />;
  if (active === "docs-theming") return <ThemingDocs />;
  if (active === "docs-comixa-provider") return <ComixaProviderDocs />;
  if (active === "docs-customization") return <CustomizationDocs />;
  if (active === "docs-animations") return <AnimationsDocs />;
  if (active === "docs-best-practices") return <BestPracticesDocs />;
  if (active === "docs-faq") return <GeneralFAQDocs />;
  if (active === "docs-deployment") return <DeploymentDocs />;

  const docsItem = DOCS_ITEMS.find((item) => item.id === active);
  if (docsItem) return <DocsPlaceholder title={docsItem.label} />;

  switch (active) {
    case "examples":
      return <ExamplesPage />;
    case "button":
      return <ButtonDocs />;
    case "input":
      return <InputDocs />;
    case "textarea":
      return <TextareaDocs />;
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
    case "timeline":
      return <TimelineDocs />;
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
