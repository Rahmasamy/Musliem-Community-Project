import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AuthWrapper from '@/components/common/AuthWrapper';
import GoBack from '@/components/common/GoBack/GoBack';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import LeftVerify from '@/features/verifyAccount/LeftVerify';
import RightVerify from '@/features/verifyAccount/RightVerify';
export default function VerifyAccount() {
    return (_jsxs(_Fragment, { children: [_jsx(GoBack, {}), _jsxs(AuthWrapper, { children: [_jsx(LeftAuthContainer, { children: _jsx(LeftVerify, {}) }), _jsx(RightAuthContainer, { children: _jsx(RightVerify, {}) })] })] }));
}
