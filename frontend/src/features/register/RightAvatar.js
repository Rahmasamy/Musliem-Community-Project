import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent';
import './RightAvatar.css';
import AvatarImg from '@/assets/imgs/Avatarimg.png';
export default function RightAvatar() {
    return (_jsx(_Fragment, { children: _jsx(RightAuthImgComponent, { src: AvatarImg, alt: 'Register Image', className: 'registimg' }) }));
}
