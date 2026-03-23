export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96) || "story";
}

export function uniqueSlug(base: string, existing: Set<string>): string {
  let s = base;
  let n = 2;
  while (existing.has(s)) {
    s = `${base}-${n}`;
    n += 1;
  }
  return s;
}
