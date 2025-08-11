import { RiArrowDropDownLine } from "react-icons/ri";

import UserItem from '../userItem/UserItem'
import { FiSearch } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useState } from "react";
export default function ChatSideBar() {
      const [showGroupMessages, setShowGroupMessages] = useState(false);

    return (
        <div className="w-1/3 bg-white border-r p-4 flex flex-col">
            <h2 className="font-bold text-gray-700 mb-4">All Messages</h2>
            <div className="relative mb-4">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="w-full pl-10 pr-3 py-2 rounded bg-gray-100 text-gray-600 text-sm outline-none"
                />
            </div>
            <div className="flex justify-between items-center"
              onClick={() => setShowGroupMessages((prev) => !prev)}
            >
                <div className="flex gap-2 items-center">

                    <span className={`transform transition-transform ${showGroupMessages ? "rotate-180" : ""}`}>
                        <IoChatbubbleEllipsesOutline fontSize={24} />


                    </span>

                    <h2 className="font-bold">

                        Send Message to a Group
                    </h2>
                </div>
                <span className={`transform transition-transform ${showGroupMessages ? "rotate-180" : ""}`}>
                    <RiArrowDropDownLine fontSize={24} />

                </span>
            </div>

         {/* Group messages page component */}
         {showGroupMessages ? (
         <div className="flex flex-col gap-2 overflow-y-auto mt-4">
        <UserItem name="Jennifer Markus" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" active group/>
        <UserItem name="Iva Ryan" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" group />
        <UserItem name="Jerry Helfer" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" group />
        <UserItem name="David Elson" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM"  group/>
        <UserItem name="Mary Freund" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" group />
      </div>
    ) : (
        <div className="flex flex-col gap-2 overflow-y-auto mt-4">
          <UserItem name="Jennifer Markus" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" active />
          <UserItem name="Iva Ryan" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" />
          <UserItem name="Jerry Helfer" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" />
          <UserItem name="David Elson" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" />
          <UserItem name="Mary Freund" message="Hey! Did you finish the Hi-FI wireframes for flora app design?" time="05:30 PM" />
        </div>
      )}
        </div>
    )
}
