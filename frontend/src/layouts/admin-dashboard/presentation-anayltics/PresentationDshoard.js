import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { VisitContext } from "@/context/dashboard-context";
import { useCountAllPayments, useCountAllUsers, useDashboardProjects, useUsageStats, } from "@/hooks/useDashboardData";
import { useContext } from "react";
import { XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, Legend, } from "recharts";
export default function PresentationDshoard() {
    const { visits } = useContext(VisitContext);
    const { data: users, isLoading: usersLoading } = useCountAllUsers();
    const { data: usageData, isLoading: useStats, isError: isStatsError } = useUsageStats();
    const { data: pieData, isLoading: pieUseStats, isError: PieIsStatsError } = useUsageStats();
    const { data: payments, isLoading: paymentsLoading } = useCountAllPayments();
    const { data: projects, isLoading, isError } = useDashboardProjects();
    if (usersLoading || paymentsLoading)
        return _jsx("p", { children: "Loading..." });
    // 📊 بيانات تجريبية
    // const lineData = [
    //   { month: "Jan", thisYear: 24000, lastYear: 18000 },
    //   { month: "Feb", thisYear: 26000, lastYear: 20000 },
    //   { month: "Mar", thisYear: 28000, lastYear: 22000 },
    //   { month: "Apr", thisYear: 32000, lastYear: 25000 },
    //   { month: "May", thisYear: 35000, lastYear: 28000 },
    //   { month: "Jun", thisYear: 37000, lastYear: 30000 },
    // ];
    // const barData = [
    //   { name: "Services", revenue: 300 },
    //   { name: "Listings", revenue: 250 },
    //   { name: "Memberships", revenue: 350 },
    //   { name: "Events", revenue: 280 },
    //   { name: "Ads", revenue: 400 },
    // ];
    if (useStats && pieUseStats)
        return _jsx("p", { children: "Loading stats..." });
    if (isStatsError && PieIsStatsError)
        return _jsx("p", { className: "text-red-500", children: "Error loading stats" });
    // const usageData = [
    //   { name: "Products", value: 250 },
    //   { name: "Services", value: 300 },
    //   { name: "Groups", value: users },
    //   { name: "Events", value: 270 },
    // ];
    // const pieData = [
    //   { name: "Products", value: 250 },
    //   { name: "Services", value: 300 },
    //   { name: "Groups", value: users },
    //   { name: "Events", value: 270 },
    // ];
    const COLORS = ["#5BC0BE", "#F6B26B", "#A3A0FB", "#F87171"];
    // const projects = [
    //   { user: "Byatfield", date: "Jun 24, 2025", type: "Group", status: "Approved" },
    //   { user: "Natali Craig", date: "Mar 10, 2025", type: "Event", status: "Approved" },
    //   { user: "Dave Caro", date: "Nov 18, 2025", type: "Donation", status: "Pending" },
    //   { user: "Orlando Biggs", date: "Dec 20, 2025", type: "Group", status: "Approved" },
    //   { user: "Andi Lane", date: "Jul 25, 2025", type: "Advertisement", status: "Rejected" },
    // ];
    if (isLoading)
        return _jsx("p", { children: "Loading projects..." });
    if (isError)
        return _jsx("p", { children: "Something went wrong." });
    return (_jsxs("div", { className: "space-y-4 sm:space-y-6 lg:space-y-8", children: [_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6", children: usageData.map((card, i) => (_jsxs("div", { className: "p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md text-white flex flex-col justify-between", style: { backgroundColor: COLORS[i] }, children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx("h3", { className: "text-base sm:text-lg font-semibold", children: card.name }), _jsx("span", { className: "text-xs sm:text-sm opacity-80", children: "\u2197" })] }), _jsx("p", { className: "text-2xl sm:text-3xl font-bold mt-2", children: card.value })] }, i))) }), _jsxs("div", { className: "bg-white shadow-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 overflow-x-auto", children: [_jsx("h3", { className: "text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#007B7F]", children: "Projects" }), _jsxs("table", { className: "w-full text-xs sm:text-sm text-gray-700 min-w-[500px]", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b text-gray-500", children: [_jsx("th", { className: "text-left py-2", children: "User" }), _jsx("th", { className: "text-left py-2 hidden sm:table-cell", children: "Date" }), _jsx("th", { className: "text-left py-2", children: "Type" }), _jsx("th", { className: "text-left py-2", children: "Status" })] }) }), _jsx("tbody", { children: projects &&
                                    projects.data.map((p, i) => (_jsxs("tr", { className: "border-b last:border-none", children: [_jsx("td", { className: "py-2 sm:py-3", children: p.user }), _jsx("td", { className: "hidden sm:table-cell", children: p.date }), _jsx("td", { children: p.type }), _jsx("td", { children: _jsx("span", { className: `px-2 sm:px-3 py-1 text-xs font-semibold rounded-full ${p.status === "Approved"
                                                        ? "bg-green-100 text-green-700"
                                                        : p.status === "Pending"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-red-100 text-red-700"}`, children: p.status }) })] }, i))) })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6", children: [_jsxs("div", { className: "bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md overflow-x-auto", children: [_jsx("h4", { className: "text-sm sm:text-base text-gray-700 font-semibold mb-3 sm:mb-4", children: "Services Usages" }), _jsx("div", { className: "w-full min-w-[300px]", children: _jsxs(BarChart, { width: 400, height: 200, data: usageData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "value", fill: "#5BC0BE", radius: [10, 10, 0, 0] })] }) })] }), _jsxs("div", { className: "bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md overflow-x-auto", children: [_jsx("h4", { className: "text-sm sm:text-base text-gray-700 font-semibold mb-3 sm:mb-4", children: "Business searched mostly" }), _jsx("div", { className: "w-full min-w-[300px]", children: _jsxs(PieChart, { width: 400, height: 250, children: [_jsx(Pie, { data: pieData, dataKey: "value", cx: "50%", cy: "50%", outerRadius: 80, label: true, children: pieData.map((entry, index) => (_jsx(Cell, { fill: COLORS[index] }, `cell-${index}`))) }), _jsx(Legend, {})] }) })] })] })] }));
}
