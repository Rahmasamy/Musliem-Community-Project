import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import babysitter from '@/assets/imgs/babysitter.png';
import qurantTutor from '@/assets/imgs/quran-tutor.png';
import Events from '@/assets/imgs/EventImg.png';
import advertisment from '@/assets/imgs/advertisment.png';
import { useNavigate } from 'react-router-dom';
const staticServices = [
    {
        id: 1,
        image: babysitter,
        title: "Professional Babysitter",
        description: "Experienced babysitter available for part-time and full-time care.",
        url: "/ServicesPage/baby-sitter"
    },
    {
        id: 3,
        image: Events,
        title: "Events",
        description: "Support local communities by Creating Events",
        url: "/events/all-events"
    },
    {
        id: 4,
        image: qurantTutor,
        title: "Quran Tutor Online",
        description: "Learn Quran with Tajweed from expert tutors.",
        url: "/ServicesPage/quran-tutor"
    },
    {
        id: 5,
        image: advertisment,
        title: "Promote Your Business",
        description: "Reach thousands of users with our advertising services.",
        url: "/halal-business-dirctory/advertise"
    }
];
export default function SpecialServiceCard() {
    const services = staticServices;
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: services.map((service, index) => (_jsxs(Card, { className: "w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(50%-0.75rem)] lg:w-[370px] shadow-md mt-4 sm:mt-8 max-w-[370px]", children: [_jsx(CardHeader, { className: "p-0 group overflow-hidden ", children: _jsx("img", { src: service.image, alt: service.title, style: { height: "220px", objectFit: "cover" }, className: 'h-48 sm:h-56 object-cover w-full transition transform duration-500 ease-in-out group-hover:scale-110' }) }), _jsxs(CardContent, { className: "p-3 sm:p-4", children: [_jsx("h3", { className: "font-bold text-base sm:text-lg", children: service.title }), _jsx("p", { className: "py-2 sm:py-3 text-sm sm:text-base", children: service.description })] }), _jsxs(CardFooter, { className: "flex justify-between cursor-pointer p-3 sm:p-4", onClick: () => navigate(service.url), children: [_jsx("p", { className: "text-xs sm:text-sm", style: { color: "#00ABB6" }, children: "More Info" }), _jsx("span", { className: "text-lg sm:text-xl", children: "\u2192" })] })] }, service.id || index))) }));
}
