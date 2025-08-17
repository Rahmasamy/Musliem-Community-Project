import Stepper from 'react-stepper-horizontal';
import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import { IoPersonOutline } from "react-icons/io5";
import { FaLock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";

import './RightAvatar.css'
import { useState } from 'react';
import { useRegisterStore } from '@/store/registerStore';
import { useField } from '@/hooks/useField';
export default function RegisterFeature() {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate()
    const { updateField } = useRegisterStore();
    const fullNameField = useField("");
    const emailField = useField("");
    const passField = useField("");
    const confirmField = useField("");
    const phoneNumberField = useField("");

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
                <div className="p-4">
                    <Stepper
                        steps={[{ title: 'Personal Info' }, { title: 'More Info' }]}
                        activeStep={currentStep}


                        defaultColor="#89cdd3"
                        completeColor="#1c7a80"
                        activeColor="#1c7a80"


                        defaultBarColor="#89cdd3"
                        completeBarColor="#1c7a80"


                        defaultTitleColor="#000"
                        completeTitleColor="#000"
                        activeTitleColor="#000"

                        size={28}
                        circleFontSize={14}
                        titleFontSize={14}

                        className="stepper-custom"
                    />


                </div>
                <div className="inputFields w-full flex flex-col gap-5 items-start">
                    <CommonInput type='text' name='full-name' placeholder='Write your Full Name' label='Full Name'
                        required={true}
                        error={
                            fullNameField.value.trim() === ""
                                ? "Full Name is required"
                                : ""
                        }
                        icon={<IoPersonOutline fill='gray' fontSize={13} />}
                        onChange={(e) => {
                            fullNameField.onChange(e);
                            updateField("fullName", e.target.value);
                        }}
                        value={fullNameField.value}
                        onBlur={fullNameField.onBlur}
                        touched={fullNameField.touched}
                    />
                    <CommonInput type='email' name='email' placeholder='Write your email' label='Email Address'
                        required={true}
                        value={emailField.value}
                        onChange={(e) => {
                            emailField.onChange(e);
                            updateField("email", e.target.value);
                        }}
                        onBlur={emailField.onBlur}
                        touched={emailField.touched}
                        error={emailField.value.trim() === "" ? "Email is required" : ""}
                        icon={<MdOutlineEmail fill='gray' fontSize={13} />}

                    />
                    <CommonInput type='password' name='password' placeholder='Write your password' label='Password'
                        required={true}
                        value={passField.value}
                        onChange={(e) => {
                            passField.onChange(e);
                            updateField("password", e.target.value);
                        }}
                        onBlur={passField.onBlur}
                        touched={passField.touched}
                        error={passField.value.trim() === "" ? "Password is required" : ""}
                        icon={<FaLock fill='gray' fontSize={13} />}

                    />

                    <CommonInput type='password' name='password' placeholder='Confirm your password' label='Confirm Password'
                        required={true}
                        value={confirmField.value}
                        onChange={(e) => {
                            confirmField.onChange(e);
                            updateField("confirmPassword", e.target.value);
                        }}
                        onBlur={confirmField.onBlur}
                        touched={confirmField.touched}
                        error={
                            confirmField.value.trim() === ''
                                ? 'Confirm Password is required'
                                : confirmField.value !== passField.value
                                    ? "Passwords do not match"
                                    : ""
                        }
                        icon={<FaLock fill='gray' fontSize={13}

                        />

                        }
                    />
                    <CommonInput type='number' name='phoneNumber' placeholder='Write your Phone number' label='Phone Number(OPTIONAL)'
                        required={false}
                        value={phoneNumberField.value}
                        onChange={(e: any) => {
                            phoneNumberField.onChange(e);
                            updateField("phoneNumber", e.target.value);
                        }}
                        onBlur={phoneNumberField.onBlur}
                        touched={phoneNumberField.touched}
                        // Optional validation example (min 10 digits)
                        error={
                            phoneNumberField.value && phoneNumberField.value.length < 10
                                ? "Phone number must be at least 10 digits"
                                : ""
                        }
                        icon={<FaPhoneAlt fill='gray' fontSize={13} />}
                       
                    />



                    <div className="common-input-wrapper">

                        <CommonInput type='file' name='file' placeholder='Upload your Photo(5Mmb Max)' label='Upload your photo (5Mmb Max)'
                            required={false}

                            icon={<SlCloudUpload fill='#1c7a80' fontSize={17} />}
                            accepts='image/*'
                            onChange={(e: any) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    updateField("photo", file);
                                }
                            }}
                        />
                    </div>
                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Next"

                            variant="primary"
                            type='submit'
                            onClick={() => navigate('/more-info', { state: { step: 1 } })}

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
