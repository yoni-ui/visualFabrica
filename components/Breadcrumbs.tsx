"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";

const SEGMENT_LABELS: Record<string, string> = {
  markets: "Markets",
  economy: "Economy",
  tech: "Tech",
  news: "News",
  "birr-collapse": "Birr collapse",
  about: "About",
  contact: "Contact",
  privacy: "Privacy policy",
  terms: "Terms of service",
  admin: "Admin",
  login: "Sign in",
  content: "Content",
  editor: "Story editor",
  media: "Media library",
  analytics: "Analytics",
};

function humanize(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export type Crumb = { href: string; label: string; current?: boolean };

/** Avoid linking to routes that have no index page. */
function segmentHref(parts: string[], endIndex: number): string {
  const path = `/${parts.slice(0, endIndex + 1).join("/")}`;
  if (path === "/economy") return "/economy/birr-collapse";
  return path;
}

function buildPublicCrumbs(pathname: string): Crumb[] {
  if (pathname === "/") {
    return [{ href: "/", label: "Home", current: true }];
  }

  const parts = pathname.split("/").filter(Boolean);
  const out: Crumb[] = [{ href: "/", label: "Home" }];

  if (parts[0] === "s" && parts[1]) {
    out.push({
      href: `/s/${parts[1]}`,
      label: SEGMENT_LABELS[parts[1]] ?? humanize(parts[1]),
      current: true,
    });
    return out;
  }

  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    const isLast = i === parts.length - 1;
    const href = segmentHref(parts, i);
    const label = SEGMENT_LABELS[seg] ?? humanize(seg);
    out.push({ href, label, current: isLast });
  }

  return out;
}

function buildAdminCrumbs(pathname: string): Crumb[] {
  if (pathname === "/admin" || pathname === "/admin/") {
    return [{ href: "/admin/content", label: "Admin", current: true }];
  }

  if (pathname.startsWith("/admin/login")) {
    return [
      { href: "/admin/content", label: "Admin" },
      { href: pathname, label: "Sign in", current: true },
    ];
  }

  const rest = pathname.replace(/^\/admin\/?/, "").split("/").filter(Boolean);
  const out: Crumb[] = [{ href: "/admin/content", label: "Admin" }];
  let acc = "/admin";

  for (let i = 0; i < rest.length; i++) {
    const seg = rest[i];
    acc += `/${seg}`;
    const isLast = i === rest.length - 1;
    const label = SEGMENT_LABELS[seg] ?? humanize(seg);
    out.push({ href: acc, label, current: isLast });
  }

  return out;
}

type Props = { variant: "public" | "admin"; className?: string };

function BreadcrumbsInner({ variant, className = "" }: Props) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const [newsTitle, setNewsTitle] = useState<string | null>(null);
  const [editorTitle, setEditorTitle] = useState<string | null>(null);

  const crumbs = useMemo(() => {
    if (variant === "admin") return buildAdminCrumbs(pathname);
    return buildPublicCrumbs(pathname);
  }, [pathname, variant]);

  const newsSlug = pathname.match(/^\/news\/([^/]+)$/)?.[1];
  const editorStoryId =
    variant === "admin" && pathname === "/admin/editor"
      ? searchParams.get("id")
      : null;

  useEffect(() => {
    if (!newsSlug) {
      setNewsTitle(null);
      return;
    }
    let cancelled = false;
    fetch(`/api/stories/${encodeURIComponent(newsSlug)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { title?: string } | null) => {
        if (!cancelled && data?.title) setNewsTitle(data.title);
        else if (!cancelled) setNewsTitle(null);
      })
      .catch(() => {
        if (!cancelled) setNewsTitle(null);
      });
    return () => {
      cancelled = true;
    };
  }, [newsSlug]);

  useEffect(() => {
    if (!editorStoryId) {
      setEditorTitle(null);
      return;
    }
    let cancelled = false;
    fetch(`/api/admin/stories/${encodeURIComponent(editorStoryId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { story?: { title?: string } } | null) => {
        if (!cancelled && data?.story?.title) setEditorTitle(data.story.title);
        else if (!cancelled) setEditorTitle(null);
      })
      .catch(() => {
        if (!cancelled) setEditorTitle(null);
      });
    return () => {
      cancelled = true;
    };
  }, [editorStoryId]);

  const displayCrumbs = useMemo(() => {
    let out = crumbs;
    if (newsSlug && out.length >= 2) {
      const last = out[out.length - 1];
      if (last?.current) {
        const label = newsTitle ?? last.label;
        out = [...out.slice(0, -1), { ...last, label }];
      }
    }
    if (editorStoryId && out.length >= 2) {
      const last = out[out.length - 1];
      if (last?.current && editorTitle) {
        out = [...out.slice(0, -1), { ...last, label: editorTitle }];
      }
    }
    return out;
  }, [crumbs, newsSlug, newsTitle, editorStoryId, editorTitle]);

  if (displayCrumbs.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {displayCrumbs.map((c, i) => (
          <li key={`${c.href}-${i}`} className="flex items-center gap-2">
            {i > 0 ? (
              <span className="text-on-surface-variant/40" aria-hidden>
                /
              </span>
            ) : null}
            {c.current ? (
              <span
                className="max-w-[min(100vw-4rem,28rem)] truncate text-on-surface"
                aria-current="page"
              >
                {c.label}
              </span>
            ) : (
              <Link
                href={c.href}
                prefetch={c.href.startsWith("/admin") ? false : undefined}
                className="text-on-surface-variant transition-colors hover:text-primary"
              >
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Breadcrumbs(props: Props) {
  return (
    <Suspense
      fallback={
        <div
          className={`min-h-[1.25rem] font-label text-[10px] uppercase tracking-[0.18em] text-transparent ${props.className ?? ""}`}
          aria-hidden
        >
          ·
        </div>
      }
    >
      <BreadcrumbsInner {...props} />
    </Suspense>
  );
}
