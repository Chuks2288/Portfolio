import { create } from "zustand";

type MenuModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useMenuModal = create<MenuModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));