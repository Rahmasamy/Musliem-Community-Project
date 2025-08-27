// src/context/eventContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { Product, ProductContextType } from "@/utils/context-interface/productInterface";
import axiosInstance from "@/api/authApi";



const productContext = createContext< ProductContextType| null>(null);

export const useProducts = () => {
  const ctx = useContext(productContext);
  if (!ctx) throw new Error("use products must be used inside Product Provider");
  return ctx;
};

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts= async () => {
      const { data } = await axiosInstance.get("/products?page=1");
      
      setProducts(data.products); // because the API returns { events: [...] }
    };
    loadProducts();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};
