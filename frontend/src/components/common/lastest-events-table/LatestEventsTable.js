import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEvents } from "@/context/eventContext";
import DefaultEventImg from "@/assets/imgs/EventImg.png";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
export default function LatestEventsTable({ internal }) {
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
    const { events, totalPages, setPage } = useEvents();
    const handlePageClick = (selectedItem) => {
        setPage(selectedItem.selected + 1);
    };
    const className = internal === "true" ? "w-full" : "w-full lg:w-[50%]";
    return (_jsxs("div", { className: `${className} flex flex-col gap-4 sm:gap-6 p-3 sm:p-4 lg:p-6 bg-white rounded-xl sm:rounded-2xl transition-all duration-300`, children: [events.map((ev, idx) => {
                if (idx === 3) {
                    return (_jsx(motion.div, { whileHover: { scale: 1.05 }, className: "text-center text-xs sm:text-sm font-semibold text-teal-600 cursor-pointer border border-dashed border-orange-400 rounded-lg py-2 px-2 hover:bg-orange-50 transition-all", children: "See more events \u2192" }, ev._id));
                }
                return (_jsxs(motion.div, { whileHover: { scale: 1.01 }, className: "flex flex-col sm:flex-row justify-between items-start bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all gap-3 sm:gap-0", children: [_jsxs("div", { className: "flex-1 pr-0 sm:pr-4", children: [_jsxs("div", { className: "flex flex-wrap gap-2 sm:gap-4 items-center text-xs sm:text-sm text-gray-500 mb-2", children: [_jsx("span", { className: "font-medium text-teal-600", children: ev.startTime }), _jsx("span", { className: "text-gray-400", children: "\u2192" }), _jsx("span", { className: "font-medium text-orange-500", children: ev.endTime })] }), _jsx("div", { className: "font-semibold text-base sm:text-lg text-gray-800 mb-1", children: ev.name }), _jsxs("div", { className: "text-xs sm:text-sm font-semibold text-teal-600 mb-1", children: ["Attendance: ", ev.attendance] }), _jsx("p", { className: "text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none", children: ev.description })] }), internal === "true" && (_jsx("div", { className: "flex items-center justify-center w-full sm:w-40 h-32 sm:h-24 overflow-hidden rounded-lg shadow-sm border border-dashed border-orange-300", children: (() => {
                                const hasImage = Boolean(ev.image);
                                const normalizedBase = BASE_URL.replace(/\/$/, "");
                                const normalizedPath = (ev.image || "").replace(/^\//, "");
                                const src = hasImage
                                    ? ev.image.startsWith("http")
                                        ? ev.image
                                        : `${normalizedBase}/${normalizedPath}`
                                    : DefaultEventImg;
                                return (_jsx("img", { src: src, alt: ev.name || "Event image", className: "w-full h-full object-cover rounded-lg hover:scale-105 transition-transform", onError: (e) => {
                                        e.currentTarget.src = DefaultEventImg;
                                    } }));
                            })() }))] }, ev._id));
            }), _jsx("div", { className: "flex justify-center mt-4", children: events.length > 3 && (_jsx(ReactPaginate, { pageCount: totalPages, onPageChange: handlePageClick, containerClassName: "flex gap-2 sm:gap-3 justify-center items-center mt-4", pageClassName: "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-teal-500 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base", activeClassName: "!bg-teal-600 !text-white !border-teal-500", previousLabel: "<", nextLabel: ">", previousClassName: "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-teal-500 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base", nextClassName: "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-teal-500 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base" })) })] }));
}
