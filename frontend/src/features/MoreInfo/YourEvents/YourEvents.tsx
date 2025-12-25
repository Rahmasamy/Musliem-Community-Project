import NoDataFound from "@/components/common/no-data-found/NoData";
import EventService from "@/services/eventService";
import { Event } from "@/types/Event";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const YourEvents = () => {
  const [myEvents, setMyEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await EventService.getMyEvents(page);
        setMyEvents(res.events || []);
        setTotalPages(res.totalPages || 1);
      } catch (err) {
        console.error("Failed to load events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [page]);
  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1); // react-paginate بيبدأ من 0
  };

  if (loading)
    return (
      <p className="text-center py-6 sm:py-10 text-sm sm:text-base">
        Loading...
      </p>
    );
  return (
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Top Button */}
      <div className="flex justify-start items-center w-full">
        <Link
          to="/events/create-event"
          className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 shadow m-2 sm:m-4 text-sm sm:text-base"
        >
          <FaPlus className="text-sm sm:text-base" />{" "}
          <span>Create Your Event</span>
        </Link>
      </div>

      {/* Header */}
      <h2 className="w-full text-center text-xl sm:text-2xl lg:text-3xl py-4 sm:py-6 lg:py-8 font-bold px-2">
        Your Events
      </h2>
      <p className="w-full sm:w-[80%] md:w-full text-center text-sm sm:text-base mb-4 px-2">
        Keep track of the events you’re attending and explore what’s coming
        next. Connect with others, participate actively, and enjoy every moment.
      </p>

      {/* Events Grid */}
      <div className="w-full flex flex-wrap gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-4 lg:p-5">
        {myEvents.length === 0 ? (
          <div className="w-full text-center py-6 sm:py-10 text-gray-500 text-base sm:text-lg font-semibold">
            <NoDataFound message="You havent Joined to any event yet!" />
          </div>
        ) : (
          myEvents.map((event) => (
            <div
              key={event._id}
              className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.833rem)] xl:w-[calc(33.333%-1rem)] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white border p-3 sm:p-4"
            >
              <div className="relative">
                <img
                  src={event.image ? event.image : ""}
                  alt={event.name}
                  className="rounded-lg sm:rounded-xl h-40 sm:h-48 w-full object-cover"
                />

                {/* Date & Time */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 space-y-1 sm:space-y-2">
                  <div className="bg-teal-700 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="truncate">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="bg-teal-700 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full flex items-center gap-1">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="truncate">
                      {event.startTime} - {event.endTime}
                    </span>
                  </div>
                </div>

                {/* Attendance Type */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                  <span className="bg-emerald-500 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                    {event.attendance}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 sm:mt-4 space-y-2">
                <h2 className="text-base sm:text-lg font-semibold leading-snug line-clamp-2">
                  <Link
                    to={`/events/${event._id}`}
                    className="hover:text-teal-600 transition-colors"
                  >
                    {event.name}
                  </Link>
                </h2>
                <div className="flex items-start text-xs sm:text-sm text-gray-600 gap-1">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1011.314-11.314l-4.243 4.243z"
                    />
                  </svg>
                  <span className="line-clamp-1">
                    {event.Location || "No Location Provided"}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-teal-700 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A8 8 0 0112 4a8 8 0 016.879 13.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{event.members?.length || 0} Attend</span>
                </div>
                <Link
                  to={`/events/${event._id}`}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-xs sm:text-sm transition w-full sm:w-auto text-center"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center px-2">
        {myEvents.length > 0 && (
          <ReactPaginate
            pageCount={totalPages}
            forcePage={page - 1}
            onPageChange={handlePageClick}
            containerClassName="flex gap-2 sm:gap-3 justify-center items-center mt-4 sm:mt-6 flex-wrap"
            pageClassName="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base"
            activeClassName="!bg-orange-400 !text-white !border-orange-400"
            previousLabel="<"
            nextLabel=">"
            previousClassName="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base"
            nextClassName="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base"
          />
        )}
      </div>
    </div>
  );
};

export default YourEvents;
