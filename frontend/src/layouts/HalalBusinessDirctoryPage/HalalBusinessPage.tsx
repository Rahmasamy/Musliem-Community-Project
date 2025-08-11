import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import SideBar from '@/components/common/sideBar/SideBar'

import { Link, Outlet } from 'react-router-dom'

export default function HalalBusinessPage() {
    const sideLinks = [
        { name: "Advertise", to: "/halal-business-dirctory/advertise", key: "adv" },
        { name: "Apply for a Role", to: "/halal-business-dirctory/apply-for-role", key: "apply" },
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
