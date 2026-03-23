/** Demo media cards for admin library (stories live in `data/stories.json`). */

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
