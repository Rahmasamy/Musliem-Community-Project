import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthButton from '@/components/common/AuthButton';
import CommonInput from '@/components/common/CommonInput';
import LogoComponent from '@/components/common/logo-component/LogoComponent';
import { useAuth } from '@/hooks/useAuth';
import { useField } from '@/hooks/useField';
import { useResetStore } from '@/store/resetStore';
import toast from 'react-hot-toast';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function LeftReset() {
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    const { resetPassword } = useAuth();
    const { resetToken } = useResetStore();
    const passwordField = useField("");
    const confirmField = useField("");
    const navigate = useNavigate();
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (passwordField.value !== confirmField.value) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            await resetPassword({ password: passwordField.value }, resetToken);
            toast.success("Password reset successfully");
            navigate("/login");
        }
        catch (error) {
            toast.error(error.response.data.message);
            // toast.error("Password reset failed");
        }
    };
    return (_jsx("div", { className: 'LoginForm flex flex-col justify-center items-start gap-4', children: _jsxs("div", { className: "img-desc flex flex-col w-full items-center gap-3 ", children: [_jsx(LogoComponent, { desc: _jsx(_Fragment, { children: "Create a New Password" }) }), _jsx("div", { className: "para", children: _jsxs("p", { children: ["Set a strong password to keep your account secure..", _jsx("br", {})] }) }), _jsxs("div", { className: "inputFields w-full flex flex-col gap-5 items-start", children: [_jsx(CommonInput, { type: "password", name: "password", placeholder: "Write your password", label: "Password", value: passwordField.value, onChange: passwordField.onChange, onBlur: passwordField.onBlur, touched: passwordField.touched, error: passwordField.value.trim() === ""
                                ? "Password is required"
                                : "", icon: _jsx(FaLock, { fill: "gray", fontSize: 13 }) }), _jsx(CommonInput, { type: "password", name: "confirmPassword", placeholder: "Confirm your password", label: "Confirm Password", value: confirmField.value, onChange: confirmField.onChange, onBlur: confirmField.onBlur, touched: confirmField.touched, error: confirmField.value.trim() === ""
                                ? "Confirm Password is required"
                                : "", icon: _jsx(FaLock, { fill: "gray", fontSize: 13 }) }), _jsx("div", { className: "AuthBtnContainer w-full flex justify-center items-center ", children: _jsx(AuthButton, { label: "Reset Password", variant: "primary", type: 'submit', onClick: handleResetPassword }) })] })] }) }));
}
