import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
export default function ServiceCard({ type }) {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosInstance.get(`/services/${type}`);
            setServices(data.services);
        };
        fetchData();
    }, [type]);
    return (_jsx(_Fragment, { children: services.map((service, index) => (_jsxs(Card, { className: "w-[370px] shadow-md", children: [_jsx(CardHeader, { className: "p-0", children: _jsx("img", { src: service.image, alt: service.title, style: { height: "150px" } }) }), _jsxs(CardContent, { className: "p-4", children: [_jsx("h3", { className: "font-bold", children: service.title }), _jsx("p", { className: "py-3", children: service.description })] }), _jsxs(CardFooter, { children: [_jsx("p", { className: "text-sm", style: { color: "#00ABB6" }, children: "More Info" }), _jsx("span", { children: "\u2192" })] })] }, service.id || index))) }));
}
