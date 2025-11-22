import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent';
import CommunityImg from '@/assets/imgs/community-image.png';
export default function RightForgetPass() {
    return (_jsx(_Fragment, { children: _jsx(RightAuthImgComponent, { src: CommunityImg, alt: 'Register Image', className: 'registimg' }) }));
}
