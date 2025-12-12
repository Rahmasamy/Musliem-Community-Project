import { VisitContext } from "@/context/dashboard-context";
import {
  useCountAllPayments,
  useCountAllUsers,
  useDashboardProjects,
  useUsageStats,
} from "@/hooks/useDashboardData";
import { useContext } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function PresentationDshoard() {
  const { data:usageData, isLoading:useStats, isError:isStatsError } = useUsageStats();
  const { data:pieData, isLoading:pieUseStats, isError:PieIsStatsError } = useUsageStats();
  // const { data: payments, isLoading: paymentsLoading } = useCountAllPayments();

  const { data: projects, isLoading, isError } = useDashboardProjects();
  // if (usersLoading || paymentsLoading) return <p>Loading...</p>;
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

  if (useStats && pieUseStats) return <p>Loading stats...</p>;
  if (isStatsError && PieIsStatsError) return <p className="text-red-500">Error loading stats</p>;
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
  if (isLoading) return <p>Loading projects...</p>;
  if (isError) return <p>Something went wrong.</p>;
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {usageData.map((card: any, i: number) => (
          <div
            key={i}
            className="p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md text-white flex flex-col justify-between"
            style={{ backgroundColor:COLORS[i] }}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-base sm:text-lg font-semibold">{card.name}</h3>
              <span className="text-xs sm:text-sm opacity-80">↗</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Projects Table */}
      <div className="bg-white shadow-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 overflow-x-auto">
        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#007B7F]">Projects</h3>
        <table className="w-full text-xs sm:text-sm text-gray-700 min-w-[500px]">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="text-left py-2">User</th>
              <th className="text-left py-2 hidden sm:table-cell">Date</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.data.map((p, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-2 sm:py-3">{p.user}</td>
                  <td className="hidden sm:table-cell">{p.date}</td>
                  <td>{p.type}</td>
                  <td>
                    <span
                      className={`px-2 sm:px-3 py-1 text-xs font-semibold rounded-full ${
                        p.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : p.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Service Usage */}
        <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md overflow-x-auto">
          <h4 className="text-sm sm:text-base text-gray-700 font-semibold mb-3 sm:mb-4">Services Usages</h4>
          <div className="w-full min-w-[300px]">
            <BarChart width={400} height={200} data={usageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#5BC0BE" radius={[10, 10, 0, 0]} />
            </BarChart>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-md overflow-x-auto">
          <h4 className="text-sm sm:text-base text-gray-700 font-semibold mb-3 sm:mb-4">
            Business searched mostly
          </h4>
          <div className="w-full min-w-[300px]">
            <PieChart width={400} height={250}>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
