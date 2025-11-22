import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from 'react';
import Logo from '@/assets/imgs/logo.png';
const LogoComponent = ({ desc }) => {
    return (_jsxs(Fragment, { children: [_jsx("img", { src: Logo, alt: "Muliem Community Logo", className: "w-28 h-16" }), _jsx("h2", { children: "MCUS" }), _jsxs("p", { children: [_jsx("span", { className: "span-welcome", children: "Welcome!" }), desc] })] }));
};
export default LogoComponent;
