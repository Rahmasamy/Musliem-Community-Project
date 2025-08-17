import React from 'react'
import OrangeButton from '../OrangeButton/OrangeButton'
import { useAdvertisement } from '@/context/advertismentContext';

export default function AdvertiseLeft() {
  const { ad } = useAdvertisement();

  return (
   <div className="w-1/3 bg-cover p-6 flex flex-col justify-between text-white">
    <div>
      <h3 className="text-sm mb-2 font-bold">Call the Owner</h3>
      <div className="flex items-center justify-center border border-white px-4 py-2 rounded-lg gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round"  strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h4.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0117.414 3H19a2 2 0 012 2v2H3V5zM3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
        <span>{ad?.phone}</span>
      </div>
    </div>

    <div className="mt-10 text-center">
      <p className="text-md mb-2 font-bold">Grow your business</p>
      <p className="text-xs mb-4">Let’s Get Your Ad Up Here!</p>
      <OrangeButton  title='Advertise' className='bergendy'/>
    </div>
  </div>
  )
}
