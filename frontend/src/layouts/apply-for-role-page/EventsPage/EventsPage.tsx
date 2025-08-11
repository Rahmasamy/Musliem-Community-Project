import SideBar from "@/components/common/sideBar/SideBar";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import { FaPlus } from "react-icons/fa";
import Navigate from "@/components/common/navigator/Navigate";

const sideLinks = [
  { name: "All events", to: "/events/all-events", key: "both" },
  { name: "Your events", to: "/events/your-events", key: "joined" },
];

export default function EventsPage() {
  return (
    <>
      {/* Gradient Header with GoBack */}
      <AboveGradiantParent>
        <GoBack />
      </AboveGradiantParent>

      {/* Breadcrumb Navigator */}
      <div className="flex w-full items-center justify-center">
        <Navigate home="Home" arg2="Events" />
      </div>

      {/* Main Layout */}
      <div className="flex bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <SideBar label="Events" navItems={sideLinks} />

        {/* Main Content */}
        <main className="flex-1 p-8">
         

          {/* Nested Routes Content */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
