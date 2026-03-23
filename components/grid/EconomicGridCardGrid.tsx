import Image from "next/image";
import {
  IMG_COFFEE,
  IMG_INTERNET,
  IMG_POPULATION,
  IMG_TRADE,
} from "./constants";

export function EconomicGridCardGrid() {
  return (
    <div className="dense-grid">
      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-col items-center justify-center overflow-hidden border border-gray-100 bg-surface-container-low p-6">
          <div className="font-headline text-3xl font-bold text-primary">
            2.6 TRILLION
          </div>
          <div className="mt-1 font-label text-[10px] uppercase tracking-widest text-secondary">
            Birr Credit Gap
          </div>
          <div className="mt-4 flex h-4 w-full bg-gray-200">
            <div className="h-full w-[15%] bg-primary" />
            <div className="h-full w-[85%] bg-vc-green opacity-20" />
          </div>
          <div className="mt-1 flex w-full justify-between text-[8px] font-bold">
            <span>SUPPLY</span>
            <span>DEMAND</span>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Finance / Credit
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Ethiopia’s Small Businesses Are Missing 2.6 Trillion Birr
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Visualizing the massive financing shortfall holding back the backbone
          of the Ethiopian economy.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video divide-x divide-white overflow-hidden bg-surface-container-low">
          <div className="flex h-full w-1/2 flex-col items-center justify-center bg-[#f47b20] p-2 text-white">
            <span className="text-[8px] font-bold uppercase">Ethio</span>
            <span className="text-lg font-bold">78M</span>
          </div>
          <div className="flex h-full w-1/2 flex-col items-center justify-center bg-[#e60000] p-2 text-white">
            <span className="text-[8px] font-bold uppercase">Safaricom</span>
            <span className="text-lg font-bold">12M</span>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Tech / Telecom
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          The Battle for Ethiopia’s Digital Future
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          A dashboard comparison of subscribers, 4G/5G coverage, and the
          explosive growth of Telebirr vs M-Pesa.
        </p>
      </article>

      <article className="group grid-item cursor-pointer">
        <div className="relative mb-4 aspect-video overflow-hidden bg-surface-container-low">
          <Image
            src={IMG_COFFEE}
            alt="Sankey Flow"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Trade / Agriculture
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Where Does Ethiopia’s Coffee Money Actually Go?
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Tracing the revenue flow from smallholder farmers to global markets
          and the central bank&apos;s FX reserves.
        </p>
      </article>

      <article className="group grid-item cursor-pointer">
        <div className="relative mb-4 aspect-video overflow-hidden bg-surface-container-low">
          <Image
            src={IMG_POPULATION}
            alt="Population Map"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Demographics / Maps
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Where 120 Million People Actually Live
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          A choropleth map revealing the intense concentration of population in
          the highlands and the urban sprawl of Addis.
        </p>
      </article>

      <article className="group grid-item cursor-pointer">
        <div className="relative mb-4 aspect-video overflow-hidden bg-surface-container-low">
          <Image
            src={IMG_INTERNET}
            alt="Internet Bar Chart"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Tech / Infrastructure
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Your Internet Speed Depends on Where You Live
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Analyzing the stark divide in connectivity between urban centers and
          Ethiopia&apos;s rural heartland.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-col justify-end overflow-hidden border border-gray-100 bg-surface-container-low p-4">
          <div className="flex items-baseline gap-1">
            <span className="font-headline text-3xl font-bold">115.6</span>
            <span className="text-[10px] font-bold text-red-600">ETB/L</span>
          </div>
          <div className="mt-2 flex h-24 items-end gap-1">
            <div className="h-[20%] w-4 bg-gray-200" />
            <div className="h-[25%] w-4 bg-gray-200" />
            <div className="h-[30%] w-4 bg-gray-200" />
            <div className="h-[45%] w-4 bg-gray-300" />
            <div className="h-[60%] w-4 bg-gray-300" />
            <div className="h-[85%] w-4 bg-primary" />
            <div className="h-full w-4 bg-primary" />
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Energy / Costs
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Fuel Prices Have Never Been This High
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Tracking the aggressive removal of fuel subsidies and its ripple
          effect on transport and food costs.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-wrap content-start gap-1 overflow-hidden bg-surface-container-low p-4">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="h-2 w-2 rounded-full bg-gray-200" />
          <div className="mt-4 w-full text-center font-headline text-2xl font-bold">
            3 / 10
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Labor / Society
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          3 Out of 10 Young Ethiopians Are Unemployed
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Visualizing the demographic time bomb and the urgent need for
          private-sector job creation.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-center justify-around overflow-hidden bg-surface-container-low p-4">
          <div className="text-center">
            <div className="mb-1 text-[8px] font-bold uppercase">2018</div>
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-vc-green/20">
              <span className="material-symbols-outlined text-vc-green">
                shopping_basket
              </span>
            </div>
            <div className="text-[10px] font-bold">Full</div>
          </div>
          <div className="text-xl font-bold">→</div>
          <div className="text-center">
            <div className="mb-1 text-[8px] font-bold uppercase">2026</div>
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-error/10">
              <span className="material-symbols-outlined scale-50 text-error">
                shopping_basket
              </span>
            </div>
            <div className="text-[10px] font-bold">1/4 Full</div>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Money / Inflation
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          What 1,000 Birr Could Buy Then vs Now
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          A visceral comparison of purchasing power erosion and the soaring cost
          of a basic food basket.
        </p>
      </article>

      <article className="group grid-item cursor-pointer">
        <div className="relative mb-4 aspect-video overflow-hidden bg-surface-container-low">
          <Image
            src={IMG_TRADE}
            alt="Trade Map"
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Trade / Global
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Who Ethiopia Trades With the Most
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Mapping the flows of imports from China and exports to the Middle
          East, Europe, and neighboring African states.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-center justify-center gap-4 overflow-hidden bg-surface-container-low p-4">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00A355] text-xs font-bold text-white">
              M
            </div>
            <div className="mt-1 h-12 w-1 bg-[#00A355]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
              T
            </div>
            <div className="mt-1 h-20 w-1 bg-primary" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vc-green text-xs font-bold text-white">
              W
            </div>
            <div className="mt-1 h-6 w-1 bg-vc-green" />
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Digital Frontier / Finance
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Africa&apos;s Cashless Future
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          A comparison of transaction volumes and adoption rates between
          M-Pesa, Telebirr, and Wave across the continent.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-col justify-center gap-3 overflow-hidden bg-surface-container-low p-6">
          <div className="flex items-center gap-2">
            <span className="w-12 text-[8px] font-bold">USA</span>
            <div className="h-3 flex-1 bg-primary" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-12 text-[8px] font-bold">CHINA</span>
            <div className="h-3 w-[90%] bg-red-600" />
          </div>
          <div className="flex items-center gap-2 opacity-40">
            <span className="w-12 text-[8px] font-bold">ETH</span>
            <div className="h-3 w-[5%] bg-vc-green" />
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Digital Frontier / Tech
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Who Is Leading the AI Race?
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Visualizing global AI investment, talent distribution, and adoption
          rates across major economies.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden bg-surface-container-low">
          <div className="relative flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[8px] border-gray-100" />
            <div className="absolute inset-0 -rotate-45 rounded-full border-[8px] border-primary border-r-transparent border-t-transparent" />
            <div className="text-center">
              <div className="font-headline text-2xl font-bold">14.2</div>
              <div className="font-label text-[8px] uppercase">Mbps Avg</div>
            </div>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Digital Frontier / Connectivity
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Why Your Internet Feels Slow
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Deconstructing bandwidth allocation, latency, and the infrastructure
          bottlenecks in East Africa&apos;s web.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="relative mb-4 aspect-video overflow-hidden bg-surface-container-low">
          <div className="absolute inset-4 flex flex-col items-center justify-center rounded border border-dashed border-gray-300">
            <div className="absolute top-1/2 flex h-[2px] w-full -translate-y-1/2 justify-between bg-primary px-4">
              <div className="-mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white text-[6px] font-bold">
                A
              </div>
              <div className="-mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white text-[6px] font-bold">
                D
              </div>
            </div>
            <span className="mt-8 text-[8px] font-bold uppercase tracking-tighter text-secondary">
              Addis Ababa – Djibouti
            </span>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Infrastructure / Trade
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          How Goods Move Across Africa
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          A mapping of critical rail and road corridors connecting landlocked
          hubs to the world&apos;s oceans.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-center justify-center gap-8 overflow-hidden bg-surface-container-low">
          <div className="text-center">
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span
                className="material-symbols-outlined text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
            </div>
            <div className="text-[9px] font-bold">100%</div>
            <div className="text-[7px] uppercase text-secondary">Norway</div>
          </div>
          <div className="text-center">
            <div className="relative mb-1 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary/20">
              <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-primary" />
              <span
                className="material-symbols-outlined relative z-10 text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bolt
              </span>
            </div>
            <div className="text-[9px] font-bold">45%</div>
            <div className="text-[7px] uppercase text-secondary">Ethiopia</div>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Infrastructure / Energy
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Who Has Power—and Who Doesn&apos;t
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Visualizing the massive electricity access gap and the rural-urban
          divide in national grid coverage.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-end justify-center gap-2 overflow-hidden bg-surface-container-low p-4">
          <div className="relative h-16 w-8 bg-gray-300 transition-colors group-hover:bg-primary">
            <span className="absolute -top-4 left-0 right-0 text-center text-[8px] font-bold">
              ADD
            </span>
          </div>
          <div className="relative h-32 w-8 bg-gray-300">
            <span className="absolute -top-4 left-0 right-0 text-center text-[8px] font-bold">
              LAG
            </span>
          </div>
          <div className="relative h-40 w-8 bg-gray-300">
            <span className="absolute -top-4 left-0 right-0 text-center text-[8px] font-bold">
              MUM
            </span>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-secondary">
          Infrastructure / Demographics
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Addis Ababa vs Global Megacities
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Comparing the rapid expansion of Addis Ababa with urban giants like
          Lagos and Mumbai.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-col items-center justify-center overflow-hidden bg-surface-container-low">
          <div className="mb-1 font-headline text-3xl font-bold text-primary">
            $100
          </div>
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
            <div className="h-1.5 w-1.5 rounded-full bg-gray-200" />
          </div>
          <p className="mt-3 font-label text-[9px] uppercase tracking-widest text-secondary">
            Purchasing Power Index
          </p>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-red-500">
          VIRAL / Economy
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          $100 in Ethiopia vs the World
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          A stark comparison of what a hundred US dollars buys in various global
          capitals from Zurich to Addis.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden bg-surface-container-low">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-gray-300 p-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-vc-green text-xs font-bold text-white shadow-lg">
              19.5 yrs
            </div>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-red-500">
          VIRAL / Society
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Where the World&apos;s Youngest Population Lives
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Ethiopia&apos;s median age compared to an aging Europe and East Asia —
          the potential for a demographic dividend.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-col items-center justify-center overflow-hidden bg-surface-container-low">
          <div className="mb-2 flex gap-2">
            <span className="material-symbols-outlined text-gray-200">
              restaurant
            </span>
            <span className="material-symbols-outlined text-gray-200">
              restaurant
            </span>
            <span className="material-symbols-outlined text-gray-200">
              restaurant
            </span>
          </div>
          <div className="h-2 w-[75%] max-w-[240px] overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[60%] bg-red-500" />
          </div>
          <span className="mt-2 text-[8px] font-bold text-red-500">
            60% AT RISK
          </span>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-red-500">
          VIRAL / Agriculture
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Who Can Feed Themselves?
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Analyzing national self-sufficiency rates and the reliance on grain
          imports in an unstable global market.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video items-center justify-center overflow-hidden bg-surface-container-low">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-lg border-2 border-blue-200 bg-blue-50">
            <div className="absolute bottom-0 left-0 right-0 h-[15%] rounded-b-[6px] bg-blue-400" />
            <span className="material-symbols-outlined text-4xl text-blue-500">
              water_drop
            </span>
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-red-500">
          VIRAL / Resources
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          The World&apos;s Most Water-Stressed Countries
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          Mapping renewable water resources per capita and the future of water
          security in the Horn of Africa.
        </p>
      </article>

      <article className="grid-item group cursor-pointer">
        <div className="mb-4 flex aspect-video flex-col items-center justify-center overflow-hidden bg-surface-container-low p-6">
          <div className="flex flex-wrap justify-center gap-1">
            <div className="h-2 w-2 bg-primary" />
            <div className="h-2 w-2 bg-primary" />
            <div className="h-2 w-2 bg-primary" />
            <div className="h-2 w-2 bg-primary" />
            <div className="h-2 w-2 bg-gray-200" />
            <div className="h-2 w-2 bg-gray-200" />
            <div className="h-2 w-2 bg-gray-200" />
            <div className="h-2 w-2 bg-gray-200" />
            <div className="h-2 w-2 bg-gray-200" />
            <div className="h-2 w-2 bg-gray-200" />
          </div>
          <div className="mt-4 font-headline text-xl font-bold">40% Literacy</div>
          <div className="font-label text-[8px] uppercase text-secondary">
            Rural Areas
          </div>
        </div>
        <span className="mb-2 block font-label text-[9px] font-bold uppercase tracking-widest text-red-500">
          VIRAL / Education
        </span>
        <h3 className="mb-3 font-headline text-lg font-extrabold leading-tight transition-colors group-hover:text-primary">
          Where Students Have the Least Access to Education
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-secondary">
          The geographic and economic barriers preventing millions of children
          from completing primary school.
        </p>
      </article>
    </div>
  );
}
