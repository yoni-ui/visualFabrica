import type { Metadata } from "next";
import { StoryEditorClient } from "@/components/admin/StoryEditorClient";

export const metadata: Metadata = {
  title: "Story editor",
};

export default function AdminEditorPage() {
  return <StoryEditorClient />;
}
