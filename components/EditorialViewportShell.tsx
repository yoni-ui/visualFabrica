import type { ReactNode } from "react";

type Props = {
  nav: ReactNode;
  children: ReactNode;
};

/**
 * Fixed 1280px-tall column: nav stays natural size; rest scrolls inside.
 */
export function EditorialViewportShell({ nav, children }: Props) {
  return (
    <div className="editorial-fixed-viewport flex w-full flex-col overflow-hidden">
      {nav}
      <div className="editorial-fixed-viewport-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
