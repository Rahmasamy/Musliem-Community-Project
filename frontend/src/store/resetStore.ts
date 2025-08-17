import { ResetState } from "@/utils/zustand-interfaces/ResetState";
import { create } from "zustand";

export const useResetStore = create<ResetState>((set) => ({
  resetToken: null,
  setResetToken: (token) => set({ resetToken: token })
}));