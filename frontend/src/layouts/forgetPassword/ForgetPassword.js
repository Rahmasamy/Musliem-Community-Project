import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AuthWrapper from '@/components/common/AuthWrapper';
import GoBack from '@/components/common/GoBack/GoBack';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import LeftForgetPass from '@/features/forget-pass/LeftForgetPass';
import RightForgetPass from '@/features/forget-pass/RightForgetPass';
export default function ForgetPassword() {
    return (_jsxs(_Fragment, { children: [_jsx(GoBack, {}), _jsxs(AuthWrapper, { children: [_jsx(LeftAuthContainer, { children: _jsx(LeftForgetPass, {}) }), _jsx(RightAuthContainer, { children: _jsx(RightForgetPass, {}) })] })] }));
}
