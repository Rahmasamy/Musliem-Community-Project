import AuthWrapper from '@/components/common/AuthWrapper'
import CenterHeading from '@/components/common/center-heading/CenterHeading'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import RightWrapper from '@/components/common/RightWrapper'
import ServiceCard from '@/components/common/service-card/ServiceCard'
import { ServiceProvider } from "@/context/serviceContext";

export default function ServiceFeature() {
  return (

    <RightWrapper>

      <CenterHeading title='Our Services' desc={
        <>
          Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum

          congue
          <br />
          interdum cras. At nisl in quisque erat ut.
        </>
      } />

      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] p-4 flex flex-wrap justify-center gap-4">
          
            <ServiceCard type="babysitter" />
            <ServiceCard type="donation" />
            <ServiceCard type="quran_tutor" />
            <ServiceCard type="advertisement" />
       

        </div>
      </div>



      <div className="flex justify-center items-center">
        <div className="p-4">
          <OrangeButton title='Load More' />
        </div>

      </div>
    </RightWrapper>


  )
}
