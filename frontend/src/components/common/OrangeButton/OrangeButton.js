import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import './Orange.css';
export default function OrangeButton({ title, icon, parentClassName, className, onClick }) {
    return (_jsx("div", { className: `flex gap-2 ${parentClassName || ''}`, children: _jsxs("button", { className: `orange-btn ${className || 'orange'} flex gap-2 items-center flex-1 justify-center `, onClick: onClick, children: [title, icon ? icon : null] }) }));
}
