import Image from "next/image";
import Link from "next/link";
import { BIRR_HERO_IMG } from "./constants";

export function EconomicGridHero() {
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
      <div className="grid-item flex flex-col justify-between bg-black py-6 text-white">
        <div className="slanted-label w-fit !bg-vc-green !text-xs !text-black">
          Latest
        </div>
        <div className="mt-8 border-t border-white/20 pt-4">
          <span className="font-label text-[10px] uppercase tracking-widest text-white/40">
            Macro Watch
          </span>
          <p className="mt-2 text-sm italic text-white/80">
            Real-time tracking of Ethiopia&apos;s primary economic indicators
            and reform progress.
          </p>
        </div>
      </div>
      <div className="grid-item flex flex-col justify-between bg-black py-6 text-white">
        <div className="slanted-label w-fit !bg-vc-green !text-xs !text-black">
          Popular
        </div>
        <div className="mt-8 border-t border-white/20 pt-4">
          <span className="font-label text-[10px] uppercase tracking-widest text-white/40">
            Most Viewed
          </span>
          <p className="mt-2 text-sm italic text-white/80">
            The visualizations sparking the most conversation across Addis
            Ababa this week.
          </p>
        </div>
      </div>
    </div>
  );
}
