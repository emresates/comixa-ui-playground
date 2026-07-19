import { Badge, Card, CardContent } from "comixa-ui";

export function DocsPlaceholder({ title }: { title: string }) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Docs</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide">
          {title}
        </h1>
        <p className="pg-fg-muted max-w-2xl text-base">
          This documentation section is ready. Its content will be added soon.
        </p>
      </header>

      <Card variant="default" padding="none">
        <CardContent className="p-6">
          <p className="pg-fg-muted text-sm">
            Content placeholder for <strong className="pg-fg">{title}</strong>.
          </p>
        </CardContent>
      </Card>
    </article>
  );
}
