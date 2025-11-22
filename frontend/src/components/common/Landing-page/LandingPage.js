import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OrangeButton from '../OrangeButton/OrangeButton';
import landingage from '@/assets/icons/landing-img.png';
import './LandingPage.css';
import downArrow from '@/assets/icons/arrow-down.png';
export default function LandingPage() {
    return (_jsxs("div", { className: "landing-wrapper", children: [_jsx("img", { src: landingage, alt: "Landing", className: "landing-image" }), _jsx("div", { className: "overlay" }), _jsxs("div", { className: "landing-content", children: [_jsx("h2", { children: "Welcome to Your Muslim Community Hub" }), _jsx("p", { children: "Create groups, host events, support local businesses, and give back through donations \u2014 all in one meaningful space." }), _jsx("p", { children: "Join us and start building connections that matter." }), _jsxs("div", { className: "landing-buttons", children: [_jsx(OrangeButton, { title: "Join Us", className: "orange" }), _jsx(OrangeButton, { title: "About Us", className: "white" })] }), _jsx("div", { className: "down-arrow", children: _jsx("img", { src: downArrow, alt: "down arrow" }) })] })] }));
}
