import axiosInstance from "@/utils/axiosInstance";
export const createOrGetPrivateChat = async (payload) => {
    const { data } = await axiosInstance.post("/private-chats", payload);
    return data;
};
export const getUserPrivateChats = async (userId) => {
    const { data } = await axiosInstance.get(`/private-chats/${userId}`);
    return data;
};
