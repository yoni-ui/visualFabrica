import Link from "next/link";

export default function MarketsPage() {
  return (
    <main className="mx-auto max-w-[1440px] px-6 py-24 md:px-10">
      <h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
        Markets
      </h1>
      <p className="mt-4 max-w-xl font-body text-lg text-on-surface-variant">
        Desk coverage is in preparation. Open the{" "}
        <Link
          href="/economy/birr-collapse"
          className="text-primary underline-offset-4 hover:underline"
          prefetch
        >
          Ethiopia economy feature
        </Link>{" "}
        or{" "}
        <Link href="/" className="text-primary underline-offset-4 hover:underline" prefetch>
          return home
        </Link>
        .
      </p>
    </main>
  );
}
