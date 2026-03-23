"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { NewsStory } from "@/lib/content/story-types";
import { slugify } from "@/lib/content/slug";

const DEFAULT_THUMB =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRbx9AR2lhr3hSjxTDmIFiMuoNG5FPo5Bm3n9GBTBdlUjhUjM33uohn23NM8CF6kZrj5188GDgjROyYEj6ewNGlO72_qJhkAJbmWDNv2l1cPUDdfU6BNGRp9HTC0Mme8k64cMr88JEJOuJs7810X9N7rlS_jR5hOSqJvhkq54TPFxYUj9HO3Re9eHbXOOmR-FVuy-LRcfflai7Jstjg76-aPjqVTWKRF11rDAvNGm-1TIrVh7jBY9ps7V2wbRd6vi2svxtqQnnw";

const LS_PREFIX = "vf-editor-draft:v1:";
const META_TARGET = 160;

type FormSnapshot = {
  title: string;
  excerpt: string;
  body: string;
  author: string;
  category: string;
  categoryStyle: NewsStory["categoryStyle"];
  thumb: string;
  slug: string;
  metaDescription: string;
};

function serialize(f: FormSnapshot): string {
  return JSON.stringify(f);
}

function emptyForm(): FormSnapshot {
  return {
    title: "",
    excerpt: "",
    body: "",
    author: "Editorial",
    category: "Economy",
    categoryStyle: "economy",
    thumb: DEFAULT_THUMB,
    slug: "",
    metaDescription: "",
  };
}

function storyToSnapshot(s: NewsStory): FormSnapshot {
  return {
    title: s.title,
    excerpt: s.excerpt,
    body: s.body,
    author: s.author,
    category: s.category,
    categoryStyle: s.categoryStyle,
    thumb: s.thumb || DEFAULT_THUMB,
    slug: s.slug,
    metaDescription: s.metaDescription,
  };
}

function applySnapshot(
  f: FormSnapshot,
  setters: {
    setTitle: (v: string) => void;
    setExcerpt: (v: string) => void;
    setBody: (v: string) => void;
    setAuthor: (v: string) => void;
    setCategory: (v: string) => void;
    setCategoryStyle: (v: NewsStory["categoryStyle"]) => void;
    setThumb: (v: string) => void;
    setSlug: (v: string) => void;
    setMetaDescription: (v: string) => void;
  },
) {
  setters.setTitle(f.title);
  setters.setExcerpt(f.excerpt);
  setters.setBody(f.body);
  setters.setAuthor(f.author);
  setters.setCategory(f.category);
  setters.setCategoryStyle(f.categoryStyle);
  setters.setThumb(f.thumb);
  setters.setSlug(f.slug);
  setters.setMetaDescription(f.metaDescription);
}

