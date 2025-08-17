import { create } from "zustand";

interface RegisterFormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
  skill?: string;
  otherSkill?: string;
  bio?: string;
  role?: string;
   photo?: null;
   businessPhoto? : null;
  // actions
  updateField: (field: string, value: string) => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterFormState>((set) => ({
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  skill: "",
  otherSkill: "",
  bio: "",
  role: "",


  updateField: (field, value) => set({ [field]: value } as any),
  reset: () => set({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    skill: "",
    otherSkill: "",
    bio: "",
    role: ""
  }),
}));
