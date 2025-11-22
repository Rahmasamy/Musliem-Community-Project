import axiosInstance from "@/utils/axiosInstance";

export const getPrivateMessages = async (chatId: string | undefined) => {
  const res = await axiosInstance.get(`/private-messages/${chatId}`);
  return res.data;
};

// Send a new message
export const sendPrivateMessage = async (data: { chatId: string; senderId: string; text: string }) => {
  const res = await axiosInstance.post("/private-messages", data);
  return res.data;
};