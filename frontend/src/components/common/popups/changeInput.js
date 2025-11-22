import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import CommonInput from "../CommonInput";
import { FaLock } from "react-icons/fa";
import CancelBtn from "../cancel-btn/CancelBtn";
import ConfirmBtn from "../confirm-btn/ConfirmBtn";
import { IoClose } from "react-icons/io5";
import axiosInstance from "@/api/authApi";
import toast from "react-hot-toast";
export default function ChangeInput({ onClose }) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const handleSubmit = async () => {
        try {
            const res = await axiosInstance.put("/profile/change-password", {
                oldPassword,
                newPassword,
            });
            toast.success("password has been changed sucessfully");
            onClose();
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong");
        }
    };
    return (_jsxs("div", { className: "fixed top-0 left-0 z-150 w-full h-full flex items-center justify-center ", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-black opacity-40" }), _jsxs("div", { className: "relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-xl z-50", children: [_jsx("button", { className: "absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl", onClick: onClose, children: _jsx(IoClose, {}) }), _jsx("h1", { className: "font-bold text-2xl p-2 mb-2", children: "Change Password" }), _jsx(CommonInput, { label: "Old Password", name: "password", type: "password", placeholder: "Write your old password here", icon: _jsx(FaLock, { fill: "#1c7a80", fontSize: 17 }), onChange: (e) => setOldPassword(e.target.value) }), _jsx(CommonInput, { label: "New Password", name: "password", type: "password", placeholder: "Write your new password here", icon: _jsx(FaLock, { fill: "#1c7a80", fontSize: 17 }), onChange: (e) => setNewPassword(e.target.value) }), _jsxs("div", { className: "flex justify-center gap-4 mt-6", children: [_jsx(CancelBtn, { onClick: onClose }), _jsx(ConfirmBtn, { onClick: handleSubmit })] })] })] }));
}
