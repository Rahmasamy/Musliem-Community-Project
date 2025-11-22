import { createProduct } from "@/services/productService";
import { create } from "zustand";
export const useProductStore = create((set) => ({
    products: [],
    loading: false,
    error: null,
    createProduct: async (productData) => {
        try {
            set({ loading: true });
            const product = await createProduct(productData);
            set((state) => ({ products: [...state.products, product], loading: false }));
        }
        catch (err) {
            set({ error: err.message, loading: false });
        }
    }
}));
