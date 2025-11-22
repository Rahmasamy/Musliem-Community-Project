import {  CenterHeadingInterface } from '@/components/interfaces/CenterHeading'
import { JSX } from 'react'
import './CenterHeading.css';

export default function CenterHeading({
    title,desc
} :CenterHeadingInterface) : JSX.Element {
  return (
    <div className='HeaderOfService'>
    <h2 className='text-lg'>
        {title}
    </h2>
    <p className='py-3'>
        {desc}
    </p>
    </div>
  )
}
