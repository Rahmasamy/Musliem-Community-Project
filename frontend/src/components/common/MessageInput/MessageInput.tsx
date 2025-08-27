
import { useSendMessage } from "@/hooks/useMessages";
import { useState } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";

export default function MessageInput({ groupId }: { groupId: string }) {
  const [text, setText] = useState("");
  const { mutate: sendMessage, isPending } = useSendMessage(groupId);
  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("    ");
  };


  return (
    <div className="p-3 border-t bg-white flex items-center">
      <button className="ml-3 p-2 rounded-full text-white">
        <MdOutlineEmojiEmotions fontSize={25} color="#FF9A0B" />
      </button>
      <input
        type="text"
        value={text}
        placeholder="Type your message here ..."
        className="flex-1 border rounded-full px-4 py-2 text-sm outline-none bg-gray-100"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="ml-3 bg-orange-400 p-2 rounded-full text-white"

        onClick={handleSend}
        disabled={isPending}
      >
        ➤
      </button>
    </div>
  )
}
