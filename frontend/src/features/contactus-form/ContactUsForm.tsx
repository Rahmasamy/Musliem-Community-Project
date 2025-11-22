import AuthButton from "@/components/common/AuthButton";
import CommonInput from "@/components/common/CommonInput";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/authApi";

export default function ContactUsForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    type: "",
    headline: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    email: false,
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  // ✅ handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ handle blur (to mark input as touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // ✅ form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.email || !formData.type || !formData.message) {
      setFeedback("Please fill in all required fields.");
      setTouched({ email: true });
      return;
    }

    setLoading(true);
    setFeedback("");

    try {
      const res = await axiosInstance.post("/contact-us", formData);

      if (res.data.success) {
        setFeedback("Message sent successfully!");
        setFormData({ email: "", type: "", headline: "", message: "" });
        setTouched({ email: false });
      }
    } catch (err) {
      setFeedback("Something went wrong, please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="inputFields w-full flex flex-col gap-5 items-start"
    >
      <CommonInput
        type="email"
        name="email"
        placeholder="Write your email"
        label="Email Address"
        required={true}
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur} // ✅ new
        icon={<MdOutlineEmail fill="gray" fontSize={13} />}
        error={
          touched.email && !formData.email ? "Email is required" : undefined
        }
      />

      <div className="radioinputfield flex gap-4 sm:gap-6 flex-col">
        <h1 className="font-bold text-base sm:text-lg">Topic</h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {["Report", "Suggest", "Other"].map((topic, index) => (
            <div key={topic} className="single-input">
              <label className="flex items-center gap-2 cursor-pointer p-2 sm:p-3">
                <input
                  type="radio"
                  id={topic}
                  name="type"
                  value={topic}
                  checked={formData.type === topic}
                  onChange={handleChange}
                  className="accent-teal-700 w-4 h-4"
                />
                <span className="text-sm sm:text-base text-gray-700 capitalize">
                  {topic.replace("-", " ")}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <CommonInput
        type="text"
        name="headline"
        placeholder="Write Headline"
        label="Headline"
        value={formData.headline}
        onChange={handleChange}
        required={false}
      />

      <div className="Bio w-full">
        <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-1 sm:mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          rows={4}
          className="w-full p-3 sm:p-4 rounded-md focus:ring-teal-600 text-sm sm:text-base border border-gray-300 focus:border-teal-600 outline-none transition-all"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {feedback && (
        <p
          className={`text-sm ${
            feedback.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}

      <div className="AuthBtnContainer w-full flex justify-center items-center">
        <AuthButton
          label={loading ? "Submitting..." : "Submit"}
          variant="primary"
          type="submit"
          disabled={loading}
        />
      </div>
    </form>
  );
}
