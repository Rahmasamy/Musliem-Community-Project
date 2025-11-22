import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Bold, ChevronLeft, ChevronRight } from "lucide-react";
import { useAdvertisement } from "@/context/advertismentContext";
import { IoLocationSharp } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import AdvertiseLeft from "./AdvertiseLeft";

const AdvertismentSlider = () => {
  const { data } = useAdvertisement(); // جايبة الإعلانات من الـ context
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // التحكم في الزر السابق / التالي
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (!data || data.length === 0) {
    return (
      <div className="AdvertiseContainer w-full flex flex-col lg:flex-row items-center justify-between">
        <AdvertiseLeft />
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full text-center bg-gradient-to-r from-teal-600 via-orange-500 to-yellow-600 to-black-300  p-4 sm:p-6 lg:p-8 rounded-b-2xl sm:rounded-b-3xl shadow-lg">
        <h1 className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-md mb-2 animate-pulse">
          🚀 Advertise Now On Our Platform!
        </h1>
        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl px-2">
          Want your business to shine here? Contact us today for special offers
          🌟
        </p>
        <button className="mt-3 sm:mt-4 bg-white text-teal-600 font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-md hover:bg-pink-100 transition-all duration-300 text-sm sm:text-base">
          Contact Us
        </button>
      </div>
      {data.length === 1 ? (
        <div
          key={data[0]._id || 0}
          className="min-w-full sm:min-w-[100%] md:min-w-[100%] p-2 sm:p-4"
        >
          <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-xl sm:rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex flex-col border border-pink-200">
            {/* الصورة */}
            <div className="h-40 sm:h-48 w-full overflow-hidden">
              <img
                src={data[0].image || "https://via.placeholder.com/400x200"}
                alt={data[0].name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* المحتوى */}
            <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-extrabold text-lg sm:text-xl text-teal-600 uppercase tracking-wide">
                  {data[0].name.toLocaleUpperCase()}
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm line-clamp-3 italic mt-2">
                  {data[0].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center justify-start py-2">
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                    <IoLocationSharp color="#f97316" className="mr-1" />

                    <span className="truncate">
                      {data[0].location || "Unknown location"}
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                    <CiPhone color="#f97316" className="mr-1" />

                    <span className="truncate">
                      {data[0].phone || "No phone available"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                From{" "}
                {new Date(data[0].extraDetails?.startDate).toLocaleDateString()}{" "}
                → {new Date(data[0].extraDetails?.endDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="embla" ref={emblaRef}>
          <div className="flex">
            {data?.map((ad, index) => (
              <div
                key={ad._id || index}
                className="min-w-full sm:min-w-[50%] md:min-w-[50.3333%] p-2 sm:p-4"
              >
                <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-xl sm:rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 overflow-hidden flex flex-col border border-pink-200">
                  {/* الصورة */}
                  <div className="h-40 sm:h-48 w-full overflow-hidden">
                    <img
                      src={ad.image || "https://via.placeholder.com/400x200"}
                      alt={ad.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* المحتوى */}
                  <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="font-extrabold text-lg sm:text-xl text-teal-600 uppercase tracking-wide">
                        {ad.name.toLocaleUpperCase()}
                      </h2>
                      <p className="text-gray-700 text-xs sm:text-sm line-clamp-3 italic mt-2">
                        {ad.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-center justify-start py-2">
                        <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                          <IoLocationSharp color="#f97316" className="mr-1" />

                          <span className="truncate">
                            {ad.location || "Unknown location"}
                          </span>
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 flex items-center">
                          <CiPhone color="#f97316" className="mr-1" />

                          <span className="truncate">
                            {ad.phone || "No phone available"}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      From{" "}
                      {new Date(
                        ad.extraDetails?.startDate
                      ).toLocaleDateString()}{" "}
                      →{" "}
                      {new Date(ad.extraDetails?.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* الأسهم للتنقل */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white hover:bg-teal-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 disabled:opacity-50"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white hover:bg-teal-600 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 disabled:opacity-50"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default AdvertismentSlider;
