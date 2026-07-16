import { useState } from "react";
import {
  Button,
  Switch,
  toast,
} from "comixa-ui";
import { DocPage } from "./DocPage";
import { DemoLabel } from "./shared";

const TOAST_POSITIONS = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
] as const;

const TOAST_DURATIONS = [
  { label: "1.5s", value: 1500 },
  { label: "3.5s", value: 3500 },
  { label: "5s", value: 5000 },
  { label: "Sticky", value: 0 },
] as const;

const TOAST_VARIANTS = [
  { id: "default", label: "Default", button: "outline" as const },
  { id: "pop", label: "Pop", button: "default" as const },
  { id: "success", label: "Success", button: "success" as const },
  { id: "danger", label: "Danger", button: "danger" as const },
  { id: "info", label: "Info", button: "primary" as const },
] as const;

export function ToastDocs() {
  const [closable, setClosable] = useState(true);
  const [duration, setDuration] = useState(3500);
  const [position, setPosition] =
    useState<(typeof TOAST_POSITIONS)[number]>("bottom-right");

  const fire = (variant: (typeof TOAST_VARIANTS)[number]["id"]) => {
    toast({
      title:
        variant === "success"
          ? "Saved!"
          : variant === "danger"
            ? "Something went wrong"
            : variant === "info"
              ? "Heads up"
              : "Pow!",
      description: `${position} · ${duration === 0 ? "sticky" : `${duration}ms`} · ${closable ? "closable" : "no ×"}`,
      variant,
      position,
      duration,
      closable,
    });
  };

  return (
    <DocPage
      title="Toast"
      description="Short notifications. Wrap the app in ToastProvider, then call toast() with title, variant, position, duration, and closable."
      importCode={`import { ToastProvider, toast } from "comixa-ui";`}
      exampleCode={`toast({\n  title: "Pow!",\n  variant: "pop",\n  position: "top-center",\n  duration: 3500,\n  closable: true,\n});`}
      props={[
        {
          name: "position",
          type: `"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"`,
          default: `"bottom-right"`,
          description: "Corner / edge on screen",
        },
        {
          name: "duration",
          type: "number",
          default: "3500",
          description: "Auto-dismiss ms; 0 or Infinity stays open",
        },
        {
          name: "closable",
          type: "boolean",
          default: "true",
          description: "Show the × close button",
        },
        {
          name: "variant",
          type: `"default" | "pop" | "success" | "danger" | "info"`,
          default: `"pop"`,
          description: "Toast color / intent",
        },
        {
          name: "classNames",
          type: "{ root, title, description, close }",
          description: "Slot classes for custom styling",
        },
      ]}
    >
      <div className="flex flex-col gap-5">
        <div>
          <DemoLabel>Closable (X)</DemoLabel>
          <Switch
            label={closable ? "Show close button" : "Hide close button"}
            checked={closable}
            onCheckedChange={setClosable}
          />
        </div>

        <div>
          <DemoLabel>Duration</DemoLabel>
          <div className="flex flex-wrap gap-2">
            {TOAST_DURATIONS.map((item) => (
              <Button
                key={item.label}
                size="sm"
                variant={duration === item.value ? "default" : "outline"}
                onClick={() => setDuration(item.value)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <DemoLabel>Position</DemoLabel>
          <div className="flex flex-wrap gap-2">
            {TOAST_POSITIONS.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={position === item ? "primary" : "outline"}
                onClick={() => setPosition(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <DemoLabel>Variants — click to show toast</DemoLabel>
          <div className="flex flex-wrap gap-3">
            {TOAST_VARIANTS.map((item) => (
              <Button
                key={item.id}
                variant={item.button}
                onClick={() => fire(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </DocPage>
  );
}
