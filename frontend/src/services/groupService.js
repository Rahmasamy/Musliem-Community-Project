import axiosInstance from "@/api/authApi";
export const fetchGroupsByUser = async (userId) => {
    const { data } = await axiosInstance.get(`/messages/user/${userId}`);
    return data;
};
export const fetchUserGroups = async (page = 1, filters = {}) => {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: "3",
        ...filters, // زي title, category, membersCount ...
    });
    const { data } = await axiosInstance.get(`/groups/my-groups?${params.toString()}`);
    return data;
};
export const joinGroup = async (groupId) => {
    const { data } = await axiosInstance.post(`/groups/${groupId}/join`);
    return data;
};
export const leaveGroup = async (groupId) => {
    const { data } = await axiosInstance.post(`/groups/${groupId}/leave`);
    return data;
};
