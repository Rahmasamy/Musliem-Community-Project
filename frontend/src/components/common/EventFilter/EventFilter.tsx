import { useState } from "react";
import { useEvents } from "@/context/eventContext";
import { FiSearch, FiMapPin, FiCalendar } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";

export default function EventFilters() {
  const { setFilters } = useEvents();
  const [filters, setLocalFilters] = useState({
    search: "",
    location: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    setFilters(filters);
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
      {/* Search input */}
      <div className="flex items-center w-full sm:w-full md:w-[24%] relative">
        <FiSearch className="absolute left-3 text-gray-400 text-base sm:text-lg" />
        <input
          type="text"
          name="search"
          placeholder="Search events..."
          value={filters.search}
          onChange={handleChange}
          className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:border-orange-500 outline-none transition-all duration-200 text-sm sm:text-base"
        />
      </div>

      {/* Location input */}
      <div className="flex items-center w-full sm:w-full md:w-[24%] relative">
        <FiMapPin className="absolute left-3 text-gray-400 text-base sm:text-lg" />
        <input
          type="text"
          name="location"
          placeholder="Location..."
          value={filters.location}
          onChange={handleChange}
          className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:border-orange-500 outline-none transition-all duration-200 text-sm sm:text-base"
        />
      </div>

      {/* Date input */}
      <div className="flex items-center w-full sm:w-full md:w-[25%] relative">
        <FiCalendar className="absolute left-3 text-gray-400 text-base sm:text-lg" />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="w-full pl-9 sm:pl-10 pr-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-gray-300 focus:border-orange-500 outline-none transition-all duration-200 text-sm sm:text-base text-gray-600"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleFilter}
        className="rounded-full bg-orange-500 text-white px-4 sm:px-5 py-3 sm:py-4 md:py-5 hover:bg-orange-600 transition-all duration-200 font-semibold w-full sm:w-full md:w-auto flex items-center justify-center gap-2"
      >
        <CiFilter className="text-lg sm:text-xl" />
        <span className="sm:hidden">Filter</span>
      </button>
    </div>
  );
}
