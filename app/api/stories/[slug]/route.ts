import { NextResponse } from "next/server";
import { getPublishedBySlug } from "@/lib/content/stories-store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const story = await getPublishedBySlug(decodeURIComponent(slug));
  if (!story) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(story);
}
