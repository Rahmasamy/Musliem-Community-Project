import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Stepper from "react-stepper-horizontal";
import AuthButton from "@/components/common/AuthButton";
import CommonInput from "@/components/common/CommonInput";
import LogoComponent from "@/components/common/logo-component/LogoComponent";
import { Link, useNavigate } from "react-router-dom";
// import { SlCloudUpload } from "react-icons/sl";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoreInfo.css";
import GoBack from "@/components/common/GoBack/GoBack";
import { useRegisterStore } from "@/store/registerStore";
import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useField } from "@/hooks/useField";
export default function MoreInfoFeature() {
    const navigate = useNavigate();
    const registerState = useRegisterStore();
    const { state } = useLocation();
    const [currentStep] = useState(state?.step || 0);
    const { updateField } = useRegisterStore();
    const { register } = useAuth();
    const skillField = useField("");
    const otherSkillField = useField("");
    const bioField = useField("");
    const roleField = useField("");
    const [termsTouched, setTermsTouched] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const handleCreate = async () => {
        const formData = new FormData();
        // append all values
        formData.append("fullName", registerState.fullName);
        formData.append("email", registerState.email);
        formData.append("password", registerState.password);
        formData.append("confirmPassword", registerState.confirmPassword);
        formData.append("phoneNumber", registerState.phoneNumber || "");
        // if (registerState.businessPhoto)
        //   formData.append("businessPhoto", registerState.businessPhoto);
        if (registerState.photo)
            formData.append("photo", registerState.photo);
        formData.append("skill", registerState.skill || "");
        formData.append("otherSkill", registerState.otherSkill || "");
        formData.append("bio", registerState.bio || "");
        formData.append("role", registerState.role || "");
        try {
            if (termsChecked) {
                if (registerState.password === registerState.confirmPassword) {
                    await register(formData);
                    toast.success("Account created successfully");
                    await new Promise((r) => setTimeout(r, 800)); // 👈 delay 800ms
                    useRegisterStore.getState().reset();
                    navigate("/login");
                }
                else {
                    toast.error("please check your password and confirm password");
                }
            }
            else {
                toast.error("please check the terms and conditions");
            }
        }
        catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(GoBack, {}), _jsx("div", { className: "LoginForm flex flex-col justify-center items-start gap-4", children: _jsxs("div", { className: "img-desc flex flex-col w-full items-center gap-3 ", children: [_jsx(LogoComponent, { desc: _jsxs(_Fragment, { children: ["We\u2019re excited to have in our community.", _jsx("br", {}), "Let\u2019s get Started!"] }) }), _jsx("div", { className: "p-4", children: _jsx(Stepper, { steps: [{ title: "Personal Info" }, { title: "More Info" }], activeStep: currentStep, defaultColor: "#89cdd3", completeColor: "#1c7a80", activeColor: "#1c7a80", defaultBarColor: "#89cdd3", completeBarColor: "#1c7a80", defaultTitleColor: "#000", completeTitleColor: "#000", activeTitleColor: "#000", size: 28, circleFontSize: 14, titleFontSize: 14, className: "stepper-custom" }) }), _jsxs("div", { className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsxs("div", { className: "input-radio-group w-full", children: [_jsx("p", { className: "font-bold mb-2", children: "Choose your Skill:" }), _jsx("div", { className: "radioinputfield flex gap-6 flex-wrap", children: ["skill-0", "skill-1", "skill-2", "skill-3"].map((skill) => (_jsx("div", { className: "single-input", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer p-3", children: [_jsx("input", { type: "radio", name: "skills", value: skill, className: "accent-teal-700 w-4 h-4", id: skill, onChange: (e) => {
                                                                skillField.onChange(e);
                                                                updateField("skill", e.target.value);
                                                            }, onBlur: skillField.onBlur, checked: skillField.value === skill }), skillField.touched && !skillField.value && (_jsx("p", { className: "text-red-500 text-xs mt-1", children: "Skill is required" })), _jsx("span", { className: "text-gray-700 capitalize", children: skill.replace("-", " ") })] }, skill) }))) })] }), _jsx(CommonInput, { type: "text", name: "other skill", placeholder: "Other skill", label: "Other Skill", required: false, value: otherSkillField.value, onChange: (e) => {
                                        otherSkillField.onChange(e);
                                        updateField("otherSkill", e.target.value);
                                    }, onBlur: otherSkillField.onBlur, touched: otherSkillField.touched, error: "" }), _jsxs("div", { className: "Bio w-full", children: [_jsx("label", { htmlFor: "bio", className: "block text-sm font-medium mb-1", children: "Bio" }), _jsx("textarea", { id: "bio", name: "bio", placeholder: "Tell us more about yourself...", rows: 4, value: bioField.value, onChange: (e) => {
                                                bioField.onChange(e);
                                                updateField("bio", e.target.value);
                                            }, onBlur: bioField.onBlur, className: `w-full p-3 rounded-md ${bioField.touched && !bioField.value ? "border-red-500" : ""}` }), bioField.touched && !bioField.value && (_jsx("p", { className: "text-red-500 text-xs mt-1", children: "Bio is required" }))] }), _jsxs("div", { className: "input-radio-group w-full mt-4", children: [_jsx("p", { className: "font-bold mb-2 text-gray-700", children: "Your Role:" }), _jsxs("div", { className: "radioinputfield  flex gap-6 flex-wrap", children: [[
                                                    "individual",
                                                    "non-profit-organization",
                                                    "business-owner",
                                                ].map((role) => (_jsx("div", { className: "single-input", children: _jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx("input", { type: "radio", id: role, name: "role", value: role, className: "accent-teal-700 w-4 h-4", checked: roleField.value === role, onChange: (e) => {
                                                                    roleField.onChange(e);
                                                                    updateField("role", e.target.value);
                                                                }, onBlur: roleField.onBlur }), _jsx("span", { className: "text-gray-700 mb-2", children: role })] }, role) }))), roleField.touched && !roleField.value && (_jsx("p", { className: "text-red-500 text-xs mt-1", children: "Role is required" }))] })] }), _jsxs("div", { className: "checkBox w-full flex items-start gap-2 mt-4", children: [_jsx("input", { type: "checkbox", id: "terms", name: "terms", value: "terms", className: "mt-1 accent-teal-700", checked: termsChecked, onChange: (e) => {
                                                setTermsChecked(e.target.checked);
                                                updateField("terms", e.target.checked ? "true" : "false");
                                            }, onBlur: () => setTermsTouched(true) }), _jsxs("label", { htmlFor: "terms", className: "text-sm text-gray-600", children: ["I agree to the", " ", _jsx("a", { href: "#", className: "text-teal-700 underline", children: "Terms & Conditions" })] })] }), termsTouched && !termsChecked && (_jsx("p", { className: "text-red-500 text-xs", children: "You must agree to continue" })), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center ", children: _jsx(AuthButton, { label: "Create Account", variant: "primary", type: "submit", onClick: handleCreate }) }), _jsx("div", { className: "Register", children: _jsxs("p", { children: ["Already have account?", _jsx("span", { className: "CreatAcountSpan", children: _jsx(Link, { to: "/login", children: "Login" }) })] }) })] })] }) })] }));
}
