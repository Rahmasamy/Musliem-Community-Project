import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import GroupCard from '@/components/common/group-card/GroupCard';
import LeftHeading from '@/components/common/left-heading/LeftHeading';
import { GroupProvider } from '@/context/groupContext';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export default function OurGroups() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: 'w-full flex flex-col items-center py-4 ', children: [_jsx(LeftHeading, { title: 'Our Groups', desc: _jsxs(_Fragment, { children: ["Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque", _jsx("br", {}), "elementum congue interdum cras. At nisl in quisque erat ut.'"] }), icon: _jsx(FaArrowRight, { onClick: () => navigate("/Groups") }) }), _jsx("div", { className: "flex justify-between w-[95%] items-center", children: _jsx(GroupProvider, { children: _jsx(GroupCard, {}) }) })] }));
}
