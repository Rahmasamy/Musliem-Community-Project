import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent'
import React from 'react'
import amico from '@/assets/imgs/amico.jpg';
import './contactusfeature.css'
export default function RightAvatarContactUs() {
  return (
     <>
        <RightAuthImgComponent src={amico} alt='get in touch image' className='amicoimg' />
    </>
  )
}
