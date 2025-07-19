import React from 'react'

export default function LatestEventsTable() {
  return (
   <div className="w-[50%] flex flex-col md:flex-row gap-6 p-6 bg-white">
      {/* Left Side: Event List */}
      <div className="w-full">
        <h2 className="text-sm font-semibold bg-orange-100 py-1 px-2 mb-4">
          Oct 2025
        </h2>

        {[1, 2].map((_, i) => (
          <div key={i} className="mb-6 border-b pb-4">
            <div className="text-sm text-gray-500">15/10/2025</div>
            <div className="text-sm text-gray-500 mb-1">12:00 pm</div>
            <div className="font-semibold text-base">Event Name Goes here</div>
            <div className={`text-sm font-medium ${i === 0 ? 'text-cyan-600' : 'text-red-500'}`}>
              {i === 0 ? 'In-Person' : 'Online'}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
            </p>
          </div>
        ))}
      </div>
      </div>
  )
}
