import React from "react";
import { MapPin, Clock, Calendar, XCircle, CheckCircle } from "lucide-react";
import { usePendingEvents } from "@/hooks/usePendingEvents";
import { useUpdateEventApproval } from "@/hooks/useUpdateEventApproval";
import Loader from "@/components/common/loader/Loader";

export default function DashboardpendingEvents() {
  const { data, isLoading, isError } = usePendingEvents(1);
  const { mutate: updateEventApproval, isPending: isUpdating } =
    useUpdateEventApproval();

  const handleApproval = (eventId: string, status: "approved" | "rejected") => {
    updateEventApproval({
      id: eventId,
      approvalPayload: { adminApprovalStatus: status },
    });
  };

  if (isLoading)
    return (
      <div className="text-center text-gray-500 my-6 sm:my-10 text-base sm:text-lg">

        <Loader />
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500 my-6 sm:my-10 text-base sm:text-lg">
        Something went wrong!
      </div>
    );
  const pendingEvents = data?.pendingEvents || [];

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      {pendingEvents.length === 0 ? (
        <p className="text-center text-gray-500 my-6 sm:my-10 text-base sm:text-lg">
          No pending pendingEvents found.
        </p>
      ) : (
        pendingEvents.map((event: any) => (
          <div
            key={event._id}
            className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-sm max-w-6xl mx-auto my-3 sm:my-4 lg:my-6"
          >
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 sm:pb-4 mb-3 sm:mb-4 gap-3 sm:gap-0">
              <div className="flex-1 w-full">
                <h2 className="text-base sm:text-lg font-semibold text-gray-700">
                  Event Creator
                </h2>
                <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                  <img
                    src={
                      event?.user?.photo ||
                      "https://via.placeholder.com/80?text=User"
                    }
                    alt="creator"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800 truncate">
                      {event?.user?.fullName || "Unknown User"}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {event?.user?.email}
                    </p>
                    <button className="text-xs sm:text-sm text-blue-500 hover:underline mt-1">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                <button
                  className="p-1.5 sm:p-2 bg-red-100 text-red-500 rounded-full hover:bg-red-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleApproval(event._id, "rejected")}
                  disabled={isUpdating}
                >
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  className="p-1.5 sm:p-2 bg-green-100 text-green-500 rounded-full hover:bg-green-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleApproval(event._id, "approved")}
                  disabled={isUpdating}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>

            {/* Event Details */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-5 text-gray-800">
                Event Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Left Side - Image and Info */}
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">
                    {event?.name}
                  </h3>

                  <img
                    src={
                      event?.image ||
                      "https://images.unsplash.com/photo-1551836022-deb4988cc6c3"
                    }
                    alt="Event"
                    className="rounded-lg sm:rounded-xl w-full h-40 sm:h-48 lg:h-56 object-cover mb-3 sm:mb-4"
                  />

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 text-xs sm:text-sm">
                    <div className="flex items-center bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" />
                      <span className="truncate">{new Date(event?.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-600 flex-shrink-0" />
                      <span className="truncate">{event?.startTime} - {event?.endTime}</span>
                    </div>
                    <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm capitalize">
                      {event?.serviceType || "In-person"}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-gray-600 mb-3 sm:mb-4">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm break-words">{event?.Location}</span>
                  </div>
                </div>

                {/* Right Side - Description */}
                <div className="text-gray-600 leading-relaxed space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base">{event?.description}</p>

                  <div className="pt-3 sm:pt-4 border-t mt-3 sm:mt-4">
                    <p className="text-xs sm:text-sm mb-2">
                      <strong>Admin Approval:</strong>{" "}
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          event?.adminApprovalStatus === "approved"
                            ? "bg-green-100 text-green-700"
                            : event?.adminApprovalStatus === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {event?.adminApprovalStatus}
                      </span>
                    </p>

                    <p className="text-xs sm:text-sm">
                      <strong>Payment Status:</strong>{" "}
                      <span className="capitalize">{event?.paymentStatus}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
