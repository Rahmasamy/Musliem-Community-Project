import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent';
import Avater2 from '@/assets/imgs/Avater2.png';
export default function RightMoreInfo() {
    return (_jsx(_Fragment, { children: _jsx(RightAuthImgComponent, { src: Avater2, alt: 'More Info Image', className: 'registimg' }) }));
}
