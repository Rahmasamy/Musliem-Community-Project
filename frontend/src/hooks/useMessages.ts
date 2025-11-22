import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Message } from "@/types/Message";
import axiosInstance from "@/api/authApi";
import { sendMessage } from "@/services/messageService";


// API call
const fetchMessagesByGroup = async (groupId: string | undefined): Promise<Message[]> => {
  const { data } = await axiosInstance.get(`/messages/${groupId}`);
  return data.messages;
};

export const useMessagesByGroup = (groupId: string | undefined,options:any ) =>
  useQuery<Message[], Error>({
    queryKey: ["messages", groupId],
    queryFn: () => fetchMessagesByGroup(groupId),
    enabled: !!groupId && options?.enabled, // fetch only if groupId exists
  });



export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ groupId, text }: { groupId: string; text: string }) =>
      sendMessage(groupId, text),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["messages", variables.groupId] });
    },
  });
};

