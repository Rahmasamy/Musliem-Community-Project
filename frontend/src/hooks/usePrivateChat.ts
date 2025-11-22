import { createOrGetPrivateChat, getUserPrivateChats } from "@/services/privateChatService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePrivateChats = (userId: string) =>
  useQuery({
    queryKey: ["private-chats", userId],
    queryFn: () => getUserPrivateChats(userId),
    enabled: !!userId,
  });

export const useCreateOrGetPrivateChat = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createOrGetPrivateChat,
    onSuccess: (_data, variables) => {
      // variables هنا فيها { userId1, userId2 }
      queryClient.invalidateQueries({ queryKey: ["private-chats", variables.userId1] });
      queryClient.invalidateQueries({ queryKey: ["private-chats", variables.userId2] });
    },
  });
};