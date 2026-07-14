import { type ReactNode } from "react";
import {
  Button,
  Highlight,
  Pricing,
  PricingTier,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function PricingDocs() {
  return (
    <DocPage
      title="Pricing"
      description="Tier cards with featured plans, feature lists, and CTA slots."
      importCode={`import { Pricing, PricingTier, Button } from "comixa-ui";`}
      exampleCode={`<Pricing>\n  <PricingTier\n    name="Hero"\n    price="$19"\n    period="mo"\n    featured\n    badge="Popular"\n    features={["Unlimited panels", "Sound badges"]}\n    cta={<Button className="w-full">Start</Button>}\n  />\n</Pricing>`}
      props={[
        {
          name: "columns (Pricing)",
          type: `1 | 2 | 3`,
          default: `3`,
          description: "Tier grid columns",
        },
        {
          name: "featured (Tier)",
          type: "boolean",
          default: "false",
          description: "Highlight plan with pop yellow",
        },
        { name: "name", type: "ReactNode", description: "Plan name" },
        { name: "price", type: "ReactNode", description: "Price display" },
        { name: "period", type: "ReactNode", description: "Billing period" },
        { name: "features", type: "ReactNode[]", description: "Checklist items" },
        { name: "badge", type: "ReactNode", description: "Corner badge" },
        { name: "cta", type: "ReactNode", description: "Action slot" },
      ]}
    >
      <Pricing columns={3}>
        <PricingTier
          name="Sidekick"
          price="$0"
          period="mo"
          description="For weekend heroes."
          features={["3 components", "Community support"]}
          cta={
            <Button variant="outline" className="w-full">
              Try free
            </Button>
          }
        />
        <PricingTier
          name="Hero"
          price="$19"
          period="mo"
          description="Ship louder pages."
          featured
          badge="Popular"
          features={["All components", "Animated text", "Priority ink"]}
          cta={
            <Button variant="pop" className="w-full">
              Go hero
            </Button>
          }
        />
        <PricingTier
          name="League"
          price="$49"
          period="mo"
          description="For larger crews."
          features={["Everything in Hero", "Custom panels", "Slack strip"]}
          cta={
            <Button variant="primary" className="w-full">
              Contact
            </Button>
          }
        />
      </Pricing>
    </DocPage>
  );
}
