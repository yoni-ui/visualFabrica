import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-16">
      <div className="w-full max-w-md">
        <Breadcrumbs variant="admin" className="mb-8 text-on-surface-variant [&_span[aria-current=page]]:text-on-surface" />
        <Suspense fallback={<div className="font-label text-on-surface-variant">Loading…</div>}>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
