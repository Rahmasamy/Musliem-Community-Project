import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function CancelBtn({ onClick }) {
    return (_jsx(_Fragment, { children: _jsx("button", { className: "bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300", onClick: onClick, children: "\u2715 Cancel" }) }));
}
