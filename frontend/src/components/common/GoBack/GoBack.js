import { jsx as _jsx } from "react/jsx-runtime";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import './GoBack.css';
export default function () {
    const navigate = useNavigate();
    return (_jsx("div", { className: "relative", children: _jsx("div", { className: "go-back-container absolute cursor-pointer", children: _jsx(MdOutlineKeyboardBackspace, { onClick: () => navigate(-1) }) }) }));
}
