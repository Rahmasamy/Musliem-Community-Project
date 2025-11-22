import { create } from "zustand";
export const useResetStore = create((set) => ({
    resetToken: null,
    setResetToken: (token) => set({ resetToken: token })
}));
