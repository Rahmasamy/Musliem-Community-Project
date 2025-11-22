import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import GroupCard from '@/components/common/group-card/GroupCard';
import { GroupProvider } from '@/context/groupContext';
export default function AllGroupsPage() {
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "mb-6 sm:mb-8 lg:mb-10", children: [_jsxs("div", { className: "w-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-0", children: [_jsx("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2 text-center", children: "All Groups" }), _jsx("p", { className: "text-gray-500 mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base text-center px-2", children: "Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue interdum cras. At nisi in quisque erat ut." })] }), _jsx(GroupProvider, { children: _jsx(GroupCard, {}) })] }) }));
}
