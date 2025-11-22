import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent';
import resetImg from '@/assets/imgs/resetImg.png';
import './Reset.css';
export default function RightRest() {
    return (_jsx(_Fragment, { children: _jsx(RightAuthImgComponent, { src: resetImg, alt: 'Register Image', className: 'restimg' }) }));
}
