import AuthWrapper from '@/components/common/AuthWrapper'
import CenterHeading from '@/components/common/center-heading/CenterHeading'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import RightWrapper from '@/components/common/RightWrapper'
import ServiceCard from '@/components/common/service-card/ServiceCard'
import React from 'react'

export default function ServiceFeature() {
  return (
  
     <RightWrapper>

         <CenterHeading title='Our Services'  desc={
    <>
      Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum
     
      congue
       <br />
      interdum cras. At nisl in quisque erat ut.
    </>
  }/>
  <ServiceCard/>
  <div className="flex justify-center items-center">

  <OrangeButton title='Load More' />
  </div>
     </RightWrapper>


  )
}
