import { fetchGroupsByUser, fetchUserGroups, joinGroup, leaveGroup, } from "@/services/groupService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
export const useGroupsByUser = (userId) => useQuery({
    queryKey: ["groups", userId],
    queryFn: () => fetchGroupsByUser(userId),
    enabled: !!userId,
    refetchInterval: 5000,
});
export const useUserGroups = (page, filters = {}) => useQuery({
    queryKey: ["user-groups", page, filters],
    queryFn: () => fetchUserGroups(page, filters),
});
export const useJoinGroup = (userId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (groupId) => joinGroup(groupId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["groups", userId] });
        },
    });
};
export const useLeaveGroup = (userId) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (groupId) => leaveGroup(groupId),
        onSuccess: (data) => {
            toast.success(data?.message || "You left the group successfully!");
            queryClient.invalidateQueries({ queryKey: ["groups", userId] });
            queryClient.invalidateQueries({ queryKey: ["user-groups", userId] });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to leave the group 😢");
        },
    });
};
