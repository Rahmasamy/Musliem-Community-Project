
import LoginAvatar from '@/features/login/LoginAvatar'
import LoginForm from '@/features/login/LoginForm'
import backgoundImg from '../../assets/backgound-img.png'
import './Login.css'
import AuthWrapper from '@/components/common/AuthWrapper'
import RightAuthContainer from '@/components/common/RigtAuthContainer'
import LeftAuthContainer from '@/components/common/LeftAuthContainer'
export default function Login() {
  return (
    <AuthWrapper>

     
        <LeftAuthContainer>
          <LoginForm />

        </LeftAuthContainer>

        <RightAuthContainer>

          <LoginAvatar />
        </RightAuthContainer>



   
    </AuthWrapper>

  )
}
