// src/services/eventService.ts
import axiosInstance from "@/api/authApi";

const EventService = {
  getEvents: (page = 1) =>
    axiosInstance.get(`/events?page=${page}`).then((res) => res.data),

  getSingleEvent: (id: string) =>
    axiosInstance.get(`/events/${id}`).then((res) => res.data),

  getMyEvents: (page = 1) =>
    axiosInstance
      .get(`/events/my-events?page=${page}&limit=3`)
      .then((res) => res.data),

  createEvent: (payload: FormData) =>
    axiosInstance.post("/events", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  getPendingEvents: async (page: number) => {
    const data = await axiosInstance.get(`/events/pending?page=${page}`);
    return data.data;
  },
  updateEventAdminApproval: (id: string, approvalPayload: any) =>
    axiosInstance
      .put(`events/update-admin-status/${id}`, approvalPayload)
      .then((res) => res.data),
};

export default EventService;
