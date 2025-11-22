import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LoginAvatar from '@/features/login/LoginAvatar';
import LoginForm from '@/features/login/LoginForm';
import './Login.css';
import AuthWrapper from '@/components/common/AuthWrapper';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
export default function Login() {
    return (_jsxs(AuthWrapper, { children: [_jsx(LeftAuthContainer, { children: _jsx(LoginForm, {}) }), _jsx(RightAuthContainer, { children: _jsx(LoginAvatar, {}) })] }));
}
