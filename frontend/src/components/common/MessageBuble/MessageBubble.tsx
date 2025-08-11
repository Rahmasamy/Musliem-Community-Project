import MessageBubleProps from '@/components/interfaces/MessageBubleProps';
import React, { JSX } from 'react'

export default function MessageBubble({ text, time, sender }:MessageBubleProps ) : JSX.Element {
const isMe = sender === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-xs p-3 rounded-lg text-sm shadow-md ${
          isMe ? "bg-orange-400 text-white" : "bg-orange-100 text-gray-700"
        }`}
      >
        <p>{text}</p>
        <span className="text-xs text-gray-500 block mt-1">{time}</span>
      </div>
    </div>
  )
}
