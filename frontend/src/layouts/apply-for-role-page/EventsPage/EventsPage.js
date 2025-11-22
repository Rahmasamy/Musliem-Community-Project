import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import SideBar from "@/components/common/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import Navigate from "@/components/common/navigator/Navigate";
const sideLinks = [
    { name: "All events", to: "/events/all-events", key: "both" },
    { name: "Your events", to: "/events/your-events", key: "joined" },
];
export default function EventsPage() {
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx("div", { className: "flex w-full items-center justify-center", children: _jsx(Navigate, { home: "Home", arg2: "Events" }) }), _jsxs("div", { className: "flex flex-col bg-gray-50 min-h-screen lg:flex-row", children: [_jsx(SideBar, { label: "Events", navItems: sideLinks }), _jsx("main", { className: "flex-1 p-3 sm:p-4 md:p-6 lg:p-8", children: _jsx(Outlet, {}) })] })] }));
}
