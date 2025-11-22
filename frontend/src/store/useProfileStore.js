import { create } from "zustand";
import axiosInstance from "@/api/authApi";
import { clearAccessToken } from "@/utils/tokenUtils";
import { deleteProduct, updateProduct } from "@/services/productService";
import { useAuthStore } from "./authStore";
export const useProfileStore = create((set) => ({
    profile: null,
    loading: false,
    error: null,
    products: [],
    getMyProfile: async () => {
        try {
            set({ loading: true, error: null });
            const res = await axiosInstance.get("/profile/me");
            console.log("get my profile", res);
            set({ profile: res.data, loading: false });
            // Mirror into auth store
            const authState = useAuthStore.getState();
            const currentUser = authState.user;
            authState.setUser(currentUser ? { ...currentUser, ...res.data } : res.data);
        }
        catch (err) {
            set({
                error: err.response?.data?.message || "Failed to load profile",
                loading: false,
            });
        }
    },
    updateMyProfile: async (updates) => {
        try {
            set({ loading: true });
            const res = await axiosInstance.put(`/profile`, updates);
            set((state) => ({
                profile: { ...state.profile, ...res.data },
                loading: false,
            }));
            // Mirror into auth store
            const authState = useAuthStore.getState();
            const currentUser = authState.user;
            authState.setUser(currentUser ? { ...currentUser, ...res.data } : res.data);
        }
        catch (err) {
            set({
                error: err.response?.data?.message || "Failed to update profile",
                loading: false,
            });
        }
    },
    createProfile: async (data) => {
        try {
            set({ loading: true });
            const res = await axiosInstance.post("/profile", data);
            set({ profile: res.data, loading: false });
            // Mirror into auth store
            const authState = useAuthStore.getState();
            const currentUser = authState.user;
            authState.setUser(currentUser ? { ...currentUser, ...res.data } : res.data);
        }
        catch (err) {
            set({
                error: err.response?.data?.message || "Failed to create profile",
                loading: false,
            });
        }
    },
    logout: async () => {
        try {
            set({ loading: true });
            const res = await axiosInstance.post("/profile/logout", {}, { withCredentials: true });
            clearAccessToken();
            localStorage.removeItem("auth-storage");
            set({ profile: null });
            // Mirror into auth store
            const authState = useAuthStore.getState();
            authState.setUser(null);
        }
        catch (err) {
            set({
                error: err.response?.data?.message || "Failed to create profile",
                loading: false,
            });
        }
    },
    delteProfile: async () => {
        try {
            set({ loading: true });
            const res = await axiosInstance.delete("/profile");
            clearAccessToken();
            localStorage.removeItem("auth-storage");
            set({ profile: null });
            // Mirror into auth store
            const authState = useAuthStore.getState();
            authState.setUser(null);
        }
        catch (err) {
            set({
                error: err.response?.data?.message || "Failed to create profile",
                loading: false,
            });
        }
    },
    getUserProducts: async () => {
        try {
            const res = await axiosInstance.get("/profile/products");
            console.log("products", res.data);
            set({ products: res.data, loading: false });
        }
        catch {
            set({ products: [], loading: false, error: "Failed to fetch products" });
        }
    },
    getUserAds: async () => {
        try {
            const res = await axiosInstance.get("/advertisements/my");
            return res.data;
        }
        catch {
            return [];
        }
    },
    updateProduct: async (id, productData) => {
        try {
            set({ loading: true });
            const updated = await updateProduct(id, productData);
            set((state) => ({
                products: state.products.map((p) => (p._id === id ? updated : p)),
                loading: false,
            }));
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
    deleteProduct: async (id) => {
        try {
            set({ loading: true });
            await deleteProduct(id);
            set((state) => ({
                products: state.products.filter((p) => p._id !== id),
                loading: false,
            }));
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    },
}));
