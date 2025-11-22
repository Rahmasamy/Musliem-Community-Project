import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/api/authApi";
import { sendMessage } from "@/services/messageService";
// API call
const fetchMessagesByGroup = async (groupId) => {
    const { data } = await axiosInstance.get(`/messages/${groupId}`);
    return data.messages;
};
export const useMessagesByGroup = (groupId, options) => useQuery({
    queryKey: ["messages", groupId],
    queryFn: () => fetchMessagesByGroup(groupId),
    enabled: !!groupId && options?.enabled, // fetch only if groupId exists
});
export const useSendMessage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ groupId, text }) => sendMessage(groupId, text),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["messages", variables.groupId] });
        },
    });
};