function looksLikeHttpUrl(s: string): boolean {
  const t = s.trim();
  if (!t) return false;
  try {
    const u = new URL(t);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function StoryEditorClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [loading, setLoading] = useState(!!id);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [thumbBroken, setThumbBroken] = useState(false);

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

  const [savedSnapshot, setSavedSnapshot] = useState<string | null>(null);
  /** Status last persisted (used for Save & exit without changing publish state). */
  const [lastSavedStatus, setLastSavedStatus] = useState<
    "draft" | "published"
  >("draft");

  const abortRef = useRef<AbortController | null>(null);
  const skipNextLoadRef = useRef(false);

  const snapshot: FormSnapshot = useMemo(
    () => ({
      title,
      excerpt,
      body,
      author,
      category,
      categoryStyle,
      thumb,
      slug,
      metaDescription,
    }),
    [
      title,
      excerpt,
      body,
      author,
      category,
      categoryStyle,
      thumb,
      slug,
      metaDescription,
    ],
  );

  const dirty =
    savedSnapshot !== null && serialize(snapshot) !== savedSnapshot;

  const suggestedSlug = useMemo(() => slugify(title), [title]);
  const wordCount = useMemo(() => {
    const t = body.trim();
    if (!t) return 0;
    return t.split(/\s+/).filter(Boolean).length;
  }, [body]);
  const readMinutes = Math.max(1, Math.round(wordCount / 200) || 1);

  const lsKey = `${LS_PREFIX}${id || "new"}`;

  const setters = useMemo(
    () => ({
      setTitle,
      setExcerpt,
      setBody,
      setAuthor,
      setCategory,
      setCategoryStyle,
      setThumb,
      setSlug,
      setMetaDescription,
    }),
    [],
  );

  const load = useCallback(async () => {
    if (!id) {
      setLoading(false);
      setLoadError(null);
      const raw = localStorage.getItem(lsKey);
      if (raw) {
        try {
          const draft = JSON.parse(raw) as Partial<FormSnapshot>;
          if (draft && typeof draft === "object") {
            const merged = { ...emptyForm(), ...draft };
            applySnapshot(merged, setters);
            setSavedSnapshot(serialize(merged));
          } else {
            setSavedSnapshot(serialize(emptyForm()));
          }
        } catch {
          setSavedSnapshot(serialize(emptyForm()));
        }
      } else {
        setSavedSnapshot(serialize(emptyForm()));
      }
      setLastSavedStatus("draft");
      return;
    }

    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    setLoading(true);
    setLoadError(null);
    setError(null);

    try {
      const res = await fetch(`/api/admin/stories/${encodeURIComponent(id)}`, {
        signal: ac.signal,
      });
      if (res.status === 401) {
        window.location.assign(
          `/admin/login?from=${encodeURIComponent(`/admin/editor?id=${id}`)}`,
        );
        return;
      }
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setLoadError(data.error || `Could not load story (${res.status}).`);
        setLoading(false);
        return;
      }
      const data = (await res.json()) as { story: NewsStory };
      if (ac.signal.aborted) return;
      const snap = storyToSnapshot(data.story);
      applySnapshot(snap, setters);
      setSavedSnapshot(serialize(snap));
      setLastSavedStatus(data.story.status);
      setThumbBroken(false);
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
      setLoadError("Network error while loading the story.");
    } finally {
      if (!ac.signal.aborted) setLoading(false);
    }
  }, [id, lsKey, setters]);

  useEffect(() => {
    if (skipNextLoadRef.current) {
      skipNextLoadRef.current = false;
      return;
    }
    void load();
    return () => abortRef.current?.abort();
  }, [load]);

  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!dirty) return;
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty]);

  useEffect(() => {
    if (!dirty || saving) return;
    const t = window.setTimeout(() => {
      try {
        localStorage.setItem(lsKey, JSON.stringify(snapshot));
      } catch {
        /* quota */
      }
    }, 1200);
    return () => window.clearTimeout(t);
  }, [dirty, saving, lsKey, snapshot]);

  useEffect(() => {
    setThumbBroken(false);
  }, [thumb]);

  useEffect(() => {
    if (!successMsg) return;
    const t = window.setTimeout(() => setSuccessMsg(null), 5000);
    return () => window.clearTimeout(t);
  }, [successMsg]);

  const validateTitle = (): boolean => {
    const t = title.trim();
    if (!t) {
      setTitleError("Add a title before saving.");
      return false;
    }
    if (t.length > 300) {
      setTitleError("Title is too long (max 300 characters).");
      return false;
    }
    setTitleError(null);
    return true;
  };

  const save = async (
    status: "draft" | "published",
    options: { stayOnPage: boolean },
  ) => {
    if (!validateTitle()) return;

    if (slug.trim() && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(slug.trim())) {
      setError(
        "Slug may only contain letters, numbers, and hyphens (no spaces). Leave blank to auto-generate.",
      );
      return;
    }

    if (thumb.trim() && !looksLikeHttpUrl(thumb)) {
      setError("Hero image must be a valid http(s) URL, or leave the default.");
      return;
    }

    setSaving(true);
    setError(null);
    setSuccessMsg(null);

    const payload = {
      title: title.trim(),
      excerpt: excerpt.trim(),
      body,
      author: author.trim(),
      category: category.trim(),
      categoryStyle,
      status,
      thumb: thumb.trim() || DEFAULT_THUMB,
      metaDescription: metaDescription.trim(),
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

      if (res.status === 401) {
        window.location.assign(
          `/admin/login?from=${encodeURIComponent(
            `/admin/editor${id ? `?id=${id}` : ""}`,
          )}`,
        );
        return;
      }

      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { error?: string };
        setError(err.error || `Save failed (${res.status}).`);
        return;
      }

      const data = (await res.json()) as { story: NewsStory };
      const snap = storyToSnapshot(data.story);
      applySnapshot(snap, setters);
      setSavedSnapshot(serialize(snap));
      setThumbBroken(false);

      try {
        localStorage.removeItem(lsKey);
        if (!id && data.story.id) {
          localStorage.removeItem(`${LS_PREFIX}new`);
        }
      } catch {
        /* ignore */
      }

      if (!id && data.story.id) {
        skipNextLoadRef.current = true;
        router.replace(`/admin/editor?id=${encodeURIComponent(data.story.id)}`, {
          scroll: false,
        });
      }

      setLastSavedStatus(data.story.status);
      setSuccessMsg(
        status === "published"
          ? "Published and saved."
          : "Draft saved.",
      );

      if (!options.stayOnPage) {
        router.push("/admin/content");
        router.refresh();
      } else {
        router.refresh();
      }
    } catch {
      setError("Network error while saving. Check your connection and retry.");
    } finally {
      setSaving(false);
    }
  };

  if (loading && id) {
    return (
      <div className="flex flex-col items-start gap-4 p-12 font-body text-on-surface-variant">
        <p>Loading story…</p>
      </div>
    );
  }

  if (loadError && id) {
    return (
      <div className="p-12">
        <p className="mb-4 rounded-lg bg-error/10 px-4 py-3 font-body text-sm text-error">
          {loadError}
        </p>
        <button
          type="button"
          onClick={() => void load()}
          className="rounded-lg bg-primary px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-on-primary"
        >
          Retry
        </button>
        <Link
          href="/admin/content"
          className="ml-4 font-label text-xs font-bold uppercase tracking-wider text-primary underline-offset-4 hover:underline"
        >
          Back to content
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="mx-auto flex max-w-4xl flex-1 flex-col overflow-y-auto p-8 lg:p-12">
        <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-outline-variant/15 pb-6">
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-1 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Content
          </Link>
          {dirty ? (
            <span className="rounded-full bg-amber-500/15 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-wider text-amber-800">
              Unsaved changes
            </span>
          ) : savedSnapshot ? (
            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant/80">
              All changes saved
            </span>
          ) : null}
        </div>

        {successMsg ? (
          <p className="mb-4 rounded-lg bg-primary/10 px-4 py-3 font-body text-sm text-primary">
            {successMsg}
          </p>
        ) : null}
        {error ? (
          <p className="mb-4 rounded-lg bg-error/10 px-4 py-3 font-body text-sm text-error">
            {error}
          </p>
        ) : null}

        <div className="mb-8 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={() => save("draft", { stayOnPage: true })}
            className="rounded-lg border border-outline-variant/30 px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-surface-container disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save draft"}
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => save("published", { stayOnPage: true })}
            className="rounded-lg bg-primary px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-on-primary shadow-md shadow-primary/15 transition-colors hover:bg-primary-container disabled:opacity-50"
          >
            {saving ? "Saving…" : "Publish"}
          </button>
          <button
            type="button"
            disabled={saving || !dirty}
            onClick={() => save(lastSavedStatus, { stayOnPage: false })}
            className="rounded-lg border border-outline-variant/20 px-5 py-2.5 font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant transition-colors hover:bg-surface-container disabled:opacity-40"
            title="Save changes, keep current publish state, and return to the content list"
          >
            Save &amp; exit
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
              View live
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
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError(null);
              }}
              placeholder="Story title…"
              maxLength={320}
              aria-invalid={!!titleError}
              aria-describedby={titleError ? "title-error" : undefined}
            />
            {titleError ? (
              <p id="title-error" className="mt-2 font-label text-sm text-error">
                {titleError}
              </p>
            ) : null}
            <textarea
              className="mt-6 w-full resize-none border-none bg-transparent font-body text-xl italic leading-relaxed text-on-surface-variant placeholder:text-outline focus:ring-0"
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short dek / summary for cards and SEO…"
              maxLength={500}
            />
            <p className="mt-1 font-label text-[10px] text-on-surface-variant">
              {excerpt.length}/500
            </p>
          </div>
        </div>

        <div className="editorial-shadow mb-10 overflow-hidden rounded-lg bg-surface-container-lowest">
          <div className="border-b border-outline-variant/10 bg-surface-container-low px-6 py-3 font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Body (blank lines between paragraphs)
          </div>
          <textarea
            className="min-h-[360px] w-full resize-y border-none bg-transparent p-8 font-body text-lg leading-relaxed text-on-surface focus:ring-0 md:text-xl"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write the full story…"
            spellCheck
          />
          <div className="border-t border-outline-variant/10 bg-surface-container-low/50 px-6 py-2 font-label text-[10px] text-on-surface-variant">
            {wordCount} words · ~{readMinutes} min read
          </div>
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
              maxLength={120}
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
              maxLength={80}
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
              placeholder="https://…"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="relative mb-12 aspect-video max-h-64 w-full overflow-hidden rounded-lg bg-surface-container-low">
          {thumbBroken ? (
            <div className="flex h-full min-h-[200px] items-center justify-center bg-surface-container-low p-6 text-center font-body text-sm text-on-surface-variant">
              Image failed to load. Check the URL or use the default.
            </div>
          ) : (
            <Image
              src={thumb || DEFAULT_THUMB}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              unoptimized={thumb.startsWith("http")}
              onError={() => setThumbBroken(true)}
            />
          )}
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
                  autoComplete="off"
                />
                <p className="mt-1 text-[10px] text-on-surface-variant">
                  From title:{" "}
                  <button
                    type="button"
                    className="font-mono text-primary underline-offset-2 hover:underline"
                    onClick={() => setSlug(suggestedSlug)}
                  >
                    {suggestedSlug || "…"}
                  </button>
                </p>
                <p className="mt-1 break-all font-mono text-[10px] text-on-surface-variant">
                  /news/{slug || suggestedSlug || "…"}
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
                  maxLength={320}
                />
                <p
                  className={
                    metaDescription.length > META_TARGET
                      ? "mt-1 text-[10px] text-amber-700"
                      : "mt-1 text-[10px] text-on-surface-variant"
                  }
                >
                  {metaDescription.length}/{META_TARGET}–320 (aim ~{META_TARGET}{" "}
                  for snippets)
                </p>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}
