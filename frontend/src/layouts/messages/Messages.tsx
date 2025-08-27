import ChatSideBar from '@/components/common/chatSideBar/ChatSideBar'
import ChatWindow from '@/components/common/chatWindow/ChatWindow'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Messages() {

    const { userId, flag } = useParams();
      const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
      console.log(selectedGroupId,"selected group id")
  return (
    <div className="flex h-screen bg-gray-100">
      <ChatSideBar userId={userId} flag = {flag}
      onSelectGroup={setSelectedGroupId}
      />
      <ChatWindow groupId={selectedGroupId} />
    </div>
  )
}
