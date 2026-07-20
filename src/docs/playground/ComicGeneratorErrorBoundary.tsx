import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "comixa-ui";

type Props = { children: ReactNode };
type State = { failed: boolean };

export class ComicGeneratorErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Comic Generator failed to render", error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="cg-error-state" role="alert">
          <span><AlertTriangle aria-hidden="true" /></span>
          <div>
            <small>Panel interrupted</small>
            <h1>Comic Generator couldn’t load.</h1>
            <p>Your URL still contains the complete composition. Reload to restore it without losing work.</p>
          </div>
          <Button variant="primary" onClick={() => window.location.reload()}>
            <RotateCcw aria-hidden="true" /> Reload generator
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

