import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './Common.css';
const CommonInput = ({ label, type = 'text', placeholder = '', name, value, onChange, onBlur, error, required = false, icon, touched, accepts, disabled, useRef, defaultValue, onKeyDown }) => {
    const labelSection = label && (_jsx("div", { className: "label p-1", children: _jsx("label", { className: "cursor-pointer block text-sm text-gray-700 mb-1", htmlFor: name, children: label }) }));
    const inputElement = (_jsxs(_Fragment, { children: [icon && type !== 'file' && (_jsx("label", { htmlFor: name, children: _jsx("span", { className: "iconinput absolute left-2 top-2 flex items-center pointer-events-none", children: icon }) })), icon && type === 'file' && (_jsx("label", { htmlFor: name, className: "cursor-pointer file-upload-label", children: _jsx("span", { className: "fileIcon", children: icon }) })), _jsx("input", { ref: useRef, disabled: disabled, id: name, name: name, type: type, placeholder: placeholder, value: value, onChange: onChange, onBlur: onBlur, required: required, className: `flex-1 inputFieldCommon w-full ${icon ? 'pl-10' : 'pl-4'} py-2 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`, accept: accepts, defaultValue: defaultValue, onKeyDown: onKeyDown }), error && (_jsx("p", { className: "error text-red-500 text-xs mt-1", children: error }))] }));
    const inputContainer = type !== 'file' ? (_jsx("div", { className: "relative w-full", children: inputElement })) : (inputElement);
    return type !== 'file' ? (_jsxs("div", { className: "mb-4 w-full", children: [labelSection, inputContainer] })) : (_jsxs(_Fragment, { children: [labelSection, inputContainer] }));
};
export default CommonInput;
