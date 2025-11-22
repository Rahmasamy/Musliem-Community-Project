import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AuthWrapper from '@/components/common/AuthWrapper';
import GoBack from '@/components/common/GoBack/GoBack';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import LeftReset from '@/features/reset-pass/LeftReset';
import RightRest from '@/features/reset-pass/RightRest';
export default function ResetPass() {
    return (_jsxs(_Fragment, { children: [_jsx(GoBack, {}), _jsxs(AuthWrapper, { children: [_jsx(LeftAuthContainer, { children: _jsx(LeftReset, {}) }), _jsx(RightAuthContainer, { children: _jsx(RightRest, {}) })] })] }));
}
