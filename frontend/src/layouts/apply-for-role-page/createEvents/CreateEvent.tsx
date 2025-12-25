import React, { useRef, useState } from "react";
import EventService from "@/services/eventService";
import { FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";
import { useCheckUserLimit } from "@/hooks/useCheckUserLimit";
import { isValidMeetingLink } from "@/utils/helpers/validateMeetingLink";

const CreateEvent = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
    attendance: "",
    invitationLink: "",
    date: "",
    eventType: "",
    Location: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Handle payment confirmation // const handleConfirmPayment = async () => { // // Validate required fields // if ( // !form.name || // !form.description || // !form.startTime || // !form.endTime || // !form.eventType || // !file // ) { // toast.error("Please fill in all required fields and upload an image"); // return; // } // // Save form data to localStorage // localStorage.setItem("eventFormData", JSON.stringify(form)); // // Save image as base64 // if (file) { // const imageBase64 = (await fileToBase64(file)) as string; // localStorage.setItem("eventImageBase64", imageBase64); // } // setConfrmPayment(true); // setshowPopUp(false); // try { // const approvalUrl = await handlePay("1", "Event123"); // if (!approvalUrl) { // toast.error("Payment could not be processed!"); // } // } catch (err) { // toast.error("Payment error occurred!"); // } // }; // // Restore data from localStorage after payment // const handleDataToSubmit = ( // savedForm: string | null, // savedImageBase64: string | null // ) => { // if (!savedForm || !savedImageBase64) return; // try { // const parsedData = JSON.parse(savedForm); // setForm(parsedData); // // Convert base64 back to File // const base64Parts = savedImageBase64.split(","); // if (base64Parts.length < 2) return; // const byteString = atob(base64Parts[1]); // const mimeString = base64Parts[0].split(":")[1].split(";")[0]; // const ab = new ArrayBuffer(byteString.length); // const ia = new Uint8Array(ab); // for (let i = 0; i < byteString.length; i++) { // ia[i] = byteString.charCodeAt(i); // } // const blob = new Blob([ab], { type: mimeString }); // const file = new File([blob], "event_image.jpg", { // type: mimeString, // }); // setFile(file); // setImagePreview(URL.createObjectURL(file)); // setAutoSubmit(true); // } catch (error) { // console.error("❌ Error restoring event data:", error); // } // }; // // Check if payment was captured on component mount // useEffect(() => { // const serviceId = localStorage.getItem("currentServiceId"); // const isPaid = localStorage.getItem(paymentCaptured_${serviceId}); // if (isPaid === "true") { // const savedForm = localStorage.getItem("eventFormData"); // const savedImageBase64 = localStorage.getItem("eventImageBase64"); // handleDataToSubmit(savedForm, savedImageBase64); // // Clean up localStorage // localStorage.removeItem(paymentCaptured_${serviceId}); // localStorage.removeItem("eventFormData"); // localStorage.removeItem("eventImageBase64"); // } // }, []); // Auto-submit after data restoration // useEffect(() => { // if (autoSubmit && form && file) { // handleSubmit(); // setAutoSubmit(false); // } // }, [autoSubmit, form, file]);
  const {
    data: checkUserData,
    isLoading: isCheckUserLoading,
    error: ischeckUserError,
  } = useCheckUserLimit();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }

      if (!selectedFile.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }

      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (checkUserData && !checkUserData.canAddMore) {
        toast.error(" You can't create more events, limit reached!");
        return;
      }
      // ✅ Validation
      if (
        !form.name ||
        !form.description ||
        !form.startTime ||
        !form.endTime ||
        !form.eventType ||
        !form.date ||
        !file
      ) {
        toast.error("Please fill in all required fields and upload an image");
        return;
      }

      // ✅ Attendance-based validation
      if (
        (form.attendance === "Virtual" ||
          form.attendance === "In-Person&Virtual") &&
        !form.invitationLink
      ) {
        toast.error("Please provide an invitation link for virtual attendance");
        return;
      }

      if (
        (form.attendance === "In-Person" ||
          form.attendance === "In-Person&Virtual") &&
        !form.Location
      ) {
        toast.error("Please provide a location for in-person attendance");
        return;
      }
      if (
        (form.attendance === "Virtual" ||
          form.attendance === "In-Person&Virtual") &&
        !isValidMeetingLink(form.invitationLink)
      ) {
        toast.error(
          "Please enter a valid meeting link (https://... pr http://)"
        );
        return;
      }
      // ✅ Prepare FormData
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("startTime", form.startTime);
      formData.append("endTime", form.endTime);
      formData.append("attendance", form.attendance);
      formData.append("invitationLink", form.invitationLink);
      formData.append("eventType", form.eventType);
      formData.append("date", form.date);
      formData.append("Location", form.Location);
      formData.append("image", file);
      formData.append("paymentStatus", "pending");
      formData.append("adminApprovalStatus", "pending");

      const res = await EventService.createEvent(formData);
      toast.success(
        "🎉 Event Created Successfully! Waiting for admin approval."
      );

      // Reset form
      setForm({
        name: "",
        description: "",
        startTime: "",
        endTime: "",
        attendance: "",
        invitationLink: "",
        date: "",
        eventType: "",
        Location: "",
      });
      setFile(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: any) {
      console.error("Error creating event:", err);
      toast.error("Failed to create event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="w-full mx-auto px-6 py-10">
      <form className="space-y-6" onSubmit={handleFormSubmit}>
        {/* Upload */}
        <div className="relative w-full h-40 rounded-t-lg flex items-center justify-center bg-[#E3C7A0]">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Event"
              className="w-full h-full object-cover rounded-t-lg"
            />
          ) : (
            <h2 className="text-xl font-semibold text-gray-800">
              Your Event Image
            </h2>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Event Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Write your Event name"
            className="w-full border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-3"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description *
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a small description"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28 resize-none"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date *
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-[#F3F3F3] rounded-lg px-4 py-3"
            required
          />
        </div>

        {/* Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Time *
            </label>
            <input
              type="time"
              name="startTime"
              value={form.startTime}
              onChange={handleChange}
              className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Time *
            </label>
            <input
              type="time"
              name="endTime"
              value={form.endTime}
              onChange={handleChange}
              className="border bg-[#F3F3F3] border-gray-300 rounded-lg px-4 py-2 w-full"
              required
            />
          </div>
        </div>

        {/* Attendance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attendance
          </label>
          <div className="flex flex-wrap gap-3">
            {["In-Person", "Virtual", "In-Person&Virtual"].map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => handleSelect("attendance", a)}
                className={`px-4 py-2 rounded-full border ${
                  form.attendance === a
                    ? "bg-teal-600 text-white border-teal-600"
                    : "text-gray-700 border-gray-300"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Invitation Link */}
        {(form.attendance === "Virtual" ||
          form.attendance === "In-Person&Virtual") && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Invitation Link *
            </label>
            <input
              type="text"
              name="invitationLink"
              value={form.invitationLink}
              onChange={handleChange}
              placeholder="Meeting link (e.g., Zoom)"
              className="w-full border border-gray-300 bg-[#F3F3F3] rounded-lg px-4 py-3"
              required
            />
          </div>
        )}

        {/* Location */}
        {(form.attendance === "In-Person" ||
          form.attendance === "In-Person&Virtual") && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              name="Location"
              value={form.Location}
              onChange={handleChange}
              placeholder="Enter event location"
              className="w-full border border-gray-300 bg-[#F3F3F3] rounded-lg px-4 py-3"
              required
            />
          </div>
        )}

        {/* Event Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Type *
          </label>
          <div className="flex flex-wrap gap-3">
            {["Networking", "Workshop", "Course", "Fundraiser", "Other"].map(
              (t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => handleSelect("eventType", t)}
                  className={`px-4 py-2 rounded-full border ${
                    form.eventType === t
                      ? "bg-teal-600 text-white border-teal-600"
                      : "text-gray-700 border-gray-300"
                  }`}
                >
                  {t}
                </button>
              )
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg"
            onClick={() => {
              setForm({
                name: "",
                description: "",
                startTime: "",
                endTime: "",
                attendance: "",
                invitationLink: "",
                date: "",
                eventType: "",
                Location: "",
              });
              setFile(null);
              setImagePreview(null);
            }}
          >
            ✖ Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "+ Create Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
