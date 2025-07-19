import { useState } from "react";
import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import Navigate from "@/components/common/navigator/Navigate";
import SideBar from "@/components/common/sideBar/SideBar";
import { FaPlus } from "react-icons/fa";
import AllGroupsPage from "../AllGroupsPage/AllGroupsPage";
import YourGroupsPage from "../YourGroupsPage/YourGroupsPage";
import CreateGroup from "../createGroup/CreateGroup";
import { Link, Outlet } from "react-router-dom";


export default function GroupPage() {
    const sideLinks = [
        { name: "All Groups", to: "/Groups/all-groups", key: "both" },
        { name: "Your Groups", to: "/Groups/your-groups", key: "joined" },
    ];

    const [activeSection, setActiveSection] = useState("both"); 
    const [createGroup,setCreateGroup] = useState("")
    return (
        <>
            <AboveGradiantParent>
                <GoBack />
            </AboveGradiantParent>

            <div className="flex w-full items-center justify-center">
                <Navigate home="Home" arg2="Groups" />
            </div>
 
            <div className="flex bg-gray-50 min-h-screen">

                <SideBar
                    label="Groups"
                    navItems={sideLinks}
                    
                />


                <main className="flex-1 p-8">

                    <div className="flex justify-between items-center mb-8">
                      
                        <Link to='/Groups/create-group'
                         className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
                        >
                            <FaPlus /> Create New Group
                        </Link>
                       
                    </div>

                       <Outlet />



                  
                </main>
            </div>
        </>
    );
}
