import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function SelectChat() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-indigo-100 text-orange-600 rounded-full p-4"
          >
            <MessageCircle size={48} />
          </motion.div>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-gray-800"
          >
            Select a Chat to Start Messaging
          </motion.h2>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600"
          >
            Choose a conversation from the sidebar or start a new one to begin chatting.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition"
          >
            Start a New Chat
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
