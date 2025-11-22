import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Services from "@/services/serviceService";
import { useEffect, useState } from "react";
import { IServiceResponse } from "@/types/Service";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";

export default function ListingDonateCard() {
  const [services, setServices] = useState<IServiceResponse[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await Services.getServicesByType("donation", page, search);
        setServices(data.services || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching services", error);
      }
    };
    fetchServices();
  }, [page, search]);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-10">
      {/* 🔍 Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex w-full sm:w-[80%] md:w-[70%] mb-10 justify-center relative"
      >
        <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search donations..."
          value={search}
          onChange={handleSearchChange}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300"
        />
      </motion.div>

      {/* 💳 Donation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        <AnimatePresence>
          {services.length > 0 ? (
            services.map((service) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-[320px] lg:w-[310px]"
              >
                <Card className="shadow-md hover:shadow-2xl border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardHeader className="p-0 relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-[200px] object-cover"
                    />
                    {service.price > 0 && (
                      <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                        ${service.price}
                      </span>
                    )}
                  </CardHeader>

                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-gray-800 hover:text-orange-500 transition-colors duration-200">
                      <Link to={`/services/${service._id}`}>{service.name}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>

                  <CardFooter className="p-4 flex justify-center border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/payment")}
                      className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-500 hover:to-orange-700 px-5 py-2.5 rounded-xl shadow-md transition-all duration-300"
                    >
                      ❤️ Donate
                    </motion.button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-lg font-semibold">
              No donations found.
            </p>
          )}
        </AnimatePresence>
      </div>

      {/* 📄 Pagination */}
      {services.length > 0 && (
        <div className="mt-8 flex gap-2 justify-center items-center w-full">
          <ReactPaginate
            pageCount={totalPages}
            forcePage={page - 1}
            onPageChange={handlePageClick}
            containerClassName="flex gap-3 justify-center items-center"
            pageClassName="w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer"
            activeClassName="!bg-orange-500 !text-white !border-orange-500"
            previousLabel="<"
            nextLabel=">"
            previousClassName="w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer"
            nextClassName="w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
