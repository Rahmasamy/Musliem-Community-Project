import axiosInstance from "@/api/authApi";
import { ServiceContextType, ServiceType } from "@/utils/context-interface/serviceInterface";
import { createContext, useContext,  useState } from "react";


const ServiceContext = createContext<ServiceContextType | null>(null)


export const ServiceProvider = ({ children }: { children: React.ReactNode }) => {
    const [services, setServices] = useState<string[]>([]);
    const loadServices = async (type: ServiceType) => {
        const { data } = await axiosInstance.get(`/services/${type}`);
        setServices(data);
    };
    return (
        <ServiceContext.Provider value={{ services, loadServices }}>
            {children}
        </ServiceContext.Provider>
    );

}

export const useService = () => {
    const ctx = useContext(ServiceContext)
    if (!ctx) throw new Error("useService must be used within ServiceProvider");
    return ctx;
}