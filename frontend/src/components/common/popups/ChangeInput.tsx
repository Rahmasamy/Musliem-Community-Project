import React from 'react'
import CommonInput from '../CommonInput'
import { FaLock } from 'react-icons/fa'
import CancelBtn from '../cancel-btn/CancelBtn'
import ConfirmBtn from '../confirm-btn/ConfirmBtn'
import { IoClose } from 'react-icons/io5'

export default function ChangeInput({ onClose } : { onClose : () => void}) {
  return (
    <div className='fixed top-0 left-0 z-150 w-full h-full flex items-center justify-center '>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-xl z-50">
             <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          <IoClose />
        </button>
            <h1 className='font-bold text-2xl p-2 mb-2'>
                Change Password
            </h1>
               <CommonInput
                label="New Password"
                name="password"
                placeholder="Write your new password here"
                icon={<FaLock fill='#1c7a80' fontSize={17} />}

            /> 
             <CommonInput
                label="Old Password"
                name="password"
                placeholder="Write your new password here"
                icon={<FaLock fill='#1c7a80' fontSize={17} />}

            /> 
                 <div className="flex justify-center gap-4 mt-6">
                            <CancelBtn onClick={onClose} />
                            <ConfirmBtn />
                        </div>
        </div>
    </div>
  )
}
