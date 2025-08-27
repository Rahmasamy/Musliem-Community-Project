// services/messageService.ts
import { Message } from "@/types/Message";
import axiosInstance from "@/utils/axiosInstance";

export const sendMessage = async (groupId: string, text: string): Promise<Message> => {
  const { data } = await axiosInstance.post(`/messages`, {
    group: groupId,
    text,
  });
  return data;
};
