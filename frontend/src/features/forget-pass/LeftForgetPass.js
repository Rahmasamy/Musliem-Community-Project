import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthButton from '@/components/common/AuthButton';
import CommonInput from '@/components/common/CommonInput';
import LogoComponent from '@/components/common/logo-component/LogoComponent';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { useField } from '@/hooks/useField';
export default function LeftForgetPass() {
    const navigate = useNavigate();
    const { forgotPassword } = useAuth();
    const [email, setEmail] = useState("");
    const emailField = useField("");
    const handleSend = async () => {
        try {
            await forgotPassword({ email: emailField.value });
            toast.success("Reset code sent to your email");
            navigate("/verify-pass");
        }
        catch (err) {
            toast.error("Something went wrong");
        }
    };
    return (_jsx("div", { className: 'LoginForm flex flex-col justify-center items-start gap-4', children: _jsxs("div", { className: "img-desc flex flex-col w-full items-center gap-3 ", children: [_jsx(LogoComponent, { desc: _jsx(_Fragment, { children: "Forget your Password? No Worries" }) }), _jsx("div", { className: "para", children: _jsx("p", { children: "Enter your email address below and we\u2019ll send you a code to reset your password." }) }), _jsxs("div", { className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsx(CommonInput, { type: 'email', name: 'email', placeholder: 'Write your email', label: 'Email Address', required: true, value: emailField.value, onChange: emailField.onChange, onBlur: emailField.onBlur, touched: emailField.touched, error: emailField.value.trim() === "" ? "Email is required" : "", icon: _jsx(MdOutlineEmail, { fill: 'gray', fontSize: 13 }) }), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center ", children: _jsx(AuthButton, { label: "Send", variant: "primary", type: 'submit', onClick: handleSend }) })] })] }) }));
}
