/** Demo rows for admin tables / grids (replace with CMS API later). */

export type AdminStoryRow = {
  id: string;
  title: string;
  author: string;
  thumb: string;
  category: string;
  categoryStyle: "economy" | "digital" | "tech";
  status: "published" | "draft";
  date: string;
  time: string;
};

export const ADMIN_STORIES: AdminStoryRow[] = [
  {
    id: "1",
    title: "The Birr Collapse",
    author: "Elias Gebreselassie",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDSiFgQrIV6cOOwZC1GL2jLgxvjOkqn3_C4OZO89sYN8fpMzOjIkw9eYI7BnU_mY4oHO_cLuZpWUI2bIbbaPxC5k1CurcjP44UT4kF3iCdyiHF5iN38BuzbV0KJrcIHyE8hrhD4kM4ECB2wypFbDkn2n1fCC1Qi5AJKh1GoXgxYzDv0SNlBwR1DLB68QS4VKy-UJIpqK9ngO_BKfcDuCBUG5j05Od6WAcRi3Rnst9GZzmjqlijBqG3YCmbKFuHsIJrCtSxE8t_VA",
    category: "Economy",
    categoryStyle: "economy",
    status: "published",
    date: "Oct 24, 2023",
    time: "09:12 AM",
  },
  {
    id: "2",
    title: "The 2.6 Trillion Birr MSME Credit Gap",
    author: "Sara Tekle",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYhfhfLsrraetKa9fzi3IcNHbLJ6spy7XmW5YJU5u5dK9dT05WC7wJMO5tcbhN2HNVdgHuW3yTuCWRberMADSCKHROKqCL96VRlNM6xTcPKjzvd6kyWHZutgxU3-GLhHNcGjsFMlErAMojq8NoXvPmNJK0ZPRCDQ0FJphPsSd40wcxPaJKYvprimv17WmdbpNAUaCoUJ7bmLNmJgblKDQSpWfyi-IKTwRGIdGXohGI2-KvfINRlUCYJRBs3wL6H2225dE8M4N_VQ",
    category: "Economy",
    categoryStyle: "economy",
    status: "draft",
    date: "Oct 23, 2023",
    time: "04:45 PM",
  },
  {
    id: "3",
    title: "Ethio Telecom's Digital Frontier",
    author: "Mekdes Abebe",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3kSHjIJCkfx01ulyaZyB-0oJIPEIJBeKuG5eFsY9xb2ldhzMivWCXtWWyfhhGjmpZvH7kFdKzjW9VODgnYNd99mpZaULfmPtnykRVX14JWRFxrUqZ-G1zHEz1u7jXdlBo6SHVDZwrtOFnxFsewI68r3LtHSufVHvCUlI9E3LGDfxH5SEi6B120kw_KocZLbNt2FPHm0E9k9LnFCwBe2s_gF9oirGSLECA3ni7pf1H9B1oh0I2ZDKuWrKGAh__WdR0btp-XWidsg",
    category: "Digital Frontier",
    categoryStyle: "digital",
    status: "published",
    date: "Oct 22, 2023",
    time: "11:20 AM",
  },
  {
    id: "4",
    title: "The Silicon Savannah Shift",
    author: "Thomas K.",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdK7vJOsMvIT0FUIitOhEOt4aKuJPLGWK2GG2Bl4r5okiVp9imNIMi5d3w51DBgbqbAnpuPGHDmF8TkCpgEtn_do6960WgEsZ3S7XWhMBvRUn2M-snKD3lOzgi46S-l36e8wySSU9f7nHUB8daU44IkFUXcW06M1M0e_ks5C2aCJiWONyiqN9ufKu6r7aTRstzyVGpARFcWylHop-rJIvH11ezv_Pxas4gXWt6UTDNAf47gEFhhFDu-H7sDfput15VMzU4jWTn7A",
    category: "Tech",
    categoryStyle: "tech",
    status: "published",
    date: "Oct 20, 2023",
    time: "08:00 AM",
  },
];

