import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Services from "@/services/serviceService";
import NoDataFound from "../no-data-found/NoData";
export default function ListingBabysitterQuranCard({ service, }) {
    const [services, setServices] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    // 🔁 Fetch data
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const data = await Services.getServicesByType(service, page, search);
                setServices(data.services || []);
                setTotalPages(data.totalPages || 1);
            }
            catch (error) {
                console.error("Error fetching services", error);
            }
        };
        fetchServices();
    }, [page, search, service]);
    // 📄 Handle pagination
    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };
    // 🔍 Debounce search
    useEffect(() => {
        const delay = setTimeout(() => setPage(1), 500);
        return () => clearTimeout(delay);
    }, [search]);
    return (_jsxs("div", { className: "w-full flex flex-col items-center px-4 sm:px-6 lg:px-10", children: [services.length > 0 && (_jsxs(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "flex w-full sm:w-[80%] md:w-[60%] mb-10 justify-center relative", children: [_jsx(FiSearch, { className: "absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" }), _jsx("input", { type: "text", placeholder: `Search ${service === "babysitter" ? "babysitters" : "Quran tutors"}...`, value: search, onChange: (e) => setSearch(e.target.value), className: "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300" })] })), services.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center", children: _jsx(AnimatePresence, { children: services.map((item, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, whileHover: { scale: 1.03 }, transition: { duration: 0.3 }, className: "w-full sm:w-[320px] lg:w-[340px]", children: _jsxs(Card, { className: "shadow-md hover:shadow-2xl border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 bg-white", children: [_jsxs(CardHeader, { className: "p-0 relative", children: [_jsx("img", { src: item.image, alt: item.name, className: "w-full h-[200px] object-cover" }), _jsxs("span", { className: "absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md", children: ["$", item.price] })] }), _jsxs(CardContent, { className: "p-4 flex flex-col flex-grow", children: [_jsx("h3", { className: "font-semibold text-lg mb-2 line-clamp-1 text-gray-800 hover:text-orange-500 transition-colors duration-200", children: item.name }), _jsx("p", { className: "text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed", children: item.description }), _jsx("div", { className: "mt-auto flex justify-between items-center", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("img", { src: item.photo ||
                                                            "https://cdn-icons-png.flaticon.com/512/149/149071.png", alt: "provider", className: "w-8 h-8 rounded-full object-cover border" }), _jsx("span", { className: "text-sm text-gray-700 font-medium", children: item.location || "Unknown Location" })] }) })] }), _jsx(CardFooter, { className: "p-4 flex justify-center border-t border-gray-100", children: _jsx(motion.a, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, href: `tel:${item.phone}`, className: "flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-500 hover:to-orange-700 px-5 py-2.5 rounded-xl shadow-md transition-all duration-300", children: item.phone }) })] }) }, item._id || index))) }) })) : (_jsx(NoDataFound, { message: `No ${service}s Found` })), services.length > 0 && (_jsx("div", { className: "mt-8 flex gap-2 justify-center items-center w-full", children: _jsx(ReactPaginate, { pageCount: totalPages, forcePage: page - 1, onPageChange: handlePageClick, containerClassName: "flex gap-3 justify-center items-center", pageClassName: "w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer", activeClassName: "!bg-orange-500 !text-white !border-orange-500", previousLabel: "<", nextLabel: ">", previousClassName: "w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer", nextClassName: "w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer" }) }))] }));
}
