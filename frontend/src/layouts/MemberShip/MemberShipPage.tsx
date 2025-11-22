import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import PricingPlans from '@/features/pricing-plan/PricingPlan'
import React from 'react'

export default function MemberShipPage() {
  return (
      <>
                <AboveGradiantParent>
                    <GoBack />
                </AboveGradiantParent>
    
                <div className="flex w-full items-center justify-center">
                    <Navigate home="Home" arg2="Halal Business Directory" />
                </div>
     
                <div className="flex flex-col bg-gray-50 min-h-screen lg:flex-row">
    
                   
    
    
                    <main className="flex-1">
    
                       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <PricingPlans />
    </div>
    
                        
    
    
    
                      
                    </main>
                </div>
            </>
  )
}
