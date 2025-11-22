import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
const SearchResults = ({ results, isOpen }) => {
    const combinedResults = [
        ...(results.services?.map((s) => ({ ...s, type: "Service" })) || []),
        ...(results.groups?.map((g) => ({ ...g, type: "Group" })) || []),
        ...(results.products?.map((p) => ({ ...p, type: "Product" })) || []),
        ...(results.events?.map((e) => ({ ...e, type: "Event" })) || []),
    ];
    return (_jsx(AnimatePresence, { children: isOpen && combinedResults.length > 0 && (_jsx(motion.div, { initial: { opacity: 0, y: -5 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -5 }, transition: { duration: 0.2 }, className: "absolute top-full left-0 w-full  overflow-y-auto bg-white  shadow-xl border border-gray-200 z-50 p-3", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: combinedResults.map((item) => (_jsxs(Card, { className: "rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-lg font-semibold", children: item.name }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-sm text-gray-600 line-clamp-2", children: item.description || "No description available" }), _jsx("p", { className: "mt-2 font-medium text-teal-600", children: item.type })] })] }, item._id))) }) })) }));
};
export default SearchResults;
