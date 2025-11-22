import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import JoinedGroupCard from '@/components/common/group-card/JoinedGroupCard';
import { JoinedGroupProvider } from '@/context/JoinedGroupContext';
export default function YourGroupsPage() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex justify-between items-center mb-8" }), _jsxs("section", { children: [_jsx("div", { className: "w-full flex items-center justify-center", children: _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Joined Groups" }) }), _jsx(JoinedGroupProvider, { children: _jsx(JoinedGroupCard, {}) })] })] }));
}
