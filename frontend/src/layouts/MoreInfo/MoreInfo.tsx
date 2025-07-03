
import AuthWrapper from '@/components/common/AuthWrapper'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
import RightMoreInfo from '@/features/MoreInfo/RightMoreInfo'
import MoreInfoFeature from '@/features/MoreInfo/MoreInfoFeature'
export default function MoreInfo() {
  return (
    <AuthWrapper>

      
<LeftAuthContainer>

   <MoreInfoFeature/>
</LeftAuthContainer>
<RightAuthContainer>
    
<RightMoreInfo/>
</RightAuthContainer>
    </AuthWrapper>



   

  )
}
