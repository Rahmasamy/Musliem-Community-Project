import CommonInput from "@/components/common/CommonInput";
import React from "react";
import { SlCloudUpload } from "react-icons/sl";

const CreateEvent = () => {
  return (
    <div className="w-full mx-auto px-6 py-10">
      <div className="bg-orange-100 h-40  rounded-xl p-6 mb-10 flex items-end justify-between">
        <h2 className="text-2xl  font-semibold text-gray-800">
          Your Event Name
        </h2>
        <div className="common-input-wrapper">

                        <CommonInput type='file' name='file' placeholder='Upload Photo for your Bussiness(5Mmb Max)' label='Upload your photo (5Mmb Max)'
                            required={false}

                            icon={<SlCloudUpload fill='#1c7a80' fontSize={17} />}
                            accepts='image/*'
                        />
                    </div>
      </div>

      <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-6">
        Event Details
      </h3>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Name
          </label>
          <input
            type="text"
            placeholder="Write your Event name"
            className="w-full border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-3 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Write a small description for the event"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 h-28 resize-none"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <div className="flex space-x-2">
              <input
                type="time"
                className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <select className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <div className="flex space-x-2">
              <input
                type="time"
                className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <select className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attendance
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100"
            >
              In-Person
            </button>
            <button
              type="button"
              className="bg-teal-600 text-white rounded-full px-4 py-2 border border-teal-600"
            >
              Virtual
            </button>
            <button
              type="button"
              className="border border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100"
            >
              In-Person & Virtual
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Invitation Link
          </label>
          <input
            type="text"
            placeholder="meeting link"
            className="w-full border border-gray-400 bg-[#F3F3F3] rounded-lg px-4 py-3  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block  text-sm font-medium text-gray-700 mb-2">
            Event Type
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="border bg-[#F3F3F3] border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100"
            >
              Networking
            </button>
            <button
              type="button"
              className="border bg-[#F3F3F3] border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100"
            >
              Workshop
            </button>
            <button
              type="button"
              className="border bg-[#F3F3F3] border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100"
            >
              Course
            </button>
            <button
              type="button"
              className="border bg-[#F3F3F3] border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100"
            >
              Fundraiser
            </button>
            <button
              type="button"
              className="bg-teal-600  text-white border border-teal-600 rounded-full px-4 py-2"
            >
              Other
            </button>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Write here event type"
            className="w-full border border-gray-300 bg-[#F3F3F3] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            ✖ Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3  bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium"
          >
            + Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
