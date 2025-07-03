import AuthWrapper from '@/components/common/AuthWrapper'
import GoBack from '@/components/common/GoBack/GoBack'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import LeftVerify from '@/features/verifyAccount/LeftVerify'
import RightVerify from '@/features/verifyAccount/RightVerify'
import React from 'react'

export default function VerifyAccount() {
  return (
    <>
    <GoBack/>
    <AuthWrapper>
<LeftAuthContainer>

   <LeftVerify/>
</LeftAuthContainer>
<RightAuthContainer>
    
  <RightVerify/>
</RightAuthContainer>
    </AuthWrapper>
    </>
  )
}
