import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function LeftForgetPass() {
    const navigate = useNavigate()
  return (
       <div className='LoginForm flex flex-col justify-center items-start gap-4'>
            <div className="img-desc flex flex-col w-full items-center gap-3 ">

                <LogoComponent
                    desc={
                        <>
                           Forget your Password? No Worries
                        </>
                    }
                />

                <div className="para">
                    <p>
                        Enter your email address below and we’ll send you a code to reset your password.
                    </p>
                </div>
                <div className="inputFields w-full flex flex-col gap-5 items-start">
                    <CommonInput type='email' name='email' placeholder='Write your email' label='Email Address'
                        required={true}
                        error='Email is required'
                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}
                    />

                  

                   
                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Send"

                            variant="primary"
                            type='submit'
                            onClick={() => {
                               navigate('/verify-pass')
                            }}
                        />
                    </div>
                   
                </div>
            </div>
        </div>
  )
}
