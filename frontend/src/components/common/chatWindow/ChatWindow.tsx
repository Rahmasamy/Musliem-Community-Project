import React from 'react'
import MessageBubble from '../MessageBuble/MessageBubble'
import MessageInput from '../MessageInput/MessageInput'
import chatPerson from '@/assets/imgs/chatperson.jpg'
import { useMessagesByGroup } from '@/hooks/useMessages';
import { format } from 'date-fns';
import { useAuth } from '@/hooks/useAuth';
export default function ChatWindow({ groupId }: { groupId: string | null }) {
  const { data: messages, isLoading, error } = useMessagesByGroup(groupId || "");
  const loginUser = useAuth();
  const loginUserId = loginUser?.user?._id;

  if (!groupId) return <div className="flex-1 p-4">Select a group to start chatting</div>;
  if (isLoading) return <div className="flex-1 p-4">Loading messages...</div>;
  if (error) return <div className="flex-1 p-4">Error loading messages</div>;
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-start gap-2">
        <img src={chatPerson} alt="chat person" className='w-12 h-12 object-cover rounded-full' />
        <h3 className="font-bold text-gray-700">Ammi Watts</h3>

      </div>
      <span className="text-sm text-gray-500 text-center">Today | 06:32 PM</span>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages?.map((msg) => (
          <MessageBubble
            key={msg._id}
            text={msg.text}
            time={format(new Date(msg.createdAt), "hh:mm a")}
            sender={msg.sender._id === loginUserId ? "me" : "other"}
          />
        ))}

      </div>

      {/* Input */}
      <MessageInput groupId={groupId}/>
    </div>
  )
}
