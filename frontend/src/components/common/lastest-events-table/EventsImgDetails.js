import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EventImg from "@/assets/imgs/EventImg.png";
import { Link, useNavigate } from "react-router-dom";
import { useEvents } from "@/context/eventContext";
import NoDataFound from "../no-data-found/NoData";
export default function EventsImgDetails({ limit }) {
    const { events } = useEvents();
    const navigate = useNavigate();
    const limitedEvents = limit ? events.slice(0, limit) : events;
    // If no events → show NoDataFound component
    if (!limitedEvents || limitedEvents.length === 0) {
        return _jsx(NoDataFound, { message: "No events found" });
    }
    const className = limit && limit > 1 ? "w-full" : "w-full lg:w-[45%]";
    const className2 = className === "w-full" ? "w-full sm:w-[47%]" : "w-full";
    const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
    return (_jsx("div", { className: `${className} flex flex-wrap gap-3 sm:gap-5`, children: limitedEvents.map((event, i) => (_jsxs("div", { className: `rounded-lg overflow-hidden text-white relative flex ${className2} h-[400px] sm:h-[500px] lg:h-[550px]`, children: [(() => {
                    const hasImage = Boolean(event.image);
                    const normalizedBase = BASE_URL.replace(/\/$/, "");
                    const normalizedPath = (event.image || "").replace(/^\//, "");
                    const src = hasImage
                        ? event.image.startsWith("http")
                            ? event.image
                            : `${normalizedBase}/${normalizedPath}`
                        : EventImg;
                    return (_jsx("img", { src: src, alt: event.name || "Event image", className: "w-full h-full object-cover rounded", onError: (e) => {
                            e.currentTarget.src = EventImg;
                        } }));
                })(), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" }), _jsxs("div", { className: "absolute top-0 left-0 w-full h-full p-3 sm:p-4 flex flex-col justify-evenly", children: [_jsxs("div", { className: "flex flex-wrap justify-start items-center gap-2", children: [_jsx("div", { className: "text-xs px-2 py-1 rounded text-white", style: { backgroundColor: "#1C7A80" }, children: new Date(event.date).toLocaleDateString() }), _jsxs("div", { className: "text-xs px-2 py-1 rounded text-white", style: { backgroundColor: "#1C7A80" }, children: [event.startTime, " - ", event.endTime] })] }), _jsxs("div", { children: [_jsx("div", { className: "text-xs sm:text-sm px-2 py-1 inline-block rounded mb-1 sm:mb-2", style: { backgroundColor: "#1C7A80" }, children: event.eventType }), _jsx("h3", { className: "text-base sm:text-lg font-semibold mb-1 sm:mb-2", children: _jsx(Link, { to: `/events/${event._id}`, children: event.name }) }), _jsx("p", { className: "text-xs sm:text-sm text-gray-200 line-clamp-2 sm:line-clamp-3 mb-2 sm:mb-0", children: event.description }), _jsx("button", { className: "mt-2 sm:mt-4 bg-orange-400 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-xs sm:text-sm hover:bg-orange-500 transition", onClick: () => navigate("/events/create-event"), children: "Register Now \u2192" })] })] })] }, event._id || i))) }));
}
