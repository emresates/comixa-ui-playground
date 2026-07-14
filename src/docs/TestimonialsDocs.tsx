import { type ReactNode } from "react";
import {
  Avatar,
  Card,
  Testimonial,
  Testimonials,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function TestimonialsDocs() {
  return (
    <DocPage
      title="Testimonials"
      description="Quote cards for social proof. Compose a grid with Testimonials and individual Testimonial items."
      importCode={`import { Testimonials, Testimonial, Avatar } from "comixa-ui";`}
      exampleCode={`<Testimonials columns={3}>\n  <Testimonial\n    quote="Best comic UI ever."\n    author="Captain Zap"\n    role="Hero Lead"\n    rating={5}\n    avatar={<Avatar name="CZ" size="sm" shape="circle" />}\n  />\n</Testimonials>`}
      props={[
        {
          name: "columns (Testimonials)",
          type: `1 | 2 | 3`,
          default: `3`,
          description: "Responsive grid columns",
        },
        {
          name: "variant (Testimonial)",
          type: `"default" | "cream" | "pop" | "speech"`,
          default: `"default"`,
          description: "Card surface style",
        },
        { name: "quote", type: "ReactNode", description: "Testimonial body" },
        { name: "author", type: "ReactNode", description: "Name line" },
        { name: "role", type: "ReactNode", description: "Subtitle / title" },
        { name: "avatar", type: "ReactNode", description: "Optional avatar slot" },
        { name: "rating", type: "number", description: "0–5 stars" },
      ]}
    >
      <Testimonials columns={2}>
        <Testimonial
          quote="Pow! Ship landed in a day."
          author="Captain Zap"
          role="Product Hero"
          rating={5}
          variant="pop"
          avatar={<Avatar name="CZ" size="sm" shape="circle" variant="yellow" />}
        />
        <Testimonial
          quote="Hard shadows. Soft hearts."
          author="Ink Mage"
          role="Design Lead"
          rating={4}
          variant="cream"
          avatar={<Avatar name="IM" size="sm" shape="circle" variant="blue" />}
        />
        <Testimonial
          quote="My users asked if we drew the UI by hand."
          author="Boom Knight"
          role="Founder"
          rating={5}
          variant="speech"
          avatar={<Avatar name="BK" size="sm" shape="circle" variant="red" />}
        />
      </Testimonials>
    </DocPage>
  );
}
