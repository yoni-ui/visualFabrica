import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconDownload,
  IconPdf,
  IconTrendUp,
  IconWarning,
  IconZoom,
} from "@/components/EditorialIcons";
import { InsightHeading } from "@/components/InsightHeading";

export const metadata: Metadata = {
  title: "The Birr Collapse (2015–2026)",
  description:
    "ETB/USD devaluation timeline and macro context — editorial feature.",
};

const CHART_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIrwOLRcmnpZUMNIx2o0dKPfvpUt7bEsEAs96V-2OVM5qVE03ww2IiyOoip_ikcP9vyEQLC9KBrrukBeyJtJ6KYJzUwYe1JzEF615QDcF9MtcKshCEa2bn-rh-kLVglg0Nqm-LkatmGQDbfDPI1ROansmK_n2TJkZfFZ46_ElBKDqfOAnUOEEZPQpQ1_iHuoQpAoGje-P3zWX2SWmR8kF_vQzlmObdf_BR6ihrxKJ7L1gTcWeDqvCdbwNMx5dxAH-pphpjF979dw";

const toc = [
  { href: "#managed-float", label: "Managed float" },
  { href: "#market-based-shift", label: "Market-based shift" },
  { href: "#purchasing-power", label: "Purchasing power" },
];

export default function BirrCollapsePage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
      <header className="mb-20 max-w-5xl">
        <nav className="mb-8 flex flex-wrap items-center gap-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">
          <Link href="/" className="hover:text-primary" prefetch>
            Hub
          </Link>
          <span className="opacity-30">/</span>
          <span>Analysis</span>
          <span className="opacity-30">/</span>
          <span>Macroeconomics</span>
          <span className="opacity-30">/</span>
          <span className="font-bold text-primary">Ethiopia</span>
        </nav>
        <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[0.95] tracking-tighter text-on-surface md:text-7xl md:leading-[0.9]">
          The Birr Collapse: A Decade of Devaluation (2015–2026)
        </h1>
        <p className="max-w-4xl font-body text-2xl italic leading-relaxed text-on-surface-variant md:text-3xl">
          Tracking the ETB to USD trend shows a record 75%+ loss in value,
          fundamentally reshaping Ethiopia’s macroeconomic landscape.
        </p>

        <nav
          aria-label="On this page"
          className="mt-10 flex flex-wrap gap-3 font-label text-[11px] uppercase tracking-widest"
        >
          {toc.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full bg-secondary-container px-4 py-2 text-on-secondary-container transition-colors hover:bg-primary hover:text-on-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="mb-24" aria-labelledby="chart-heading">
        <div className="relative overflow-hidden bg-surface-container-low p-8 md:p-12">
          <div className="relative z-10 mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2
                id="chart-heading"
                className="mb-2 font-headline text-3xl font-bold tracking-tight"
              >
                ETB/USD Exchange Rate Performance
              </h2>
              <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant">
                Source: National Bank of Ethiopia &amp; Market Indicators
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col bg-surface-container-lowest px-4 py-2 shadow-[0_24px_48px_-12px_rgba(27,28,28,0.06)]">
                <span className="font-label text-[10px] uppercase text-on-surface-variant">
                  Current Rate (Projected 2026)
                </span>
                <span className="font-headline text-xl font-bold text-error">
                  ~128.50 ETB/USD
                </span>
              </div>
              <div className="flex flex-col bg-surface-container-lowest px-4 py-2 shadow-[0_24px_48px_-12px_rgba(27,28,28,0.06)]">
                <span className="font-label text-[10px] uppercase text-on-surface-variant">
                  10-Year Change
                </span>
                <span className="font-headline text-xl font-bold text-error">
                  -78.2%
                </span>
              </div>
            </div>
          </div>

          <div className="group relative h-[min(500px,70vh)] w-full overflow-hidden bg-surface-container-high">
            <Image
              src={CHART_SRC}
              alt="ETB/USD exchange rate performance infographic"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="rounded-full bg-white/90 p-4 backdrop-blur-sm">
                <IconZoom className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24 bg-surface-container-low py-10">
        <div className="flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-16 items-center justify-center rounded bg-primary/10">
              <IconPdf className="h-9 w-9 text-primary" />
            </div>
            <div>
              <h4 className="font-headline text-xl font-bold text-on-surface">
                Full Analysis Report
              </h4>
              <p className="font-body text-on-surface-variant">
                Get the high-resolution infographic and expanded data set (PDF,
                12MB).
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 bg-primary px-8 py-4 font-label text-sm font-bold uppercase tracking-widest text-on-primary transition-shadow hover:shadow-[0_24px_48px_-12px_rgba(0,59,147,0.25)]"
          >
            <span>Download Full Quality PDF</span>
            <IconDownload className="text-on-primary" />
          </button>
        </div>
      </section>

      <div className="editorial-grid">
        <div className="col-span-12 lg:col-span-8">
          <article className="space-y-12">
            <section id="managed-float">
              <InsightHeading>The Managed Float Era (2015–2021)</InsightHeading>
              <div className="space-y-6 font-body text-xl leading-relaxed text-on-surface-variant">
                <p>
                  For years, the National Bank of Ethiopia (NBE) maintained a
                  &quot;crawling peg&quot; system, where the Birr was allowed to
                  depreciate slowly against a basket of currencies. While this
                  provided a veneer of stability, it created a widening chasm
                  between the official rate and the parallel market.
                </p>
                <p>
                  During this period, foreign exchange reserves dwindled as the
                  central bank attempted to defend an overvalued currency.
                  Exporters found themselves disadvantaged, while the informal
                  economy flourished, setting the stage for the structural
                  imbalances that would eventually force a radical policy pivot.
                </p>
              </div>
            </section>

            <section id="market-based-shift">
              <InsightHeading>
                The Shift to Market-Based Exchange
              </InsightHeading>
              <div className="space-y-6 font-body text-xl leading-relaxed text-on-surface-variant">
                <p>
                  The transition signaled a tectonic shift in Ethiopian
                  financial policy. Under pressure from international lenders and
                  a mounting debt burden, the government abandoned the managed
                  float in favor of a market-determined exchange rate.
                </p>
                <div className="my-8 bg-surface-container-lowest p-8 shadow-[0_24px_48px_-12px_rgba(27,28,28,0.05)]">
                  <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-primary">
                    Key Statistic
                  </span>
                  <p className="mb-2 font-headline text-4xl font-extrabold tracking-tighter text-on-surface">
                    42%
                  </p>
                  <p className="font-body text-lg italic text-on-surface-variant">
                    The single-day drop in the official Birr value during the
                    primary 2024 reform window.
                  </p>
                </div>
                <p>
                  This &quot;shock therapy&quot; was designed to unify the
                  exchange rates and eliminate the arbitrage opportunities that
                  were draining the formal banking sector. However, the immediate
                  consequence was a sharp spike in the price of imported goods,
                  from fuel to pharmaceuticals.
                </p>
              </div>
            </section>

            <section id="purchasing-power">
              <InsightHeading>Impact on Purchasing Power</InsightHeading>
              <div className="space-y-6 font-body text-xl leading-relaxed text-on-surface-variant">
                <p>
                  The human dimension of the Birr collapse is measured in the
                  eroding purchasing power of the average urban household. With
                  inflation regularly exceeding 30%, the cost of living has
                  outpaced wage growth by a significant margin.
                </p>
                <p>
                  &quot;We are seeing a fundamental reconfiguration of the middle
                  class,&quot; notes one Addis-based economist. &quot;What was
                  once an affordable lifestyle is now a luxury, as every dollar
                  of import content in the consumer basket now costs three times
                  what it did five years ago.&quot;
                </p>
              </div>
            </section>

            <div className="flex flex-col items-center pt-20 text-center">
              <h4 className="mb-4 font-headline text-2xl font-bold">
                How is this reshaping your outlook?
              </h4>
              <p className="mb-8 max-w-lg font-body text-lg text-on-surface-variant">
                Join our panel of analysts for a live discussion on the future
                of East African currencies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  type="button"
                  className="bg-primary px-8 py-4 font-label text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-90"
                >
                  Join the Discussion
                </button>
                <button
                  type="button"
                  className="bg-surface-container-highest px-8 py-4 font-label text-sm font-bold uppercase tracking-widest text-on-surface transition-transform hover:scale-[1.02]"
                >
                  Share Visualization
                </button>
              </div>
            </div>
          </article>
        </div>

        <aside className="col-span-12 space-y-8 lg:col-span-4">
          <div className="bg-surface-container p-8">
            <h4 className="mb-6 font-headline text-xl font-bold tracking-tight">
              Macroeconomic Inset
            </h4>
            <div className="space-y-8">
              <div>
                <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Annual Inflation Rate
                </span>
                <div className="flex items-end gap-2">
                  <span className="font-headline text-4xl font-black text-on-surface">
                    32.4%
                  </span>
                  <IconTrendUp className="mb-1 text-error" />
                </div>
              </div>
              <div>
                <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  FX Reserve Status
                </span>
                <div className="flex items-end gap-2">
                  <span className="font-headline text-4xl font-black text-on-surface">
                    1.2{" "}
                    <span className="text-sm font-normal">mo</span>
                  </span>
                  <IconWarning className="mb-1 text-error" />
                </div>
                <p className="mt-2 font-label text-xs italic text-on-surface-variant">
                  Import cover capacity is currently below the recommended
                  3-month safety threshold.
                </p>
              </div>
              <div>
                <span className="mb-2 block font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Public Debt to GDP
                </span>
                <span className="font-headline text-4xl font-black text-on-surface">
                  48.2%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low p-8">
            <h4 className="mb-6 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Recommended Reading
            </h4>
            <ul className="space-y-6">
              <li className="group cursor-pointer">
                <span className="font-label text-[10px] uppercase text-on-surface-variant">
                  Regional Report
                </span>
                <h5 className="mt-1 font-headline text-lg font-bold leading-tight transition-colors group-hover:text-primary">
                  Nairobi’s Fintech Boom: Can the Shilling Resist Regional
                  Volatility?
                </h5>
              </li>
              <li className="group cursor-pointer">
                <span className="font-label text-[10px] uppercase text-on-surface-variant">
                  Commodities
                </span>
                <h5 className="mt-1 font-headline text-lg font-bold leading-tight transition-colors group-hover:text-primary">
                  Coffee Exports and the Currency Hedge: A Strategy for 2026
                </h5>
              </li>
            </ul>
          </div>

          <div className="bg-primary-container p-8 text-on-primary-container">
            <h4 className="mb-2 font-headline text-xl font-bold">
              Visual Insight Digest
            </h4>
            <p className="mb-6 font-body text-sm opacity-80">
              Get weekly data-driven reports on emerging economies directly in
              your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <label className="sr-only" htmlFor="digest-email">
                Email
              </label>
              <input
                id="digest-email"
                type="email"
                placeholder="email@finance.com"
                className="border-0 border-b border-white/20 bg-white/10 p-3 font-label text-sm text-white placeholder:text-white/50 focus:border-b-2 focus:border-white focus:outline-none"
              />
              <button
                type="button"
                className="bg-white py-3 font-label text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-surface-dim"
              >
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
