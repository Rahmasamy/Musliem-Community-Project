import { createContext, useContext, useEffect, useState } from "react";
import { EventContextType, Event } from "@/utils/context-interface/eventInterface";
import axiosInstance from "@/api/authApi";

const EventContext = createContext<EventContextType | null>(null);

export const useEvents = () => {
  const ctx = useContext(EventContext);
  if (!ctx) throw new Error("useEvents must be used inside EventProvider");
  return ctx;
};

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // ✅ هنا نضيف الـ filters
  const [filters, setFilters] = useState<{ search?: string; location?: string; date?: string }>({});

  const loadEvents = async (pageNum: number, appliedFilters = filters) => {
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
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    loadEvents(page, filters);
  }, [page, filters]);

  return (
    <EventContext.Provider value={{ events, page, totalPages, setPage, setFilters }}>
      {children}
    </EventContext.Provider>
  );
};
