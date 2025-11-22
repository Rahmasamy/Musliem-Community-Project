import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoClose } from "react-icons/io5";
import CancelBtn from "../cancel-btn/CancelBtn";
import ConfirmBtn from "../confirm-btn/ConfirmBtn";
import { FaRegQuestionCircle } from "react-icons/fa";
export default function ConfirmPaymentPopup({ onClose, onConfirm }) {
    return (_jsxs("div", { className: "fixed top-0 left-0 z-150 w-full h-full flex items-center justify-center ", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-black opacity-40" }), _jsxs("div", { className: "relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-xl z-50", children: [_jsx("button", { className: "absolute top-2 right-2 text-gray-600 hover:text-teal-500 text-2xl", onClick: onClose, children: _jsx(IoClose, {}) }), _jsxs("div", { className: "flex justify-center items-center flex-col gap-4", children: [_jsx("span", { className: "text-6xl text-orange-400 text-center w-full flex justify-center items-center", children: _jsx(FaRegQuestionCircle, {}) }), _jsx("h1", { className: "font-bold text-xl p-2 ", children: "Are you sure you want to processed?" }), _jsx("span", { className: "text-gray-400 text-xl! font-semibold", children: "This action need to pay $150" })] }), _jsxs("div", { className: "flex justify-center gap-4 mt-6", children: [_jsx(CancelBtn, { onClick: onClose }), _jsx(ConfirmBtn, { onClick: onConfirm, title: "Confirm Payment" })] })] })] }));
}
