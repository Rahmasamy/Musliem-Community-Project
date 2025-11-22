import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/api/authApi";
const productContext = createContext(null);
export const useProducts = () => {
    const ctx = useContext(productContext);
    if (!ctx)
        throw new Error("useProducts must be used inside ProductProvider");
    return ctx;
};
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filters, setFilters] = useState({});
    const loadProducts = async (pageNum = page, filterParams = filters) => {
        try {
            const params = new URLSearchParams({
                page: pageNum.toString(),
                ...(filterParams.search ? { search: filterParams.search } : {}),
            });
            const { data } = await axiosInstance.get(`/products?${params.toString()}`);
            setProducts(data.products || []);
            setTotalPages(data.totalPages || 1);
        }
        catch (err) {
            console.error("Failed to load products", err);
        }
    };
    useEffect(() => {
        loadProducts(page, filters);
    }, [page, filters]);
    return (_jsx(productContext.Provider, { value: { products, page, totalPages, setPage, setFilters }, children: children }));
};
