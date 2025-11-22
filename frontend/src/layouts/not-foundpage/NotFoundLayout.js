import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Notfound.css';
import { Link } from 'react-router-dom';
import NotFound from '@/assets/imgs/notfound.png';
export default function NotFoundLayout() {
    return (_jsxs("div", { className: "Notfound h-screen flex flex-col gap-2 justify-center items-center bg-gray-100 text-center", children: [_jsx("img", { src: NotFound, alt: "Not Found Image" }), _jsx("p", { className: "text-4xl font-bold text-gray-800", children: "Oops! " }), _jsx("p", { className: "mt-2 text-gray-600", children: "The page you're looking for can't be found." }), _jsx(Link, { to: "/", className: "mt-4 text-blue-500 go-home", children: "Go to Home" })] }));
}
