import { Badge, Card, CardContent, FAQ, FAQItem } from "comixa-ui";
import { CircleHelp, ExternalLink } from "lucide-react";

const QUESTIONS = [
  {
    id: "nextjs",
    title: "Does it support Next.js?",
    answer: (
      <>
        Yes. Comixa UI works with Next.js applications. Components that use
        state, effects, dialogs, cursor tracking, or other browser APIs should
        be rendered from a Client Component boundary using{" "}
        <code className="font-mono text-sm">&quot;use client&quot;</code>.
      </>
    ),
  },
  {
    id: "vite",
    title: "Does it work with Vite?",
    answer: (
      <>
        Yes. Install the package, configure the Comixa Tailwind preset, include
        the package distribution in Tailwind content scanning, and import your
        global Tailwind stylesheet from the application entry.
      </>
    ),
  },
  {
    id: "single-component",
    title: "Can I use only one component?",
    answer: (
      <>
        Yes. Import only the named component you need, such as{" "}
        <code className="font-mono text-sm">
          import &#123; Button &#125; from &quot;comixa-ui&quot;
        </code>
        . Modern ESM bundlers can tree-shake unused exports.
      </>
    ),
  },
  {
    id: "custom-theme",
    title: "Can I create my own theme?",
    answer: (
      <>
        Yes. Start with the Comic provider and override semantic CSS variables
        for colors, borders, typography, radius, patterns, and shadows. Wrap the
        token map in a reusable provider component when you need the custom
        theme in several places.
      </>
    ),
  },
  {
    id: "dark-mode",
    title: "Does it support dark mode?",
    answer: (
      <>
        Comixa does not force a separate automatic dark theme. You can create
        dark-mode token overrides and activate them with a class, media query,
        or application state. Keep text, borders, focus rings, and semantic
        states at accessible contrast levels.
      </>
    ),
  },
  {
    id: "accessible",
    title: "Is it accessible?",
    answer: (
      <>
        Comixa components are designed around semantic markup and
        keyboard-friendly behavior, but accessibility also depends on your
        implementation. Provide labels and alt text, preserve focus indicators,
        verify keyboard workflows, respect reduced motion, and test contrast in
        every theme.
      </>
    ),
  },
  {
    id: "typescript",
    title: "Is TypeScript required?",
    answer: (
      <>
        No. Comixa UI works in JavaScript projects. TypeScript declarations are
        included for projects that want autocomplete, prop validation, and
        exported component types.
      </>
    ),
  },
  {
    id: "commercial",
    title: "Can I use it commercially?",
    answer: (
      <>
        Yes. Comixa UI is distributed under the MIT License, which permits
        commercial use, modification, distribution, and private use. Keep the
        required copyright and license notice when redistributing covered source
        or substantial portions of it.
      </>
    ),
  },
] as const;

export function GeneralFAQDocs() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Help Center</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Quick answers about frameworks, installation scope, theming,
          accessibility, TypeScript, dark mode, and licensing.
        </p>
      </header>

      <FAQ type="multiple" defaultValue={["nextjs"]}>
        {QUESTIONS.map((question) => (
          <FAQItem key={question.id} value={question.id} title={question.title}>
            {question.answer}
          </FAQItem>
        ))}
      </FAQ>
    </article>
  );
}
