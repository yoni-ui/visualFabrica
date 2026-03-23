import Link from "next/link";
import { notFound } from "next/navigation";

const titles: Record<string, string> = {
  about: "About",
  contact: "Contact",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  archive: "Archive",
};

export function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = titles[slug];
  if (!title) notFound();

  return (
    <main className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
      <p className="mb-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">
        VisualFabrica
      </p>
      <h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
        {title}
      </h1>
      <p className="mt-6 max-w-xl font-body text-lg text-on-surface-variant">
        This section is a placeholder for editorial site chrome. Return to the{" "}
        <Link href="/" className="text-primary underline-offset-4 hover:underline" prefetch>
          home hub
        </Link>
        .
      </p>
    </main>
  );
}
