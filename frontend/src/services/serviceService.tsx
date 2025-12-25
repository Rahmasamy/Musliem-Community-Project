// src/services/eventService.ts
import axiosInstance from "@/api/authApi";
import { IPendingServiceResponse, IService, IServiceResponse } from "@/types/Service";
export interface ServiceItem {
  _id: string;
  name: string;
  image?: string;
  description?: string;
  price?: number;
  location?: string;
  phone?: string;
  serviceType: string;
  extraDetails?: {
    startDate: string;
    endDate: string;
    targetUrl?: string;
    position?: "home" | "sidebar" | "footer" | "email";
  };
  paymentStatus: "pending" | "confirmed" | "failed";
  adminApprovalStatus: "pending" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
}

export interface ServiceResponse {
  success: boolean;
  total: number;
  page: number;
  pages: number;
  data: ServiceItem[];
}

interface FetchServicesParams {
  page?: number;
  limit?: number;
  search?: string;
  serviceType?: string;
}

const Services = {
  getServicesByType: (
    serviceType: string,
    page: number,
    search?: string
  ): Promise<IService[]> =>
    axiosInstance
      .get(
        `/services/${serviceType}?page=${page}&limit=3${
          search ? `&search=${search}` : ""
        }`
      )
      .then((res) => res.data),

  createService: (payload: FormData) =>
    axiosInstance.post("/services", payload, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  getAllServices: async ({
    page = 1,
    limit = 10,
    search,
    serviceType,
  }: FetchServicesParams): Promise<ServiceResponse> => {
    const params: Record<string, any> = {
      page,
      limit,
    };

    if (search) params.search = search;
    if (serviceType) params.serviceType = serviceType;

    const response = await axiosInstance.get<ServiceResponse>(
      `/services/all-services`,
      {
        params,
      }
    );

    return response.data;
  },

  /**
   * Update service admin approval or payment status
   * @param id Service ID
   * @param approvalPayload Data for approval/payment update
   */
  updateServiceAdminApproval: (id: string, approvalPayload: any) =>
    axiosInstance
      .put(`services/update-payment/${id}`, approvalPayload)
      .then((res) => res.data),

  getAllPendingServices: async (): Promise<IPendingServiceResponse> => {
    const response = await axiosInstance.get<IPendingServiceResponse>(
      `/services/pending-services`
    );
    return response.data;
  },
};

export default Services;
