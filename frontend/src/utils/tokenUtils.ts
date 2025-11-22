// src/utils/tokenUtils.ts
import axiosInstance from "@/api/authApi";

export const setAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
 
};

export const clearAccessToken = () => {

  localStorage.removeItem("accessToken");
  delete axiosInstance.defaults.headers.common["Authorization"];
};