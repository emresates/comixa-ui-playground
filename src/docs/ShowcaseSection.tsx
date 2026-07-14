import { type ReactNode } from "react";

export function ShowcaseSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">{title}</h2>
      <div className="pg-surface pg-border rounded-xl border-2 p-4 shadow-comic-sm">
        {children}
      </div>
    </section>
  );
}
