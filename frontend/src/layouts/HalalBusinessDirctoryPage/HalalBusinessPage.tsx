import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import SideBar from '@/components/common/sideBar/SideBar'

import { Link, Outlet } from 'react-router-dom'

export default function HalalBusinessPage() {
    const sideLinks = [
        { name: "Advertise", to: "/halal-business-dirctory/advertise", key: "adv" },
        { name: "Puplish Your Service", to: "/halal-business-dirctory/apply-for-role", key: "apply" },
        { name: "Sell products", to: "/halal-business-dirctory/sell-products", key: "Sell products" },
    ];
    return (
        <>
            <AboveGradiantParent>
                <GoBack />
            </AboveGradiantParent>

            <div className="flex w-full items-center justify-center">
                <Navigate home="Home" arg2="Halal Business Directory" />
            </div>

            <div className="flex flex-col bg-gray-50 min-h-screen lg:flex-row text-sm lg:text-md">

                <SideBar
                    label="Halal Business Directory"
                    navItems={sideLinks}

                />


                <main className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8">



                    <Outlet />




                </main>
            </div>
        </>
    )
}
