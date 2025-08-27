import { createProduct, updateProduct, deleteProduct } from "@/services/productService";
import { ProductState } from "@/utils/zustand-interfaces/ProductState";
import { create } from "zustand";

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    loading: false,
    error: null,

    createProduct: async (productData) => {
        try {
            set({ loading: true });
            const product = await createProduct(productData);
            set((state) => ({ products: [...state.products, product], loading: false }));
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }

   
}));