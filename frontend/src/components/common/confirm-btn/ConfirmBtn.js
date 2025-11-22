import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export default function ConfirmBtn({ onClick, title, }) {
    return (_jsxs(_Fragment, { children: [" ", _jsx("button", { className: "bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600", onClick: onClick, children: title ? `${title}` : "+ Create" })] }));
}
