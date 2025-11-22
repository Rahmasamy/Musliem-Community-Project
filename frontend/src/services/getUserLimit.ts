import { IUserLimitResponse } from "@/types/authTypes";
import axiosInstance from "@/api/authApi";

export const getUserLimit = async (): Promise<IUserLimitResponse> => {
  const { data } = await axiosInstance.get<IUserLimitResponse>("/auth/check-limit");
  return data;
};