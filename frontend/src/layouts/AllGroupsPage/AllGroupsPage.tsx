import GroupCard from '@/components/common/group-card/GroupCard'
import { GroupProvider } from '@/context/groupContext'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AllGroupsPage() {
    return (
        <>
            <div className="flex justify-between items-center mb-8">

                <Link to='/Groups/create-group'
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
                >
                    <FaPlus /> Create New Group
                </Link>

            </div>
            <section className="mb-10">
                <div className="w-full flex items-center justify-center flex-col">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        All Groups
                    </h2>
                    <p className="text-gray-500 mb-6 max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue interdum cras. At nisi in quisque
                        erat ut.
                    </p>
                </div>
                <GroupProvider>

                    <GroupCard />
                </GroupProvider>
            </section>

        </>

    )
}
