import { getUserLimit } from "@/services/getUserLimit";
import { IUserLimitResponse } from "@/types/authTypes";
import { useQuery } from "@tanstack/react-query";

export const useCheckUserLimit = () => {
  return useQuery<IUserLimitResponse, Error>({
    queryKey: ["userLimit"],
    queryFn: getUserLimit,
    refetchOnWindowFocus: false, // مش هيعمل refetch كل ما ترجعي للتبويب
  });
};
