import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import ConfirmBtn from "@/components/common/confirm-btn/ConfirmBtn";
import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "@/api/authApi";
import { useAuthStore } from "@/store/authStore";


export default function CreateGroup() {
  const [joinOption, setJoinOption] = useState("all");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { accessToken } = useAuthStore.getState();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!groupName || !description || !joinOption) {
      toast.error("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", groupName);
    formData.append("description", description);
    formData.append("joinOption", joinOption);
    if (file) formData.append("image", file);

    try {
      const { data } = await axiosInstance.post("/groups", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${accessToken}`,
        },
      });
      toast.success("Group Created Successfully")
      navigate("/Groups"); // redirect after creation
    } catch (error) {
      console.error("Error creating group:", error);
      toast.error("Failed to create group");
    }
  };

  return (
    <div className=" w-[90%] mx-auto bg-white rounded-lg  p-6">
      {/* Header Banner */}
      <div className="relative w-full h-40 rounded-t-lg flex items-center justify-center bg-[#E3C7A0]">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Group"
            className="w-full h-full object-cover rounded-t-lg"
          />
        ) : (
          <h2 className="text-xl font-semibold text-gray-800">Your Group Name</h2>
        )}

        <div className="absolute top-4 right-4 flex gap-3">
          <button
            type="button"
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
            onClick={() => fileInputRef.current?.click()}
          >
            <FaCamera />
          </button>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handlefileChange}
          />
        </div>
      </div>

      {/* Group Details */}
      <div className="mt-6">
        <h3 className="text-gray-500 text-sm font-semibold mb-4">GROUP DETAILS</h3>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Write your group name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
              className={`px-6 py-2 rounded-full font-medium ${joinOption === "all"
                  ? "bg-teal-700 text-white"
                  : "bg-gray-100 text-gray-700"
                }`}
            >
              All Members
            </button>
            <button
              onClick={() => setJoinOption("premium")}
              className={`px-6 py-2 rounded-full font-medium ${joinOption === "premium"
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
          <CancelBtn onClick={() => navigate("/all-groups")} />
          <ConfirmBtn onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
