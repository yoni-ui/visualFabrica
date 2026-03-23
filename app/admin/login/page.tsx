import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 py-16">
      <Suspense fallback={<div className="font-label text-on-surface-variant">Loading…</div>}>
        <AdminLoginForm />
      </Suspense>
    </div>
  );
}
