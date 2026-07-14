import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "comixa-ui";
import { DocPage } from "./DocPage";

export function DialogDocs() {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<"boom" | "alert" | "default">("boom");
  return (
    <DocPage
      title="Dialog"
      description="Animated comic modal for confirmations and alerts. Controlled with open and onOpenChange."
      importCode={`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "comixa-ui";`}
      exampleCode={`const [open, setOpen] = useState(false);\n\n<Dialog open={open} onOpenChange={setOpen}>\n  <DialogContent variant="boom">\n    <DialogHeader>\n      <DialogTitle>Boom!</DialogTitle>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>`}
      props={[
        {
          name: "open",
          type: "boolean",
          description: "Whether the dialog is visible",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Called when open state should change",
        },
        {
          name: "variant (Content)",
          type: `"default" | "cream" | "boom" | "alert" | "success" | "panel"`,
          default: `"default"`,
          description: "Panel color / mood",
        },
        {
          name: "size (Content)",
          type: `"sm" | "md" | "lg"`,
          default: `"md"`,
          description: "Max width of the panel",
        },
        {
          name: "effect (Content)",
          type: `"none" | "pop" | "shake"`,
          default: `"pop"`,
          description: "Enter / presence animation",
        },
      ]}
    >
      <div className="flex flex-wrap gap-3">
        <Button
          variant="pop"
          onClick={() => {
            setVariant("boom");
            setOpen(true);
          }}
        >
          Open boom
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            setVariant("alert");
            setOpen(true);
          }}
        >
          Open alert
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent variant={variant}>
          <DialogHeader>
            <DialogTitle>
              {variant === "boom" ? "Boom!" : "Watch out!"}
            </DialogTitle>
            <DialogDescription>Comic modal preview.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="pop" onClick={() => setOpen(false)}>
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DocPage>
  );
}
