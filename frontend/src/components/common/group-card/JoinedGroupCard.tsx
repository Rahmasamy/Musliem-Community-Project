import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useEffect, useMemo, useState } from "react";
import { useLeaveGroup, useUserGroups } from "@/hooks/useGroups";
import { IoPerson } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import debounce from "lodash/debounce";
import NoDataFound from "../no-data-found/NoData";

export default function JoinedGroupCard() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ search: "" });
  const { data, isLoading } = useUserGroups(page, filters);

  const loginUser = useAuth();
  const userId = loginUser?.user?._id;
  const { mutate: leaveGroupMutate } = useLeaveGroup(userId || "");

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setFilters({ search: value });
        setPage(1);
      }, 400),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="w-full flex flex-col justify-start items-center px-4 sm:px-8">
      {/* 🔍 Smart Search Input */}

      {data && data.groups && data?.groups?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-8 flex justify-center"
        >
          <div className="relative w-[80%] sm:w-[60%] md:w-[45%] lg:w-[57%]">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search joined groups..."
              value={filters.search}
              onChange={handleSearch}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl bg-white/80 backdrop-blur-sm 
                       shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none 
                       transition-all duration-300 text-gray-700 placeholder-gray-400"
            />
          </div>
        </motion.div>
      )}

      {/* 🧩 Groups List */}
      <div className="w-full p-4">

  {/* LOADING */}
  {isLoading ? (
    <p className="text-center w-full py-10 text-gray-500 text-lg animate-pulse">
      Loading groups...
    </p>
  ) : data?.groups?.length === 0 ? (

    /* NO DATA — shown OUTSIDE the grid just like your products design */
    <NoDataFound message="No Joined Groups" />

  ) : (

    /* GRID ONLY when there is data */
    <AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

        {data?.groups.map((group: any) => {
          const imageUrl =
            group.image ||
            "https://d22r54gnmuhwmk.cloudfront.net/rendr-fe/img/default-organization-logo-6aecc771.gif";

          return (
            <motion.div
              key={group._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-md w-full h-[430px] flex flex-col items-center rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">

                <CardHeader className="p-0 w-full">
                  <img
                    src={imageUrl}
                    alt="group img"
                    className="w-full h-[200px] object-cover rounded-t-2xl"
                  />
                </CardHeader>

                <CardContent className="p-4 flex-1 flex flex-col justify-start w-full">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2 hover:text-orange-500 transition-colors">
                      <Link
                        to={`/group-details/${group._id}`}
                        className="block w-full overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        {group.name}
                      </Link>
                    </h3>

                    <p className="line-clamp-2 text-gray-600 text-sm">
                      {group.description}
                    </p>

                    <div className="flex w-full items-center gap-2 mt-3 text-gray-500 font-medium text-sm">
                      <IoPerson fontSize={18} />
                      <span>{group.members.length || 0} members</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="mt-auto flex justify-center items-center p-4 w-full border-t border-gray-100">
                  <button
                    onClick={() => leaveGroupMutate(group._id)}
                    className="flex items-center justify-center gap-2 text-red-500 border-2 border-red-400 hover:bg-red-50 font-semibold py-2 px-4 rounded-xl transition-all duration-300"
                  >
                    <LuLogOut />
                    Leave Group
                  </button>
                </CardFooter>

              </Card>
            </motion.div>
          );
        })}

      </div>
    </AnimatePresence>
  )}

</div>


      {/* 🔢 Pagination */}
      {data && data.totalPages > 1 && (
        <div className="flex justify-center items-center p-2">
          <ReactPaginate
            pageCount={data?.totalPages || 1}
            forcePage={page - 1}
            onPageChange={handlePageClick}
            containerClassName="flex gap-3 justify-center items-center mt-6"
            pageClassName="w-10 h-10 flex items-center justify-center border-2 border-teal-500 rounded-full bg-white text-teal-600 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer"
            activeClassName="!bg-orange-500 !text-white !border-orange-500"
            previousLabel="<"
            nextLabel=">"
            previousClassName="w-10 h-10 flex items-center justify-center border-2 border-teal-500 rounded-full bg-white text-teal-600 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer"
            nextClassName="w-10 h-10 flex items-center justify-center border-2 border-teal-500 rounded-full bg-white text-teal-600 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
