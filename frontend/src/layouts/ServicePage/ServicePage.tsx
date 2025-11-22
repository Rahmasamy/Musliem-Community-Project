import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import SideBar from '@/components/common/sideBar/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ServicePage() {
      const sideLinks = [
        { name: "Our Products", to: "/ServicesPage/our-products", key: "our-products" },
        // { name: "Donations", to: "/ServicesPage/donations", key: "donations" },
        { name: "Baby Sitter", to: "/ServicesPage/baby-sitter", key: "baby-sitter" },
        { name: "Quran Tutor", to: "/ServicesPage/quran-tutor", key: "quran" },

    ];
  return (
    <>
            <AboveGradiantParent>
                <GoBack />
            </AboveGradiantParent>

            <div className="flex w-full items-center justify-center">
                <Navigate home="Home" arg2="Services" />
            </div>

            <div className="flex flex-col bg-gray-50 min-h-screen lg:flex-row">

                <SideBar
                   
                    navItems={sideLinks}
                    
                />


                <main className="flex-1">



                    <Outlet />




                </main>
            </div>
        </>
  )
}
