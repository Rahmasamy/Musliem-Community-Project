import axiosInstance from "@/utils/axiosInstance";
export const getPrivateMessages = async (chatId) => {
    const res = await axiosInstance.get(`/private-messages/${chatId}`);
    return res.data;
};
// Send a new message
export const sendPrivateMessage = async (data) => {
    const res = await axiosInstance.post("/private-messages", data);
    return res.data;
};
