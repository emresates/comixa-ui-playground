import { useState } from "react";
import { getPost } from "./blogPosts";
import { PanelPressBlogArticle } from "./PanelPressBlogArticle";
import { PanelPressBlogHome } from "./PanelPressBlogHome";

export function PanelPressBlog() {
  const [slug, setSlug] = useState<string | null>(null);
  const post = slug ? getPost(slug) : undefined;

  if (post) {
    return <PanelPressBlogArticle post={post} onBack={() => setSlug(null)} />;
  }

  return <PanelPressBlogHome onSelectPost={setSlug} />;
}
