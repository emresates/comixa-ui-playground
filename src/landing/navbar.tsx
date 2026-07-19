import { Button } from "comixa-ui";
export function Navbar() {
  return (
    <nav className="topbar shell-pad">
      <a
        className="brand"
        href="#top"
        data-cursor="HOME"
        data-cursor-shape="burst"
        aria-label="Comixa UI home"
      >
        <img
          className="brand-logo"
          src="/logo.png"
          alt=""
          width="200"
          height="200"
        />
      </a>
      <div className="nav-links">
        <a href="/components" data-cursor="COMP." data-cursor-shape="burst">
          Components
        </a>
        <a href="#themes" data-cursor="THEMES" data-cursor-shape="diamond">
          Themes
        </a>
        <a href="#examples" data-cursor="EXAMP." data-cursor-shape="square">
          Examples
        </a>
        <a href="/docs" data-cursor="DOCS" data-cursor-shape="burst">
          Docs
        </a>
        <a href="#blog" data-cursor="BLOG" data-cursor-shape="diamond">
          Blog
        </a>
        <a href="/examples" data-cursor="PLAY" data-cursor-shape="square">
          Playground
        </a>
      </div>
      <Button
        size="sm"
        variant="primary"
        onClick={() =>
          window.open(
            "https://github.com/emresates/comixa-ui",
            "_blank",
            "noopener,noreferrer",
          )
        }
        data-cursor="STAR"
        data-cursor-shape="burst"
      >
        GitHub ↗
      </Button>
    </nav>
  );
}
