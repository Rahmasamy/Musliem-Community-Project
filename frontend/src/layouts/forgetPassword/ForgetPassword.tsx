import AuthWrapper from '@/components/common/AuthWrapper'
import GoBack from '@/components/common/GoBack/GoBack'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import LeftForgetPass from '@/features/forget-pass/LeftForgetPass'
import RightForgetPass from '@/features/forget-pass/RightForgetPass'

export default function ForgetPassword() {
    return (
        <>
         <GoBack/>
        <AuthWrapper>


            <LeftAuthContainer>

                <LeftForgetPass />
            </LeftAuthContainer>
            <RightAuthContainer>

                <RightForgetPass />
            </RightAuthContainer>
        </AuthWrapper>
        </>
          

    )
}
