import NavigatorProps from '@/components/interfaces/NavigatorProps'
import React, { JSX } from 'react'
import './Navigate.css'
export default function Navigate({home,arg2,arg3}: NavigatorProps) : JSX.Element {
  return (
    <div className='NavigatorContainer'>
        <h2>

            
        {home
        
        }
        {arg2 && " - "}
       {arg2}
          
        {arg3 && "- "}
         {arg3}
        </h2>
        <p> {
            arg2
            }</p>
    </div>
  )
}
