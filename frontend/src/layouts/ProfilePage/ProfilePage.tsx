import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import SideBar from '@/components/common/sideBar/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProfilePage() {
    const sideLinks = [
        { name: "Profile", to: "/profilePage/profile-section", key: "prof-section" },
        { name: "Your Advertisments", to: "/profilePage/your-advertisments", key: "your-advertisments" },
        { name: "Your Listing", to: "/profilePage/yourlisting", key: "your-listing" },
        { name: "Profile Payments", to: "/profilePage/profile-payments", key: "profile-payments" },

    ];
    return (
        <>
            <AboveGradiantParent>
                <GoBack />
            </AboveGradiantParent>

            <div className="flex w-full items-center justify-center">
                <Navigate home="Home" arg2="Profile" />
            </div>

            <div className="flex bg-gray-50 min-h-screen">

                <SideBar
                    label="Halal Business Directory"
                    navItems={sideLinks}

                />


                <main className="flex-1">



                    <Outlet />




                </main>
            </div>
        </>
    )
}
