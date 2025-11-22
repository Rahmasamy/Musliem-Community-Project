import { jsx as _jsx } from "react/jsx-runtime";
import axiosInstance from "@/api/authApi";
import { createContext, useContext, useState } from "react";
const ServiceContext = createContext(null);
export const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const loadServices = async (type) => {
        const { data } = await axiosInstance.get(`/services/${type}`);
        setServices(data);
    };
    return (_jsx(ServiceContext.Provider, { value: { services, loadServices }, children: children }));
};
export const useService = () => {
    const ctx = useContext(ServiceContext);
    if (!ctx)
        throw new Error("useService must be used within ServiceProvider");
    return ctx;
};
