import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function RegisterFeature() {
  return (
     <div className='LoginForm flex flex-col justify-center items-start gap-4'>
            <div className="img-desc flex flex-col w-full items-center gap-3 ">

                <LogoComponent
                    desc={
                        <>
                           We’re excited to have in our community.<br />
                            Let’s get Started!
                        </>
                    }
                />

                <div className="inputFields w-full flex flex-col gap-5 items-start">
                    <CommonInput type='text' name='full-name' placeholder='Write your Full Name' label='Full Name'
                        required={true}
                        error='Full Name is required'
                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}
                    />
                     <CommonInput type='email' name='email' placeholder='Write your email' label='Email Address'
                        required={true}
                        error='Email is required'
                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}
                    />
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
 <CommonInput type='number' name='phoneNumber' placeholder='Write your Phone number' label='Phone Number (OPTIONAL)'
                        required={false}
    
                        icon={<FaLock fill='gray' fontSize={13} />}
                    />
                    <span className='forgerPassSpan'>

                        <a href="#" >
                            Forget Password?
                        </a>
                    </span>
                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Next"

                            variant="primary"
                            type='submit'
                        />
                    </div>
                    <div className="Register">

                        <p >
                            Already have account?
                            <span className='CreatAcountSpan'>

                                <Link to="/login">

                                    Login</Link>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
  )
}
