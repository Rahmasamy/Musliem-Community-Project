import { getUserLimit } from "@/services/getUserLimit";
import { useQuery } from "@tanstack/react-query";
export const useCheckUserLimit = () => {
    return useQuery({
        queryKey: ["userLimit"],
        queryFn: getUserLimit,
        refetchOnWindowFocus: false, // مش هيعمل refetch كل ما ترجعي للتبويب
    });
};
