import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEvents } from "@/context/eventContext";
import LatestEventsTable from "../lastest-events-table/LatestEventsTable";
import EventsImgDetails from "../lastest-events-table/EventsImgDetails";
import NoDataFound from "../no-data-found/NoData";
export default function EventsSection({ internal }) {
    const { events } = useEvents();
    // If no events exist → show single banner
    if (!events || events.length === 0) {
        return (_jsx(NoDataFound, { message: "No Events Found" }));
    }
    // Otherwise → render your layout normally
    return (_jsxs("div", { className: "flex flex-col lg:flex-row justify-between w-full sm:w-[95%] items-center gap-4 lg:gap-0 px-2 sm:px-0", children: [_jsx(LatestEventsTable, { internal: internal }), _jsx(EventsImgDetails, { limit: 1 })] }));
}
