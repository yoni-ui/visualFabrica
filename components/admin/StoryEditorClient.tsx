"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { NewsStory } from "@/lib/content/story-types";

const DEFAULT_THUMB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRbx9AR2lhr3hSjxTDmIFiMuoNG5FPo5Bm3n9GBTBdlUjhUjM33uohn23NM8CF6kZrj5188GDgjROyYEj6ewNGlO72_qJhkAJbmWDNv2l1cPUDdfU6BNGRp9HTC0Mme8k64cMr88JEJOuJs7810X9N7rlS_jR5hOSqJvhkq54TPFxYUj9HO3Re9eHbXOOmR-FVuy-LRcfflai7Jstjg76-aPjqVTWKRF11rDAvNGm-1TIrVh7jBY9ps7V2wbRd6vi2svxtqQnnw";

export function StoryEditorClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [loading, setLoading] = useState(!!id);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Editorial");
  const [category, setCategory] = useState("Economy");
  const [categoryStyle, setCategoryStyle] =
    useState<NewsStory["categoryStyle"]>("economy");
  const [thumb, setThumb] = useState(DEFAULT_THUMB);
  const [slug, setSlug] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const load = useCallback(async () => {
    if (!id) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/admin/stories/${encodeURIComponent(id)}`);
    if (!res.ok) {
      setError("Could not load this story.");
      setLoading(false);
      return;
    }
    const data = (await res.json()) as { story: NewsStory };
    const s = data.story;
    setTitle(s.title);
    setExcerpt(s.excerpt);
    setBody(s.body);
    setAuthor(s.author);
    setCategory(s.category);
    setCategoryStyle(s.categoryStyle);
    setThumb(s.thumb || DEFAULT_THUMB);
    setSlug(s.slug);
    setMetaDescription(s.metaDescription);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  const save = async (status: "draft" | "published") => {
    setSaving(true);
    setError(null);
    const payload = {
      title,
      excerpt,
      body,
      author,
      category,
      categoryStyle,
      status,
      thumb,
      metaDescription,
      slug: slug.trim() || undefined,
    };
    try {
      const res = id
        ? await fetch(`/api/admin/stories/${encodeURIComponent(id)}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/admin/stories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setError((err as { error?: string }).error || "Save failed.");
        setSaving(false);
        return;
      }
      router.push("/admin/content");
      router.refresh();
    } catch {
      setError("Network error while saving.");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="p-12 font-body text-on-surface-variant">
        Loading story…
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="mx-auto flex max-w-4xl flex-1 flex-col overflow-y-auto p-8 lg:p-12">
        {error ? (
          <p className="mb-6 rounded-lg bg-error/10 px-4 py-3 font-body text-sm text-error">
            {error}
          </p>
        ) : null}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={() => save("draft")}
            className="rounded-lg border border-outline-variant/30 px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-surface-container disabled:opacity-50"
          >
            Save draft
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => save("published")}
            className="rounded-lg bg-primary px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-on-primary shadow-md shadow-primary/15 transition-colors hover:bg-primary-container disabled:opacity-50"
          >
            {saving ? "Saving…" : "Publish"}
          </button>
          {id && slug ? (
            <a
              href={`/news/${encodeURIComponent(slug)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-outline-variant/30 px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-surface-container"
            >
              <span className="material-symbols-outlined text-base">
                open_in_new
              </span>
              Preview (if published)
            </a>
          ) : null}
        </div>

        <div className="mb-12 flex items-start gap-8">
          <div className="mt-4 h-32 w-1.5 shrink-0 rounded-full bg-primary-container" />
          <div className="flex-1">
            <label className="mb-3 block font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Lead Narrative
            </label>
            <input
              className="w-full border-none bg-transparent p-0 font-headline text-4xl font-extrabold tracking-tighter text-on-surface placeholder:text-surface-dim focus:ring-0 md:text-6xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Story title…"
            />
            <textarea
              className="mt-6 w-full resize-none border-none bg-transparent font-body text-xl italic leading-relaxed text-on-surface-variant placeholder:text-outline focus:ring-0"
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short dek / summary for cards and SEO…"
            />
          </div>
        </div>

        <div className="editorial-shadow mb-10 overflow-hidden rounded-lg bg-surface-container-lowest">
          <div className="border-b border-outline-variant/10 bg-surface-container-low px-6 py-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Body (use blank lines between paragraphs)
          </div>
          <textarea
            className="min-h-[360px] w-full resize-y border-none bg-transparent p-8 font-body text-lg leading-relaxed text-on-surface focus:ring-0 md:text-xl"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write the full story…"
          />
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-label text-[10px] font-bold uppercase text-on-surface-variant">
              Author
            </label>
            <input
              className="w-full rounded-lg border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 font-body text-sm focus:ring-1 focus:ring-primary/20"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block font-label text-[10px] font-bold uppercase text-on-surface-variant">
              Category label
            </label>
            <input
              className="w-full rounded-lg border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 font-body text-sm focus:ring-1 focus:ring-primary/20"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-2 block font-label text-[10px] font-bold uppercase text-on-surface-variant">
              Category style
            </label>
            <select
              className="w-full rounded-lg border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 font-body text-sm focus:ring-1 focus:ring-primary/20"
              value={categoryStyle}
              onChange={(e) =>
                setCategoryStyle(e.target.value as NewsStory["categoryStyle"])
              }
            >
              <option value="economy">Economy</option>
              <option value="digital">Digital</option>
              <option value="tech">Tech</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block font-label text-[10px] font-bold uppercase text-on-surface-variant">
              Hero image URL
            </label>
            <input
              className="w-full rounded-lg border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 font-body text-sm focus:ring-1 focus:ring-primary/20"
              value={thumb}
              onChange={(e) => setThumb(e.target.value)}
            />
          </div>
        </div>
        <div className="relative mb-12 aspect-video max-h-64 w-full overflow-hidden rounded-lg bg-surface-container-low">
          <Image
            src={thumb || DEFAULT_THUMB}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            unoptimized={thumb.startsWith("http")}
          />
        </div>
      </div>

      <aside className="no-scrollbar w-full shrink-0 overflow-y-auto border-t border-outline-variant/10 bg-surface-container-low p-8 font-label lg:h-[calc(100vh-8rem)] lg:w-80 lg:border-l lg:border-t-0 lg:sticky lg:top-24">
        <div className="space-y-10">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl text-primary">
                search_check
              </span>
              <h4 className="font-headline text-sm font-bold tracking-tight">
                SEO &amp; URL
              </h4>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase text-on-surface-variant">
                  Slug
                </label>
                <input
                  className="w-full rounded border-none bg-surface-container-lowest p-3 text-xs focus:ring-1 focus:ring-primary/20"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="auto from title if empty"
                />
                <p className="mt-1 text-[10px] text-on-surface-variant">
                  Public URL: /news/
                  {slug || "…"}
                </p>
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase text-on-surface-variant">
                  Meta description
                </label>
                <textarea
                  className="h-24 w-full resize-none rounded border-none bg-surface-container-lowest p-3 text-xs leading-relaxed focus:ring-1 focus:ring-primary/20"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                />
              </div>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}
