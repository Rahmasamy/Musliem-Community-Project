import { CenterHeadingInterface } from '@/components/interfaces/CenterHeading'
import { JSX } from 'react'
import './LeftHeading.css';
import { icons } from 'lucide-react';

export default function LeftHeading({
  title, desc, icon
}: CenterHeadingInterface): JSX.Element {
  return (
    <div className='HeaderOfService'>
      <div className="flex items-center p-4 justify-between w-[95%]">
        <div className='rightcontent'>
          <h2 className='text-lg text-left'>
            {title}
          </h2>
          <p className='text-left'>
            {desc}
          </p>
        </div>
        <div className="icon flex items-center gap-3">
            View All
          <span>
            {icon}
          </span>
        </div>
      </div>

    </div>
  )
}
