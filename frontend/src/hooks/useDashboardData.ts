import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/authApi";
import { getDashboardProjects, getUsageStats } from "@/services/dashboard-anayltics.service";
import { DashboardProjectsResponse } from "@/types/dashboard/Projects";
// 🧩 أنواع البيانات (TypeScript)
export interface User {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Payment {
  _id: string;
  userId: string;
  productType: string;
  amount: number;
  paymentStatus: string;
  createdAt: string;
}

export const useGetAllUsers = () => {
  return useQuery<User[]>({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/auth/users");
      return data;
    },
  });
};

export const useCountAllUsers = () => {
  return useQuery<number>({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/auth/count-users");
      return data.totalUsers;
    },
  });
};

export const useCountAllPayments = () => {
  return useQuery<number>({
    queryKey: ["allPayments"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/get-count-payments");
      return data.totalPayments;
    },
  });
};

export const useGetAllPayments = () => {
  return useQuery<Payment[]>({
    queryKey: ["allPayments"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/get-count-payments");
      return data;
    },
  });
};


export const useDashboardProjects = () => {
  return useQuery<DashboardProjectsResponse>({
    queryKey: ["dashboard-projects"],
    queryFn: getDashboardProjects,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });
};

export const useUsageStats = () => {
  return useQuery({
    queryKey: ["usageStats"],
    queryFn: getUsageStats
  });
};