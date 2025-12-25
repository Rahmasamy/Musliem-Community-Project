import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import NoDataFound from "../no-data-found/NoData";
import Services, { ServiceItem } from "@/services/serviceService";
import { LoadingSkeleton } from "../loading/LoadingSkeleton";
import { ListingServicesLoading } from "../loading/ListingServicesLoading";

interface Props {
  defaultServiceType?: string;
}

export default function ListingServices({ defaultServiceType }: Props) {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [serviceType, setServiceType] = useState(defaultServiceType || "");
 const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const limit = 6;

  // 🔁 Fetch data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null)
        const res = await Services.getAllServices({
          page,
          limit,
          search,
          serviceType,
        });

        setServices(res.data);
        setTotalPages(res.pages);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services")
      }
      finally {
        setLoading(false)
      }
    };

    fetchServices();
  }, [page, search, serviceType]);

  // 🔄 Reset page when search or filter changes
  useEffect(() => {
    setPage(1);
  }, [search, serviceType]);

  // 📄 Handle pagination
  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };


if (loading) return <ListingServicesLoading count={3} />;
if (error) return <p className="text-red-500">{error}</p>;
          
  return (
    <div className="w-full flex flex-col items-center  px-4 sm:px-6 lg:px-10">
      {/* 🔍 Search + Filter */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full sm:w-[80%] md:w-[90%] flex flex-col sm:flex-row gap-4 mb-10"
      >
        {/* Search Input */}
        <div className="relative w-full">
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl bg-white/80 
            shadow-sm focus:ring-2 focus:ring-orange-400 transition-all duration-300"
          />
        </div>

        {/* Service Type Filter */}
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-2xl bg-white shadow-sm 
          focus:ring-2 focus:ring-orange-400 transition"
        >
          <option value="">All Services</option>
          <option value="quran_tutor">Quran Tutor</option>
          <option value="babysitter">Babysitter</option>

          <option value="consulting_services">Consulting Services</option>
          <option value="programming_web_app_development">Programming & Development</option>
          <option value="engineering_architecture_interior_design">Engineering & Architecture</option>
          <option value="design_video_audio_production">Design & Multimedia</option>
          <option value="digital_marketing_sales">Marketing & Sales</option>
          <option value="writing_editing_translation_languages">Writing & Translation</option>
          <option value="support_assistance_data_entry">Support & Data Entry</option>
          <option value="training_remote_education">Training & Remote Teaching</option>
        </select>
      </motion.div>

      {/* 🧾 Services Grid */}
      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          <AnimatePresence>
            {services.map((item) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.03 }}
                className="w-full sm:w-[320px] lg:w-[340px]"
              >
                <Card className="shadow-md hover:shadow-2xl border border-gray-100 rounded-2xl overflow-hidden flex flex-col">
                  <CardHeader className="p-0 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[200px] object-cover"
                    />
                    {/* <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      ${item.price}
                    </span> */}
                  </CardHeader>

                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            item.image ||
                            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          }
                          alt="provider"
                          className="w-8 h-8 rounded-full object-cover border"
                        />
                        <span className="text-sm text-gray-700">
                          {item.location || "Unknown Location"}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 flex justify-center border-t">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={`tel:${item.phone}`}
                      className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
                    >
                      {item.phone}
                    </motion.a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <NoDataFound message="No services found" />
      )}

      {/* 📄 Pagination */}
      {services.length > 0 && totalPages > 1 && (
        <div className="mt-8">
          <ReactPaginate
            pageCount={totalPages}
            forcePage={page - 1}
            onPageChange={handlePageClick}
            containerClassName="flex gap-3"
            pageClassName="w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full"
            activeClassName="bg-orange-500 text-white border-orange-500"
            previousLabel="<"
            nextLabel=">"
            previousClassName="w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full"
            nextClassName="w-10 h-10 flex items-center justify-center border-2 border-orange-400 rounded-full"
          />
        </div>
      )}
    </div>
  );
}
