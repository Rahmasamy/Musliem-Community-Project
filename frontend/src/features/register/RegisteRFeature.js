import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Stepper from 'react-stepper-horizontal';
import AuthButton from '@/components/common/AuthButton';
import CommonInput from '@/components/common/CommonInput';
import LogoComponent from '@/components/common/logo-component/LogoComponent';
import { IoPersonOutline } from "react-icons/io5";
import { FaLock } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";
import './RightAvatar.css';
import { useState, useEffect } from 'react';
import { useRegisterStore } from '@/store/registerStore';
import { useField } from '@/hooks/useField';
export default function RegisterFeature() {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();
    const { updateField } = useRegisterStore();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    // Format file size helper
    const formatFileSize = (bytes) => {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };
    // Clean up preview URL when component unmounts or file changes
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);
    const fullNameField = useField("");
    const emailField = useField("");
    const passField = useField("");
    const confirmField = useField("");
    const phoneNumberField = useField("");
    return (_jsx("div", { className: 'LoginForm flex flex-col justify-center items-start gap-4', children: _jsxs("div", { className: "img-desc flex flex-col w-full items-center gap-3 ", children: [_jsx(LogoComponent, { desc: _jsxs(_Fragment, { children: ["We\u2019re excited to have in our community.", _jsx("br", {}), "Let\u2019s get Started!"] }) }), _jsx("div", { className: "p-4", children: _jsx(Stepper, { steps: [{ title: 'Personal Info' }, { title: 'More Info' }], activeStep: currentStep, defaultColor: "#89cdd3", completeColor: "#1c7a80", activeColor: "#1c7a80", defaultBarColor: "#89cdd3", completeBarColor: "#1c7a80", defaultTitleColor: "#000", completeTitleColor: "#000", activeTitleColor: "#000", size: 28, circleFontSize: 14, titleFontSize: 14, className: "stepper-custom" }) }), _jsxs("div", { className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsx(CommonInput, { type: 'text', name: 'full-name', placeholder: 'Write your Full Name', label: 'Full Name', required: true, error: fullNameField.value.trim() === ""
                                ? "Full Name is required"
                                : "", icon: _jsx(IoPersonOutline, { fill: 'gray', fontSize: 13 }), onChange: (e) => {
                                fullNameField.onChange(e);
                                updateField("fullName", e.target.value);
                            }, value: fullNameField.value, onBlur: fullNameField.onBlur, touched: fullNameField.touched }), _jsx(CommonInput, { type: 'email', name: 'email', placeholder: 'Write your email', label: 'Email Address', required: true, value: emailField.value, onChange: (e) => {
                                emailField.onChange(e);
                                updateField("email", e.target.value);
                            }, onBlur: emailField.onBlur, touched: emailField.touched, error: emailField.value.trim() === "" ? "Email is required" : "", icon: _jsx(MdOutlineEmail, { fill: 'gray', fontSize: 13 }) }), _jsx(CommonInput, { type: 'password', name: 'password', placeholder: 'Write your password', label: 'Password', required: true, value: passField.value, onChange: (e) => {
                                passField.onChange(e);
                                updateField("password", e.target.value);
                            }, onBlur: passField.onBlur, touched: passField.touched, error: passField.value.trim() === "" ? "Password is required" : "", icon: _jsx(FaLock, { fill: 'gray', fontSize: 13 }) }), _jsx(CommonInput, { type: 'password', name: 'password', placeholder: 'Confirm your password', label: 'Confirm Password', required: true, value: confirmField.value, onChange: (e) => {
                                confirmField.onChange(e);
                                updateField("confirmPassword", e.target.value);
                            }, onBlur: confirmField.onBlur, touched: confirmField.touched, error: confirmField.value.trim() === ''
                                ? 'Confirm Password is required'
                                : confirmField.value !== passField.value
                                    ? "Passwords do not match"
                                    : "", icon: _jsx(FaLock, { fill: 'gray', fontSize: 13 }) }), _jsx(CommonInput, { type: 'number', name: 'phoneNumber', placeholder: 'Write your Phone number', label: 'Phone Number(OPTIONAL)', required: false, value: phoneNumberField.value, onChange: (e) => {
                                phoneNumberField.onChange(e);
                                updateField("phoneNumber", e.target.value);
                            }, onBlur: phoneNumberField.onBlur, touched: phoneNumberField.touched, 
                            // Optional validation example (min 10 digits)
                            error: phoneNumberField.value && phoneNumberField.value.length < 10
                                ? "Phone number must be at least 10 digits"
                                : "", icon: _jsx(FaPhoneAlt, { fill: 'gray', fontSize: 13 }) }), _jsx("div", { className: "common-input-wrapper", children: _jsx(CommonInput, { type: 'file', name: 'file', placeholder: 'Upload your Photo(5Mmb Max)', label: 'Upload your photo (5Mmb Max)', required: false, icon: _jsx(SlCloudUpload, { fill: '#1c7a80', fontSize: 17 }), accepts: 'image/*', onChange: (e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        // Clean up previous preview URL
                                        if (previewUrl) {
                                            URL.revokeObjectURL(previewUrl);
                                        }
                                        setSelectedFile(file);
                                        const url = URL.createObjectURL(file);
                                        setPreviewUrl(url);
                                        updateField("photo", file);
                                    }
                                } }) }), previewUrl && selectedFile && (_jsxs("div", { className: "w-full flex flex-col items-center gap-2 mt-2", children: [_jsx("img", { src: previewUrl, alt: "Preview", className: "max-w-xs max-h-48 rounded-lg object-cover border border-gray-300" }), _jsxs("div", { className: "text-center text-sm text-gray-600", children: [_jsx("p", { className: "font-medium", children: selectedFile.name }), _jsx("p", { className: "text-gray-500", children: formatFileSize(selectedFile.size) })] })] })), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center ", children: _jsx(AuthButton, { label: "Next", variant: "primary", type: 'submit', onClick: () => navigate('/more-info', { state: { step: 1 } }) }) }), _jsx("div", { className: "Register", children: _jsxs("p", { children: ["Already have account?", _jsx("span", { className: 'CreatAcountSpan', children: _jsx(Link, { to: "/login", children: "Login" }) })] }) })] })] }) }));
}
