import { Service, ServiceState } from '@/utils/zustand-interfaces/ServiceState';
import axiosInstance from '../api/authApi';
import { create } from 'zustand';
export const useServiceStore = create<ServiceState>((set, get) => ({
  services: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    services: [],
  },
  loading: false,
  error: null,

  // Get all services by type
  getServicesByType: async (type: string) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.get(`/services/${type}`);
      set({ services: res.data, loading: false }); // res.data should match IServiceResponse
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Error fetching services",
        loading: false,
      });
    }
  },

  // Create service
  createService: async (data: Service) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.post(`/services`, data);

      const prev = get().services;
      set({
        services: {
          ...prev,
          services: [...prev.services, res.data.service],
          total: prev.total + 1,
        },
        loading: false,
      });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Error creating service",
        loading: false,
      });
    }
  },

  // Update service
  updateService: async (id: string, data: Partial<Service>) => {
    try {
      set({ loading: true, error: null });
      const res = await axiosInstance.put(`/services/${id}`, data);

      const prev = get().services;
      set({
        services: {
          ...prev,
          services: prev.services.map((s) =>
            s._id === id ? res.data.service : s
          ),
        },
        loading: false,
      });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Error updating service",
        loading: false,
      });
    }
  },

  // Delete service
  deleteService: async (id: string) => {
    try {
      set({ loading: true, error: null });
      await axiosInstance.delete(`/services/${id}`);

      const prev = get().services;
      set({
        services: {
          ...prev,
          services: prev.services.filter((s) => s._id !== id),
          total: prev.total - 1,
        },
        loading: false,
      });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Error deleting service",
        loading: false,
      });
    }
  },
}));
