import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LeftHeading from '@/components/common/left-heading/LeftHeading';
import EventsSection from '@/components/common/wrapper-section/EventsSection';
import { EventProvider } from '@/context/eventContext';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
export default function LatestEvents() {
    const navigate = useNavigate();
    return (_jsx(EventProvider, { children: _jsxs("div", { className: 'w-full flex flex-col items-center', children: [_jsx(LeftHeading, { title: 'Latest Events', desc: _jsx(_Fragment, { children: "Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue interdum cras. At nisl in quisque erat ut.'" }), icon: _jsx(FaArrowRight, { onClick: () => navigate("/Events") }) }), _jsx("div", { className: "flex flex-col lg:flex-row justify-between w-full sm:w-[95%] items-center gap-4 lg:gap-0 px-2 sm:px-0", children: _jsx(EventsSection, { internal: 'false' }) })] }) }));
}
