export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "React" | "Next.js" | "CSS" | "Career";
  date: string;
  readTime: string;
  issue: string;
  tone: "yellow" | "pink" | "blue" | "green" | "orange" | "red";
  featured?: boolean;
  content: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "building-interfaces-with-personality",
    title: "Building Interfaces With Personality",
    excerpt: "A practical guide to creating products that feel memorable without sacrificing usability, speed, or accessibility.",
    category: "CSS",
    date: "Jul 14, 2026",
    readTime: "8 min read",
    issue: "ISSUE #24",
    tone: "yellow",
    featured: true,
    content: [
      { heading: "Personality Is a System", paragraphs: ["Visual personality is not a layer of decoration added at the end. It comes from deliberate choices in typography, spacing, motion, shape, color, and language.", "The strongest interfaces repeat a small number of recognizable decisions. A bold border, a playful transition, and a distinct content voice can be more effective than dozens of disconnected effects."] },
      { heading: "Start With the Core Experience", paragraphs: ["Before adding animation or illustration, make the primary task obvious. Users should understand where they are, what they can do, and what happens next."], bullets: ["Keep the content hierarchy clear.", "Use motion to explain change, not hide it.", "Preserve keyboard navigation and readable contrast.", "Test playful details on small screens."] },
      { heading: "Build Reusable Rules", paragraphs: ["Turn signature decisions into tokens and components. This lets personality scale across an entire product instead of living in one impressive hero section.", "A component library such as Comixa UI can provide expressive primitives while still allowing teams to control content and composition."] }
    ]
  },
  {
    slug: "nextjs-performance-checklist",
    title: "The Next.js Performance Checklist I Actually Use",
    excerpt: "A focused checklist for shipping fast App Router projects without spending days chasing meaningless scores.",
    category: "Next.js", date: "Jul 10, 2026", readTime: "6 min read", issue: "ISSUE #23", tone: "blue",
    content: [{ heading: "Measure Real Routes", paragraphs: ["Test the routes your users actually visit and focus on loading behavior, interaction latency, and layout stability."], bullets: ["Optimize the largest visible media.", "Keep client boundaries small.", "Load third-party scripts deliberately.", "Avoid shipping data twice."] }, { heading: "Performance Is Product Work", paragraphs: ["Fast pages improve trust. Treat performance regressions like product regressions and check them during every release."] }]
  },
  {
    slug: "react-components-that-scale",
    title: "React Components That Scale Past the Demo",
    excerpt: "How to design component APIs that stay understandable as variants, states, and teams grow.",
    category: "React", date: "Jul 6, 2026", readTime: "7 min read", issue: "ISSUE #22", tone: "pink",
    content: [{ heading: "Prefer Clear Constraints", paragraphs: ["A strong component API makes supported decisions obvious. Variants should describe intent rather than expose every CSS property."], bullets: ["Use typed variants.", "Keep state ownership predictable.", "Forward refs where consumers need them.", "Document accessibility behavior."] }, { heading: "Composition Beats Configuration", paragraphs: ["When configuration becomes difficult to understand, expose smaller composable pieces instead of adding another dozen props."] }]
  },
  {
    slug: "css-motion-without-chaos",
    title: "CSS Motion Without the Chaos",
    excerpt: "A simple motion vocabulary for transitions that feel energetic, consistent, and accessible.",
    category: "CSS", date: "Jul 1, 2026", readTime: "5 min read", issue: "ISSUE #21", tone: "green",
    content: [{ heading: "Create a Motion Vocabulary", paragraphs: ["Choose a few durations and easing curves that represent different types of change. Reuse them everywhere."], bullets: ["Fast feedback for controls.", "Medium transitions for panels.", "Slower motion only for storytelling.", "Honor reduced-motion preferences."] }]
  },
  {
    slug: "portfolio-case-studies",
    title: "Portfolio Case Studies That Get Read",
    excerpt: "Replace generic project galleries with stories that quickly communicate decisions, constraints, and outcomes.",
    category: "Career", date: "Jun 26, 2026", readTime: "9 min read", issue: "ISSUE #20", tone: "orange",
    content: [{ heading: "Lead With the Problem", paragraphs: ["Recruiters and clients need context before visuals. Explain the challenge, your role, and the most important constraint first."], bullets: ["Show the decision process.", "Separate your contribution from the team.", "Use measurable outcomes carefully.", "Make the page easy to scan."] }]
  },
  {
    slug: "accessible-dialogs-in-react",
    title: "Accessible Dialogs in React: The Details Matter",
    excerpt: "Focus management, escape behavior, labels, and the small implementation details that separate a modal from a trap.",
    category: "React", date: "Jun 19, 2026", readTime: "6 min read", issue: "ISSUE #19", tone: "red",
    content: [{ heading: "A Dialog Changes Context", paragraphs: ["Opening a dialog moves the user into a temporary context. Focus should enter it, remain usable, and return to the trigger when the dialog closes."], bullets: ["Provide a clear title.", "Support Escape.", "Prevent accidental background interaction.", "Test using only a keyboard."] }]
  }
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
