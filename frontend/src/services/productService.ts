import axiosInstance from "@/api/authApi";
import { Product } from "@/utils/context-interface/productInterface";

// Create Product
export const createProduct = async (productData: Product) => {
  const res = await axiosInstance.post("/products", productData);
  return res.data;
};

// Update Product
export const updateProduct = async (id: string, productData: Product) => {
  const res = await axiosInstance.put(`/products/${id}`, productData);
  return res.data;
};

// Delete Product
export const deleteProduct = async (id: string) => {
  const res = await axiosInstance.delete(`/products/${id}`);
  return res.data;
};
