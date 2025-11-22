import { getPendingProducts } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export const usePendingProdcuts = (page = 1) => {
  return useQuery({
    queryKey: ["pendingProducts", page],
    queryFn: () => getPendingProducts(page),
      refetchInterval: 4000,
  });
};