import CenterHeading from '@/components/common/center-heading/CenterHeading'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import RightWrapper from '@/components/common/RightWrapper'
import SpecialServiceCard from '@/components/common/service-card/SpecialServiceCard'
import { useNavigate } from 'react-router-dom'

export default function ServiceFeature() {
  const navigate = useNavigate()
  return (

    <RightWrapper>

      <CenterHeading title='Our Services' desc={
        <>
          Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
        </>
      } />

      <div className="w-full flex justify-center items-center">
        <div className="w-full sm:w-[95%] lg:w-[90%] p-2 sm:p-4 flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
          <SpecialServiceCard /> 
        </div>
      </div>



      <div className="flex justify-center items-center">
        <div className="p-2 sm:p-4">
          <OrangeButton title='Load More' onClick={() => {
             navigate("/ServicesPage")
          }}/>
        </div>
      </div>
    </RightWrapper>


  )
}
