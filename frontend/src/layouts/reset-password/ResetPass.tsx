import AuthWrapper from '@/components/common/AuthWrapper'
import GoBack from '@/components/common/GoBack/GoBack'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import LeftReset from '@/features/reset-pass/LeftReset'
import RightRest from '@/features/reset-pass/RightRest'
import React from 'react'


export default function ResetPass() {
  return (
    <>
    <GoBack/>
      <AuthWrapper>
<LeftAuthContainer>

   <LeftReset/>
</LeftAuthContainer>
<RightAuthContainer>
    
  <RightRest/>
</RightAuthContainer>
    </AuthWrapper>
    </>


  )
}
