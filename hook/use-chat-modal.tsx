import { create } from "zustand";

type ChatModalStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useChatModal = create<ChatModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));