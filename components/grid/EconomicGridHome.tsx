import { EconomicGridCardGrid } from "./EconomicGridCardGrid";
import { EconomicGridFooter } from "./EconomicGridFooter";
import { EconomicGridHero } from "./EconomicGridHero";
import { EconomicGridNav } from "./EconomicGridNav";
import { EconomicGridPagination } from "./EconomicGridPagination";

/**
 * Full VisualFabrica expanded economic grid home (matches `das/visualfabrica_expanded_economic_grid/code.html`).
 */
export function EconomicGridHome() {
  return (
    <>
      <EconomicGridNav />
      <main className="mx-auto max-w-[1920px]">
        <EconomicGridHero />
        <EconomicGridCardGrid />
        <EconomicGridPagination />
      </main>
      <EconomicGridFooter />
    </>
  );
}
