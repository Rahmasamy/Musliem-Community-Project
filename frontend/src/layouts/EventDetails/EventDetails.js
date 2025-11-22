import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OrangeButton from '@/components/common/OrangeButton/OrangeButton';
import EventImg from '@/assets/imgs/EventImg.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EventService from '@/services/eventService';
export default function EventDetails() {
    const { id } = useParams(); // 👈 ناخد id من url
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("eventid", id);
    useEffect(() => {
        if (!id)
            return;
        const fetchEvent = async () => {
            try {
                const data = await EventService.getSingleEvent(id);
                setEvent(data.event);
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [id]);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (!event)
        return _jsx("p", { children: "Event not found" });
    return (_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold mb-6", children: "Event Details" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { children: _jsxs("div", { className: "bg-white shadow rounded-lg overflow-hidden", children: [_jsx("img", { src: event.image || EventImg, alt: event.name, className: "w-full h-80 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: event.name }), _jsxs("div", { className: "flex items-center gap-2 mt-2 text-sm", children: [_jsx("span", { className: "bg-green-100 text-green-700 px-3 py-1 rounded-full", children: new Date(event.createdAt).toDateString() }), _jsxs("span", { className: "bg-green-100 text-green-700 px-3 py-1 rounded-full", children: [event.startTime, " - ", event.endTime] })] }), _jsxs("p", { className: "mt-3 text-gray-500 flex items-center gap-2", children: ["\uD83D\uDCCD ", event.Location || "Online Event"] })] }), event.Location && (_jsx("iframe", { title: "map", src: `https://www.google.com/maps?q=${encodeURIComponent(event.Location)}&output=embed`, className: "w-full h-48 border-0", loading: "lazy" }))] }) }), _jsx("div", { children: _jsx("p", { className: "text-gray-600 mb-4", children: event.description }) })] }), _jsxs("div", { className: "flex items-center justify-around bg-white shadow rounded-lg mt-4 p-4 text-center text-sm", children: [_jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: event.members?.length || 0 }), _jsx("p", { className: "text-gray-500", children: "Attend" })] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-red-500", children: "0" }), _jsx("p", { className: "text-gray-500", children: "Not Interested" })] }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: "$0" }), _jsx("p", { className: "text-gray-500", children: "Donation" })] })] }), _jsx("div", { className: "p-3 flex items-center justify-end mt-3", children: _jsx(OrangeButton, { title: "Register Now", icon: _jsx("svg", { width: "15", height: "14", viewBox: "0 0 15 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M11.086 5.65692L7.136 1.70692C6.95384 1.51832 6.85305 1.26571 6.85533 1.00352C6.8576 0.741321 6.96277 0.490508 7.14818 0.3051C7.33359 0.119692 7.5844 0.0145233 7.8466 0.0122448C8.1088 0.00996641 8.3614 0.110761 8.55 0.292919L14.207 5.94992C14.3002 6.04257 14.3741 6.15273 14.4246 6.27407C14.4751 6.3954 14.501 6.52551 14.501 6.65692C14.501 6.78833 14.4751 6.91844 14.4246 7.03977C14.3741 7.16111 14.3002 7.27127 14.207 7.36392L8.55 13.0209C8.45775 13.1164 8.34741 13.1926 8.2254 13.245C8.1034 13.2974 7.97218 13.325 7.8394 13.3262C7.70662 13.3273 7.57494 13.302 7.45205 13.2517C7.32915 13.2015 7.2175 13.1272 7.12361 13.0333C7.02971 12.9394 6.95546 12.8278 6.90518 12.7049C6.8549 12.582 6.8296 12.4503 6.83075 12.3175C6.8319 12.1847 6.85949 12.0535 6.9119 11.9315C6.96431 11.8095 7.04049 11.6992 7.136 11.6069L11.086 7.65692H1.5C1.23478 7.65692 0.98043 7.55156 0.792893 7.36403C0.605357 7.17649 0.5 6.92214 0.5 6.65692C0.5 6.3917 0.605357 6.13735 0.792893 5.94981C0.98043 5.76228 1.23478 5.65692 1.5 5.65692H11.086Z", fill: "white" }) }) }) })] }));
}
