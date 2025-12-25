import GroupCard from '@/components/common/group-card/GroupCard'
import { GroupProvider } from '@/context/groupContext'
import React from 'react'


export default function AllGroupsPage() {

    return (
        <>
           
     <section className="mb-6 sm:mb-8 lg:mb-10">
  <div className="w-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-0">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 my-5 text-center">
      All Groups
    </h2>
    <p className="text-gray-500 mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base text-center px-2">
      Explore a variety of groups created to bring people together around shared
      interests, learning goals, and community activities. Join discussions,
      participate in events, and connect with others who share your passion.
    </p>
  </div>

  <GroupProvider>
    <GroupCard />
  </GroupProvider>
</section>


        </>

    )
}
