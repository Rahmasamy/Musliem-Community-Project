import GroupCard from '@/components/common/group-card/GroupCard'
import LeftHeading from '@/components/common/left-heading/LeftHeading'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import { GroupProvider } from '@/context/groupContext'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function OurGroups() {
  const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center py-4 '>
      <LeftHeading title='Our Groups'
        desc={
          <>
            Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque
            <br />
            elementum congue interdum cras. At nisl in quisque erat ut.'
          </>
        } icon={
          <FaArrowRight onClick={() => navigate("/Groups") } />

        } />
      <div className="flex justify-between w-[95%] items-center">
        <GroupProvider>
          <GroupCard />
        </GroupProvider>

      </div>
      
    </div>
  )
}
