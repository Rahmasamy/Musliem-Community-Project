import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import { useAuth } from '@/hooks/useAuth'
import React, { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";
import { useField } from '@/hooks/useField'

export default function LeftForgetPass() {
    const navigate = useNavigate()
    const { forgotPassword } = useAuth();
    const [email, setEmail] = useState("");
    const emailField = useField("");

    const handleSend = async () => {
        try {
            await forgotPassword({ email: emailField.value });
            toast.success("Reset code sent to your email");
            navigate("/verify-pass");
        } catch (err) {
            toast.error("Something went wrong");
        }
    };

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
                        value={emailField.value}
                        onChange={emailField.onChange}
                        onBlur={emailField.onBlur}
                        touched={emailField.touched}
                        error={emailField.value.trim() === "" ? "Email is required" : ""}

                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}
                    />




                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Send"

                            variant="primary"
                            type='submit'
                            onClick={handleSend}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
