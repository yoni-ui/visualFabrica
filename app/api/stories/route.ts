import { NextRequest, NextResponse } from "next/server";
import { listPublishedPage } from "@/lib/content/stories-store";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
  const limitRaw = parseInt(searchParams.get("limit") || "9", 10);
  const pageSize = Math.min(48, Math.max(1, limitRaw || 9));
  const data = await listPublishedPage(page, pageSize);
  return NextResponse.json(data);
}
