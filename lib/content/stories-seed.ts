import type { NewsStory } from "./story-types";

const now = new Date().toISOString();

export const STORIES_SEED: NewsStory[] = [
  {
    id: "1",
    slug: "the-birr-collapse",
    title: "The Birr Collapse",
    excerpt:
      "A decade of devaluation (2015–2026), editorial infographic and data narrative.",
    body: `The recent volatility in the Ethiopian Birr has sent shockwaves through the Horn of Africa’s financial ecosystem. What began as a controlled float quickly spiraled into a systemic devaluation that has challenged decades of monetary orthodoxy.

To understand the collapse, one must look past simple exchange-rate charts and into the mechanics of sovereign debt, hard-currency reserves, and import dependency. Households feel the shock through fuel and food prices; businesses through letters of credit and input costs.

This piece connects macro indicators to lived experience: how parallel-market premiums emerged, how policy responses shifted, and what regional trade partners observed in real time. The charts below are placeholders for the interactive modules editors can attach from the admin dashboard.

Our methodology blends official releases with market-implied rates where disclosure is thin. We flag uncertainty explicitly and revise as new data lands.`,
    author: "Elias Gebreselassie",
    category: "Economy",
    categoryStyle: "economy",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDSiFgQrIV6cOOwZC1GL2jLgxvjOkqn3_C4OZO89sYN8fpMzOjIkw9eYI7BnU_mY4oHO_cLuZpWUI2bIbbaPxC5k1CurcjP44UT4kF3iCdyiHF5iN38BuzbV0KJrcIHyE8hrhD4kM4ECB2wypFbDkn2n1fCC1Qi5AJKh1GoXgxYzDv0SNlBwR1DLB68QS4VKy-UJIpqK9ngO_BKfcDuCBUG5j05Od6WAcRi3Rnst9GZzmjqlijBqG3YCmbKFuHsIJrCtSxE8t_VA",
    metaDescription:
      "An in-depth data study of the Ethiopian Birr's recent fluctuations and regional implications.",
    publishedAt: "2023-10-24T09:12:00.000Z",
    createdAt: "2023-10-20T10:00:00.000Z",
    updatedAt: now,
    tags: ["ECONOMY", "CURRENCY", "AFRICA"],
  },
  {
    id: "2",
    slug: "2-6-trillion-birr-msme-credit-gap",
    title: "The 2.6 Trillion Birr MSME Credit Gap",
    excerpt:
      "Visualizing the financing shortfall holding back small businesses across Ethiopia.",
    body: `Micro, small, and medium enterprises account for the majority of jobs in Ethiopia, yet formal credit reaches only a fraction of viable firms. We estimate a birr-denominated gap between latent demand for working capital and what the banking system supplies.

The visualization contrasts supply-side constraints—collateral rules, NPL cycles, FX rationing—with demand from trade, manufacturing, and services. Draft stories in the admin stay off the public site until you publish them.`,
    author: "Sara Tekle",
    category: "Economy",
    categoryStyle: "economy",
    status: "draft",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYhfhfLsrraetKa9fzi3IcNHbLJ6spy7XmW5YJU5u5dK9dT05WC7wJMO5tcbhN2HNVdgHuW3yTuCWRberMADSCKHROKqCL96VRlNM6xTcPKjzvd6kyWHZutgxU3-GLhHNcGjsFMlErAMojq8NoXvPmNJK0ZPRCDQ0FJphPsSd40wcxPaJKYvprimv17WmdbpNAUaCoUJ7bmLNmJgblKDQSpWfyi-IKTwRGIdGXohGI2-KvfINRlUCYJRBs3wL6H2225dE8M4N_VQ",
    metaDescription:
      "Data story on MSME financing gaps and credit market structure in Ethiopia.",
    publishedAt: "2023-10-23T16:45:00.000Z",
    createdAt: "2023-10-22T11:00:00.000Z",
    updatedAt: now,
    tags: ["ECONOMY", "MSMES"],
  },
  {
    id: "3",
    slug: "ethio-telecom-digital-frontier",
    title: "Ethio Telecom's Digital Frontier",
    excerpt:
      "Subscribers, coverage, and the race between legacy telco scale and fintech velocity.",
    body: `Ethio Telecom sits at the intersection of infrastructure and finance: mobile money, data bundles, and enterprise fiber. We compare reported subscriber growth with independent benchmarks where available.

Telebirr’s adoption curve is contrasted with regional peers to frame Ethiopia’s digital payments trajectory. Editors can update this narrative from the admin story editor; changes sync to the homepage grid and archive pagination automatically.`,
    author: "Mekdes Abebe",
    category: "Digital Frontier",
    categoryStyle: "digital",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3kSHjIJCkfx01ulyaZyB-0oJIPEIJBeKuG5eFsY9xb2ldhzMivWCXtWWyfhhGjmpZvH7kFdKzjW9VODgnYNd99mpZaULfmPtnykRVX14JWRFxrUqZ-G1zHEz1u7jXdlBo6SHVDZwrtOFnxFsewI68r3LtHSufVHvCUlI9E3LGDfxH5SEi6B120kw_KocZLbNt2FPHm0E9k9LnFCwBe2s_gF9oirGSLECA3ni7pf1H9B1oh0I2ZDKuWrKGAh__WdR0btp-XWidsg",
    metaDescription:
      "Telecom and mobile money trends shaping Ethiopia’s digital economy.",
    publishedAt: "2023-10-22T11:20:00.000Z",
    createdAt: "2023-10-21T09:00:00.000Z",
    updatedAt: now,
    tags: ["DIGITAL", "TELECOM"],
  },
  {
    id: "4",
    slug: "silicon-savannah-shift",
    title: "The Silicon Savannah Shift",
    excerpt:
      "How East Africa’s startup corridors are reallocating talent and venture attention.",
    body: `Nairobi, Kigali, and Addis Ababa compete for the same pool of product and data talent. This note tracks funding announcements, accelerator cohorts, and policy signals—without pretending the dataset is complete.

Use the admin tools to add new pages; they appear in the news archive once published, with URLs like /news/your-slug.`,
    author: "Thomas K.",
    category: "Tech",
    categoryStyle: "tech",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdK7vJOsMvIT0FUIitOhEOt4aKuJPLGWK2GG2Bl4r5okiVp9imNIMi5d3w51DBgbqbAnpuPGHDmF8TkCpgEtn_do6960WgEsZ3S7XWhMBvRUn2M-snKD3lOzgi46S-l36e8wySSU9f7nHUB8daU44IkFUXcW06M1M0e_ks5C2aCJiWONyiqN9ufKu6r7aTRstzyVGpARFcWylHop-rJIvH11ezv_Pxas4gXWt6UTDNAf47gEFhhFDu-H7sDfput15VMzU4jWTn7A",
    metaDescription:
      "Startup and venture trends across East African tech hubs.",
    publishedAt: "2023-10-20T08:00:00.000Z",
    createdAt: "2023-10-18T12:00:00.000Z",
    updatedAt: now,
    tags: ["TECH", "VENTURE"],
  },
  {
    id: "5",
    slug: "coffee-revenue-flows",
    title: "Where Does Ethiopia’s Coffee Money Actually Go?",
    excerpt:
      "Tracing revenue from smallholders to export markets and FX reserves.",
    body: `Coffee remains Ethiopia’s signature export. We map declared export values against farm-gate prices and logistics costs to show where value accumulates.

This is sample archive content so pagination has more than one page at nine stories per view.`,
    author: "Sara Tekle",
    category: "Trade / Agriculture",
    categoryStyle: "economy",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtFz9IV9TDzLRKTgCOnTF3BiexUMWgWeYDCod-aE3LG8GS4yw75NHC7gpf6LYe93R1AFFOqKExvFsjrLXh6ocwTpxxrvtrKoo34jCUaIuO2b3UShP1_mSTUIWe3YJupDqWvSjttKO2IzL7UFz2VZu8Ch9ADcTr89Ao9nt0e5mWIVlYB7lQ1N4DHOna9DGWecdTaT3eomMPgvosH-DEpK2HBfkNK4Xd3vD34FB489fdp-SOXqdehupqruMdQlnDV1yQG0q6ICo_DQ",
    metaDescription: "Coffee export value chains and farmer share.",
    publishedAt: "2023-10-19T14:00:00.000Z",
    createdAt: "2023-10-19T10:00:00.000Z",
    updatedAt: now,
  },
  {
    id: "6",
    slug: "population-highlands-choropleth",
    title: "Where 120 Million People Actually Live",
    excerpt:
      "A choropleth view of density, highland concentration, and urban sprawl.",
    body: `Administrative boundaries hide granular settlement patterns. We aggregate census-based estimates into a readable map narrative for policymakers and readers.

Published stories surface on the home grid and in /news with working pagination controls.`,
    author: "Elias Gebreselassie",
    category: "Demographics / Maps",
    categoryStyle: "digital",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKcbeX9ZWLCLgnlv-LMuMu6jNQyl7F4scvWdzxwc9Y69Ns1gcirNXTfmk1uRqvUXGy3q__OgQsO4ZOkXvwBMt9HEercKAMWOtfxlvBkGpycQHLhjjQCNg3z-0GZprUSXQ-fI1otq7mr0QrJV56_PtfrzPLsL_Y0b5Y24IySAII3gNW_5dVM4RbWdrMg9axZKjoHY1QnLwtD0cZuRXPnWjpMecgxmDzDWm34R0EwW156SiQ9B4wM65riF2freXc7Pf6OeN0-DLJaQ",
    metaDescription: "Population density and urban growth in Ethiopia.",
    publishedAt: "2023-10-18T10:00:00.000Z",
    createdAt: "2023-10-17T09:00:00.000Z",
    updatedAt: now,
  },
  {
    id: "7",
    slug: "internet-speed-by-region",
    title: "Your Internet Speed Depends on Where You Live",
    excerpt:
      "Urban fiber versus rural wireless: a connectivity divide in numbers.",
    body: `Median download speeds diverge sharply between Addis Ababa and peripheral towns. We standardize on crowdsourced and operator-reported samples, clearly labeling limitations.

Create complementary explainers from admin; they join this archive once marked published.`,
    author: "Thomas K.",
    category: "Tech / Infrastructure",
    categoryStyle: "tech",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCo0UM76G3zD7TzaDHk8V2OEN7R5OnyuVVZBnj7Ur58LW8eWV0ErxW2QTY91v-ziOfe2oxY4YFT1qyc0t9jMZvGeNq1TcgIumFMIorDeByMt4Z7nHYEEJ6a9CUfyLCmIHpWW0OOQ-Luge3nwojBoftjLrs9rLGFucBD-i45fF6MPP2G9lxcUYlutEGxod3eV36OukalxcOKvo1e6E1NKlLAa0032P7tG1R2K6LD025sJHsjw8rZojqwpgoXUGwbxP00QAYGPVaSXw",
    metaDescription: "Regional internet performance and infrastructure gaps.",
    publishedAt: "2023-10-17T12:00:00.000Z",
    createdAt: "2023-10-16T11:00:00.000Z",
    updatedAt: now,
  },
  {
    id: "8",
    slug: "fuel-subsidy-removal-ripple",
    title: "Fuel Prices Have Never Been This High",
    excerpt:
      "Subsidy reform, transport costs, and second-round effects on food baskets.",
    body: `Pump prices anchor expectations for logistics and agriculture. We visualize the step-change after subsidy adjustments and correlate with selected food indices.

This sample supports multi-page archives on both home and /news routes.`,
    author: "Mekdes Abebe",
    category: "Energy / Costs",
    categoryStyle: "economy",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEHyplmHjZnRSK3UHGyaTmEpQh4H74ISiQ-MJgzHJgFHZ3_CWOO5qAKWe52Hah9W_bYoJkybREL_PXYD2yCOuMB8xcV5qTWTbkxuVyVDgo0zHQh9j97rvtxwfRFCVxMzmsOMoglAZu1JuPFYlc2zlEZwLT7jeAn8SbNG8NiHxHvOrx0RZdqjgpRBqRzEbr8GoBwJKdIdXNJaviFrr8zw3pMgJRursQpvF-WhvaeNaZfel9tAjQXk-nCsa_EiI4cUsMEZm-KmNB_g",
    metaDescription: "Fuel price dynamics and consumer impact in Ethiopia.",
    publishedAt: "2023-10-16T09:00:00.000Z",
    createdAt: "2023-10-15T08:00:00.000Z",
    updatedAt: now,
  },
  {
    id: "9",
    slug: "youth-unemployment-three-in-ten",
    title: "3 Out of 10 Young Ethiopians Are Unemployed",
    excerpt:
      "Demographic pressure, education pipelines, and private-sector job creation.",
    body: `Youth unemployment ratios vary by definition. Here we align with labor-force surveys and show how urban informality complicates the headline.

Drafts remain admin-only until you publish from the story editor.`,
    author: "Elias Gebreselassie",
    category: "Labor / Society",
    categoryStyle: "digital",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRbx9AR2lhr3hSjxTDmIFiMuoNG5FPo5Bm3n9GBTBdlUjhUjM33uohn23NM8CF6kZrj5188GDgjROyYEj6ewNGlO72_qJhkAJbmWDNv2l1cPUDdfU6BNGRp9HTC0Mme8k64cMr88JEJOuJs7810X9N7rlS_jR5hOSqJvhkq54TPFxYUj9HO3Re9eHbXOOmR-FVuy-LRcfflai7Jstjg76-aPjqVTWKRF11rDAvNGm-1TIrVh7jBY9ps7V2wbRd6vi2svxtqQnnw",
    metaDescription: "Youth unemployment and labor market structure.",
    publishedAt: "2023-10-15T07:00:00.000Z",
    createdAt: "2023-10-14T06:00:00.000Z",
    updatedAt: now,
  },
  {
    id: "10",
    slug: "purchasing-power-thousand-birr",
    title: "What 1,000 Birr Could Buy Then vs Now",
    excerpt:
      "A visceral comparison of basket erosion and inflation memory.",
    body: `We construct a simple staple basket and re-price it across years. The goal is intuition, not a consumer price index replacement.

New admin-created pages use the same body field and appear here after publish.`,
    author: "Sara Tekle",
    category: "Money / Inflation",
    categoryStyle: "economy",
    status: "published",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM5DC61yw_glcLT3bGq-kqyUqGOOuHlO6lFsigCN0W0NvafnVaCB9KJgiCNVYSibRQUzZYdnoIqoUQmoQ7HyXvzlrCbsvrzqZ8DvUYGMEX3PvmGUU2nnxvxvjrJx3ioS2K9HpjQQJZvUjLQFT0H5dpCdPz9KMInlsfgJf8hKhjSTN1HLmjWadxhSZLwpSsGHqbwHUmKZQ4wwPlpmgo5kk8kXGyhGrV4hC8tcw6TRRXsV6-MPMc9PmQ1h6ibFiX7Hl1r4KMj-mBlg",
    metaDescription: "Inflation and purchasing power over time.",
    publishedAt: "2023-10-14T06:00:00.000Z",
    createdAt: "2023-10-13T05:00:00.000Z",
    updatedAt: now,
  },
];
