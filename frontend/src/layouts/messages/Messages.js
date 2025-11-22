import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import ChatSideBar from "@/components/common/chatSideBar/ChatSideBar";
import ChatWindow from "@/components/common/chatWindow/ChatWindow";
export default function Messages() {
    const { userId, flag } = useParams();
    const [selectedChat, setSelectedChat] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.state?.selectedChat) {
            setSelectedChat(location.state.selectedChat);
        }
    }, [location.state]);
    return (_jsxs("div", { className: "flex h-screen bg-gray-100 relative", children: [_jsx("div", { className: `fixed md:static z-20 bg-white h-full overflow-y-auto transition-transform duration-300
        ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        w-full sm:w-full md:w-1/3 lg:w-1/4`, children: _jsx(ChatSideBar, { userId: userId, flag: flag, onSelectChat: (id, type, chatName, photo) => {
                        setSelectedChat({ id, type, chatName, photo });
                        setShowSidebar(false);
                    } }) }), _jsx("button", { onClick: () => setShowSidebar(true), className: "md:hidden fixed top-6 left-4 z-30 bg-white p-3 rounded-full shadow-md", children: _jsx(IoMenu, { size: 24 }) }), _jsx("div", { className: "flex-1 h-full overflow-y-auto", children: _jsx(ChatWindow, { chat: selectedChat }) }), showSidebar && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40 md:hidden z-10", onClick: () => setShowSidebar(false) }))] }));
}
