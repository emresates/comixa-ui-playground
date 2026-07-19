import type { CSSProperties, ReactNode } from "react";
import {
  BoxSelect,
  Braces,
  CodeXml,
  Palette,
  Sparkles,
  SwatchBook,
  Type,
} from "lucide-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  ComixaProvider,
  Input,
} from "comixa-ui";
import { CodeBlock } from "./DocPage";

type TokenStyles = CSSProperties & Record<`--${string}`, string | number>;

const COLOR_STYLES: TokenStyles = {
  "--comixa-primary-bg": "#7c3aed",
  "--comixa-primary-text": "#ffffff",
  "--comixa-primary-border": "#241047",
  "--comixa-primary-shadow": "#ff8a00",
  "--comixa-primary-shadow-value": "5px 5px 0 #ff8a00",
};

const RADIUS_STYLES: TokenStyles = {
  "--comixa-button-radius": "999px",
  "--comixa-field-radius": "999px",
  "--comixa-field-radius-sm": "999px",
  "--comixa-field-radius-lg": "999px",
};

const SHADOW_STYLES: TokenStyles = {
  "--comixa-primary-shadow": "#ef4444",
  "--comixa-primary-shadow-value": "10px 10px 0 #ef4444",
  "--comixa-field-shadow-value": "8px 8px 0 #111111",
};

const TYPE_STYLES: TokenStyles = {
  "--comixa-button-font": 'Georgia, "Times New Roman", serif',
  "--comixa-field-font": 'Georgia, "Times New Roman", serif',
  "--comixa-button-letter-spacing": "0.08em",
};

const NOIR_STYLES: TokenStyles = {
  "--comixa-primary-bg": "#161616",
  "--comixa-primary-text": "#f8f4e8",
  "--comixa-primary-border": "#f8f4e8",
  "--comixa-primary-shadow": "#777777",
  "--comixa-primary-shadow-value": "6px 6px 0 #777777",
  "--comixa-button-font": 'Impact, "Arial Narrow", sans-serif',
  "--comixa-button-radius": "0px",
};

const OVERRIDE_TOKENS = `const brandTokens = {
  "--comixa-primary-bg": "#7c3aed",
  "--comixa-primary-text": "#ffffff",
  "--comixa-primary-border": "#241047",
  "--comixa-primary-shadow-value": "5px 5px 0 #ff8a00",
} as React.CSSProperties;

<ComixaProvider theme="comic" style={brandTokens}>
  <Button variant="primary">Brand action</Button>
</ComixaProvider>`;

const CUSTOM_COLORS = `/* app.css */
.brand-scope {
  --comixa-primary-bg: #7c3aed;
  --comixa-primary-text: #ffffff;
  --comixa-primary-border: #241047;
  --comixa-primary-shadow: #ff8a00;
  --comixa-primary-shadow-value: 5px 5px 0 #ff8a00;
}`;

const CUSTOM_RADIUS = `<ComixaProvider
  style={{
    "--comixa-button-radius": "999px",
    "--comixa-field-radius": "999px",
  } as React.CSSProperties}
>
  <Button variant="primary">Rounded action</Button>
</ComixaProvider>`;

const CUSTOM_SHADOWS = `const deepShadows = {
  "--comixa-primary-shadow": "#ef4444",
  "--comixa-primary-shadow-value": "10px 10px 0 #ef4444",
  "--comixa-field-shadow-value": "8px 8px 0 #111111",
} as React.CSSProperties;`;

const CUSTOM_TYPOGRAPHY = `/* Load your font once, then override its semantic slots. */
@font-face {
  font-family: "Brand Display";
  src: url("/fonts/brand-display.woff2") format("woff2");
  font-display: swap;
}

.brand-scope {
  --comixa-button-font: "Brand Display", sans-serif;
  --comixa-field-font: "Brand Display", sans-serif;
  --comixa-button-letter-spacing: 0.08em;
}`;

