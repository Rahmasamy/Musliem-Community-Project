import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import { useAuth } from '@/hooks/useAuth'
import { useField } from '@/hooks/useField'
import { useResetStore } from '@/store/resetStore'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaLock } from 'react-icons/fa'

export default function LeftReset() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { resetPassword } = useAuth()
    const { resetToken } = useResetStore()
    const passwordField = useField("");
    const confirmField = useField("");

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (passwordField.value !== confirmField.value) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            await resetPassword({ password: passwordField.value }, resetToken as string);
            toast.success("Password reset successfully");
        } catch (error) {
            toast.error("Password reset failed");
        }
    };
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

                    <CommonInput
                        type="password"
                        name="password"
                        placeholder="Write your password"
                        label="Password"
                        value={passwordField.value}
                        onChange={passwordField.onChange}
                        onBlur={passwordField.onBlur}
                        touched={passwordField.touched}
                        error={
                            passwordField.value.trim() === ""
                                ? "Password is required"
                                : ""
                        }
                        icon={<FaLock fill="gray" fontSize={13} />}
                    />
                    <CommonInput
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        label="Confirm Password"
                        value={confirmField.value}
                        onChange={confirmField.onChange}
                        onBlur={confirmField.onBlur}
                        touched={confirmField.touched}
                        error={
                            confirmField.value.trim() === ""
                                ? "Confirm Password is required"
                                : ""
                        }
                        icon={<FaLock fill="gray" fontSize={13} />}
                    />

                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Reset Password"

                            variant="primary"
                            type='submit'
                            onClick={handleResetPassword}

                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
