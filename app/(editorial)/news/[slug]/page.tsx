import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/news/ArticleBody";
import { getPublishedBySlug } from "@/lib/content/stories-store";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = await getPublishedBySlug(decodeURIComponent(slug));
  if (!story) return { title: "Story" };
  return {
    title: story.title,
    description: story.metaDescription || story.excerpt,
    openGraph: {
      title: story.title,
      description: story.metaDescription || story.excerpt,
      images: story.thumb ? [story.thumb] : undefined,
    },
  };
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug: raw } = await params;
  const slug = decodeURIComponent(raw);
  const story = await getPublishedBySlug(slug);
  if (!story) notFound();

  return (
    <main className="mx-auto w-full px-6 py-16 md:px-10 md:py-24">
      <Link
        href="/news"
        className="mb-10 inline-block font-label text-xs font-bold uppercase tracking-widest text-primary underline-offset-4 hover:underline"
        prefetch={false}
      >
        ← Archive
      </Link>
      <p className="mb-3 font-label text-[10px] font-bold uppercase tracking-widest text-secondary">
        {story.category}
      </p>
      <h1 className="max-w-4xl font-headline text-4xl font-extrabold tracking-tight text-on-surface md:text-6xl md:leading-[1.05]">
        {story.title}
      </h1>
      <p className="mt-6 max-w-2xl font-body text-xl italic text-on-surface-variant md:text-2xl">
        {story.excerpt}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4 font-label text-xs text-on-surface-variant">
        <span>
          By <span className="font-semibold text-on-surface">{story.author}</span>
        </span>
        <span aria-hidden>·</span>
        <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
      </div>
      <div className="relative mt-12 aspect-[21/9] max-h-[480px] w-full overflow-hidden rounded-lg bg-surface-container-low">
        <Image
          src={story.thumb}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1440px) 100vw, 1440px"
          priority
        />
      </div>
      <article className="mx-auto mt-14 max-w-3xl">
        <ArticleBody body={story.body} />
      </article>
      {story.tags?.length ? (
        <div className="mx-auto mt-16 max-w-3xl border-t border-outline-variant/20 pt-10">
          <p className="mb-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary-container px-3 py-1 font-label text-[10px] font-bold text-on-secondary-container"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </main>
  );
}
