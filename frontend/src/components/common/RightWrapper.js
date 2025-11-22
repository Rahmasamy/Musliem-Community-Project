import { jsx as _jsx } from "react/jsx-runtime";
import backgroundImg from '../../assets/imgs/backgound-img.png';
export default function RightWrapper({ children }) {
    return (_jsx("div", { className: "rightWrapper", style: {
            backgroundImage: `
     linear-gradient(to right, rgb(255 255 255 / 57%), rgb(255 255 255)),
      url(${backgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundSize: 'contain',
        }, children: children }));
}
