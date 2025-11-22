import axiosInstance from "@/utils/axiosInstance";
const login = async (loginPayload) => {
    const { data } = await axiosInstance.post("/auth/login", loginPayload);
    return data;
};
const register = async (registerPayload) => {
    const { data } = await axiosInstance.post("/auth/register", registerPayload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return data;
};
const refershToken = async () => {
    const { data } = await axiosInstance.post("/auth/refresh-token");
    return data;
};
const forgotPassword = async (payload) => {
    const { data } = await axiosInstance.post("/auth/forgot-password", payload);
    return data;
};
const verifyResetCode = async (payload) => {
    const { data } = await axiosInstance.post("/auth/verify-reset-code", payload);
    return data;
};
const resetPassword = async (payload, token) => {
    const { data } = await axiosInstance.post("/auth/reset-password", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};
export default {
    login,
    register,
    refershToken,
    forgotPassword,
    verifyResetCode,
    resetPassword,
};
