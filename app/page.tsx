import { EconomicGridHome } from "@/components/grid/EconomicGridHome";
import { listPublishedPage } from "@/lib/content/stories-store";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 9;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page || "1", 10) || 1);
  const { items, page: current, totalPages } = await listPublishedPage(
    page,
    PAGE_SIZE,
  );
  return (
    <EconomicGridHome
      stories={items}
      page={current}
      totalPages={totalPages}
    />
  );
}
