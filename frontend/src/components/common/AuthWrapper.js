import { jsx as _jsx } from "react/jsx-runtime";
import backgroundImg from '../../assets/imgs/backgound-img.png';
const AuthWrapper = ({ children, gradientDirection = 'left' }) => {
    const wrapperStyle = {
        backgroundImage: `
      linear-gradient(rgb(255 255 255 / 10%), rgb(255, 255, 255)), 
      linear-gradient(to ${gradientDirection}, rgba(255, 255, 255, 0.62), rgb(255, 255, 255)), 
      url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'contain',
    };
    return (_jsx("div", { className: "BigContainer flex flex-col justify-center min-h-screen overflow-hidden w-full", style: wrapperStyle, children: _jsx("div", { className: "LoginContainer w-full sm:w-[97%] min-h-[90vh] flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8", children: children }) }));
};
export default AuthWrapper;
