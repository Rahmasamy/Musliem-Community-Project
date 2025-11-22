import authService from '@/services/authService';
import { setAccessToken } from '@/utils/tokenUtils';
import { create } from "zustand";
import { persist } from "zustand/middleware"; // 👈 مهم
import { useProfileStore } from './useProfileStore';
export const useAuthStore = create()(persist((set) => ({
    user: null,
    accessToken: null,
    loading: false,
    error: '',
    login: async (LoginPayload) => {
        const data = await authService.login(LoginPayload);
        setAccessToken(data.token);
        set({ user: data, accessToken: data.token });
        setAccessToken(data.token);
        set({ user: data, accessToken: data.token });
        const profileStore = useProfileStore.getState();
        await profileStore.getMyProfile();
        return data;
    },
    setUser: (user) => set({ user }),
    register: async (payload) => {
        const data = await authService.register(payload);
        setAccessToken(data.token);
        set({ user: data, accessToken: data.token });
        const profileStore = useProfileStore.getState();
        await profileStore.getMyProfile();
    },
    refresh: async () => {
        const data = await authService.refershToken();
        setAccessToken(data.accessToken);
        set({ accessToken: data.accessToken });
    },
    forgotPassword: async (payload) => {
        const response = await authService.forgotPassword(payload);
        set({ message: response.message });
    },
    verifyResetCode: async (payload) => {
        const response = await authService.verifyResetCode(payload);
        console.log("auth store", response.token);
        setAccessToken(response.token);
        set({ message: response.message, accessToken: response.token });
        const profileStore = useProfileStore.getState();
        await profileStore.getMyProfile();
        return response;
    },
    resetPassword: async (payload, token) => {
        const response = await authService.resetPassword({ ...payload }, token);
        set({ message: response.message });
    }
}), {
    name: "auth-storage", // 👈 هيخزن البيانات في localStorage
    partialize: (state) => ({ accessToken: state.accessToken, user: state.user }) // هنخزن بس الحاجات المهمة
}));
