import { jsx as _jsx } from "react/jsx-runtime";
import AdvertiseBg from '@/assets/imgs/Advertise-background.png';
import { AdvertismentProvider } from '@/context/advertismentContext';
import AdvertismentSlider from '@/components/common/Advertise/AdvertismentSlider';
export default function Advertise() {
    return (_jsx("div", { className: 'Advertise w-full flex items-center justify-center min-h-80 py-4 sm:py-6 lg:py-8', style: {
            backgroundImage: `
      url(${AdvertiseBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }, children: _jsx("div", { className: "AdvertiseContainer w-full sm:w-[95%] md:w-[90%] lg:w-[80%] flex items-center justify-between px-2 sm:px-4", children: _jsx(AdvertismentProvider, { children: _jsx(AdvertismentSlider, {}) }) }) }));
}
