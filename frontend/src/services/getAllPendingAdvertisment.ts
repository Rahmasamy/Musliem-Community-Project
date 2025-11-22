
import axiosInstance from "@/api/authApi";

export const getPendingAdvertisements = async () => {
  const response = await axiosInstance.get(`/services/pending-advertisments`);
  return response.data;
}