import axiosInstance from "@/api/authApi";
export const getUserLimit = async () => {
    const { data } = await axiosInstance.get("/auth/check-limit");
    return data;
};
