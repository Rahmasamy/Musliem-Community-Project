import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import React from 'react'
import { FaLock } from 'react-icons/fa'

export default function LeftReset() {
    return (
        <div className='LoginForm flex flex-col justify-center items-start gap-4'>
            <div className="img-desc flex flex-col w-full items-center gap-3 ">

                <LogoComponent
                    desc={
                        <>
                            Create a New Password
                        </>
                    }
                />

                <div className="para">
                    <p>
                        Set a strong password to keep your account secure..<br />

                    </p>
                </div>
                <div className="inputFields w-full flex flex-col gap-5 items-start">

                    <CommonInput type='password' name='password' placeholder='Write your password' label='Password'
                        required={true}
                        error='Password is required'
                        icon={<FaLock fill='gray' fontSize={13} />}
                    />

                    <CommonInput type='password' name='password' placeholder='Confirm your password' label='Confirm Password'
                        required={true}
                        error='Password is required'
                        icon={<FaLock fill='gray' fontSize={13} />}
                    />


                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Reset Password"

                            variant="primary"
                            type='submit'

                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
