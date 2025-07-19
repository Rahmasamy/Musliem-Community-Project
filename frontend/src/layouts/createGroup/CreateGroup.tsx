import { useState } from "react";
import { FaCamera, FaEdit } from "react-icons/fa";

export default function CreateGroup() {
  const [joinOption, setJoinOption] = useState("all");

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg  p-6">
      {/* Header Banner */}
      <div className="relative w-full h-40 bg-[#E3C7A0] rounded-t-lg flex items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-800">Your Group Name</h2>
        <div className="absolute top-4 right-4 flex gap-3">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaCamera />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaEdit />
          </button>
        </div>
      </div>

    
      <div className="mt-6">
        <h3 className="text-gray-500 text-sm font-semibold mb-4">
          GROUP DETAILS
        </h3>

       
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Group Name</label>
          <input
            type="text"
            placeholder="Write your group name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            placeholder="Write a small description for the group"
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <div className="mb-8">
          <h4 className="text-gray-700 mb-3">Who Can Join?</h4>
          <div className="flex gap-4">
            <button
              onClick={() => setJoinOption("all")}
              className={`px-6 py-2 rounded-full font-medium ${
                joinOption === "all"
                  ? "bg-teal-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              All Members
            </button>
            <button
              onClick={() => setJoinOption("premium")}
              className={`px-6 py-2 rounded-full font-medium ${
                joinOption === "premium"
                  ? "bg-teal-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Premium Only
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300">
            ✕ Cancel
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
            + Create Event
          </button>
        </div>
      </div>
    </div>
  );
}
