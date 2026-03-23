import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-auth";
import { getById, updateStory } from "@/lib/content/stories-store";
import type { NewsStory } from "@/lib/content/story-types";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const { id } = await context.params;
  const story = await getById(id);
  if (!story) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ story });
}

type PatchBody = Partial<{
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  author: string;
  category: string;
  categoryStyle: NewsStory["categoryStyle"];
  status: NewsStory["status"];
  thumb: string;
  metaDescription: string;
  publishedAt: string;
  tags: string[];
}>;

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const denied = await requireAdminApi();
  if (denied) return denied;
  const { id } = await context.params;
  let body: PatchBody;
  try {
    body = (await request.json()) as PatchBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  if (body.title !== undefined && !String(body.title).trim()) {
    return NextResponse.json(
      { error: "Title cannot be empty" },
      { status: 400 },
    );
  }
  const story = await updateStory(id, body);
  if (!story) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ story });
}
