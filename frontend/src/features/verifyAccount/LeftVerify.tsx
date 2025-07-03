import AuthButton from '@/components/common/AuthButton'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import './Verify.css';
import { useNavigate } from 'react-router-dom';
export default function LeftVerify() {
    const navigate = useNavigate()
    return (
        <div className='LoginForm flex flex-col justify-center items-start gap-4'>
            <div className="img-desc flex flex-col w-full items-center gap-3 ">

                <LogoComponent
                    desc={
                        <>
                            Verify Your Email
                        </>
                    }
                />

                <div className="para">
                    <p>
                        We’ve sent a 6-digit code to your email.<br />
                     <a href="">
                        emmy@gmail.com
                        </a>    Please enter it below to continue.
                    </p>
                </div>
                <div className="inputFields w-full flex flex-col gap-5 items-start">

             <div className="verify-container flex flex-wrap gap-2">
  <div><input type="text" maxLength={1} className="otp-box" /></div>
  <div><input type="text" maxLength={1} className="otp-box" /></div>
  <div><input type="text" maxLength={1} className="otp-box" /></div>
  <div><input type="text" maxLength={1} className="otp-box" /></div>
  <div><input type="text" maxLength={1} className="otp-box" /></div>
  <div><input type="text" maxLength={1} className="otp-box" /></div>
</div>



                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Verify"

                            variant="primary"
                            type='submit'
                            onClick={() => {
                             navigate('/reset-password')
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
