import { useEvents } from "@/context/eventContext";
import LatestEventsTable from "../lastest-events-table/LatestEventsTable";
import EventsImgDetails from "../lastest-events-table/EventsImgDetails";
import NoDataFound from "../no-data-found/NoData";

export default function EventsSection({
    internal 
}: {
    internal: "true" | "false"
}) {
  const { events } = useEvents();

  // If no events exist → show single banner
  if (!events || events.length === 0) {
    return (
  
    <NoDataFound message="No Events Found" />
    );
  }

  // Otherwise → render your layout normally
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full sm:w-[95%] items-center gap-4 lg:gap-0 px-2 sm:px-0">
      <LatestEventsTable internal={internal}/>
      <EventsImgDetails limit={1} />
    </div>
  );
}
