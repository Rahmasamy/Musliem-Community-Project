import EventService from "@/services/eventService";
import { Event } from "@/types/Event";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const YourEvents = () => {
   const [myEvents, setMyEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await EventService.getMyEvents(1);
        setMyEvents(res.events || []); // assuming API returns { events: [...] }
      } catch (err) {
        console.error("Failed to load events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  return (
    <div>
      {/* Top Button */}
      <div className="flex justify-start items-center w-full">
        <Link
          to="/events/create-event"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
        >
          <FaPlus /> Create Your Event
        </Link>
      </div>

      {/* Header */}
      <h2 className="w-full text-center text-3xl py-8 font-bold">Your Events</h2>
      <p className=" w-full sm:w-[80%] md:w-full text-center text-md mb-4">
        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
        scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
      </p>

      {/* Events Grid */}
      <div className="w-full flex flex-wrap gap-5 p-5">
        {myEvents.map((event) => (
          <div
            key={event._id}
            className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-white border p-4"
          >
            <div className="relative">
              <img
                src={event.image ? event.image : ''}
                alt={event.name}
                className="rounded-xl h-48 w-full object-cover"
              />

              {/* Date & Time */}
              <div className="absolute top-3 left-3 space-y-2">
                <div className="bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
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
                 
                  {new Date(event.startTime).toDateString()}
                </div>
                <div className="bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
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
                  {event.startTime} - {event.endTime}
                </div>
              </div>

              {/* Attendance Type */}
              <div className="absolute top-3 right-3">
                <span className="bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {event.attendance}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-4 space-y-2">
              <h2 className="text-lg font-semibold leading-snug">
                <Link to={`/events/${event._id}`}>{event.name}</Link>
              </h2>
              <div className="flex items-start text-sm text-gray-600 gap-1">
                <svg
                  className="w-4 h-4 mt-1"
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
                <span>{event.Location || "No Location Provided"}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <svg
                  className="w-5 h-5 text-teal-700"
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
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full text-sm transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourEvents;
