import React from 'react'
import MessageBubble from '../MessageBuble/MessageBubble'
import MessageInput from '../MessageInput/MessageInput'
import chatPerson from '@/assets/imgs/chatperson.jpg'
export default function ChatWindow() {
  return (
     <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-white flex items-center justify-start gap-2">
        <img src={chatPerson} alt="chat person" className='w-12 h-12 object-cover rounded-full'/>
        <h3 className="font-bold text-gray-700">Ammi Watts</h3>
       
      </div>
       <span className="text-sm text-gray-500 text-center">Today | 06:32 PM</span>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <MessageBubble text="Oh, hello! All perfectly. I will check it and get back to you soon" time="04:45 PM" sender="other" />
        <MessageBubble text="Oh, hello! All perfectly. I will check it and get back to you soon" time="04:45 PM" sender="me" />
        <MessageBubble text="Oh, hello! All perfectly. I will check it and get back to you soon" time="04:45 PM" sender="other" />
        <MessageBubble text="Oh, hello! All perfectly. I will check it and get back to you soon" time="04:45 PM" sender="me" />
         <MessageBubble text="Oh, hello! All perfectly. I will check it and get back to you soon" time="04:45 PM" sender="other" />
        <MessageBubble text="Oh, hello! All perfectly. I will check it and get back to you soon" time="04:45 PM" sender="me" />
      </div>

      {/* Input */}
      <MessageInput />
    </div>
  )
}
