import events from "@/assets/imgs/events.png";
import EventsImgDetails from "@/components/common/lastest-events-table/EventsImgDetails";
import LatestEventsTable from "@/components/common/lastest-events-table/LatestEventsTable";
import { EventProvider } from "@/context/eventContext";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllEvents = () => {
  return (
    <EventProvider>
      <div className="container">
       <Link
                    to="/events/create-event"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
                  >
                    <FaPlus /> Create Your Event
                  </Link>
      <h2 className="w-full text-center text-3xl py-8 font-bold">
        Events you Attend
      </h2>
      <p className=" w-full sm:w-[80%] md:w-full text-center text-md mb-4">
        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
        scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
      </p>
      <EventsImgDetails limit={2} />
               
      <h2 className="w-full text-center text-3xl py-8 font-bold">All Events</h2>
      <LatestEventsTable internal = 'true'/>

    </div>
    </EventProvider>
    
  );
};

export default AllEvents;
