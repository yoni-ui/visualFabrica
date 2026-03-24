import Image from "next/image";
import Link from "next/link";
import type { FxSnapshot } from "@/lib/fx-snapshot";
import { BIRR_HERO_IMG } from "./constants";

function fmt(n: number, opts: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("en-US", opts).format(n);
}

function HeroFxCard({ fx }: { fx: FxSnapshot }) {
  return (
    <div className="hero-fx-dark grid-item flex min-h-[min(100%,520px)] flex-col py-6">
      <div className="slanted-label w-fit !bg-vc-green !text-xs !text-black">
        ETB / USD
      </div>
      <div className="mt-5 flex flex-1 flex-col border-t border-white/20 pt-5">
        <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
          1 US dollar equals
        </p>
        <p className="mt-2 font-headline text-4xl font-black tracking-tight text-white md:text-5xl">
          {fmt(fx.usdToEtb, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}{" "}
          <span className="text-2xl font-bold text-vc-green md:text-3xl">ETB</span>
        </p>
        <div className="mt-6 rounded-lg border border-white/20 bg-neutral-950 px-4 py-4">
          <p className="font-label text-[9px] uppercase tracking-widest text-white/40">
            Inverse
          </p>
          <p className="mt-1 font-headline text-xl font-bold text-white">
            1 ETB ={" "}
            {fmt(fx.etbToUsd, {
              maximumFractionDigits: 4,
              minimumFractionDigits: 4,
            })}{" "}
            USD
          </p>
        </div>
        <div className="mt-auto pt-8">
          <div className="flex items-end justify-between border-t border-white/20 pt-4">
            <div>
              <p className="font-label text-[9px] uppercase tracking-widest text-white/35">
                As of (UTC date)
              </p>
              <p className="mt-1 font-label text-sm font-bold text-white/90">
                {fx.date}
              </p>
            </div>
            <p
              className={`max-w-[10rem] text-right font-label text-[9px] uppercase leading-snug tracking-wide ${fx.ok ? "text-vc-green" : "text-amber-400/90"}`}
            >
              {fx.ok
                ? "Live rates via exchangerate.host"
                : "Indicative — live feed unavailable"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroCrossRatesCard({ fx }: { fx: FxSnapshot }) {
  const rows: { code: string; label: string; value: number; decimals: number }[] =
    [
      { code: "EUR", label: "Euro / USD", value: fx.usdToEur, decimals: 4 },
      { code: "GBP", label: "Sterling / USD", value: fx.usdToGbp, decimals: 4 },
      { code: "CNY", label: "Yuan / USD", value: fx.usdToCny, decimals: 2 },
      { code: "JPY", label: "Yen / USD", value: fx.usdToJpy, decimals: 2 },
    ];

  return (
    <div className="hero-fx-dark grid-item flex min-h-[min(100%,520px)] flex-col py-6">
      <div className="slanted-label w-fit !bg-vc-green !text-xs !text-black">
        Cross rates
      </div>
      <div className="mt-5 flex flex-1 flex-col border-t border-white/20 pt-4">
        <p className="mb-1 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
          Per 1 US dollar
        </p>
        <ul className="flex flex-1 flex-col justify-center gap-0">
          {rows.map((r) => (
            <li
              key={r.code}
              className="flex items-baseline justify-between gap-3 border-b border-white/10 py-4 first:pt-0"
            >
              <div className="min-w-0">
                <span className="font-label text-[10px] font-black uppercase tracking-widest text-vc-green">
                  {r.code}
                </span>
                <span className="mt-0.5 block truncate font-label text-[9px] uppercase tracking-wider text-white/35">
                  {r.label}
                </span>
              </div>
              <span className="shrink-0 font-headline text-lg font-bold tabular-nums text-white md:text-xl">
                {fmt(r.value, {
                  maximumFractionDigits: r.decimals,
                  minimumFractionDigits: Math.min(2, r.decimals),
                })}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-white/20 pt-4">
          <p className="font-label text-[10px] uppercase leading-relaxed tracking-widest text-white/35">
            Major pairs for context alongside Birr. Same session as ETB/USD card.
          </p>
        </div>
      </div>
    </div>
  );
}

type Props = {
  fx: FxSnapshot;
};

export function EconomicGridHero({ fx }: Props) {
  return (
    <div className="dense-grid border-t border-[#e4e2e1]">
      <article className="grid-item group cursor-pointer border-r border-[#e4e2e1] lg:col-span-2">
        <Link href="/economy/birr-collapse" className="flex h-full flex-col" prefetch>
          <div className="relative mb-6 aspect-[16/9] overflow-hidden bg-surface-container-low">
            <Image
              src={BIRR_HERO_IMG}
              alt="Birr Collapse Chart"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
              <div className="text-white">
                <div className="mb-1 font-headline text-4xl font-bold">-78.4%</div>
                <div className="font-label text-xs uppercase tracking-widest opacity-80">
                  Value lost vs USD since 2015
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 flex items-center gap-2">
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Economy / Currency
            </span>
            <span className="font-label text-xs text-secondary">
              / Latest Analysis
            </span>
          </div>
          <h1 className="editorial-title mb-4 font-headline text-4xl text-on-surface">
            The Birr Has Lost Over 75% of Its Value Since 2015
          </h1>
          <p className="mb-auto font-body text-lg italic text-on-surface-variant">
            A decade of devaluations and the recent shift to a market-based
            exchange rate has fundamentally reshaped Ethiopia&apos;s
            macroeconomic landscape.
          </p>
        </Link>
      </article>
      <HeroFxCard fx={fx} />
      <HeroCrossRatesCard fx={fx} />
    </div>
  );
}
