import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Message } from "@/types/Message";
import axiosInstance from "@/api/authApi";
import { sendMessage } from "@/services/messageService";


// API call
const fetchMessagesByGroup = async (groupId: string): Promise<Message[]> => {
  const { data } = await axiosInstance.get(`/messages/${groupId}`);
  return data.messages;
};

export const useMessagesByGroup = (groupId: string) =>
  useQuery<Message[], Error>({
    queryKey: ["messages", groupId],
    queryFn: () => fetchMessagesByGroup(groupId),
    enabled: !!groupId, // fetch only if groupId exists
  });


  export const useSendMessage = (groupId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (text: string) => sendMessage(groupId, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages", groupId] });
    },
  });
};