import AuthWrapper from '@/components/common/AuthWrapper'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import LoginAvatar from '@/features/login/LoginAvatar'
import RegisterFeature from '@/features/register/RegisteRFeature'
import React from 'react'

export default function Register() {
  return (
    <AuthWrapper>
<LeftAuthContainer>

   <RegisterFeature/>
</LeftAuthContainer>
<RightAuthContainer>

   <LoginAvatar/>
</RightAuthContainer>
    </AuthWrapper>
  )
}
