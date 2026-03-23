import Link from "next/link";

type Props = {
  page: number;
  totalPages: number;
  basePath: string;
};

export function StoriesPagination({ page, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null;

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  const href = (p: number) =>
    `${basePath}${basePath.includes("?") ? "&" : "?"}page=${p}`;

  const windowSize = 5;
  let start = Math.max(1, page - Math.floor(windowSize / 2));
  let end = Math.min(totalPages, start + windowSize - 1);
  start = Math.max(1, end - windowSize + 1);
  const nums: number[] = [];
  for (let i = start; i <= end; i += 1) nums.push(i);

  return (
    <div className="mx-auto flex max-w-[1920px] items-center justify-center border-t border-[#e4e2e1] py-20">
      <nav className="flex items-center gap-2 font-sans-headline" aria-label="Pagination">
        {prev ? (
          <Link
            className="border border-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
            href={href(prev)}
            prefetch={false}
          >
            Previous
          </Link>
        ) : (
          <span className="border border-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-secondary/40">
            Previous
          </span>
        )}
        <div className="flex items-center gap-1">
          {start > 1 ? (
            <>
              <Link
                className="flex h-10 w-10 items-center justify-center border border-transparent text-sm font-bold text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
                href={href(1)}
                prefetch={false}
              >
                1
              </Link>
              {start > 2 ? (
                <span className="flex h-10 w-10 items-center justify-center text-sm font-bold text-secondary">
                  …
                </span>
              ) : null}
            </>
          ) : null}
          {nums.map((n) => (
            <Link
              key={n}
              href={href(n)}
              prefetch={false}
              className={
                n === page
                  ? "flex h-10 w-10 items-center justify-center bg-black text-sm font-bold text-white"
                  : "flex h-10 w-10 items-center justify-center border border-transparent text-sm font-bold text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
              }
              aria-current={n === page ? "page" : undefined}
            >
              {n}
            </Link>
          ))}
          {end < totalPages ? (
            <>
              {end < totalPages - 1 ? (
                <span className="flex h-10 w-10 items-center justify-center text-sm font-bold text-secondary">
                  …
                </span>
              ) : null}
              <Link
                className="flex h-10 w-10 items-center justify-center border border-transparent text-sm font-bold text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
                href={href(totalPages)}
                prefetch={false}
              >
                {totalPages}
              </Link>
            </>
          ) : null}
        </div>
        {next ? (
          <Link
            className="border border-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
            href={href(next)}
            prefetch={false}
          >
            Next
          </Link>
        ) : (
          <span className="border border-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-secondary/40">
            Next
          </span>
        )}
      </nav>
    </div>
  );
}