const THEME_EXTENSION = `import type { CSSProperties, PropsWithChildren } from "react";
import { ComixaProvider } from "comixa-ui";

type ComixaTokens = CSSProperties & Record<\`--\${string}\`, string | number>;

const noirTheme: ComixaTokens = {
  "--comixa-primary-bg": "#161616",
  "--comixa-primary-text": "#f8f4e8",
  "--comixa-primary-border": "#f8f4e8",
  "--comixa-primary-shadow-value": "6px 6px 0 #777777",
  "--comixa-button-font": "Impact, sans-serif",
  "--comixa-button-radius": "0px",
};

export function NoirTheme({ children }: PropsWithChildren) {
  return <ComixaProvider theme="comic" style={noirTheme}>{children}</ComixaProvider>;
}`;

const TOKEN_GROUPS = [
  {
    title: "Semantic Colors",
    example: "--comixa-primary-bg",
    body: "Background, text, border, and shadow variables describe a role instead of a fixed color.",
  },
  {
    title: "Geometry",
    example: "--comixa-button-radius",
    body: "Radius and border-width tokens control the silhouette and visual weight of components.",
  },
  {
    title: "Typography",
    example: "--comixa-button-font",
    body: "Font, weight, casing, and spacing variables keep type decisions consistent within a scope.",
  },
  {
    title: "Depth",
    example: "--comixa-primary-shadow-value",
    body: "Complete shadow values let each theme define its own direction, distance, and color language.",
  },
] as const;

