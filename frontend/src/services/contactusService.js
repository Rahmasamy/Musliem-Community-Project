import axiosInstance from "@/utils/axiosInstance";
export const fetchContacts = async (type) => {
    const params = {};
    if (type)
        params.type = type;
    const { data } = await axiosInstance.get("/contact-us", { params });
    return data.data;
};
