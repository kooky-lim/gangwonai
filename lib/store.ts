import { create } from "zustand";

interface UIState {
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isContactOpen: false,
    openContact: () => set({ isContactOpen: true }),
    closeContact: () => set({ isContactOpen: false }),
}));
