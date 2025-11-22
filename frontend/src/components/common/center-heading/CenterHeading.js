import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './CenterHeading.css';
export default function CenterHeading({ title, desc }) {
    return (_jsxs("div", { className: 'HeaderOfService', children: [_jsx("h2", { className: 'text-lg', children: title }), _jsx("p", { className: 'py-3', children: desc })] }));
}
