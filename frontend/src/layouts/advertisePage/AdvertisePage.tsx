import CancelBtn from '@/components/common/cancel-btn/CancelBtn'
import CommonInput from '@/components/common/CommonInput'
import ConfirmBtn from '@/components/common/confirm-btn/ConfirmBtn'
import React, { useState } from 'react'
import { FiMapPin, FiPhone, FiUpload } from 'react-icons/fi'
import { SlCloudUpload } from 'react-icons/sl'

export default function AdvertisePage() {
    const [plan, setPlan] = useState("website");
    return (
        <div className="w-full mx-auto p-6">
            {/* Title */}
            <h2 className="text-gray-400 text-sm mb-4 font-bold">Advertisement</h2>

            {/* Plan Selection */}
            <p className="font-semibold text-lg mb-3">
                How you want to Advertise your business ?
            </p>
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setPlan("website")}
                    className={`border rounded-2xl p-4 text-center transition duration-300 ${plan === "website"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Website & Email</p>
                    <p className="text-sm">$100/Month</p>
                </button>

                <button
                    onClick={() => setPlan("email")}
                    className={`border rounded-lg p-4 text-center transition duration-300 ${plan === "email"
                            ? "bg-gradient-to-t from-[#00787B] to-[#003F41] text-white shadow-lg"
                            : "border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                        }`}
                >
                    <p className="font-medium">Via Email Only</p>
                    <p className="text-sm">$50/Month</p>
                </button>
            </div>


            {/* Business Name */}
            <CommonInput
                label="Business Name"
                name="businessName"
                placeholder="Write your business name here"
            />
            <div className="common-input-wrapper">
                {/* Upload Photo */}

                <CommonInput type='file' name='file' placeholder='Upload Photo for your Bussiness(5Mmb Max)' label='Upload your photo (5Mmb Max)'
                    required={false}

                    icon={<SlCloudUpload fill='#1c7a80' fontSize={17} />}
                    accepts='image/*'
                />
            </div>


            {/* Address */}
            <CommonInput
                label="Address"
                name="address"
                placeholder="Write your address"
                icon={<FiMapPin className="text-gray-400 text-xl" />}
            />

            {/* City and State */}
            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="text-sm text-gray-700 mb-1 block">City</label>
                    <select className="w-full border border-gray-300 rounded-md p-2 text-gray-700">
                        <option>select your city</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="text-sm text-gray-700 mb-1 block">State</label>
                    <select className="w-full border border-gray-300 rounded-md p-2 text-gray-700">
                        <option>select your state</option>
                    </select>
                </div>
            </div>

            {/* Open and End Time */}
            <div className="flex gap-4 mt-4">
                <CommonInput
                    label="Open Time"
                    name="openTime"
                    type="time"
                />
                <CommonInput
                    label="End Time"
                    name="endTime"
                    type="time"
                />
            </div>

            {/* Contact Number */}
            <CommonInput
                label="Contact Number"
                name="contactNumber"
                placeholder="+92 (555) 555-555"
                icon={<FiPhone className="text-gray-400 text-xl" />}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
                <CancelBtn />
                <ConfirmBtn />
            </div>
        </div>
    )
}
