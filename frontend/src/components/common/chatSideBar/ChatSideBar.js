import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RiArrowDropDownLine } from "react-icons/ri";
import UserItem from '../userItem/UserItem';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useState } from "react";
import { useGroupsByUser } from "@/hooks/useGroups";
import { usePrivateChats } from "@/hooks/usePrivateChat";
import unKnownUser from '../../../assets/imgs/unknow-user.jpg';
export default function ChatSideBar({ flag, userId, onSelectChat }) {
    const [showGroupMessages, setShowGroupMessages] = useState(false);
    const { data: groups, isLoading: loadingGroups, error: errorGroups } = useGroupsByUser(userId || "");
    const { data: privateChats, isLoading: loadingChats, error: errorChats } = usePrivateChats(userId || "");
    if (loadingGroups || loadingChats)
        return _jsx("p", { children: "Loading chats..." });
    if (errorGroups || errorChats)
        return _jsx("p", { children: "Failed to load chats" });
    console.log("unknown image:", unKnownUser);
    return (_jsxs("div", { className: " bg-white border-r p-4 flex flex-col", children: [_jsx("h2", { className: "font-bold text-gray-700 mb-4", children: "All Messages" }), _jsxs("div", { className: "flex justify-between items-center", onClick: () => setShowGroupMessages((prev) => !prev), children: [_jsxs("div", { className: "flex gap-2 items-center", children: [_jsx("span", { className: `transform transition-transform ${showGroupMessages ? "rotate-180" : ""}`, children: _jsx(IoChatbubbleEllipsesOutline, { fontSize: 24 }) }), _jsx("h2", { className: "font-bold", children: "Send Message to a Group" })] }), _jsx("span", { className: `transform transition-transform ${showGroupMessages ? "rotate-180" : ""}`, children: _jsx(RiArrowDropDownLine, { fontSize: 24 }) })] }), showGroupMessages || flag === "true" ? (_jsx("div", { className: "flex flex-col gap-2 overflow-y-auto mt-4", children: groups?.map((group) => (_jsx("div", { onClick: () => onSelectChat(group._id, "group", group.name, group.image), className: "cursor-pointer", children: _jsx(UserItem, { name: group.name, img: group.image || unKnownUser, message: group.lastMessage?.text || "No messages yet", time: group.lastMessage?.createdAt
                            ? new Date(group.lastMessage.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                            : "", group: true }, group._id) }, group._id))) })) : (
            /* ✅ Show Private Chats */
            _jsx("div", { className: "flex flex-col gap-2 overflow-y-auto mt-4", children: privateChats?.map((chat) => {
                    // بيجيب العضو التاني (غير الـ user الحالي)
                    const otherMember = chat.members.find((m) => m.user !== userId);
                    return (_jsx("div", { onClick: () => onSelectChat(chat._id, "private", otherMember?.fullName || "Private Chat", otherMember?.photo), className: "cursor-pointer", children: _jsx(UserItem, { name: otherMember?.fullName || "Unknown", img: otherMember?.photo ? otherMember.photo : unKnownUser, message: chat.lastMessage?.text || "No messages yet", time: chat.lastMessage?.createdAt
                                ? new Date(chat.lastMessage.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                                : "" }, chat._id) }, chat._id));
                }) }))] }));
}
