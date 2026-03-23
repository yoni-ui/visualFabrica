import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-auth";
import { createStory, listAllStoriesAdmin } from "@/lib/content/stories-store";
import type { NewsStory } from "@/lib/content/story-types";

export const dynamic = "force-dynamic";

export async function GET() {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const stories = await listAllStoriesAdmin();
  return NextResponse.json({ stories });
}

type PostBody = Partial<NewsStory> & {
  title?: string;
  excerpt?: string;
  body?: string;
  author?: string;
  category?: string;
  categoryStyle?: NewsStory["categoryStyle"];
  status?: NewsStory["status"];
  thumb?: string;
  metaDescription?: string;
  slug?: string;
  publishedAt?: string;
  tags?: string[];
};

export async function POST(request: Request) {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const body = (await request.json()) as PostBody;
  const title = (body.title || "").trim();
  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }
  const story = await createStory({
    title,
    slug: body.slug,
    excerpt: (body.excerpt || "").trim() || "Add a short summary.",
    body:
      (body.body || "").trim() ||
      "Add story body text. Use blank lines between paragraphs.",
    author: (body.author || "").trim() || "Editorial",
    category: (body.category || "").trim() || "General",
    categoryStyle: body.categoryStyle || "economy",
    status: body.status === "draft" ? "draft" : "published",
    thumb:
      (body.thumb || "").trim() ||
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRbx9AR2lhr3hSjxTDmIFiMuoNG5FPo5Bm3n9GBTBdlUjhUjM33uohn23NM8CF6kZrj5188GDgjROyYEj6ewNGlO72_qJhkAJbmWDNv2l1cPUDdfU6BNGRp9HTC0Mme8k64cMr88JEJOuJs7810X9N7rlS_jR5hOSqJvhkq54TPFxYUj9HO3Re9eHbXOOmR-FVuy-LRcfflai7Jstjg76-aPjqVTWKRF11rDAvNGm-1TIrVh7jBY9ps7V2wbRd6vi2svxtqQnnw",
    metaDescription:
      (body.metaDescription || "").trim() ||
      `${title} — VisualFabrica editorial.`,
    publishedAt: body.publishedAt,
    tags: body.tags,
  });
  return NextResponse.json({ story });
}
