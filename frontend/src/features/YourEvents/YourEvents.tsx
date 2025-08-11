import events from "@/assets/imgs/events.png";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const YourEvents = () => {
  return (
    <div>
       <div className="flex justify-between items-center mb-8">
            <Link
              to="/events/create-event"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
            >
              <FaPlus /> Create Your Event
            </Link>
          </div>
      <h2 className="w-full text-center text-3xl py-8 font-bold">
        Your Events
      </h2>
      <p className=" w-full sm:w-[80%] md:w-full text-center text-md mb-4">
        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
        scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
      </p>
      <div className="w-full flex justify-evenly p-5">
        <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-white border p-4">
          <div className="relative">
            <img
              src={events}
              alt="Workshop"
              className="rounded-xl h-48 w-full object-cover"
            />

            <div className="absolute top-3 left-3 space-y-2">
              <div className="bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Saturday, May 10, 2025
              </div>
              <div className="bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                2:00 PM - 5:00 PM
              </div>
            </div>

            <div className="absolute top-3 right-3">
              <span className="bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                In-Person
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <h2 className="text-lg font-semibold leading-snug">
             <Link to = "/events/events-details">
               A Workshop on Ethical Dealings in the Muslim Community</Link>
            </h2>
            <div className="flex items-start text-sm text-gray-600 gap-1">
              <svg
                className="w-4 h-4 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1011.314-11.314l-4.243 4.243z"
                />
              </svg>
              <span>
                Dearborn Community Center, 123 Main St, Dearborn, MI 48126, USA
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <svg
                className="w-5 h-5 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A8 8 0 0112 4a8 8 0 016.879 13.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>23 Attend</span>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full text-sm transition">
              View Details →
            </button>
          </div>
        </div>

        <div className="max-w-md rounded-2xl overflow-hidden shadow-lg bg-white border p-4">
          <div className="relative">
            <img
              src={events}
              alt="Workshop"
              className="rounded-xl h-48 w-full object-cover"
            />

            <div className="absolute top-3 left-3 space-y-2">
              <div className="bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Saturday, May 10, 2025
              </div>
              <div className="bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                2:00 PM - 5:00 PM
              </div>
            </div>

            <div className="absolute top-3 right-3">
              <span className="bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                In-Person
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <h2 className="text-lg font-semibold leading-snug">
              <Link to = "/events/events-details">
               A Workshop on Ethical Dealings in the Muslim Community</Link>
            </h2>
            <div className="flex items-start text-sm text-gray-600 gap-1">
              <svg
                className="w-4 h-4 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1011.314-11.314l-4.243 4.243z"
                />
              </svg>
              <span>
                Dearborn Community Center, 123 Main St, Dearborn, MI 48126, USA
              </span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <svg
                className="w-5 h-5 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A8 8 0 0112 4a8 8 0 016.879 13.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>23 Attend</span>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-full text-sm transition">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourEvents;
