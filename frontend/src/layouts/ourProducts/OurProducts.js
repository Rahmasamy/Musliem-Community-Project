import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CenterHeading from '@/components/common/center-heading/CenterHeading';
import ListingCard from '@/components/common/listing-card/ListingCard';
import { ProductProvider } from '@/context/productContext';
export default function OurProducts() {
    return (_jsxs("div", { className: 'w-full ', children: [_jsx(CenterHeading, { title: 'Our Listings' }), _jsx("div", { className: "flex w-[100%] items-center", children: _jsx(ProductProvider, { children: _jsx(ListingCard, {}) }) })] }));
}
