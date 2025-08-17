import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import Logo from '../../assets/logo.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LogoComponent from '@/components/common/logo-component/LogoComponent';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { useField } from '@/hooks/useField';


export default function LoginForm() {
    const { login } = useAuth()
    const emailField = useField("");
    const passwordField = useField("");


    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login({
                email: emailField.value,
                password: passwordField.value,
            });
            alert("Login Successfully");
        } catch (err) {
            alert("Login failed");
        }
    };
    return (
        <form className='LoginForm flex flex-col justify-center items-start gap-4'
            onSubmit={handleOnSubmit}
        >
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


                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}
                        value={emailField.value}
                        onChange={emailField.onChange}
                        onBlur={emailField.onBlur}
                        touched={emailField.touched}
                        error={emailField.value.trim() === "" ? "Email is required" : ""}
                    />

                    <CommonInput type='password' name='password' placeholder='Write your password' label='Password'
                        required={true}
                        value={passwordField.value}
                        onChange={passwordField.onChange}
                        onBlur={passwordField.onBlur}
                        touched={passwordField.touched}
                        error={
                            passwordField.value.trim() === "" ? "Password is required" : ""
                        }
                        icon={<FaLock fill='gray' fontSize={13} />}


                    />


                    <span className='forgerPassSpan'>

                        <Link to="/forget-pass" >
                            Forget Password?
                        </Link>
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
        </form>
    )
}
