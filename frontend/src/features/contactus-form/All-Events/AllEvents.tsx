import EventFilters from "@/components/common/EventFilter/EventFilter";
import EventsImgDetails from "@/components/common/lastest-events-table/EventsImgDetails";
import LatestEventsTable from "@/components/common/lastest-events-table/LatestEventsTable";
import EventsSection from "@/components/common/wrapper-section/EventsSection";
import { EventProvider } from "@/context/eventContext";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const AllEvents = () => {
  return (
    <EventProvider>

    <div className="container w-full px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="flex justify-start items-center w-full">
   <Link
                          to="/events/create-event"
                          className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 shadow m-2 sm:m-4 text-sm sm:text-base"
                        >
                          <FaPlus className="text-sm sm:text-base" /> <span>Create Your Event</span>
                        </Link>
      </div>
      
      <h2 className="w-full text-center text-xl sm:text-2xl lg:text-3xl py-4 sm:py-6 lg:py-8 font-bold px-2">

        Events you Attend
      </h2>
      <p className="w-full sm:w-[80%] md:w-full text-center text-sm sm:text-base mb-4 px-2">
        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
        scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
      </p>
      <EventsImgDetails limit={2}/>
      
      <h2 className="w-full text-center text-xl sm:text-2xl lg:text-3xl py-4 sm:py-6 lg:py-8 font-bold px-2">All Events</h2>
       {/* <EventFilters />
     <LatestEventsTable  internal="true"/> */}
     <EventsSection internal="true"/>
    </div>
    </EventProvider>
  );
};

export default AllEvents;
