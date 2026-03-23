import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { NewsStory, StoryStatus } from "./story-types";
import { STORIES_SEED } from "./stories-seed";

const STORIES_FILE = path.join(process.cwd(), "data", "stories.json");

let writeChain: Promise<unknown> = Promise.resolve();

function withWriteLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeChain.then(fn, fn);
  writeChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96) || "story";
}

async function readFileStories(): Promise<NewsStory[]> {
  const raw = await fs.readFile(STORIES_FILE, "utf-8");
  return JSON.parse(raw) as NewsStory[];
}

export async function readStories(): Promise<NewsStory[]> {
  try {
    return await readFileStories();
  } catch {
    return structuredClone(STORIES_SEED);
  }
}

async function persistStories(stories: NewsStory[]): Promise<void> {
  await withWriteLock(async () => {
    await fs.mkdir(path.dirname(STORIES_FILE), { recursive: true });
    await fs.writeFile(STORIES_FILE, JSON.stringify(stories, null, 2), "utf-8");
  });
}

/** Seed on disk if missing so edits persist across restarts. */
export async function ensureStoriesFile(): Promise<NewsStory[]> {
  try {
    return await readFileStories();
  } catch {
    const initial = structuredClone(STORIES_SEED);
    await persistStories(initial);
    return initial;
  }
}

function sortPublished(a: NewsStory, b: NewsStory): number {
  return (
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

function wordCount(body: string): number {
  const t = body.trim();
  if (!t) return 0;
  return t.split(/\s+/).filter(Boolean).length;
}

/**
 * Home hero “Latest” / “Popular” rails (published only).
 * Popular prefers stories not in Latest, ranked by body length as a simple engagement proxy.
 */
export async function listHeroRailStories(count: number): Promise<{
  latest: NewsStory[];
  popular: NewsStory[];
}> {
  const all = await ensureStoriesFile();
  const pub = all.filter((s) => s.status === "published").sort(sortPublished);
  const latest = pub.slice(0, count);
  const exclude = new Set(latest.map((s) => s.slug));
  const pool = pub.filter((s) => !exclude.has(s.slug));
  const popular = [...pool]
    .sort((a, b) => wordCount(b.body) - wordCount(a.body))
    .slice(0, count);
  if (popular.length < count) {
    const used = new Set(popular.map((s) => s.slug));
    for (const s of pub) {
      if (popular.length >= count) break;
      if (!used.has(s.slug)) {
        popular.push(s);
        used.add(s.slug);
      }
    }
  }
  return { latest, popular: popular.slice(0, count) };
}

export async function listPublishedPage(
  page: number,
  pageSize: number,
): Promise<{
  items: NewsStory[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}> {
  const all = await ensureStoriesFile();
  const pub = all.filter((s) => s.status === "published").sort(sortPublished);
  const total = pub.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
  const p = Math.min(Math.max(1, page), totalPages);
  const start = (p - 1) * pageSize;
  const items = pub.slice(start, start + pageSize);
  return { items, total, page: p, pageSize, totalPages };
}

export async function getPublishedBySlug(
  slug: string,
): Promise<NewsStory | null> {
  const all = await ensureStoriesFile();
  const story = all.find((s) => s.slug === slug);
  if (!story || story.status !== "published") return null;
  return story;
}

export async function getById(id: string): Promise<NewsStory | null> {
  const all = await ensureStoriesFile();
  return all.find((s) => s.id === id) ?? null;
}

function uniqueSlug(base: string, existing: NewsStory[], excludeId?: string) {
  let slug = base;
  let n = 2;
  while (
    existing.some((s) => s.slug === slug && (!excludeId || s.id !== excludeId))
  ) {
    slug = `${base}-${n}`;
    n += 1;
  }
  return slug;
}

export type StoryInput = {
  title: string;
  slug?: string;
  excerpt: string;
  body: string;
  author: string;
  category: string;
  categoryStyle: NewsStory["categoryStyle"];
  status: StoryStatus;
  thumb: string;
  metaDescription: string;
  publishedAt?: string;
  tags?: string[];
};

export async function createStory(input: StoryInput): Promise<NewsStory> {
  const all = await ensureStoriesFile();
  const base = slugify(input.slug || input.title);
  const slug = uniqueSlug(base, all);
  const iso = new Date().toISOString();
  const story: NewsStory = {
    id: randomUUID(),
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    body: input.body,
    author: input.author.trim(),
    category: input.category.trim(),
    categoryStyle: input.categoryStyle,
    status: input.status,
    thumb: input.thumb.trim(),
    metaDescription: input.metaDescription.trim(),
    publishedAt: input.publishedAt?.trim() || iso,
    createdAt: iso,
    updatedAt: iso,
    tags: input.tags?.length ? input.tags : undefined,
  };
  all.push(story);
  await persistStories(all);
  return story;
}

export async function updateStory(
  id: string,
  patch: Partial<StoryInput> & { slug?: string },
): Promise<NewsStory | null> {
  const all = await ensureStoriesFile();
  const idx = all.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  const cur = all[idx];
  const iso = new Date().toISOString();
  let slug = cur.slug;
  if (patch.slug !== undefined) {
    const base = slugify(patch.slug || patch.title || cur.title);
    slug = uniqueSlug(base, all, id);
  } else if (patch.title !== undefined) {
    const base = slugify(patch.title);
    if (base !== cur.slug) {
      slug = uniqueSlug(base, all, id);
    }
  }
  const next: NewsStory = {
    ...cur,
    slug,
    title: patch.title !== undefined ? patch.title.trim() : cur.title,
    excerpt: patch.excerpt !== undefined ? patch.excerpt.trim() : cur.excerpt,
    body: patch.body !== undefined ? patch.body : cur.body,
    author: patch.author !== undefined ? patch.author.trim() : cur.author,
    category:
      patch.category !== undefined ? patch.category.trim() : cur.category,
    categoryStyle: patch.categoryStyle ?? cur.categoryStyle,
    status: patch.status ?? cur.status,
    thumb: patch.thumb !== undefined ? patch.thumb.trim() : cur.thumb,
    metaDescription:
      patch.metaDescription !== undefined
        ? patch.metaDescription.trim()
        : cur.metaDescription,
    publishedAt:
      patch.publishedAt !== undefined
        ? patch.publishedAt.trim()
        : cur.publishedAt,
    tags: patch.tags !== undefined ? patch.tags : cur.tags,
    updatedAt: iso,
  };
  all[idx] = next;
  await persistStories(all);
  return next;
}

export async function listAllStoriesAdmin(): Promise<NewsStory[]> {
  const all = await ensureStoriesFile();
  return [...all].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}
