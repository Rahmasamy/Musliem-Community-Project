// hooks/usePrivateMessage.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPrivateMessages, sendPrivateMessage } from "@/services/privateMessageService";
import { useAuth } from '@/hooks/useAuth';
export const usePrivateMessages = (chatId, options) => {
    return useQuery({
        queryKey: ["private-messages", chatId],
        queryFn: () => getPrivateMessages(chatId),
        enabled: !!chatId && options?.enabled,
        refetchInterval: 5000,
    });
};
export const useSendPrivateMessage = () => {
    const queryClient = useQueryClient();
    const loginUser = useAuth();
    const senderId = loginUser?.user?._id;
    return useMutation({
        mutationFn: ({ chatId, text }) => sendPrivateMessage({ chatId, senderId, text }), // ✅ ضفنا senderId هنا
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["private-messages", variables.chatId] });
        },
    });
};
