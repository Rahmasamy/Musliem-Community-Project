import UserItemProps from '@/components/interfaces/UserItemProps'
import React, { JSX } from 'react'
import chatPerson from '@/assets/imgs/chatperson.jpg'
import avatar from '@/assets/imgs/avatar.png'
export default function UserItem({ name, message, time, active, group }: UserItemProps): JSX.Element {
    return (
        <div
            className={`p-3 rounded cursor-pointer ${active ? "bg-orange-200" : "hover:bg-gray-100"
                }`}
        >
            {/* Avatar */}

            {group ? (
                <div className="w-full">
                    <div className="flex gap-2">
 <img
                        src={chatPerson} // Replace with group avatar or icon
                        alt="Group"
                        className="w-14 h-14 mr-3 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-2">
                        <h1>
                            Groups Name come here 
                        </h1>
                        <div className="flex gap-2">
                            <img src={avatar} alt="profile image" />
                            <p className="font-semibold text-gray-800">
                                {name}
                            </p>
                        </div>
                        <p className="text-sm text-gray-500">{message}</p>
            <p className="text-xs text-gray-400">{time}</p>
                    </div>
                    </div>
                   
                </div>
            )

                : (
                    <div className="flex items-center gap-3 m-1">
                        <img src={chatPerson} alt="Person Image" className='w-14 h-14 object-cover rounded-full' />
                       <div className="flex flex-col">

                        <p className="font-semibold text-gray-800">{name}</p>
                         <p className="text-sm text-gray-500">{message}</p>
            <p className="text-xs text-gray-400">{time}</p>
                    </div>
                       </div>
                    
                )}


          
        </div>
    )
}
