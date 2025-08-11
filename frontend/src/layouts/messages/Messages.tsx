import ChatSideBar from '@/components/common/chatSideBar/ChatSideBar'
import ChatWindow from '@/components/common/chatWindow/ChatWindow'
export default function Messages() {
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSideBar />
      <ChatWindow />
    </div>
  )
}
