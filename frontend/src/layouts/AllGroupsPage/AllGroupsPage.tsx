import GroupCard from '@/components/common/group-card/GroupCard'
import React from 'react'

export default function AllGroupsPage() {
    return (
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
            <GroupCard />
        </section>
    )
}
