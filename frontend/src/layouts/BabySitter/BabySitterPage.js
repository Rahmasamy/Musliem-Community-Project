import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CenterHeading from '@/components/common/center-heading/CenterHeading';
import ListingBabysitterQuaranCard from '@/components/common/listing-babysitter-quran-card/ListingBabysitterQuaranCard';
export default function BabySitterPage() {
    return (_jsxs("div", { className: 'w-full mx-auto', children: [_jsx(CenterHeading, { title: 'Babysitter', desc: _jsxs(_Fragment, { children: ["Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum congue", _jsx("br", {}), "interdum cras. At nisl in quisque erat ut."] }) }), _jsx("h1", { className: 'font-bold text-lg p-3 ml-14', children: "Pick a Babysitter and Start Booking" }), _jsx(ListingBabysitterQuaranCard, { service: "babysitter" })] }));
}
