import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/authApi";
import { getDashboardProjects, getUsageStats } from "@/services/dashboard-anayltics.service";
export const useGetAllUsers = () => {
    return useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const { data } = await axiosInstance.get("/auth/users");
            return data;
        },
    });
};
export const useCountAllUsers = () => {
    return useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const { data } = await axiosInstance.get("/auth/count-users");
            return data.totalUsers;
        },
    });
};
export const useCountAllPayments = () => {
    return useQuery({
        queryKey: ["allPayments"],
        queryFn: async () => {
            const { data } = await axiosInstance.get("/get-count-payments");
            return data.totalPayments;
        },
    });
};
export const useGetAllPayments = () => {
    return useQuery({
        queryKey: ["allPayments"],
        queryFn: async () => {
            const { data } = await axiosInstance.get("/get-count-payments");
            return data;
        },
    });
};
export const useDashboardProjects = () => {
    return useQuery({
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
