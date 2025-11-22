import { RiArrowDropDownLine } from "react-icons/ri";

import UserItem from '../userItem/UserItem'
import { FiSearch } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useState } from "react";
import { useGroupsByUser } from "@/hooks/useGroups";
import { usePrivateChats } from "@/hooks/usePrivateChat";
import  unKnownUser from '../../../assets/imgs/unknow-user.jpg'

export default function ChatSideBar({ flag, userId,   onSelectChat }: { flag?: string, userId?: string, onSelectChat: (id: string, type: "group" | "private",chatName : string,photo:string) => void; }) {
    const [showGroupMessages, setShowGroupMessages] = useState(false);

    const { data: groups, isLoading: loadingGroups, error: errorGroups } =
        useGroupsByUser(userId || "");
    const { data: privateChats, isLoading: loadingChats, error: errorChats } =
        usePrivateChats(userId || "");

    if (loadingGroups || loadingChats) return <p>Loading chats...</p>;
    if (errorGroups || errorChats) return <p>Failed to load chats</p>;
    console.log("unknown image:", unKnownUser);

    return (
        <div className=" bg-white border-r p-4 flex flex-col">
            <h2 className="font-bold text-gray-700 mb-4">All Messages</h2>
            {/* <div className="relative mb-4">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                    type="text"
                    placeholder="Search or start a new chat"
                    className="w-full pl-10 pr-3 py-2 rounded bg-gray-100 text-gray-600 text-sm outline-none"
                />
            </div> */}
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
            {showGroupMessages || flag === "true" ? (


                <div className="flex flex-col gap-2 overflow-y-auto mt-4">
                    {groups?.map((group) => (
                        <div
                            key={group._id}
                            onClick={() => onSelectChat(group._id, "group",group.name,group.image)}
                            className="cursor-pointer"
                        >
                            <UserItem
                                key={group._id}
                                name={group.name}
                                img = {group.image || unKnownUser}
                                message={group.lastMessage?.text || "No messages yet"}
                                time={
                                    group.lastMessage?.createdAt
                                        ? new Date(group.lastMessage.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                                        : ""
                                }
                                group
                            />
                        </div>
                    ))}

                </div>


            ) : (
                /* ✅ Show Private Chats */
                <div className="flex flex-col gap-2 overflow-y-auto mt-4">
                    {privateChats?.map((chat:any) => {
                        // بيجيب العضو التاني (غير الـ user الحالي)
                        const otherMember = chat.members.find(
                            (m: any) => m.user !== userId
                        );
                        
                        return (
                            <div
                                key={chat._id}
                                onClick={() => onSelectChat(chat._id, "private", otherMember?.fullName || "Private Chat",otherMember?.photo)}
                                className="cursor-pointer"
                            >

                                <UserItem
                                    key={chat._id}
                                    name={otherMember?.fullName || "Unknown"}
                                    img  = {otherMember?.photo? otherMember.photo : unKnownUser}
                                    message={chat.lastMessage?.text || "No messages yet"}
                                    time={
                                        chat.lastMessage?.createdAt
                                            ? new Date(chat.lastMessage.createdAt).toLocaleTimeString(
                                                [],
                                                { hour: "2-digit", minute: "2-digit" }
                                            )
                                            : ""
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            )



            }
        </div>
    )
}
