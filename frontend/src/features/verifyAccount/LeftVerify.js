import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthButton from '@/components/common/AuthButton';
import LogoComponent from '@/components/common/logo-component/LogoComponent';
import './Verify.css';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import toast from 'react-hot-toast';
import { useResetStore } from '@/store/resetStore';
export default function LeftVerify() {
    const navigate = useNavigate();
    const { setResetToken } = useResetStore();
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const { verifyResetCode } = useAuth();
    const inputRefs = useRef([]);
    const handleChange = (index, value) => {
        const updated = [...code];
        updated[index] = value;
        setCode(updated);
        if (value && index < inputRefs.current.length - 1) {
            console.log("input ref current", inputRefs.current);
            inputRefs.current[index + 1]?.focus();
        }
    };
    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };
    const handleVerify = async () => {
        const otp = code.join("");
        try {
            const data = await verifyResetCode({ code: otp });
            console.log(data);
            setResetToken(data.token);
            toast.success("Two factor Authentication success!");
            navigate('/reset-password');
        }
        catch (error) {
            toast.error("Two factor Authentication Failed, Please input Valid Code!");
        }
    };
    return (_jsx("div", { className: 'LoginForm flex flex-col justify-center items-start gap-4', children: _jsxs("div", { className: "img-desc flex flex-col w-full items-center gap-3", children: [_jsx(LogoComponent, { desc: _jsx(_Fragment, { children: "Verify Your Email" }) }), _jsx("div", { className: "para", children: _jsxs("p", { children: ["We\u2019ve sent a 6-digit code to your email.", _jsx("br", {}), _jsx("a", { href: "", children: "emmy@gmail.com" }), " Please enter it below to continue."] }) }), _jsxs("div", { className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsx("div", { className: "verify-container flex flex-wrap gap-2", children: _jsx("div", { className: "otp-wrapper flex gap-2", children: code.map((digit, idx) => (_jsx("input", { type: "text", maxLength: 1, className: "otp-box text-center text-xl border rounded-md w-12 h-12", value: digit, ref: (el) => (inputRefs.current[idx] = el), onChange: (e) => handleChange(idx, e.target.value), onKeyDown: (e) => handleKeyDown(idx, e) }, idx))) }) }), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center", children: _jsx(AuthButton, { label: "Verify", variant: "primary", type: 'submit', onClick: handleVerify }) })] })] }) }));
}
