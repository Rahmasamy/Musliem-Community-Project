import GroupCard from '@/components/common/group-card/GroupCard'
import LeftHeading from '@/components/common/left-heading/LeftHeading'
import { GroupProvider } from '@/context/groupContext'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function OurGroups() {
  return (
    <div className='w-full flex flex-col items-center'>
      <LeftHeading title='Our Groups'
        desc={
          <>
            Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque
            <br />
            elementum congue interdum cras. At nisl in quisque erat ut.'
          </>
        } icon={
          <FaArrowRight />

        } />
      <div className="flex justify-between w-[95%] items-center">
        <GroupProvider>
          <GroupCard />
        </GroupProvider>

      </div>
    </div>
  )
}
