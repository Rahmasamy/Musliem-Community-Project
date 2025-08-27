import { fetchGroupsByUser } from "@/services/groupService";
import { Group } from "@/types/group";
import { useQuery } from "@tanstack/react-query";

export const useGroupsByUser = (userId: string) =>
  useQuery<Group[], Error>({
    queryKey: ["groups", userId],
    queryFn: () => fetchGroupsByUser(userId),
    enabled: !!userId,
  });