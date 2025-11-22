import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/api/authApi";
const EventContext = createContext(null);
export const useEvents = () => {
    const ctx = useContext(EventContext);
    if (!ctx)
        throw new Error("useEvents must be used inside EventProvider");
    return ctx;
};
export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    // ✅ هنا نضيف الـ filters
    const [filters, setFilters] = useState({});
    const loadEvents = async (pageNum, appliedFilters = filters) => {
        try {
            const params = new URLSearchParams({
                page: pageNum.toString(),
                limit: "3",
                ...(appliedFilters.search ? { search: appliedFilters.search } : {}),
                ...(appliedFilters.location ? { location: appliedFilters.location } : {}),
                ...(appliedFilters.date ? { date: appliedFilters.date } : {}),
            });
            const { data } = await axiosInstance.get(`/events?${params.toString()}`);
            setEvents(data.events);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.error("Error fetching events:", error);
        }
    };
    useEffect(() => {
        loadEvents(page, filters);
    }, [page, filters]);
    return (_jsx(EventContext.Provider, { value: { events, page, totalPages, setPage, setFilters }, children: children }));
};