export type AdminMediaCard = {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  thumb?: string;
  meta: string;
  date: string;
  placeholderIcon?: boolean;
};

export const ADMIN_MEDIA: AdminMediaCard[] = [
  {
    id: "m1",
    title: "Birr Collapse Line Chart",
    badge: "Interactive Chart",
    badgeClass: "bg-primary text-white",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRbx9AR2lhr3hSjxTDmIFiMuoNG5FPo5Bm3n9GBTBdlUjhUjM33uohn23NM8CF6kZrj5188GDgjROyYEj6ewNGlO72_qJhkAJbmWDNv2l1cPUDdfU6BNGRp9HTC0Mme8k64cMr88JEJOuJs7810X9N7rlS_jR5hOSqJvhkq54TPFxYUj9HO3Re9eHbXOOmR-FVuy-LRcfflai7Jstjg76-aPjqVTWKRF11rDAvNGm-1TIrVh7jBY9ps7V2wbRd6vi2svxtqQnnw",
    meta: "SVG / JSON",
    date: "Oct 12, 2023",
  },
  {
    id: "m2",
    title: "Ethiopia Density Map",
    badge: "Map Layer",
    badgeClass: "bg-tertiary text-white",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM5DC61yw_glcLT3bGq-kqyUqGOOuHlO6lFsigCN0W0NvafnVaCB9KJgiCNVYSibRQUzZYdnoIqoUQmoQ7HyXvzlrCbsvrzqZ8DvUYGMEX3PvmGUU2nnxvxvjrJx3ioS2K9HpjQQJZvUjLQFT0H5dpCdPz9KMInlsfgJf8hKhjSTN1HLmjWadxhSZLwpSsGHqbwHUmKZQ4wwPlpmgo5kk8kXGyhGrV4hC8tcw6TRRXsV6-MPMc9PmQ1h6ibFiX7Hl1r4KMj-mBlg",
    meta: "GEOJSON",
    date: "Oct 11, 2023",
  },
  {
    id: "m3",
    title: "Coffee Flow Sankey",
    badge: "Interactive Chart",
    badgeClass: "bg-on-surface text-white",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBd2-B2fpOgGDttf2pGgAEavW3kxU6CtxkOYisOg6tnlpoUeeH33YcPOsh9lJvslFOMZxfdBuRcITs3oVfwOFNPLW7nkaWThBXbayN3S3-ZM4v0QEKovIlR_6SSVXB6DqBsnnZ7473LYO4Su1j_ZGe-UosmcLeNS-WGecSa1wk9rdsTeuPQlNbht9I1VGJHe5YYRYu0S-Wi2nph5gFf6ICDGuR6ZS3s8r7ZJIgbYBc1Z7dqBIpjjTjbTX7GWQZAbM0IiCtBKN8GKg",
    meta: "D3.js / SVG",
    date: "Oct 09, 2023",
  },
  {
    id: "m4",
    title: "Editorial Cover Grain",
    badge: "High-Res Image",
    badgeClass: "bg-secondary text-white",
    thumb:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCl-D-fEJ-zZk020Ik6KPXCTEAxgHadzHhqd3PFFnlmVGw8FU5zEtwlsQYr4LRx8H8ywNbFkr_qNT5o1Jyd7-PRM-Ayjbv8oVr7ZnsS93hh42Qab7pThUhf32aJAnxotE3edbrIMm1prEZzjfZC79NtVc1apfWeu14jixbwVXb2dy9f5GvZVwSIse6DaAxXuBd1Ex-gQJOq2eEfiNQHvkZIcKq_6_QFP5sg-gSJpIqO54RQk6eTcgLJ7BilWHF_n7Gnm2ucXo1kw",
    meta: "RAW / JPG",
    date: "Oct 05, 2023",
  },
];
