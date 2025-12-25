import { useSocket } from "@/context/socketContext";
import { useState, useEffect, useRef } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import { useJoinGroup } from "@/hooks/useGroups";

export default function MessageInput({
  chatId,
  type,
  senderId,
}: {
  chatId: string;
  type: "group" | "private";
  senderId: string | undefined;
}) {
  const [text, setText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const emojiRef = useRef<HTMLDivElement | null>(null);
  const socket = useSocket();
 const loginUser = useAuth();
  const userId = loginUser?.user?._id;

  const joinMutation = useJoinGroup(userId || "");
  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiRef.current && !emojiRef.current.contains(event.target as Node)) {
        setShowEmojis(false);
      }
    };

    if (showEmojis) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojis]);

   const handleSend = async () => {
    if (!text.trim() || !socket || !userId) return;

    // 🟢 PRIVATE CHAT (no group logic)
    if (type === "private") {
      socket.emit("sendPrivateMessage", { chatId, senderId, text });
      setText("");
      return;
    }

    // 🟢 GROUP CHAT FLOW
    joinMutation.mutate(chatId, {
      onSuccess: () => {
        toast.success("You joined the group 🎉");

        // ✅ Join socket room
        socket.emit("joinGroup", chatId);

        // ✅ Send message AFTER join
        socket.emit("sendMessage", {
          groupId: chatId,
          senderId: userId,
          text,
        });

        setText("");
      },
      onError: (err: any) => {
        // If already a member → still allow sending message
        if (err?.response?.status === 400) {
          socket.emit("joinGroup", chatId);
          socket.emit("sendMessage", {
            groupId: chatId,
            senderId: userId,
            text,
          });
          setText("");
        } else {
          toast.error(
            "Failed to join 😥 " + (err.response?.data?.message || "")
          );
        }
      },
    });
  };

  const handleEmojiClick = (emojiData: any) => {
    setText((prev) => prev + emojiData.emoji); // append emoji to text
  };

  return (
    <div className="relative p-3 border-t bg-white flex items-center">
      {/* Emoji Button + Picker */}
      <div className="relative" ref={emojiRef}>
        <button
          onClick={() => setShowEmojis((prev) => !prev)}
          className="ml-3 p-2 rounded-full text-white"
        >
          <MdOutlineEmojiEmotions fontSize={25} color="#FF9A0B" />
        </button>

        {/* Emoji Picker */}
        {showEmojis && (
          <div className="absolute bottom-12 left-0 z-20 shadow-lg">
            <EmojiPicker onEmojiClick={handleEmojiClick} theme="light" />
          </div>
        )}
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={text}
        placeholder="Type your message here ..."
        className="flex-1 border rounded-full px-4 py-2 text-sm outline-none bg-gray-100"
        onChange={(e) => setText(e.target.value)}
      />

      {/* Send Button */}
      <button
        className="ml-3 bg-orange-400 p-2 rounded-full text-white"
        onClick={handleSend}
      >
        ➤
      </button>
    </div>
  );
}