export function CustomizationDocs() {
  return (
    <article className="flex flex-col gap-10">
      <header className="flex flex-col items-start gap-3">
        <Badge variant="yellow">Design System</Badge>
        <h1 className="pg-fg font-comic text-4xl uppercase tracking-wide sm:text-5xl">
          Customization
        </h1>
        <p className="pg-fg-muted max-w-3xl text-lg leading-8">
          Adapt Comixa UI to your brand by overriding semantic CSS variables.
          Changes cascade through a provider scope without forking component
          source or rewriting component styles.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle
            icon={Braces}
            eyebrow="Core technique"
            title="Override Tokens"
          />
          <p className="pg-fg-muted leading-7">
            Tokens use a semantic family. For example, primary styling is
            exposed through{" "}
            <code className="pg-fg font-mono text-sm">--comixa-primary-bg</code>
            ,<code className="pg-fg mx-1 font-mono text-sm">-text</code>,
            <code className="pg-fg font-mono text-sm">-border</code>, and shadow
            variables—not a single{" "}
            <code className="pg-fg font-mono text-sm">--comixa-primary</code>{" "}
            value.
          </p>
          <CodeBlock code={OVERRIDE_TOKENS} />
        </div>
        <PreviewCard title="Brand Tokens" style={COLOR_STYLES}>
          <Badge variant="yellow">Custom scope</Badge>
          <Button variant="primary">Brand action</Button>
        </PreviewCard>
      </section>

      <section className="flex flex-col gap-5">
        <SectionTitle
          icon={Palette}
          eyebrow="Brand palette"
          title="Custom Colors"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <CodeBlock code={CUSTOM_COLORS} />
          <PreviewCard title="Purple + Orange" style={COLOR_STYLES}>
            <Button variant="primary">Custom color</Button>
            <div className="flex gap-2" aria-hidden="true">
              {["#7c3aed", "#ffffff", "#241047", "#ff8a00"].map((color) => (
                <span
                  key={color}
                  className="h-9 w-9 rounded border-2 border-ink"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </PreviewCard>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <CustomizationBlock
          icon={BoxSelect}
          title="Custom Radius"
          description="Override shape tokens at the provider or CSS class level. Component-specific tokens let buttons and fields evolve together or independently."
          code={CUSTOM_RADIUS}
        >
          <PreviewCard title="Pill Geometry" style={RADIUS_STYLES}>
            <Button variant="primary">Rounded action</Button>
            <Input placeholder="Rounded field" />
          </PreviewCard>
        </CustomizationBlock>
        <CustomizationBlock
          icon={Sparkles}
          title="Custom Shadows"
          description="Use full shadow-value tokens when you need exact offset, blur, spread, and color control."
          code={CUSTOM_SHADOWS}
        >
          <PreviewCard title="Deep Shadows" style={SHADOW_STYLES}>
            <Button variant="primary">Deep impact</Button>
            <Input placeholder="Shadow field" />
          </PreviewCard>
        </CustomizationBlock>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle icon={Type} eyebrow="Brand voice" title="Typography" />
          <p className="pg-fg-muted leading-7">
            Load fonts through your framework or CSS, then point Comixa’s
            typography variables at the new family. Keep fallback fonts and use
            <code className="pg-fg mx-1 font-mono text-sm">
              font-display: swap
            </code>
            to avoid invisible text while fonts load.
          </p>
          <CodeBlock code={CUSTOM_TYPOGRAPHY} />
        </div>
        <PreviewCard title="Editorial Type" style={TYPE_STYLES}>
          <Button variant="primary">Editorial action</Button>
          <Input placeholder="Editorial field" />
        </PreviewCard>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex min-w-0 flex-col gap-4">
          <SectionTitle
            icon={SwatchBook}
            eyebrow="Reusable scope"
            title="Theme Extension"
          />
          <p className="pg-fg-muted leading-7">
            Build a reusable wrapper from the Comic foundation and a typed token
            map. This creates a custom visual scope while preserving Comixa’s
            semantic component API and provider behavior.
          </p>
          <CodeBlock code={THEME_EXTENSION} />
        </div>
        <PreviewCard title="Noir Theme" style={NOIR_STYLES}>
          <Badge variant="ink">Custom theme</Badge>
          <Button variant="primary">Enter noir</Button>
        </PreviewCard>
      </section>

      <section className="flex flex-col gap-4">
        <SectionTitle
          icon={CodeXml}
          eyebrow="CSS variable API"
          title="Design Tokens"
        />
        <p className="pg-fg-muted max-w-3xl leading-7">
          CSS variables are inherited at runtime, which makes them suitable for
          global themes, route-level scopes, nested previews, and
          user-controlled brand settings. Override only the roles you need;
          every unspecified token continues to come from the active Comixa
          theme.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TOKEN_GROUPS.map((group) => (
            <Card key={group.title} variant="default" padding="none">
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <h3 className="pg-fg font-comic text-lg uppercase tracking-wide">
                  {group.title}
                </h3>
                <p className="pg-fg-muted text-sm leading-6">{group.body}</p>
                <code className="pg-surface-muted pg-fg mt-auto overflow-x-auto rounded-lg border border-black/15 p-2 font-mono text-xs">
                  {group.example}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </article>
  );
}

function PreviewCard({
  title,
  style,
  children,
}: {
  title: string;
  style: TokenStyles;
  children: ReactNode;
}) {
  return (
    <Card variant="default" padding="none" className="min-w-0">
      <CardHeader className="border-b-2 border-ink px-5 py-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ComixaProvider style={style}>
          <div className="flex min-h-52 flex-col items-center justify-center gap-5 bg-paper p-7">
            {children}
          </div>
        </ComixaProvider>
      </CardContent>
    </Card>
  );
}

function CustomizationBlock({
  icon: Icon,
  title,
  description,
  code,
  children,
}: {
  icon: typeof Palette;
  title: string;
  description: string;
  code: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <SectionTitle icon={Icon} eyebrow="Token override" title={title} />
      <p className="pg-fg-muted leading-7">{description}</p>
      <CodeBlock code={code} />
      {children}
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: typeof Palette;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="pg-surface-muted pg-border flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border-2">
        <Icon className="pg-fg h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <div>
        <p className="pg-fg-muted font-comic text-xs uppercase tracking-widest">
          {eyebrow}
        </p>
        <h2 className="pg-fg font-comic text-2xl uppercase tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
}
