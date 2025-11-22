import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import Navigate from "@/components/common/navigator/Navigate";
import SideBar from "@/components/common/sideBar/SideBar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
export default function GroupPage() {
    const location = useLocation();
    const [hideCreate, setHideCreate] = useState(false);
    useEffect(() => {
        if (location.pathname === "/Groups/all-groups" || location.pathname === "/Groups/your-groups") {
            setHideCreate(false);
        }
        else {
            setHideCreate(true);
        }
    }, [location.pathname]);
    const sideLinks = [
        { name: "All Groups", to: "/Groups/all-groups", key: "both" },
        { name: "Your Groups", to: "/Groups/your-groups", key: "joined" },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx("div", { className: "flex w-full items-center justify-center", children: _jsx(Navigate, { home: "Home", arg2: "Groups" }) }), _jsxs("div", { className: "flex flex-col bg-gray-50 min-h-screen lg:flex-row", children: [_jsx(SideBar, { label: "Groups", navItems: sideLinks }), _jsxs("main", { className: "flex-1 px-6", children: [hideCreate && (_jsx("div", { className: "flex justify-between items-center mb-8", children: _jsxs(Link, { to: "/Groups/create-group", className: "bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow m-4", children: [_jsx(FaPlus, {}), " Create New Group"] }) })), _jsx(Outlet, {})] })] })] }));
}
