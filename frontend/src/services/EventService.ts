// src/services/eventService.ts
import axiosInstance from "@/api/authApi";

const EventService = {
  getEvents: (page = 1) =>
    axiosInstance.get(`/events?page=${page}`).then((res) => res.data),

  getSingleEvent: (id:string) =>
    axiosInstance.get(`/events/${id}`).then((res) => res.data),

  getMyEvents: (page = 1) =>
    axiosInstance.get(`/events/my-events?page=${page}`).then((res) => res.data),

  createEvent: (payload: FormData) =>
    axiosInstance.post("/events", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default EventService;
