import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Nodata from '@/assets/imgs/no-data.jpg';
export default function NoDataFound({ message = "No data found" }) {
    return (_jsxs("div", { className: "w-full flex justify-center items-center py-10 min-h-70 flex-col", children: [_jsx("div", { className: "text-center text-gray-600 text-lg font-semibold bg-gray-100 px-6 py-4 rounded-xl shadow", children: message }), _jsx("div", { children: _jsx("img", { src: Nodata, alt: "No data found", className: "w-96 h-96 object-cover" }) })] }));
}
