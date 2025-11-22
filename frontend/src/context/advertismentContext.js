import { jsx as _jsx } from "react/jsx-runtime";
// advertiseContext.tsx
import { useContext, createContext, useEffect, useState } from 'react';
import axiosInstance from '@/api/authApi';
const AdvertisementContext = createContext(null);
export const useAdvertisement = () => {
    const ctx = useContext(AdvertisementContext);
    if (!ctx)
        throw new Error("useAdvertisement must be used within AdvertismentProvider");
    return ctx;
};
export const AdvertismentProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const load = async () => {
            const { data } = await axiosInstance.get('/services/active-advertisments');
            console.log("advertisment data ==================== ", data);
            setData(data.data || []);
        };
        load();
    }, []);
    return (_jsx(AdvertisementContext.Provider, { value: { data }, children: children }));
};
