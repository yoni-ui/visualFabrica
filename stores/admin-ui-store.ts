import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * Client UI state for the admin shell (persists sidebar + list filters).
 * Auth stays on httpOnly cookies — never put credentials or tokens here.
 */
export type AdminUIState = {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (v: boolean) => void;
  toggleSidebar: () => void;
  contentQuickFilter: string;
  setContentQuickFilter: (v: string) => void;
  mediaAssetFilter: string;
  setMediaAssetFilter: (v: string) => void;
  /** Ephemeral — not persisted */
  topBarSearch: string;
  setTopBarSearch: (v: string) => void;
};

export const useAdminUIStore = create<AdminUIState>()(
  persist(
    (set) => ({
      sidebarCollapsed: false,
      setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
      toggleSidebar: () =>
        set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
      contentQuickFilter: "all",
      setContentQuickFilter: (contentQuickFilter) => set({ contentQuickFilter }),
      mediaAssetFilter: "all",
      setMediaAssetFilter: (mediaAssetFilter) => set({ mediaAssetFilter }),
      topBarSearch: "",
      setTopBarSearch: (topBarSearch) => set({ topBarSearch }),
    }),
    {
      name: "vf-admin-ui-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sidebarCollapsed: state.sidebarCollapsed,
        contentQuickFilter: state.contentQuickFilter,
        mediaAssetFilter: state.mediaAssetFilter,
      }),
    },
  ),
);
