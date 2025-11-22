import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CenterHeading from '@/components/common/center-heading/CenterHeading';
import ListingDonateCard from '@/components/common/listing-donate-card/ListingDonateCard';
export default function DonationPage() {
    return (_jsxs("div", { className: 'w-full mx-auto p-8', children: [_jsx(CenterHeading, { title: 'Donation', desc: _jsxs(_Fragment, { children: ["Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue", _jsx("br", {}), "interdum cras. At nisl in quisque erat ut."] }) }), _jsx("div", { className: "flex w-[95%] items-center gap-5 mb-2", children: _jsx(ListingDonateCard, {}) })] }));
}
