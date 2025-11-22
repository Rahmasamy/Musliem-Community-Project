import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContacts } from "@/hooks/useConacts";
import { useState } from "react";
export default function ReportContactUs() {
    const [type, setType] = useState("Report");
    const { data: reports, isLoading, isError } = useContacts(type);
    if (isLoading)
        return _jsx("p", { children: "Loading..." });
    if (isError)
        return _jsx("p", { children: "Failed to fetch contacts" });
    console.log("reports", reports);
    return (_jsxs("div", { className: "text-gray-700", children: [_jsxs("div", { className: "flex items-center gap-4 sm:gap-6 lg:gap-8 border-b mb-4 sm:mb-6 overflow-x-auto pb-2", children: [_jsxs("h2", { className: `text-base sm:text-lg lg:text-xl font-semibold pb-2 cursor-pointer whitespace-nowrap ${type === "Report"
                            ? "text-[#007B7F] border-b-2 border-[#007B7F]"
                            : "text-gray-400 hover:text-[#007B7F] hover:border-b-2 hover:border-[#007B7F]"}`, onClick: () => setType("Report"), children: ["Reports ", _jsx("span", { className: "text-red-500 ml-1" })] }), _jsxs("h2", { className: `text-base sm:text-lg lg:text-xl font-semibold pb-2 cursor-pointer whitespace-nowrap ${type === "Suggest"
                            ? "text-[#007B7F] border-b-2 border-[#007B7F]"
                            : "text-gray-400 hover:text-[#007B7F] hover:border-b-2 hover:border-[#007B7F]"}`, onClick: () => setType("Suggest"), children: ["Suggestions ", _jsx("span", { className: "text-gray-400 ml-1" })] }), _jsxs("h2", { className: `text-base sm:text-lg lg:text-xl font-semibold pb-2 cursor-pointer whitespace-nowrap ${type === "Other"
                            ? "text-[#007B7F] border-b-2 border-[#007B7F]"
                            : "text-gray-400 hover:text-[#007B7F] hover:border-b-2 hover:border-[#007B7F]"}`, onClick: () => setType("Other"), children: ["other ", _jsx("span", { className: "text-gray-400 ml-1" })] })] }), _jsxs("div", { className: "flex flex-col gap-4 sm:gap-6", children: [_jsxs("h1", { className: "text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4", children: ["Number of Incoming News : ", reports?.length] }), reports?.length === 0 && _jsx("div", { className: "text-center text-gray-500 text-sm sm:text-base py-4 sm:py-6", children: "No Incoming News here , Thanks !" }), reports?.map((report) => (_jsxs("div", { className: "bg-white shadow-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 relative border border-gray-100", children: [_jsx("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-start mb-3 sm:mb-4 gap-3 sm:gap-0", children: _jsxs("div", { className: "flex-1 w-full", children: [_jsxs("p", { className: "text-xs sm:text-sm mb-1 sm:mb-2", children: [_jsx("span", { className: "font-semibold", children: "Sender:" }), " ", _jsx("span", { className: "break-all", children: report.email })] }), _jsxs("p", { className: "text-xs sm:text-sm mb-1 sm:mb-2", children: [_jsx("span", { className: "font-semibold", children: "Topic:" }), " ", report.type] }), _jsxs("p", { className: "text-xs sm:text-sm", children: [_jsx("span", { className: "font-semibold", children: "Headline:" }), " ", report.headline] })] }) }), _jsxs("p", { className: "text-gray-600 leading-relaxed text-xs sm:text-sm", children: [_jsx("span", { className: "font-semibold", children: "Message: " }), report.message] })] }, report._id)))] })] }));
}
