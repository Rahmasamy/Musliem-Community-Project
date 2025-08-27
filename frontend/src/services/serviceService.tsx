// src/services/eventService.ts
import axiosInstance from "@/api/authApi";
import { IService } from "@/types/Service";

const Services = {
 

  getServicesByType: (serviceType:string): Promise<IService[]> =>
    axiosInstance.get(`/services/${serviceType}`).then((res) => res.data),

  createService: (payload: FormData) =>
    axiosInstance.post("/services", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default Services;
