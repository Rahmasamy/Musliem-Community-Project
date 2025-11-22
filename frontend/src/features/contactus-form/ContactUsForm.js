import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthButton from "@/components/common/AuthButton";
import CommonInput from "@/components/common/CommonInput";
import { useState } from "react";
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
        }
        catch (err) {
            setFeedback("Something went wrong, please try again.");
            console.error(err);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsx(CommonInput, { type: "email", name: "email", placeholder: "Write your email", label: "Email Address", required: true, value: formData.email, onChange: handleChange, onBlur: handleBlur, icon: _jsx(MdOutlineEmail, { fill: "gray", fontSize: 13 }), error: touched.email && !formData.email ? "Email is required" : undefined }), _jsxs("div", { className: "radioinputfield flex gap-4 sm:gap-6 flex-col", children: [_jsx("h1", { className: "font-bold text-base sm:text-lg", children: "Topic" }), _jsx("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4", children: ["Report", "Suggest", "Other"].map((topic, index) => (_jsx("div", { className: "single-input", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer p-2 sm:p-3", children: [_jsx("input", { type: "radio", id: topic, name: "type", value: topic, checked: formData.type === topic, onChange: handleChange, className: "accent-teal-700 w-4 h-4" }), _jsx("span", { className: "text-sm sm:text-base text-gray-700 capitalize", children: topic.replace("-", " ") })] }) }, topic))) })] }), _jsx(CommonInput, { type: "text", name: "headline", placeholder: "Write Headline", label: "Headline", value: formData.headline, onChange: handleChange, required: false }), _jsxs("div", { className: "Bio w-full", children: [_jsx("label", { htmlFor: "message", className: "block text-sm sm:text-base font-medium mb-1 sm:mb-2", children: "Message" }), _jsx("textarea", { id: "message", name: "message", placeholder: "Write your message here...", rows: 4, className: "w-full p-3 sm:p-4 rounded-md focus:ring-teal-600 text-sm sm:text-base border border-gray-300 focus:border-teal-600 outline-none transition-all", value: formData.message, onChange: handleChange })] }), feedback && (_jsx("p", { className: `text-sm ${feedback.includes("success") ? "text-green-600" : "text-red-600"}`, children: feedback })), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center", children: _jsx(AuthButton, { label: loading ? "Submitting..." : "Submit", variant: "primary", type: "submit", disabled: loading }) })] }));
}
