import GroupCard from '@/components/common/group-card/GroupCard'
import React from 'react'

export default function YourGroupsPage() {
  return (
      <section>
                               <div className="w-full flex items-center justify-center">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                       Joined Groups
                                   </h2>
                               </div>
                               <GroupCard />
                               <div className="flex justify-center mt-6">
                                   <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow">
                                       Load More
                                   </button>
                               </div>
                           </section>
  )
}
