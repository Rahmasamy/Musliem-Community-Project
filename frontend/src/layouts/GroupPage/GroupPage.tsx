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
    if (location.pathname === "/Groups/all-groups" ||location.pathname ===  "/Groups/your-groups") {
      setHideCreate(false);
    } else {
      setHideCreate(true);
    }
  }, [location.pathname]);
  const sideLinks = [
    { name: "All Groups", to: "/Groups/all-groups", key: "both" },
    { name: "Your Groups", to: "/Groups/your-groups", key: "joined" },
  ];

  return (
    <>
      <AboveGradiantParent>
        <GoBack />
      </AboveGradiantParent>

      <div className="flex w-full items-center justify-center">
        <Navigate home="Home" arg2="Groups" />
      </div>

      <div className="flex flex-col bg-gray-50 min-h-screen lg:flex-row">
        <SideBar label="Groups" navItems={sideLinks} />

        <main className="flex-1 px-6">
          {hideCreate && (
            <div className="flex justify-between items-center mb-8">
              <Link
                to="/Groups/create-group"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow m-4"
              >
                <FaPlus /> Create New Group
              </Link>
            </div>
          )}

          <Outlet />
        </main>
      </div>
    </>
  );
}
