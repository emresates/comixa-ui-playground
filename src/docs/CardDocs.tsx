import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function CardDocs() {
  return (
    <DocPage
      title="Card"
      description="Content panel with ink border and hard shadow. Compose with Header, Title, Content, and Footer."
      importCode={`import { Card, CardHeader, CardTitle, CardContent } from "comixa-ui";`}
      exampleCode={`<Card variant="pop">\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n  </CardHeader>\n  <CardContent>Body</CardContent>\n</Card>`}
      props={[
        {
          name: "variant",
          type: `"default" | "cream" | "pop" | "panel" | "danger" | "speech" | "outline"`,
          default: `"default"`,
          description: "Surface color / mood",
        },
        {
          name: "padding",
          type: `"none" | "sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Inner spacing",
        },
        {
          name: "effect",
          type: `"none" | "pop" | "wiggle"`,
          default: `"none"`,
          description: "Optional motion accent",
        },
      ]}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Default</CardTitle>
            <CardDescription>Classic panel.</CardDescription>
          </CardHeader>
          <CardContent>Hard shadow + ink border.</CardContent>
        </Card>
        <Card variant="pop">
          <CardHeader>
            <CardTitle>Pop</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button size="sm">Open</Button>
          </CardFooter>
        </Card>
      </div>
    </DocPage>
  );
}
