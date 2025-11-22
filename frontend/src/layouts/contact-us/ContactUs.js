import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant';
import GoBack from '@/components/common/GoBack/GoBack';
import Navigate from '@/components/common/navigator/Navigate';
import './contactus.css';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import AuthWrapper from '@/components/common/AuthWrapper';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightAvatarContactUs from '@/features/contactus-form/RightAvatarContactUs';
import ContactUsForm from '@/features/contactus-form/ContactUsForm';
export default function ContactUs() {
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx(Navigate, { home: 'Home', arg2: 'Contact Us' }), _jsx("div", { className: "p-4 sm:p-6 md:p-8 lg:p-10", children: _jsxs(AuthWrapper, { children: [_jsxs(LeftAuthContainer, { children: [_jsx("h2", { className: 'font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6', children: "Get In Touch" }), _jsx(ContactUsForm, {})] }), _jsx(RightAuthContainer, { children: _jsx(RightAvatarContactUs, {}) })] }) })] }));
}
