import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent';
import amico from '@/assets/imgs/amico.jpg';
import './contactusfeature.css';
export default function RightAvatarContactUs() {
    return (_jsx(_Fragment, { children: _jsx(RightAuthImgComponent, { src: amico, alt: 'get in touch image', className: 'amicoimg' }) }));
}
