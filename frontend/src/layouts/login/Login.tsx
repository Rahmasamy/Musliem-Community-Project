
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

      <div className="LoginContainer w-[91%] max-w-6xl min-h-[90vh]  flex justify-between items-center"


      >
        <LeftAuthContainer>
          <LoginForm />

        </LeftAuthContainer>

        <RightAuthContainer>

          <LoginAvatar />
        </RightAuthContainer>



      </div>
    </AuthWrapper>

  )
}
