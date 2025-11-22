import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AuthButton from "@/components/common/AuthButton";
import CommonInput from "@/components/common/CommonInput";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import LogoComponent from "@/components/common/logo-component/LogoComponent";
import { useAuth } from "@/hooks/useAuth";
import { useField } from "@/hooks/useField";
import toast from "react-hot-toast";
export default function LoginForm() {
    const { login, user } = useAuth();
    const emailField = useField("");
    const passwordField = useField("");
    const navigate = useNavigate();
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const loggedUser = await login({
                email: emailField.value,
                password: passwordField.value,
            });
            toast.success("hi there, login successfully!");
            console.log("the role is", loggedUser?.role);
            if (loggedUser?.role === "admin") {
                navigate("/admin-dashboard");
            }
            else {
                navigate("/");
            }
        }
        catch (err) {
            toast.error("login failed, please check your email or password");
        }
    };
    return (_jsx("form", { className: "LoginForm flex flex-col justify-center items-start gap-4", onSubmit: handleOnSubmit, children: _jsxs("div", { className: "img-desc flex flex-col w-full items-center gap-3 ", children: [_jsx(LogoComponent, { desc: _jsxs(_Fragment, { children: ["It's great to see you again.", _jsx("br", {}), "Let Login and Explore what's new."] }) }), _jsxs("div", { className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsx(CommonInput, { type: "email", name: "email", placeholder: "Write your email", label: "Email Address", required: true, icon: _jsx(MdOutlineEmail, { fill: "gray", fontSize: 13 }), value: emailField.value, onChange: emailField.onChange, onBlur: emailField.onBlur, touched: emailField.touched, error: emailField.value.trim() === "" ? "Email is required" : "" }), _jsx(CommonInput, { type: "password", name: "password", placeholder: "Write your password", label: "Password", required: true, value: passwordField.value, onChange: passwordField.onChange, onBlur: passwordField.onBlur, touched: passwordField.touched, error: passwordField.value.trim() === "" ? "Password is required" : "", icon: _jsx(FaLock, { fill: "gray", fontSize: 13 }) }), _jsx("span", { className: "forgerPassSpan", children: _jsx(Link, { to: "/forget-pass", children: "Forget Password?" }) }), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center ", children: _jsx(AuthButton, { label: "Login", variant: "primary", type: "submit" }) }), _jsx("div", { className: "Register", children: _jsxs("p", { children: ["Do you have Account?", _jsx("span", { className: "CreatAcountSpan", children: _jsx(Link, { to: "/register", children: "Create Account" }) })] }) })] })] }) }));
}
