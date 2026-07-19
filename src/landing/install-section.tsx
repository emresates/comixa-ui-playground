"use client";
import { Badge } from "comixa-ui";
import { useCopyInstall } from "./use-copy-install";
export function InstallSection() {
  const { copied, copyInstall } = useCopyInstall();
  return (
    <section id="install" className="section install-section shell-pad">
      <div className="install-panel">
        <div className="install-copy">
          <Badge variant="green">READY IN MINUTES</Badge>
          <h2>Install the attitude.</h2>
          <p>
            Drop Comixa into your React project, wrap your app with a provider
            and start composing.
          </p>
          <div className="install-steps">
            <span>01 Install</span>
            <span>02 Wrap</span>
            <span>03 Build loud</span>
          </div>
        </div>
        <div
          className="code-window"
          role="button"
          tabIndex={0}
          data-cursor="COPY"
          data-cursor-shape="square"
          onClick={copyInstall}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              void copyInstall();
            }
          }}
        >
          <div className="window-bar">
            <span />
            <span />
            <span />
            <b>terminal</b>
          </div>
          <pre>
            <code>
              <em>$</em> npm i comixa-ui{"\n\n"}
              <span>import</span> {"{ ComixaProvider, Button }"}{" "}
              <span>from</span> <q>&quot;comixa-ui&quot;</q>
              {"\n\n"}&lt;ComixaProvider theme=<q>&quot;pop-art&quot;</q>&gt;
              {"\n  "}&lt;Button&gt;Make noise&lt;/Button&gt;{"\n"}
              &lt;/ComixaProvider&gt;
            </code>
          </pre>
          <span className="copy-action">
            {copied ? "COPIED TO CLIPBOARD" : "CLICK TO COPY INSTALL"}
          </span>
        </div>
      </div>
    </section>
  );
}
