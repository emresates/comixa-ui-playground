import { Badge, Button, Ribbon, Switch, Tooltip } from "comixa-ui";
const features = [
  [
    "01",
    "Theme inheritance",
    "One provider. Every component instantly speaks the same visual language.",
  ],
  [
    "02",
    "Motion with character",
    "Reveals, page transitions and feedback that never feel generic.",
  ],
  [
    "03",
    "Semantic variants",
    "Success, danger and warning keep their meaning across every theme.",
  ],
  [
    "04",
    "Composable pieces",
    "Build playful interfaces without giving up production-grade APIs.",
  ],
] as const;
export function ComponentLab() {
  return (
    <section id="components" className="section shell-pad component-lab">
      <div className="section-heading">
        <div>
          <span className="eyebrow">COMPONENT LAB / 01</span>
          <h2>
            Not just styled.
            <br />
            Art-directed.
          </h2>
        </div>
        <p>
          Every primitive is built to carry a visual idea, not merely occupy
          space.
        </p>
      </div>
      <div className="lab-grid">
        <div className="lab-main" data-cursor="PLAY" data-cursor-shape="burst">
          <div className="lab-label">LIVE COMPONENT MIX</div>
          <div className="component-stack">
            <Ribbon>Fresh release</Ribbon>
            <h3>A UI kit that can shout, whisper and wink.</h3>
            <p>
              Switch the theme and watch the same semantic components transform
              without changing your markup.
            </p>
            <div className="button-row">
              <Button variant="primary">Primary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div className="micro-row">
              <Tooltip content="Tiny detail, big personality">
                <Button variant="outline" size="sm">
                  Hover me
                </Button>
              </Tooltip>
              <Switch defaultChecked aria-label="Demo switch" />
              <Badge variant="pink">NEW</Badge>
            </div>
          </div>
        </div>
        <div className="feature-grid">
          {features.map(([id, title, copy]) => (
            <article
              key={id}
              className="feature-card"
              data-cursor="FLIP"
              data-cursor-shape="square"
            >
              <span>{id}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <i>↗</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
