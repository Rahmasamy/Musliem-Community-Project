import { create } from "zustand";
export const useRegisterStore = create((set) => ({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    skill: "",
    otherSkill: "",
    bio: "",
    role: "",
    updateField: (field, value) => set({ [field]: value }),
    reset: () => set({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        skill: "",
        otherSkill: "",
        bio: "",
        role: "",
    }),
}));
