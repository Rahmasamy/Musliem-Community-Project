import GroupCard from '@/components/common/group-card/GroupCard'
import JoinedGroupCard from '@/components/common/group-card/JoinedGroupCard'
import { JoinedGroupProvider } from '@/context/JoinedGroupContext'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function YourGroupsPage() {
  return (
    <>
     <div className="flex justify-between items-center mb-8">

                <Link to='/Groups/create-group'
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
                >
                    <FaPlus /> Create New Group
                </Link>

            </div>
             <section>
                               <div className="w-full flex items-center justify-center">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                       Joined Groups
                                   </h2>
                               </div>
                              <JoinedGroupProvider>
                                   <JoinedGroupCard />
                              </JoinedGroupProvider>
                                 
 
                                 
                               <div className="flex justify-center mt-6">
                                   <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow">
                                       Load More
                                   </button>
                               </div>
                           </section>
    </>
     
  )
}
