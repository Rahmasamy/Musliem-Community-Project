import React, { useEffect, useState } from "react";
import MessageBubble from "../MessageBuble/MessageBubble";
import MessageInput from "../MessageInput/MessageInput";
import { useMessagesByGroup } from "@/hooks/useMessages";
import { format } from "date-fns";
import { useAuth } from "@/hooks/useAuth";
import { usePrivateMessages } from "@/hooks/usePrivateMessage";
import { useSocket } from "@/context/socketContext";
import SelectChat from "../StartChat/StartChat";

export default function ChatWindow({
  chat,
}: {
  chat: { id: string; type: "group" | "private"; chatName: string,photo :string } | null;
}) {
  const loginUser = useAuth();
  const socket = useSocket();
  const loginUserId = loginUser?.user?._id;
  const userPhoto = loginUser?.user?.photo
  const [liveMessages, setLiveMessages] = useState<any[]>([]);

  // ✅ always call hooks
  const {
    data: groupMessages,
    isLoading: loadingGroup,
    error: errorGroup,
  } = useMessagesByGroup(chat?.id, {
    enabled: !!chat && chat.type === "group",
  });

  const {
    data: privateMessages,
    isLoading: loadingPrivate,
    error: errorPrivate,
  } = usePrivateMessages(chat?.id, {
    enabled: !!chat && chat.type === "private",
  });
  useEffect(() => {
    setLiveMessages([]);
  }, [chat?.id]);
  // ✅ handle sockets
  useEffect(() => {
    if (!chat || !socket) return;

    if (chat.type === "group") {
      socket.emit("leaveAllRooms"); 
      socket.emit("joinGroup", chat.id);

      const handleGroupMsg = (msg: any) => {
        setLiveMessages((prev) => {
          if (prev.some((m) => m._id === msg._id)) return prev;
          return [...prev, msg];
        });
      };

      socket.on("receiveMessage", handleGroupMsg);

      return () => {
        socket.off("receiveMessage", handleGroupMsg);
      };
    } else {
      socket.emit("leaveAllRooms");
      socket.emit("joinPrivateChat", chat.id);

      const handlePrivateMsg = (msg: any) => {
        setLiveMessages((prev) => {
          // ✅ Check if message already exists (by _id or by content+time)
          if (prev.some((m) => m._id === msg._id)) return prev;
          return [...prev, msg];
        });
      };

      socket.on("receivePrivateMessage", handlePrivateMsg);

      return () => {
        socket.off("receivePrivateMessage", handlePrivateMsg);
      };
    }
  }, [socket, chat]);

  // ✅ combine API + live
  // ✅ combine API + live messages and remove duplicates
  const messages = React.useMemo(() => {
    const apiMessages =
      chat?.type === "group" ? groupMessages : privateMessages;
    const allMessages = [...(apiMessages || []), ...liveMessages];

    // ✅ Remove duplicates by _id
    const uniqueMessages = allMessages.filter(
      (msg, index, self) => index === self.findIndex((m) => m._id === msg._id)
    );

    return uniqueMessages;
  }, [chat?.type, groupMessages, privateMessages, liveMessages]);
  const isLoading = chat?.type === "group" ? loadingGroup : loadingPrivate;
  const error = chat?.type === "group" ? errorGroup : errorPrivate;

  // ✅ only conditional rendering here
  if (!chat) {
    return <div className="flex-1 p-4">
<SelectChat />    
    </div>;
  }

  if (isLoading) {
    return <div className="flex-1 p-4">Loading messages...</div>;
  }

  if (error) {
    return <div className="flex-1 p-4">Error loading messages</div>;
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-start gap-2">
        <img
          src={chat.photo || "https://www.dreamstime.com/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-image184816085"} 
          alt="chat person"
          className="w-12 h-12 object-cover rounded-full"
        />
        <h3 className="font-bold text-gray-700">
          {/* {chat.type === "group" ? "Group Chat" : "Private Chat"} */}
          {chat.chatName}
        </h3>
      </div>

      <span className="text-sm text-gray-500 text-center">{}</span>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages?.map((msg: any) =>
        
        (
          
          <MessageBubble
            key={msg._id}
            text={msg.text}
            time={format(new Date(msg.createdAt), "hh:mm a")}
            sender={msg.sender._id === loginUserId ? "me" : "other"}
            photo = {userPhoto || msg.sender.photo }
          />
        ))}
      </div>

      {/* Input */}
      <MessageInput chatId={chat.id} type={chat.type} senderId={loginUserId} />
    </div>
  );
}
