import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function MessageBubble({ text, time, sender, photo, }) {
    const isMe = sender === "me";
    return (_jsxs("div", { className: `flex items-end mb-3 ${isMe ? "justify-end" : "justify-start"}`, children: [!isMe && (_jsx("img", { src: photo, alt: "sender", className: "w-9 h-9 rounded-full mr-2 border border-gray-200" })), _jsxs("div", { className: `max-w-xs p-3 rounded-2xl text-sm shadow-md break-words ${isMe
                    ? "bg-orange-400 text-white rounded-br-none"
                    : "bg-orange-100 text-gray-700 rounded-bl-none"}`, children: [_jsx("p", { children: text }), _jsx("span", { className: "text-xs text-gray-200 block mt-1 text-right", children: time })] }), isMe && (_jsx("img", { src: photo, alt: "me", className: "w-9 h-9 rounded-full ml-2 border border-gray-200" }))] }));
}
