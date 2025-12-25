import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/imgs/logo.png";
import { RiAdminLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";
import { VscSymbolEvent } from "react-icons/vsc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white border-r border-gray-200 p-4 sm:p-5 lg:p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <img src={logo} alt="MCUS" className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-lg sm:text-xl font-semibold text-teal-700">
            MCUS
          </h1>
        </div>

        <nav className="flex flex-row lg:flex-col gap-2 sm:gap-3 text-gray-600 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
          <Link
            to="/admin-dashboard/dashboard-anayltics"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <RiAdminLine />
            </span>
            <span className="hidden sm:inline">Admin Dashboard</span>
            <span className="sm:hidden">Dashboard</span>
          </Link>

          <Link
            to="/admin-dashboard/dashbord-contactus"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <TbReport />
            </span>
            Reports
          </Link>

          <Link
            to="/admin-dashboard/dashboard-groups"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <RiAdvertisementLine />
            </span>

            <span className="hidden sm:inline">Advertisment</span>
            <span className="sm:hidden">Ads</span>
          </Link>
          <Link
            to="/admin-dashboard/dashboard-services"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <MdHomeRepairService />
            </span>
            Services
          </Link>
          <Link
            to="/admin-dashboard/dashboard-events"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <VscSymbolEvent />
            </span>
            Events
          </Link>
          <Link
            to="/admin-dashboard/dashbord-products"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <MdOutlineProductionQuantityLimits />
            </span>
            Products
          </Link>
          <Link
            to="/admin-dashboard/dashbord-users"
            className={`text-teal-600 flex items-center gap-2 sm:gap-4 text-sm sm:text-base p-2 rounded hover:bg-orange-100 whitespace-nowrap`}
          >
            <span className="text-base sm:text-lg">
              <FaRegUser />
            </span>
            Users
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-3 sm:p-4 md:p-5 lg:p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
