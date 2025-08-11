import React from 'react'

export default function CancelBtn({ onClick }: {onClick:() => void}) {
  return (
    <>
         <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300"
          onClick={onClick}
         >
            ✕ Cancel
          </button>
    </>
  )
}
