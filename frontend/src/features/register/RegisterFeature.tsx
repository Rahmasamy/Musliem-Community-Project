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
export default function RegisterFeature() {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate()
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
                        error='Full Name is required'
                        icon={<IoPersonOutline fill='gray' fontSize={13} />}
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

                        icon={<FaPhoneAlt fill='gray' fontSize={13} />}
                    />



                    <div className="common-input-wrapper">

                        <CommonInput type='file' name='file' placeholder='Upload your Photo(5Mmb Max)' label='Upload your photo (5Mmb Max)'
                            required={false}

                            icon={<SlCloudUpload fill='#1c7a80' fontSize={17} />}
                            accepts='image/*'
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
