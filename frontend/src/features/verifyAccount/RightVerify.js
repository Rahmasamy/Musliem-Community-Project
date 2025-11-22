import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RightAuthImgComponent from "@/components/common/RightAuthImgComponent/RightAuthImgComponent";
import './Verify.css';
import verifyImg from '@/assets/imgs/verifyImg.png';
export default function RightVerify() {
    return (_jsx(_Fragment, { children: _jsx(RightAuthImgComponent, { src: verifyImg, alt: 'Register Image', className: 'verifyimg' }) }));
}
