import type { ReactNode } from "react";

type Props = {
  nav: ReactNode;
  children: ReactNode;
};

/**
 * Max 1440px wide, 1280px tall: nav unchanged; content scrolls below.
 */
export function EditorialViewportShell({ nav, children }: Props) {
  return (
    <div className="editorial-fixed-viewport mx-auto flex w-full flex-col overflow-hidden">
      {nav}
      <div className="editorial-fixed-viewport-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
