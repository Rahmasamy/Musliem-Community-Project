import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LandingPage from "@/components/common/Landing-page/LandingPage";
import { VisitContext } from "@/context/dashboard-context";
import Advertise from "@/features/Advertise/Advertise";
import LatestEvents from "@/features/Latest-Events/LatestEvents";
import ListingFeatures from "@/features/ListingFeatures/ListingFeatures";
import OurGroups from "@/features/OurGroups/OurGroups";
import ServiceFeature from "@/features/serviceFeature/ServiceFeature";
import { addHomeVisit } from "@/services/dashboard-anayltics.service";
import { useContext, useEffect } from "react";
export default function Home() {
    const { visits, setVisits } = useContext(VisitContext);
    useEffect(() => {
        const recordVisit = async () => {
            const data = await addHomeVisit();
            console.log("data totoal ", data);
            setVisits(data);
        };
        recordVisit();
    }, [setVisits]);
    useEffect(() => {
        console.log("visits updated", visits);
    }, [visits]);
    return (_jsxs(_Fragment, { children: [_jsx(LandingPage, {}), _jsx(ServiceFeature, {}), _jsx(Advertise, {}), _jsxs("div", { className: "p-6", children: [_jsx(LatestEvents, {}), _jsx(OurGroups, {}), _jsx(ListingFeatures, {})] })] }));
}
