import { EditorialViewportShell } from "@/components/EditorialViewportShell";
import { TopNav } from "@/components/TopNav";
import type { FxSnapshot } from "@/lib/fx-snapshot";
import type { NewsStory } from "@/lib/content/story-types";
import { EconomicGridFooter } from "./EconomicGridFooter";
import { EconomicGridHero } from "./EconomicGridHero";
import { EconomicGridStoriesGrid } from "./EconomicGridStoriesGrid";
import { HomeCategoryStrip } from "./HomeCategoryStrip";
import { StoriesPagination } from "./StoriesPagination";

type Props = {
  stories: NewsStory[];
  page: number;
  totalPages: number;
  fx: FxSnapshot;
};

/**
 * Expanded economic grid home: hero + published stories from the shared store (admin-synced).
 */
export function EconomicGridHome({
  stories,
  page,
  totalPages,
  fx,
}: Props) {
  return (
    <EditorialViewportShell nav={<TopNav />}>
      <HomeCategoryStrip />
      <main className="mx-auto max-w-[1920px]">
        <EconomicGridHero fx={fx} />
        <EconomicGridStoriesGrid stories={stories} />
        <StoriesPagination page={page} totalPages={totalPages} basePath="/" />
      </main>
      <EconomicGridFooter />
    </EditorialViewportShell>
  );
}
