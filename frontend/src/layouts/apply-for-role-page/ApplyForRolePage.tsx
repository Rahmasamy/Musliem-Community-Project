import CancelBtn from '@/components/common/cancel-btn/CancelBtn';
import CommonInput from '@/components/common/CommonInput';
import ConfirmBtn from '@/components/common/confirm-btn/ConfirmBtn';
import React, { useState } from 'react'
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { SlCloudUpload } from 'react-icons/sl';

export default function ApplyForRolePage() {
const [plan, setPlan] = useState("babysitter");
    return (
        <div className="w-full mx-auto p-6">
            {/* Title */}
            <h2 className="text-gray-400 text-sm mb-4 font-bold">Apply For A Role</h2>

            {/* Plan Selection */}
            <p className="font-semibold text-lg mb-3">
                Choose Your Role
            </p>
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setPlan("baby-sitter")}
                    className={`border rounded-2xl p-4 text-center transition duration-300 ${plan === "baby-sitter"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">BabySitter</p>
                   
                </button>

                <button
                    onClick={() => setPlan("mosque")}
                    className={`border rounded-lg p-4 text-center transition duration-300 ${plan === "mosque"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Mosque</p>
                    
                </button>
                  <button
                    onClick={() => setPlan("charity")}
                    className={`border rounded-lg p-4 text-center transition duration-300 ${plan === "charity"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Charity</p>
                    
                </button>
                  <button
                    onClick={() => setPlan("quran-tutor")}
                    className={`border rounded-lg p-4 text-center transition duration-300 ${plan === "quran-tutor"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Quran Tutor</p>
                    
                </button>
            </div>


            {/* Business Name */}
                <div className="w-full">

            <CommonInput
                label="Business Name"
                name="businessName"
                placeholder="Write your business name here"
            />
                </div>
             <label className='font-bold text-sm'>
                Upload your Business Photo or your Photo
            </label>
            <div className="common-input-wrapper w-full">
                {/* Upload Photo */}
           
                <CommonInput type='file' name='file' placeholder='Upload Photo for your Bussiness(5Mmb Max)' label='Upload your Business Photo or your Photo'
                    required={false}

                    icon={<SlCloudUpload fill='#1c7a80' fontSize={17} />}
                    accepts='image/*'
                />
            </div>


            

            {/* City and State */}
            <div className="flex gap-4 mt-4">
                <div className="flex-1">
                    <label className="text-sm text-gray-700 mb-1 block font-bold p-2">City</label>
                    <select className="w-full border rounded-xl text-gray-700 bg-gray-50 p-3">
                        <option>select your city</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="text-sm text-gray-700 mb-1 block  font-bold p-2">State</label>
                    <select className="w-full border rounded-xl text-gray-700 bg-gray-50 p-3">
                        <option>select your state</option>
                    </select>
                </div>
            </div>

           

            {/* Contact Number */}
            <div className="w-full mt-3">

            <CommonInput
                label="Contact Number"
                name="contactNumber"
                placeholder="+92 (555) 555-555"
                icon={<FiPhone className="text-gray-400 text-xl" />}
            />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
                <CancelBtn />
                <ConfirmBtn />
            </div>
        </div>
    )
}
