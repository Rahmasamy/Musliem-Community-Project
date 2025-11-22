import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant';
import GoBack from '@/components/common/GoBack/GoBack';
import Navigate from '@/components/common/navigator/Navigate';
import SideBar from '@/components/common/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
export default function HalalBusinessPage() {
    const sideLinks = [
        { name: "Advertise", to: "/halal-business-dirctory/advertise", key: "adv" },
        { name: "Apply for a Role", to: "/halal-business-dirctory/apply-for-role", key: "apply" },
        { name: "Sell products", to: "/halal-business-dirctory/sell-products", key: "Sell products" },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx("div", { className: "flex w-full items-center justify-center", children: _jsx(Navigate, { home: "Home", arg2: "Halal Business Directory" }) }), _jsxs("div", { className: "flex flex-col bg-gray-50 min-h-screen lg:flex-row text-sm lg:text-md", children: [_jsx(SideBar, { label: "Halal Business Directory", navItems: sideLinks }), _jsx("main", { className: "flex-1 p-3 sm:p-4 md:p-6 lg:p-8", children: _jsx(Outlet, {}) })] })] }));
}
