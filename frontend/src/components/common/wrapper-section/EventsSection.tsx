import { useEvents } from "@/context/eventContext";
import LatestEventsTable from "../lastest-events-table/LatestEventsTable";
import EventsImgDetails from "../lastest-events-table/EventsImgDetails";
import NoDataFound from "../no-data-found/NoData";
import { LoadingSkeleton } from "../loading/LoadingSkeleton";

export default function EventsSection({
    internal 
}: {
    internal: "true" | "false"
}) {
  const {error, loading, events } = useEvents();
if (loading) return <LoadingSkeleton />;
if (error) return <p className="text-red-500">{error}</p>;
          
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
     {
      internal === "false" && 
      <EventsImgDetails limit={1} />
     }
    </div>
  );
}
