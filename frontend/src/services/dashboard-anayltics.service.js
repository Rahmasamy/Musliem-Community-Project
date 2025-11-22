import axiosInstance from "@/api/authApi";
export const addHomeVisit = async () => {
    const res = await axiosInstance.post(`/dashboard/home-visit`);
    return res.data.total;
};
export const getVisits = async () => {
    const res = await axiosInstance.get(`/dashboard/home-visits`);
    return res.data.total;
};
export const getDashboardProjects = async () => {
    const response = await axiosInstance.get(`/dashboard/projects`);
    return response.data; // { success, total, data }
};
export const getAllUsers = async () => {
    const res = await axiosInstance.get("/auth/users", { withCredentials: true });
    return res.data.users;
};
export const makeUserAdmin = async (id) => {
    const res = await axiosInstance.put(`/auth/assign-role/${id}`, {});
    return res.data.user;
};
export const getUsageStats = async () => {
    const { data } = await axiosInstance.get("/dashboard/usageStats");
    return data.usageData;
};
