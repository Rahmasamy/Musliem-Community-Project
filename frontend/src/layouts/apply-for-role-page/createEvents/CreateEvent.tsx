import React, { useRef, useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import CommonInput from "@/components/common/CommonInput";
import EventService from "@/services/eventService";
import { FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";

const CreateEvent = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    attendance: "",
    invitationLink: "",
    eventType: "",
    Location: "",
  });
  const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
      const [imagePreview, setImagePreview] = useState<string | null>(null);
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
         setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (file) formData.append("image", file);

    try {
      const res = await EventService.createEvent(formData);
      toast.success("Event Created Successfully")
    } catch (err: any) {
      toast.error("❌ Error: Please Fill All the Fields",);
    }
  };

  return (
    <div className="w-full mx-auto px-6 py-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Upload */}
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
                  onChange={handleFile}
                />
              </div>
            </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Write your Event name"
            className="w-full border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a small description"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none"
          />
        </div>

        {/* Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
            <input
              type="time"
              name="endTime"
              value={form.endTime}
              onChange={handleChange}
              className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Attendance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Attendance</label>
          <div className="flex flex-wrap gap-3">
            {["In-Person", "Virtual", "In-Person&Virtual"].map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => handleSelect("attendance", a)}
                className={`px-4 py-2 rounded-full border ${
                  form.attendance === a ? "bg-teal-600 text-white border-teal-600" : "text-gray-700 border-gray-300"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Invitation Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Invitation Link</label>
          <input
            type="text"
            name="invitationLink"
            value={form.invitationLink}
            onChange={handleChange}
            placeholder="meeting link"
            className="w-full border border-gray-300 bg-[#F3F3F3] rounded-lg px-4 py-3"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
          <div className="flex flex-wrap gap-3">
            {["Networking", "Workshop", "Course", "Fundraiser", "other"].map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => handleSelect("eventType", t)}
                className={`px-4 py-2 rounded-full border ${
                  form.eventType === t ? "bg-teal-600 text-white border-teal-600" : "text-gray-700 border-gray-300"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="Location"
            value={form.Location}
            onChange={handleChange}
            placeholder="Enter event location"
            className="w-full border border-gray-300 bg-[#F3F3F3] rounded-lg px-4 py-3"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center gap-4 mt-8">
          <button type="reset" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg">
            ✖ Cancel
          </button>
          <button type="submit" className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium">
            + Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
