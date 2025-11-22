import { CenterHeadingInterface } from '@/components/interfaces/CenterHeading'
import { JSX } from 'react'
import './LeftHeading.css';
import { icons } from 'lucide-react';

export default function LeftHeading({
  title, desc, icon
}: CenterHeadingInterface): JSX.Element {
  return (
    <div className='HeaderOfService'>
      <div className="flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 justify-between w-full sm:w-[95%] gap-3 sm:gap-0">
        <div className='rightcontent flex-1'>
          <h2 className='text-base sm:text-lg text-left'>
            {title}
          </h2>
          <p className='text-left text-sm sm:text-base'>
            {desc}
          </p>
        </div>
        <div className="icon flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            View All
          <span className="cursor-pointer">
            {icon}
          </span>
        </div>
      </div>

    </div>
  )
}
