export function ComicGeneratorSkeleton() {
  return (
    <div className="cg-skeleton" role="status" aria-label="Loading Comic Generator">
      <div className="cg-skeleton-header"><i /><span /><span /><b /></div>
      <div className="cg-skeleton-workspace">
        <aside>{[1, 2, 3, 4, 5].map((item) => <div key={item}><i /><span /></div>)}</aside>
        <main><div className="cg-skeleton-toolbar" /><div className="cg-skeleton-page"><i /><span /><span /><div /></div></main>
        <aside>{[1, 2, 3, 4, 5, 6].map((item) => <span key={item} />)}</aside>
      </div>
      <span className="sr-only">Loading the visual page builder…</span>
    </div>
  );
}

