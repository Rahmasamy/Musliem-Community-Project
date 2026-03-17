import AuthWrapper from '@/components/common/AuthWrapper'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import RightAvatar from '@/features/register/RightAvatar'
import './Register.css'
import RegisterFeature from '@/features/register/RegisterFeature'
export default function Register() {
  return (
    <AuthWrapper>
<LeftAuthContainer>

   <RegisterFeature/>
</LeftAuthContainer>
<RightAuthContainer>
    
  <RightAvatar/>
</RightAuthContainer>
    </AuthWrapper>
  )
}
