import { createContext, useContext, useEffect, useState } from "react";
import { Product, ProductContextType } from "@/utils/context-interface/productInterface";
import axiosInstance from "@/api/authApi";

const productContext = createContext<ProductContextType | null>(null);

export const useProducts = () => {
  const ctx = useContext(productContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductProvider");
  return ctx;
};

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<{ search?: string }>({});

  const loadProducts = async (pageNum = page, filterParams = filters) => {
    try {
      const params = new URLSearchParams({
        page: pageNum.toString(),
        ...(filterParams.search ? { search: filterParams.search } : {}),
      });
      const { data } = await axiosInstance.get(`/products?${params.toString()}`);
      setProducts(data.products || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Failed to load products", err);
    }
  };

  useEffect(() => {
    loadProducts(page, filters);
  }, [page, filters]);

  return (
    <productContext.Provider value={{ products, page, totalPages, setPage, setFilters }}>
      {children}
    </productContext.Provider>
  );
};
