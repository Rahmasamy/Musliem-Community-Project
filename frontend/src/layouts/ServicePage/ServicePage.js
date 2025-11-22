import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant';
import GoBack from '@/components/common/GoBack/GoBack';
import Navigate from '@/components/common/navigator/Navigate';
import SideBar from '@/components/common/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
export default function ServicePage() {
    const sideLinks = [
        { name: "Our Products", to: "/ServicesPage/our-products", key: "our-products" },
        // { name: "Donations", to: "/ServicesPage/donations", key: "donations" },
        { name: "Baby Sitter", to: "/ServicesPage/baby-sitter", key: "baby-sitter" },
        { name: "Quran Tutor", to: "/ServicesPage/quran-tutor", key: "quran" },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx("div", { className: "flex w-full items-center justify-center", children: _jsx(Navigate, { home: "Home", arg2: "Services" }) }), _jsxs("div", { className: "flex flex-col bg-gray-50 min-h-screen lg:flex-row", children: [_jsx(SideBar, { navItems: sideLinks }), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) })] })] }));
}
