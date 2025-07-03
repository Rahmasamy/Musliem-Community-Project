import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import Logo from '../../assets/logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LogoComponent from '@/components/common/logo-component/LogoComponent';


export default function LoginForm() {
    return (
        <div className='LoginForm flex flex-col justify-center items-start gap-4'>
            <div className="img-desc flex flex-col w-full items-center gap-3 ">

                <LogoComponent
                    desc={
                        <>
                            It's great to see you again.<br />
                            Let Login and Explore what's new.
                        </>
                    }
                />

                <div className="inputFields w-full flex flex-col gap-5 items-start">
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


                    <span className='forgerPassSpan'>

                        <a href="#" >
                            Forget Password?
                        </a>
                    </span>
                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Login"

                            variant="primary"
                            type='submit'
                        />
                    </div>
                    <div className="Register">

                        <p >
                            Do you have Account?
                            <span className='CreatAcountSpan'>

                                <Link to="/register">

                                    Create Account</Link>
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
