import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSocket } from "@/context/socketContext";
import { useState, useEffect, useRef } from "react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
export default function MessageInput({ chatId, type, senderId, }) {
    const [text, setText] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const emojiRef = useRef(null);
    const socket = useSocket();
    // Close emoji picker when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiRef.current && !emojiRef.current.contains(event.target)) {
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
    const handleSend = () => {
        if (!text.trim())
            return;
        if (type === "group") {
            socket?.emit("sendMessage", { groupId: chatId, senderId, text });
        }
        else {
            socket?.emit("sendPrivateMessage", { chatId, senderId, text });
        }
        setText("");
    };
    const handleEmojiClick = (emojiData) => {
        setText((prev) => prev + emojiData.emoji); // append emoji to text
    };
    return (_jsxs("div", { className: "relative p-3 border-t bg-white flex items-center", children: [_jsxs("div", { className: "relative", ref: emojiRef, children: [_jsx("button", { onClick: () => setShowEmojis((prev) => !prev), className: "ml-3 p-2 rounded-full text-white", children: _jsx(MdOutlineEmojiEmotions, { fontSize: 25, color: "#FF9A0B" }) }), showEmojis && (_jsx("div", { className: "absolute bottom-12 left-0 z-20 shadow-lg", children: _jsx(EmojiPicker, { onEmojiClick: handleEmojiClick, theme: "light" }) }))] }), _jsx("input", { type: "text", value: text, placeholder: "Type your message here ...", className: "flex-1 border rounded-full px-4 py-2 text-sm outline-none bg-gray-100", onChange: (e) => setText(e.target.value) }), _jsx("button", { className: "ml-3 bg-orange-400 p-2 rounded-full text-white", onClick: handleSend, children: "\u27A4" })] }));
}
