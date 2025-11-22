import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import loginBg from '../../assets/imgs/login.png';
import Group from '../../assets/imgs/Group 3.png';
import persons from '../../assets/icons/persons.png';
import mosque from '../../assets/icons/mosque.png';
import dollars from '../../assets/icons/dollars.png';
import './LoginDetails.css';
export default function LoginAvatar() {
    return (_jsx("div", { className: "LoginAvatarImgs flex flex-col items-center gap-4", children: _jsxs("div", { className: "outer-ellipse", children: [_jsx("div", { className: "inner-ellipse", children: _jsx("img", { src: mosque, alt: "mosque img", className: "icon2  object-contain shadow-md" }) }), _jsx("img", { src: loginBg, alt: "Login background", className: "img1 w-full  object-cover object-center shadow-md" }), _jsx("img", { src: Group, alt: "Group", className: "img2 w-2/3 max-w-xs object-contain shadow-md" }), _jsx("img", { src: persons, alt: "person img", className: "icon1 object-cover object-center shadow-md" }), _jsx("img", { src: dollars, alt: "Login background", className: "icon3 w-full  object-cover object-center shadow-md" }), _jsx("span", { className: 'messageSpan', children: "\uD83D\uDCAC" })] }) }));
}
