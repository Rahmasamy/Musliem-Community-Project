import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import ChatSideBar from "@/components/common/chatSideBar/ChatSideBar";
import ChatWindow from "@/components/common/chatWindow/ChatWindow";

export default function Messages() {
  const { userId, flag } = useParams();
  const [selectedChat, setSelectedChat] = useState<{
    id: string;
    type: "group" | "private";
    chatName: string;
    photo: string;
  } | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedChat) {
      setSelectedChat(location.state.selectedChat);
    }
  }, [location.state]);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-20 bg-white h-full overflow-y-auto transition-transform duration-300
        ${showSidebar ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 
        w-full sm:w-full md:w-1/3 lg:w-1/4`}
      >
        <ChatSideBar
          userId={userId}
          flag={flag}
          onSelectChat={(id, type, chatName, photo) => {
            setSelectedChat({ id, type, chatName, photo });
            setShowSidebar(false);
          }}
        />
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setShowSidebar(true)}
        className="md:hidden fixed top-6 left-4 z-30 bg-white p-3 rounded-full shadow-md"
      >
        <IoMenu size={24} />
      </button>

      {/* Chat Window */}
      <div className="flex-1 h-full overflow-y-auto">
        <ChatWindow chat={selectedChat} />
      </div>

      {/* Overlay when sidebar is open on small screens */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-10"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </div>
  );
}
