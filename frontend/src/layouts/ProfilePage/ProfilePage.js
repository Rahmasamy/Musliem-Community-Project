import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant';
import GoBack from '@/components/common/GoBack/GoBack';
import Navigate from '@/components/common/navigator/Navigate';
import SideBar from '@/components/common/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
export default function ProfilePage() {
    const sideLinks = [
        { name: "Profile", to: "/profilePage/profile-section", key: "prof-section" },
        { name: "Your Advertisments", to: "/profilePage/your-advertisments", key: "your-advertisments" },
        { name: "Your Listing", to: "/profilePage/yourlisting", key: "your-listing" },
        { name: "Profile Payments", to: "/profilePage/profile-payments", key: "profile-payments" },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx("div", { className: "flex w-full items-center justify-center", children: _jsx(Navigate, { home: "Home", arg2: "Profile" }) }), _jsxs("div", { className: "flex flex-col bg-gray-50 min-h-screen lg:flex-row", children: [_jsx(SideBar, { label: "Halal Business Directory", navItems: sideLinks }), _jsx("main", { className: "flex-1", children: _jsx(Outlet, {}) })] })] }));
}
