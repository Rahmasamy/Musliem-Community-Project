import { useState } from "react";
import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import Navigate from "@/components/common/navigator/Navigate";
import SideBar from "@/components/common/sideBar/SideBar";

import {  Outlet } from "react-router-dom";


export default function GroupPage() {
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
 
            <div className="flex bg-gray-50 min-h-screen">

                <SideBar
                    label="Groups"
                    navItems={sideLinks}
                    
                />


                <main className="flex-1 px-6">

                  

                       <Outlet />



                  
                </main>
            </div>
        </>
    );
}
