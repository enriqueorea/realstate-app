import { create } from "zustand";

interface UiStore {
  isSidebarOpen: boolean;
  toggleSidebarOpen: (v: boolean) => void;
}

const useUiStore = create<UiStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebarOpen: (value) =>
    set((state) => ({ ...state, isSidebarOpen: value })),
}));

export default useUiStore;
