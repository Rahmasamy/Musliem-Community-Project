// src/services/eventService.ts
import axiosInstance from "@/api/authApi";
import { IService } from "@/types/Service";

const Services = {
 

  getServicesByType: (serviceType: string, page: number, search?: string): Promise<IService[]> =>
  axiosInstance
    .get(`/services/${serviceType}?page=${page}&limit=3${search ? `&search=${search}` : ""}`)
    .then((res) => res.data),


  createService: (payload: FormData) =>
    axiosInstance.post("/services", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  /**
   * Update service admin approval or payment status
   * @param id Service ID
   * @param approvalPayload Data for approval/payment update
   */
  updateServiceAdminApproval: (id: string, approvalPayload: any) =>
    axiosInstance.put(`services/update-payment/${id}`, approvalPayload).then(res => res.data),
};

export default Services;
