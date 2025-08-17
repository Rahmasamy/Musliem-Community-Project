import AuthButton from '@/components/common/AuthButton'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import './Verify.css';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
 
import { useResetStore } from '@/store/resetStore';
export default function LeftVerify() {
    const navigate = useNavigate()
    const { setResetToken } = useResetStore()
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const { verifyResetCode } = useAuth()
    const handleChange = (index: number, value: string) => {
        const updated = [...code]
        updated[index] = value
        setCode(updated);


    }
    const handleVerify = async () => {
        const otp = code.join("");
        try {
            const data = await verifyResetCode({ code: otp });
            console.log(data)
           
            setResetToken(data.token)

            toast.success("Two factor Authentication succss!")
            navigate('/reset-password')
        } catch (error) {
            toast.error("Two factor Authentication Failed , Please input Valid Code!")
        }

    };
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
                        <div className="otp-wrapper flex gap-2">
                            {code.map((digit, idx) => (
                                <input
                                    key={idx}
                                    type="text"
                                    maxLength={1}
                                    className="otp-box"
                                    value={digit}
                                    onChange={(e) => handleChange(idx, e.target.value)}
                                />
                            ))}
                        </div>


                    </div>



                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Verify"

                            variant="primary"
                            type='submit'
                            onClick={handleVerify}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
