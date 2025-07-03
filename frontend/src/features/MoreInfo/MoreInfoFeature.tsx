import Stepper from 'react-stepper-horizontal';
import AuthButton from '@/components/common/AuthButton'
import CommonInput from '@/components/common/CommonInput'
import LogoComponent from '@/components/common/logo-component/LogoComponent'
import { Link, useNavigate } from 'react-router-dom'
import { SlCloudUpload } from "react-icons/sl";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoreInfo.css'
import GoBack from '@/components/common/GoBack/GoBack';
export default function MoreInfoFeature() {
    const navigate = useNavigate()

    const { state } = useLocation();
    const [currentStep] = useState(state?.step || 0);


    return (
      
        <>
          <GoBack/>
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
                    <div className="input-radio-group w-full">
                        <p className="font-bold mb-2">Choose your Skill:</p>
                        <div className="radioinputfield flex gap-6 flex-wrap">
                            {['skill-0', 'skill-1', 'skill-2', 'skill-3'].map((skill, index) => (
                                <div className="single-input">

                                    <label key={skill} className="flex items-center gap-2 cursor-pointer p-3">
                                        <input
                                            type="radio"
                                            id={skill}
                                            name="skills"
                                            value={skill}
                                            className="accent-teal-700 w-4 h-4"
                                        />
                                        <span className="text-gray-700 capitalize">{skill.replace('-', ' ')}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <CommonInput type='text' name='other skill' placeholder='Other skill' label='Other Skill'
                        required={false}

                    />

                    <div className="Bio w-full">
                        <label htmlFor="bio" className="block text-sm font-medium mb-1">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            placeholder="Tell us more about yourself..."
                            rows={4}
                            className="w-full p-3  rounded-md focus:ring-teal-600"
                        ></textarea>
                    </div>


                    <div className="input-radio-group w-full mt-4">
                        <p className="font-bold mb-2 text-gray-700">Your Role:</p>
                        <div className="radioinputfield  flex gap-6 flex-wrap">
                            {['individual', 'non-profit-organization', 'business owner'].map((role, index) => (
                                <div className="single-input">
                                    <label key={role} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            id={role}
                                            name="role"
                                            value={role}
                                            className="accent-teal-700 w-4 h-4"
                                        />
                                        <span className="text-gray-700 mb-2">{role}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>





                    <div className="common-input-wrapper">

                        <CommonInput type='file' name='file' placeholder='Upload Photo for your Bussiness(5Mmb Max)' label='Upload your photo (5Mmb Max)'
                            required={false}

                            icon={<SlCloudUpload fill='#1c7a80' fontSize={17} />}
                            accepts='image/*'
                        />
                    </div>
                    <div className="checkBox w-full flex items-start gap-2 mt-4">
                        <input type="checkbox" id="terms" name="terms" value="terms" className="mt-1 accent-teal-700" />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the <a href="#" className="text-teal-700 underline">Terms & Conditions</a>
                        </label>
                    </div>

                    <div className="AuthBtnContainer w-full flex justify-center items-center ">

                        <AuthButton label="Create Account"

                            variant="primary"
                            type='submit'
                            onClick={() => {
                                navigate('/more-info')

                            }}

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
        </>
       
    )
}
