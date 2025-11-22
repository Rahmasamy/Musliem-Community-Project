import TitleDescProps from '@/components/interfaces/title.types'
import React, { JSX } from 'react'
import './Describtion.css'

export default function Describtion({ desc }: TitleDescProps): JSX.Element {
    return (
        <>
            <p className='text-md font-semibold' >
                {desc}
            </p>
        </>
    )
}
