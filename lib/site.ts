export type SiteRoute = {
  href: string;
  label: string;
  section?: string;
  description?: string;
};

export const stories: SiteRoute[] = [
  {
    href: "/economy/birr-collapse",
    label: "The Birr Collapse",
    section: "Macroeconomics",
    description: "A decade of devaluation (2015–2026), editorial infographic.",
  },
];
