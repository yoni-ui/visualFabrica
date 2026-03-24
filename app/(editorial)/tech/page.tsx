import Link from "next/link";

export default function TechPage() {
  return (
    <main className="mx-auto w-full px-6 py-24 md:px-10">
      <h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
        Tech
      </h1>
      <p className="mt-4 max-w-xl font-body text-lg text-on-surface-variant">
        Stories coming soon.{" "}
        <Link href="/" className="text-primary underline-offset-4 hover:underline" prefetch>
          Back to hub
        </Link>
        .
      </p>
    </main>
  );
}
