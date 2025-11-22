// src/services/eventService.ts
import axiosInstance from "@/api/authApi";
const Services = {
    getServicesByType: (serviceType, page, search) => axiosInstance
        .get(`/services/${serviceType}?page=${page}&limit=3${search ? `&search=${search}` : ""}`)
        .then((res) => res.data),
    createService: (payload) => axiosInstance.post("/services", payload, {
        headers: { "Content-Type": "multipart/form-data" },
    }),
    /**
     * Update service admin approval or payment status
     * @param id Service ID
     * @param approvalPayload Data for approval/payment update
     */
    updateServiceAdminApproval: (id, approvalPayload) => axiosInstance.put(`services/update-payment/${id}`, approvalPayload).then(res => res.data),
};
export default Services;
