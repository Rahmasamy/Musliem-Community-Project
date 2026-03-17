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
          Explore a variety of groups created to bring people together  around shared interests, learning goals, and community activities. Join discussions, participate in events,  and connect with others who share your passion.
           
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
