export function InsightHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-4" id={id}>
      <div
        className="h-8 w-1 shrink-0 bg-primary-container"
        aria-hidden
      />
      <h3 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
        {children}
      </h3>
    </div>
  );
}
