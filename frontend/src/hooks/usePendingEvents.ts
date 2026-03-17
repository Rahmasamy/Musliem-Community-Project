import EventService from "@/services/EventService";
import { useQuery } from "@tanstack/react-query";

export const usePendingEvents= (page = 1) => {
  return useQuery({
    queryKey: ["pendingEvents", page],
    queryFn: () => EventService.getPendingEvents(page),
      refetchInterval: 3000,
  });
};