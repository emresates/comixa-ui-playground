import { Construction } from "lucide-react";
import { Badge, Card, CardContent } from "comixa-ui";

export function UpcomingPage({ title }: { title: string }) {
  return (
    <article className="flex min-h-[65vh] items-center justify-center py-8">
      <Card variant="default" padding="none" className="w-full">
        <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:p-12">
          <Badge variant="yellow">Coming Soon</Badge>
          <span className="pg-surface-muted pg-border flex h-16 w-16 items-center justify-center rounded-xl border-4 shadow-comic-sm">
            <Construction className="pg-fg h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <div>
            <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">{title}</h1>
            <p className="pg-fg-muted mt-3 text-base">This page is ready. Content will be added later.</p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
