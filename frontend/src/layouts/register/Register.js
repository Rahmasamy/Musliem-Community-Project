import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthWrapper from '@/components/common/AuthWrapper';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import RegisterFeature from '@/features/register/RegisteRFeature';
import RightAvatar from '@/features/register/RightAvatar';
import './Register.css';
export default function Register() {
    return (_jsxs(AuthWrapper, { children: [_jsx(LeftAuthContainer, { children: _jsx(RegisterFeature, {}) }), _jsx(RightAuthContainer, { children: _jsx(RightAvatar, {}) })] }));
}
