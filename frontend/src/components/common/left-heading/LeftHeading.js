import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './LeftHeading.css';
export default function LeftHeading({ title, desc, icon }) {
    return (_jsx("div", { className: 'HeaderOfService', children: _jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 justify-between w-full sm:w-[95%] gap-3 sm:gap-0", children: [_jsxs("div", { className: 'rightcontent flex-1', children: [_jsx("h2", { className: 'text-base sm:text-lg text-left', children: title }), _jsx("p", { className: 'text-left text-sm sm:text-base', children: desc })] }), _jsxs("div", { className: "icon flex items-center gap-2 sm:gap-3 text-sm sm:text-base", children: ["View All", _jsx("span", { className: "cursor-pointer", children: icon })] })] }) }));
}
