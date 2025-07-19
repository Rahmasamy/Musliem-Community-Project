import React from 'react'
import AdvertiseBg from '@/assets/imgs/Advertise-background.png'
import AdvertiseLeft from '@/components/common/Advertise/AdvertiseLeft'
import AdvertiseRight from '@/components/common/Advertise/AdvertiseRight'
export default function Advertise() {
  return (
    <div className='Advertise w-full flex items-center justify-center min-h-80'
      style={{
                backgroundImage: `
      url(${AdvertiseBg})`}}
    >
        <div className="AdvertiseContainer w-[80%] flex items-center justify-between">
            <AdvertiseLeft/>
            <AdvertiseRight/>
        </div>
    
    </div>
  )
}
