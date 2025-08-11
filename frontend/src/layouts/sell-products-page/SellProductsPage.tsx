import CancelBtn from '@/components/common/cancel-btn/CancelBtn'
import CommonInput from '@/components/common/CommonInput'
import ConfirmBtn from '@/components/common/confirm-btn/ConfirmBtn'
import { MdPriceCheck } from "react-icons/md";

import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { SlCloudUpload } from 'react-icons/sl'

export default function SellProductsPage() {

    return (
        <div className="w-full mx-auto p-6">
            {/* Title */}
            <h2 className="text-gray-400 text-sm mb-4 font-bold">Sell Products</h2>

           
          
            


            {/* Business Name */}
                <div className="w-full">

            <CommonInput
                label="Product Name"
                name="Product Name"
                placeholder="Write your product name here"
            />
                </div>

            { /* Product Description */}
              <div className="Bio w-full">
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Product Description</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your Product Description..."
                            rows={4}
                            className="w-full p-3  rounded-md focus:ring-teal-600"
                        ></textarea>
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

           
            <CommonInput type='text' name='prodcut price' placeholder='Product Price' label='Product Price'
                        required={true}
                        error='Product Price is required'
                        

                        icon={<MdPriceCheck fill='gray' fontSize={13} />}
                    />
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
