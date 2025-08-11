import NavigatorProps from '@/components/interfaces/NavigatorProps'
import React, { JSX } from 'react'
import './Navigate.css'
export default function Navigate({ home, arg2, arg3 }: NavigatorProps): JSX.Element {
  return (
    <div className='NavigatorContainer font-bold'>
      <h2>


        {home

        } </h2>


      <span className='text-gray-500 text-md'>
         {home} 
        {arg2 && " - "}
        {arg2}
        {arg3 && " - "}
        {arg3}
      </span>

    </div>
  )
}
