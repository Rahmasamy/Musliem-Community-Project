import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import logo from '@/assets/imgs/logo.png';
export default function SideBar({ label, navItems, }) {
    return (_jsx("aside", { className: "w-full lg:w-64 bg-white shadow p-4 sm:p-5 lg:p-6 shrink-0", children: _jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "logo flex gap-1 items-center mb-4 sm:mb-6", children: [_jsx("img", { src: logo, alt: "Logo Image", className: "w-16 h-12 sm:w-20 sm:h-16 lg:w-24 lg:h-20" }), _jsx("h2", { className: "text-base sm:text-lg lg:text-xl", children: "MCUS" })] }), _jsx("nav", { children: _jsx("ul", { className: "space-y-2 sm:space-y-3", children: navItems.map((item) => (_jsx("li", { children: _jsx(Link, { to: item.to, className: "text-sm sm:text-base text-gray-700 hover:text-orange-500 font-medium block py-2 px-2 rounded-lg hover:bg-orange-50 transition-colors duration-200", children: item.name }) }, item.key))) }) })] }) }));
}
