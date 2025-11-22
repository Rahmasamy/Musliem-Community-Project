import {
  fetchGroupsByUser,
  fetchUserGroups,
  joinGroup,
  leaveGroup,
} from "@/services/groupService";
import { Group, GroupsResponse } from "@/types/group";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useGroupsByUser = (userId: string) =>
  useQuery<Group[], Error>({
    queryKey: ["groups", userId],
    queryFn: () => fetchGroupsByUser(userId),
    enabled: !!userId,
    refetchInterval: 5000,
  });

export const useUserGroups = (page: number, filters: Record<string, any> = {}) =>
  useQuery<GroupsResponse, Error>({
    queryKey: ["user-groups", page, filters],
    queryFn: () => fetchUserGroups(page, filters),
  });

export const useJoinGroup = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (groupId: string) => joinGroup(groupId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["groups", userId] });
    },
  });
};

export const useLeaveGroup = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (groupId: string) => leaveGroup(groupId),
    onSuccess: (data) => {
      toast.success(data?.message || "You left the group successfully!");
      queryClient.invalidateQueries({ queryKey: ["groups", userId] });
      queryClient.invalidateQueries({ queryKey: ["user-groups", userId] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || "Failed to leave the group 😢"
      );
    },
  });
};
