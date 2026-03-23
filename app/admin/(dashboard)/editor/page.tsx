import type { Metadata } from "next";
import { Suspense } from "react";
import { StoryEditorClient } from "@/components/admin/StoryEditorClient";

export const metadata: Metadata = {
  title: "Story editor",
};

export default function AdminEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 font-body text-on-surface-variant">
          Loading editor…
        </div>
      }
    >
      <StoryEditorClient />
    </Suspense>
  );
}
