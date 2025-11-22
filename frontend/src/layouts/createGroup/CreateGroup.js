import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CancelBtn from "@/components/common/cancel-btn/CancelBtn";
import ConfirmBtn from "@/components/common/confirm-btn/ConfirmBtn";
import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "@/api/authApi";
import { useAuthStore } from "@/store/authStore";
export default function CreateGroup() {
    const [joinOption, setJoinOption] = useState("all");
    const [imagePreview, setImagePreview] = useState(null);
    const [groupName, setGroupName] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { accessToken } = useAuthStore.getState();
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const handlefileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagePreview(reader.result);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    const handleSubmit = async () => {
        console.log("hello");
        if (!groupName || !description || !joinOption) {
            toast.error("Please fill all fields");
            return;
        }
        const formData = new FormData();
        formData.append("name", groupName);
        formData.append("description", description);
        formData.append("joinOption", joinOption);
        if (file)
            formData.append("image", file);
        try {
            const { data } = await axiosInstance.post("/groups", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
            toast.success("Group Created Successfully");
            console.log("Group created:", data);
            navigate("/Groups"); // redirect after creation
        }
        catch (error) {
            console.error("Error creating group:", error);
            toast.error("Failed to create group");
        }
    };
    return (_jsxs("div", { className: " w-[90%] mx-auto bg-white rounded-lg  p-6", children: [_jsxs("div", { className: "relative w-full h-40 rounded-t-lg flex items-center justify-center bg-[#E3C7A0]", children: [imagePreview ? (_jsx("img", { src: imagePreview, alt: "Group", className: "w-full h-full object-cover rounded-t-lg" })) : (_jsx("h2", { className: "text-xl font-semibold text-gray-800", children: "Your Group Name" })), _jsxs("div", { className: "absolute top-4 right-4 flex gap-3", children: [_jsx("button", { type: "button", className: "bg-white p-2 rounded-full shadow hover:bg-gray-100", onClick: () => fileInputRef.current?.click(), children: _jsx(FaCamera, {}) }), _jsx("input", { type: "file", ref: fileInputRef, className: "hidden", accept: "image/*", onChange: handlefileChange })] })] }), _jsxs("div", { className: "mt-6", children: [_jsx("h3", { className: "text-gray-500 text-sm font-semibold mb-4", children: "GROUP DETAILS" }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-gray-700 mb-2", children: "Group Name" }), _jsx("input", { type: "text", value: groupName, onChange: (e) => setGroupName(e.target.value), placeholder: "Write your group name", className: "w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-gray-700 mb-2", children: "Description" }), _jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Write a small description for the group", rows: 3, className: "w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" })] }), _jsxs("div", { className: "mb-8", children: [_jsx("h4", { className: "text-gray-700 mb-3", children: "Who Can Join?" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("button", { onClick: () => setJoinOption("all"), className: `px-6 py-2 rounded-full font-medium ${joinOption === "all"
                                            ? "bg-teal-700 text-white"
                                            : "bg-gray-100 text-gray-700"}`, children: "All Members" }), _jsx("button", { onClick: () => setJoinOption("premium"), className: `px-6 py-2 rounded-full font-medium ${joinOption === "premium"
                                            ? "bg-teal-700 text-white"
                                            : "bg-gray-100 text-gray-700"}`, children: "Premium Only" })] })] }), _jsxs("div", { className: "flex justify-end gap-4", children: [_jsx(CancelBtn, { onClick: () => navigate("/all-groups") }), _jsx(ConfirmBtn, { onClick: handleSubmit })] })] })] }));
}
