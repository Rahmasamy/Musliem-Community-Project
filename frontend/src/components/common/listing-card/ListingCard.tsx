import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useProducts } from "@/context/productContext";
import { Product } from "@/utils/context-interface/productInterface";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useCreateOrGetPrivateChat } from "@/hooks/usePrivateChat";
import { motion, AnimatePresence } from "framer-motion";
import NoDataFound from "../no-data-found/NoData";

export default function ListingCard() {
  const { products, page, totalPages, setPage, setFilters } = useProducts();
  const location = useLocation();
  const [hidePath, setHidePath] = useState(false);
  const [search, setSearch] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const createOrGetChat = useCreateOrGetPrivateChat();

  const handleOpenChatWithSeller = async (
    sellerId: string,
    fullName: string,
    photo: string
  ) => {
    const currentUserId = auth?.user?._id;
    if (!currentUserId) {
      alert("Please login to send message to the seller");
      navigate("/login");
      return;
    }
    try {
      const chat = await createOrGetChat.mutateAsync({
        userId1: currentUserId,
        userId2: sellerId,
      });
      const chatId = chat._id || chat.id;
      const chatName = fullName || "Private Chat";
      navigate(`/messages/user/${currentUserId}/false`, {
        state: {
          selectedChat: {
            id: chatId,
            type: "private",
            chatName,
            photo,
          },
        },
      });
    } catch (error) {
      console.error("Failed to create/get chat", error);
    }
  };

  useEffect(() => {
    setHidePath(location.pathname !== "/");
  }, [location.pathname]);

  // Debounced smart search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setFilters({ search });
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-10">
      {/* 🔍 Search bar */}
      {products.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex w-full sm:w-[80%] md:w-[60%] mb-10 justify-center relative"
        >
          <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search smartly for products..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-300"
          />
        </motion.div>
      )}

      {/* 🧾 Product Cards */}
      {products.length === 0 ? (
        <NoDataFound message="No Products Found" />
      ) : (
        <AnimatePresence>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
            {products.map((product: Product) => (
              <motion.div
                key={product._id + product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-[320px] lg:w-[340px]"
              >
                <Card className="shadow-md hover:shadow-2xl border border-gray-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 bg-white">
                  {/* Image & Price */}
                  <CardHeader className="p-0 relative">
                    <img
                      src={product.image}
                      alt="product"
                      className="w-full h-[200px] object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                      ${product.price}
                    </span>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1 text-gray-800 hover:text-orange-500 transition-colors duration-200">
                      <Link to={`/ServicesPage/product-details/${product._id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            product.user?.photo ||
                            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          }
                          alt="seller"
                          className="w-8 h-8 rounded-full object-cover border"
                        />
                        <span className="text-sm text-gray-700 font-medium">
                          {product.user?.fullName || "Unknown Seller"}
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  {/* Button */}
                  <CardFooter className="p-4 flex justify-center border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        handleOpenChatWithSeller(
                          String(product.user?._id),
                          String(product.user?.fullName),
                          String(product.user?.photo)
                        )
                      }
                      className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-gradient-to-r from-orange-300 to-orange-500 hover:from-orange-500 hover:to-orange-700 px-5 py-2.5 rounded-xl shadow-md transition-all duration-300"
                    >
                      💬 Send Message
                    </motion.button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}

      {/* Pagination */}
      {hidePath && products.length > 0 && (
        <div className="mt-8 flex gap-2 justify-center items-center w-full">
          <ReactPaginate
            pageCount={totalPages}
            forcePage={page - 1}
            onPageChange={(e) => setPage(e.selected + 1)}
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
