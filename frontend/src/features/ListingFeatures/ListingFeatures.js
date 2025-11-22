import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CenterHeading from '@/components/common/center-heading/CenterHeading';
import ListingCard from '@/components/common/listing-card/ListingCard';
import { ProductProvider } from '@/context/productContext';
import { useNavigate } from 'react-router-dom';
export default function ListingFeatures() {
    const navigate = useNavigate();
    return (_jsxs("div", { className: 'w-full flex flex-col items-center py-4', children: [_jsx(CenterHeading, { title: 'Our Listings', desc: _jsxs(_Fragment, { children: ["Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue", _jsx("br", {}), "interdum cras. At nisl in quisque erat ut."] }) }), _jsx("div", { className: "flex justify-between w-[95%] items-center mb-8", children: _jsx(ProductProvider, { children: _jsx(ListingCard, {}) }) })] }));
}
