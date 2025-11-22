import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './Describtion.css';
export default function Describtion({ desc }) {
    return (_jsx(_Fragment, { children: _jsx("p", { className: 'text-md font-semibold', children: desc }) }));
}
