import type { ReactNode } from "react";

export { ComponentDemoCard } from "./DocPage";

export function DemoLabel({ children }: { children: ReactNode }) {
  return (
    <p className="pg-fg-muted mb-2 font-comic text-xs uppercase tracking-wide">
      {children}
    </p>
  );
}

export function BoltIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </svg>
  );
}
