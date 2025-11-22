import axiosInstance from "@/utils/axiosInstance";
export const sendMessage = async (groupId, text) => {
    const { data } = await axiosInstance.post(`/messages`, {
        group: groupId,
        text,
    });
    return data;
};
