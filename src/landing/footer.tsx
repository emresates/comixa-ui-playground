export function Footer() {
  return (
    <footer className="footer shell-pad">
      <div className="footer-burst">
        MAKE
        <br />
        IT
        <br />
        MEMORABLE.
      </div>
      <div className="footer-main">
        <div>
          <img src="/logo.png" alt="Comixa UI" width={200} height={200} />
          <p>Character-first components for React.</p>
        </div>
        <div className="footer-links">
          <a href="/components">Components</a>
          <a href="/docs/theming">Themes</a>
          <a href="/examples">Examples</a>
          <a href="/docs/getting-started">Documentation</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 COMIXA UI</span>
        <span>BUILT WITH INK, CSS & QUESTIONABLE AMOUNTS OF COFFEE.</span>
      </div>
    </footer>
  );
}
