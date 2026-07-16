import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Radio,
  RadioGroup,
} from "comixa-ui";
import { DocPage } from "./DocPage";
import { DemoLabel } from "./shared";

const exampleCode = `import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Radio, RadioGroup } from "comixa-ui";

export function RadioExample() {
  const [plan, setPlan] = useState("starter");
  const [format, setFormat] = useState("print");

  return (
    <div className="grid gap-4">
      <RadioGroup orientation="horizontal">
        {["starter", "pro", "studio"].map((value) => (
          <Card key={value} padding="sm" className="min-w-40">
            <label className="flex cursor-pointer items-start gap-3">
              <Radio
                name="plan"
                value={value}
                checked={plan === value}
                onChange={() => setPlan(value)}
              />
              <span>
                <strong>{value}</strong>
                <span className="block text-sm opacity-70">Comic-ready option</span>
              </span>
            </label>
          </Card>
        ))}
      </RadioGroup>

      <Card variant="outline">
        <CardHeader>
          <CardTitle>Delivery</CardTitle>
          <CardDescription>Disabled and invalid states.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Radio
            name="format"
            value="print"
            label="Print edition"
            checked={format === "print"}
            onChange={() => setFormat("print")}
          />
          <Radio name="format" value="deluxe" label="Deluxe edition" disabled />
          <Radio name="format" value="digital" label="Digital edition required" invalid />
        </CardContent>
      </Card>
    </div>
  );
}`;

export function RadioDocs() {
  const [plan, setPlan] = useState("starter");
  const [format, setFormat] = useState("print");

  const plans = [
    {
      value: "starter",
      title: "Starter",
      description: "One-shot launch kit",
    },
    {
      value: "pro",
      title: "Pro",
      description: "More panels and polish",
    },
    {
      value: "studio",
      title: "Studio",
      description: "Full production pack",
    },
  ];

  return (
    <DocPage
      title="Radio"
      description="Single-choice control with theme-aware styling. Use it alone or compose it inside Card layouts."
      importCode={`import { Radio, RadioGroup } from "comixa-ui";`}
      exampleCode={exampleCode}
      props={[
        {
          name: "radioSize",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Circle and dot size",
        },
        {
          name: "label",
          type: "ReactNode",
          description: "Text shown next to the radio",
        },
        {
          name: "invalid",
          type: "boolean",
          default: "false",
          description: "Marks the radio as invalid and applies danger styling",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Native disabled state",
        },
        {
          name: "orientation (RadioGroup)",
          type: `"horizontal" | "vertical"`,
          default: `"vertical"`,
          description: "How children are stacked",
        },
      ]}
    >
      <div className="flex flex-col gap-6">
        <div>
          <DemoLabel>Card options</DemoLabel>
          <RadioGroup
            orientation="horizontal"
            className="grid gap-3 sm:grid-cols-3"
          >
            {plans.map((item) => {
              const active = plan === item.value;
              return (
                <Card
                  key={item.value}
                  padding="sm"
                  className={
                    active
                      ? "border-comic-blue shadow-[4px_4px_0_0_#4D9FFF]"
                      : ""
                  }
                >
                  <label className="flex h-full cursor-pointer items-start gap-3">
                    <Radio
                      name="plan"
                      value={item.value}
                      checked={active}
                      onChange={() => setPlan(item.value)}
                    />
                    <span>
                      <span className="block font-comic text-xl uppercase leading-none">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">
                        {item.description}
                      </span>
                    </span>
                  </label>
                </Card>
              );
            })}
          </RadioGroup>
        </div>

        <div>
          <DemoLabel>Disabled and invalid</DemoLabel>
          <Card variant="outline" padding="md">
            <CardHeader>
              <CardTitle>Delivery format</CardTitle>
              <CardDescription>
                Disabled options fade out. Invalid options use the danger theme.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup className="gap-3">
                <Radio
                  name="format"
                  value="print"
                  label="Print edition"
                  checked={format === "print"}
                  onChange={() => setFormat("print")}
                />
                <Radio
                  name="format"
                  value="deluxe"
                  label="Deluxe edition"
                  disabled
                />
                <Radio
                  name="format"
                  value="digital"
                  label="Digital edition required"
                  invalid
                  checked={format === "digital"}
                  onChange={() => setFormat("digital")}
                />
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </div>
    </DocPage>
  );
}
