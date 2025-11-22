import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AuthWrapper from '@/components/common/AuthWrapper';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightMoreInfo from '@/features/MoreInfo/RightMoreInfo';
import MoreInfoFeature from '@/features/MoreInfo/MoreInfoFeature';
export default function MoreInfo() {
    return (_jsxs(AuthWrapper, { children: [_jsx(LeftAuthContainer, { children: _jsx(MoreInfoFeature, {}) }), _jsx(RightAuthContainer, { children: _jsx(RightMoreInfo, {}) })] }));
}
