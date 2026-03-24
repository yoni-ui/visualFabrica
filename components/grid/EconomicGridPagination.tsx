export function EconomicGridPagination() {
  return (
    <div className="mx-auto flex w-full items-center justify-center border-t border-[#e4e2e1] py-20">
      <nav className="flex items-center gap-2 font-sans-headline">
        <a
          className="border border-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
          href="#"
        >
          Previous
        </a>
        <div className="flex items-center gap-1">
          <a
            className="flex h-10 w-10 items-center justify-center bg-black text-sm font-bold text-white"
            href="#"
          >
            1
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center border border-transparent text-sm font-bold text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
            href="#"
          >
            2
          </a>
          <a
            className="flex h-10 w-10 items-center justify-center border border-transparent text-sm font-bold text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
            href="#"
          >
            3
          </a>
          <span className="flex h-10 w-10 items-center justify-center text-sm font-bold text-secondary">
            ...
          </span>
          <a
            className="flex h-10 w-10 items-center justify-center border border-transparent text-sm font-bold text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
            href="#"
          >
            10
          </a>
        </div>
        <a
          className="border border-transparent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-secondary transition-all hover:border-[#e4e2e1] hover:text-black"
          href="#"
        >
          Next
        </a>
      </nav>
    </div>
  );
}
