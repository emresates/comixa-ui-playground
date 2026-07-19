import { useState, type ReactNode } from "react";
import { Button, Card, CardContent, CardHeader, CardTitle } from "comixa-ui";

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description?: string;
};

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="relative">
      <pre className="overflow-x-auto rounded-lg border-2 border-ink bg-ink p-4 font-mono text-sm leading-relaxed text-paper shadow-comic-sm">
        <code>{code.trim()}</code>
      </pre>
      <Button
        size="sm"
        variant="outline"
        className="absolute right-3 top-3 bg-paper"
        onClick={async () => {
          await navigator.clipboard.writeText(code.trim());
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}

export function ComponentDemoCard({
  title,
  code,
  children,
  className,
}: {
  title: ReactNode;
  code: string;
  children: ReactNode;
  className?: string;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <Card variant="default" padding="none" className={className}>
      <CardHeader className="flex-row items-center justify-between gap-3 border-b-2 border-ink px-5 py-4">
        <CardTitle>{title}</CardTitle>
        <Button
          size="sm"
          variant={showCode ? "default" : "outline"}
          aria-expanded={showCode}
          onClick={() => setShowCode((visible) => !visible)}
        >
          {showCode ? "Hide code" : "Show code"}
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-5">
        {children}
        {showCode ? <CodeBlock code={code} /> : null}
      </CardContent>
    </Card>
  );
}

export function DocPage({
  title,
  description,
  importCode,
  exampleCode,
  props,
  children,
  customExamples = false,
}: {
  title: string;
  description: string;
  importCode: string;
  exampleCode: string;
  props: PropRow[];
  children: ReactNode;
  customExamples?: boolean;
}) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide">
          {title}
        </h1>
        <p className="pg-fg-muted max-w-2xl text-base">{description}</p>
      </header>

      <section className="flex flex-col gap-2">
        <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">
          Import
        </h2>
        <CodeBlock code={importCode} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">
          Examples
        </h2>

        {customExamples ? (
          children
        ) : (
          <ComponentDemoCard title={`${title} examples`} code={exampleCode}>
            {children}
          </ComponentDemoCard>
        )}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="pg-fg font-comic text-lg uppercase tracking-wide">
          Props
        </h2>
        <div className="pg-surface pg-border overflow-x-auto rounded-xl border-2 shadow-comic-sm">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead className="pg-surface-muted font-comic uppercase tracking-wide">
              <tr>
                <th className="pg-border pg-fg border-b-2 px-3 py-2">Prop</th>
                <th className="pg-border pg-fg border-b-2 px-3 py-2">Type</th>
                <th className="pg-border pg-fg border-b-2 px-3 py-2">Default</th>
                <th className="pg-border pg-fg border-b-2 px-3 py-2">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((row) => (
                <tr key={row.name} className="align-top">
                  <td className="pg-fg border-b border-black/10 px-3 py-2 font-mono text-xs">
                    {row.name}
                  </td>
                  <td className="pg-fg-muted border-b border-black/10 px-3 py-2 font-mono text-xs">
                    {row.type}
                  </td>
                  <td className="pg-fg border-b border-black/10 px-3 py-2 font-mono text-xs">
                    {row.default ?? "—"}
                  </td>
                  <td className="pg-fg-muted border-b border-black/10 px-3 py-2">
                    {row.description ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
