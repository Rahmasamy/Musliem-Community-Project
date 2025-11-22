import { useContacts } from "@/hooks/useConacts";
import { useState } from "react";

export default function ReportContactUs() {
  const [type, setType] = useState<string>("Report");

  const { data: reports, isLoading, isError } = useContacts(type);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to fetch contacts</p>;
  console.log("reports", reports);

  return (
    <div className="text-gray-700">
      {/* Tabs */}
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 border-b mb-4 sm:mb-6 overflow-x-auto pb-2">
        <h2
          className={`text-base sm:text-lg lg:text-xl font-semibold pb-2 cursor-pointer whitespace-nowrap ${
            type === "Report" 
              ? "text-[#007B7F] border-b-2 border-[#007B7F]" 
              : "text-gray-400 hover:text-[#007B7F] hover:border-b-2 hover:border-[#007B7F]"
          }`}
          onClick={() => setType("Report")}
        >
          Reports <span className="text-red-500 ml-1"></span>
        </h2>
        <h2
          className={`text-base sm:text-lg lg:text-xl font-semibold pb-2 cursor-pointer whitespace-nowrap ${
            type === "Suggest" 
              ? "text-[#007B7F] border-b-2 border-[#007B7F]" 
              : "text-gray-400 hover:text-[#007B7F] hover:border-b-2 hover:border-[#007B7F]"
          }`}
          onClick={() => setType("Suggest")}
        >
          Suggestions <span className="text-gray-400 ml-1">

          </span>
        </h2>
        <h2
          className={`text-base sm:text-lg lg:text-xl font-semibold pb-2 cursor-pointer whitespace-nowrap ${
            type === "Other" 
              ? "text-[#007B7F] border-b-2 border-[#007B7F]" 
              : "text-gray-400 hover:text-[#007B7F] hover:border-b-2 hover:border-[#007B7F]"
          }`}
          onClick={() => setType("Other")}
        >
          other <span className="text-gray-400 ml-1"></span>
        </h2>
      </div>

      {/* Filter Bar */}

      {/* Report Cards */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">Number of Incoming News : {reports?.length}</h1>
        {reports?.length === 0 && <div className="text-center text-gray-500 text-sm sm:text-base py-4 sm:py-6">
          No Incoming News here , Thanks !
          </div>}
        {reports?.map((report) => (
          <div
            key={report._id}
            className="bg-white shadow-md rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 relative border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start mb-3 sm:mb-4 gap-3 sm:gap-0">
              <div className="flex-1 w-full">
                <p className="text-xs sm:text-sm mb-1 sm:mb-2">
                  <span className="font-semibold">Sender:</span> <span className="break-all">{report.email}</span>
                </p>
                <p className="text-xs sm:text-sm mb-1 sm:mb-2">
                  <span className="font-semibold">Topic:</span> {report.type}
                </p>
                <p className="text-xs sm:text-sm">
                  <span className="font-semibold">Headline:</span>{" "}
                  {report.headline}
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
              <span className="font-semibold">Message: </span>
              {report.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
