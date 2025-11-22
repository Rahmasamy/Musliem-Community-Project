import axiosInstance from "@/utils/axiosInstance";

export const createOrGetPrivateChat = async (payload: { userId1: string; userId2: string }) => {
  const { data } = await axiosInstance.post("/private-chats", payload);
  return data;
};

export const getUserPrivateChats = async (userId: string) => {
  const { data } = await axiosInstance.get(`/private-chats/${userId}`);
  return data;
};