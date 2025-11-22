import MessageBubleProps from "@/components/interfaces/MessageBubleProps";
import React, { JSX } from "react";

export default function MessageBubble({
  text,
  time,
  sender,
  photo,
}: MessageBubleProps): JSX.Element {
  const isMe = sender === "me";

  return (
    <div
      className={`flex items-end mb-3 ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      {/* الصورة */}
      {!isMe && (
        <img
          src={photo}
          alt="sender"
          className="w-9 h-9 rounded-full mr-2 border border-gray-200"
        />
      )}

      {/* الفقاعة */}
      <div
        className={`max-w-xs p-3 rounded-2xl text-sm shadow-md break-words ${
          isMe
            ? "bg-orange-400 text-white rounded-br-none"
            : "bg-orange-100 text-gray-700 rounded-bl-none"
        }`}
      >
        <p>{text}</p>
        <span className="text-xs text-gray-200 block mt-1 text-right">
          {time}
        </span>
      </div>

      {isMe && (
        <img
          src={photo}
          alt="me"
          className="w-9 h-9 rounded-full ml-2 border border-gray-200"
        />
      )}
    </div>
  );
}
