import axiosInstance from "@/api/authApi";
import { Service, ServiceState } from "@/utils/zustand-interfaces/ServiceState";
import { create } from "zustand";

export const useServiceStore = create<ServiceState>((set, get) => ({
  services: [],
  loading: false,
  error: null,

  // Get all services by type
  getServicesByType: async (type: string) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get(`/services/${type}`);
      console.log("getting service by type",res)
      set({ services: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Error fetching services", loading: false });
    }
  },

  // Create service
  createService: async (data: Service) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post(`/services`, data);
      set({ services: [...get().services, res.data.service], loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Error creating service", loading: false });
    }
  },

  // Update service
  updateService: async (id: string, data: Partial<Service>) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.put(`/services/${id}`, data);
      set({
        services: get().services.map((s) => (s._id === id ? res.data.service : s)),
        loading: false,
      });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Error updating service", loading: false });
    }
  },

  // Delete service
  deleteService: async (id: string) => {
    try {
      set({ loading: true, error: null });
      await axiosInstance.delete(`/services/${id}`);
      set({
        services: get().services.filter((s) => s._id !== id),
        loading: false,
      });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Error deleting service", loading: false });
    }
  },
}));