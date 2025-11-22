import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, } from "@/components/ui/card";
import OrangeButton from "../OrangeButton/OrangeButton";
import { LiaCrownSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { useGroups } from "@/context/groupContext";
import { useJoinGroup } from "@/hooks/useGroups";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import { useSocket } from "@/context/socketContext";
import ReactPaginate from "react-paginate";
import { IoPerson } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import NoDataFound from "../no-data-found/NoData";
export default function GroupCard() {
    const socket = useSocket();
    const location = useLocation();
    const [hidePath, setHidePath] = useState(true);
    const { groups, page, totalPages, loadGroups, loading, search, setSearch } = useGroups();
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    useEffect(() => {
        setHidePath(location.pathname !== "/");
    }, [location.pathname]);
    const handlePageClick = (event) => {
        loadGroups(event.selected + 1, search);
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            loadGroups(1, debouncedSearch);
        }, 500);
        return () => clearTimeout(timeout);
    }, [debouncedSearch]);
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        setDebouncedSearch(value);
    };
    const loginUser = useAuth();
    const userId = loginUser?.user?._id;
    const joinMutation = useJoinGroup(userId || "");
    const handleJoin = (groupId) => {
        if (!socket)
            return;
        joinMutation.mutate(groupId, {
            onSuccess: () => {
                toast.success("You joined the group 🎉");
                socket.emit("joinGroup", groupId);
            },
            onError: (err) => {
                toast.error("Failed to join 😥 " + err.response?.data.message);
            },
        });
    };
    return (_jsxs("div", { className: "w-full flex justify-center items-center flex-col p-3 sm:p-4 md:p-6 lg:p-8 bg-gray-50", children: [groups.length > 0 &&
                _jsx(motion.div, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "w-full mb-6 sm:mb-8 flex justify-center px-2 sm:px-0", children: _jsxs("div", { className: "relative w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[56%]", children: [_jsx(FiSearch, { className: "absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-lg" }), _jsx("input", { type: "text", placeholder: "Search groups...", value: search, onChange: handleSearchChange, className: "w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm\r\n                 shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-orange-500 outline-none\r\n                 transition-all duration-300 text-sm sm:text-base text-gray-700 placeholder-gray-400" })] }) }), _jsx("div", { className: "w-full flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] px-2 sm:px-0", children: loading ? (_jsx("p", { className: "text-gray-500 text-base sm:text-lg animate-pulse", children: "Loading..." })) : groups.length === 0 ? (_jsx(NoDataFound, { message: "No Groups Found" })) : (_jsx(AnimatePresence, { children: groups.map((group, index) => {
                        const imageUrl = group.image
                            ? `${group.image}`
                            : "https://d22r54gnmuhwmk.cloudfront.net/rendr-fe/img/default-organization-logo-6aecc771.gif";
                        return (_jsx(motion.div, { initial: { opacity: 0, y: 20, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1 }, whileHover: { scale: 1.03 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.3, delay: index * 0.05 }, className: "flex-1 w-full sm:min-w-[280px] sm:max-w-[320px] lg:min-w-[300px] lg:max-w-[350px]", children: _jsxs(Card, { className: "h-auto sm:h-[400px] lg:h-[430px] shadow-lg hover:shadow-xl rounded-xl sm:rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 bg-white", children: [_jsx(CardHeader, { className: "p-0 w-full overflow-hidden", children: _jsx(motion.img, { src: imageUrl, alt: "group img", className: "w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-500 hover:scale-105" }) }), _jsxs(CardContent, { className: "p-4 sm:p-5 flex flex-col justify-between flex-grow", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-extrabold text-gray-800 mb-2 text-base sm:text-lg hover:text-teal-600 transition-colors duration-200", children: _jsx(Link, { to: `/group-details/${group._id}`, children: group.name }) }), _jsx("p", { className: "py-2 text-gray-600 text-xs sm:text-sm line-clamp-3", children: group.description })] }), _jsx("div", { className: "flex w-full items-center justify-between mt-3", children: _jsxs("div", { className: "flex items-center gap-2 text-gray-500 text-xs sm:text-sm", children: [_jsx(IoPerson, { color: "gray", fontSize: 18, className: "sm:text-xl" }), _jsx("span", { children: group.members.length === 0
                                                                ? "No Members"
                                                                : `${group.members.length} Members` })] }) })] }), _jsx(CardFooter, { className: "p-2 sm:p-3 bg-orange-50 flex justify-center border-t border-orange-100", children: _jsx(OrangeButton, { title: "Join Group", icon: _jsx(LiaCrownSolid, {}), onClick: () => handleJoin(group._id), disabled: joinMutation.isPending }) })] }) }, group._id));
                    }) })) }), hidePath && groups.length > 0 && (_jsx("div", { className: "mt-6 sm:mt-8 flex justify-center w-full px-2", children: _jsx(ReactPaginate, { pageCount: totalPages, forcePage: page - 1, onPageChange: handlePageClick, containerClassName: "flex gap-2 sm:gap-3 justify-center items-center flex-wrap", pageClassName: "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-orange-500 rounded-full bg-white text-orange-600 hover:bg-orange-400 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base", activeClassName: "!bg-orange-500 !text-white !border-orange-500", previousLabel: "<", nextLabel: ">", previousClassName: "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-orange-500 rounded-full bg-white text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base", nextClassName: "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-orange-500 rounded-full bg-white text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-200 cursor-pointer text-xs sm:text-base" }) }))] }));
}
