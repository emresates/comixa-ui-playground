import { ArrowLeft, ArrowRight, Link2, Mail } from "lucide-react";
import {
  Badge,
  Button,
  ComicCursor,
  ComicPanel,
  Divider,
  SoundBadge,
  SpeechBubble,
  Sticker,
  ToastProvider,
  toast,
} from "comixa-ui";
import type { Post } from "./blogPosts";

export function PanelPressBlogArticle({
  post,
  onBack,
}: {
  post: Post;
  onBack: () => void;
}) {
  const copy = async () => {
    await navigator.clipboard?.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share this issue with your crew.",
      variant: "success",
    });
  };

  return (
    <ToastProvider position="bottom-right">
      <ComicCursor variant="ring" trailCount={3} />
      <div className="min-h-full paper-noise">
        <header className="border-b-4 border-ink bg-paper px-5 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-2 font-black uppercase"
            >
              <ArrowLeft size={18} /> All stories
            </button>
            <button
              type="button"
              onClick={onBack}
              className="font-display text-3xl"
            >
              PANEL PRESS!
            </button>
            <Button
              icon
              size="sm"
              variant="outline"
              onClick={copy}
              aria-label="Copy article link"
            >
              <Link2 size={17} />
            </Button>
          </div>
        </header>
        <main>
          <section className="comic-grid border-b-4 border-ink px-5 py-16">
            <div className="mx-auto max-w-5xl text-center">
              <div className="flex justify-center gap-2">
                <Badge variant="pink">{post.category}</Badge>
                <Badge variant="ink">{post.issue}</Badge>
              </div>
              <h1 className="mx-auto mt-6 max-w-4xl font-display text-6xl leading-[.9] sm:text-8xl">
                {post.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-xl font-bold leading-relaxed">
                {post.excerpt}
              </p>
              <p className="mt-5 font-black">
                {post.date} · {post.readTime}
              </p>
              <div className="mt-10 flex justify-center">
                <SoundBadge variant="pow" size="lg" />
              </div>
            </div>
          </section>
          <section className="px-5 py-16">
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_250px]">
              <article className="article-copy">
                <SpeechBubble tone="cream" tail="bottomLeft" className="mb-8">
                  <strong>Quick note:</strong> Replace this demo content with
                  your own MDX or CMS-powered articles.
                </SpeechBubble>
                {post.content.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </article>
              <aside>
                <div className="sticky top-6 space-y-5">
                  <ComicPanel variant="cream" shadow="md" className="p-5">
                    <Sticker variant="yellow" tilt="right">
                      AUTHOR
                    </Sticker>
                    <h3 className="mt-4 font-display text-3xl">[YOUR NAME]</h3>
                    <p className="mt-2 font-bold leading-relaxed">
                      Frontend developer writing about interfaces, systems, and
                      creative engineering.
                    </p>
                  </ComicPanel>
                  <ComicPanel variant="sky" shadow="md" className="p-5">
                    <Mail size={24} />
                    <h3 className="mt-3 font-display text-3xl">NEXT ISSUE?</h3>
                    <p className="mt-2 font-bold">
                      Join the weekly newsletter from the homepage.
                    </p>
                    <Button className="mt-4 w-full" onClick={onBack}>
                      Subscribe
                    </Button>
                  </ComicPanel>
                </div>
              </aside>
            </div>
          </section>
          <Divider variant="zigzag" tone="blue" />
          <section className="px-5 py-16">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-display text-5xl">KEEP EXPLORING</h2>
              <Button size="lg" className="mt-7" onClick={onBack}>
                Browse every issue <ArrowRight size={18} />
              </Button>
            </div>
          </section>
        </main>
      </div>
    </ToastProvider>
  );
}
