import OrangeBtn from '@/components/interfaces/OrangeBtn'
import React from 'react'
import { JSX } from 'react/jsx-runtime'
import './Orange.css'
export default function OrangeButton({
    title,
    icon,
    className
} : OrangeBtn ) : JSX.Element{
  return (
    <div className='flex gap-2'>
  <button className={`orange-btn ${className || 'orange'} flex gap-2 items-center`}
  
  >
    {icon? icon : null}
    {title}
  </button>
    </div>
  )
}
