
import { MdOutlineEmojiEmotions } from "react-icons/md";

export default function MessageInput() {
  return (
   <div className="p-3 border-t bg-white flex items-center">
      <button className="ml-3 p-2 rounded-full text-white">
        <MdOutlineEmojiEmotions  fontSize={25} color="#FF9A0B"/>
      </button>
      <input
        type="text"
        placeholder="Type your message here ..."
        className="flex-1 border rounded-full px-4 py-2 text-sm outline-none bg-gray-100"
      />
      <button className="ml-3 bg-orange-400 p-2 rounded-full text-white">
        ➤
      </button>
    </div>
  )
}
