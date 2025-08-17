import axiosInstance from "@/utils/axiosInstance";
import { setAccessToken,getAccessToken,clearAccessToken } from "@/utils/tokenUtils";



axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken()
  if(token) config.headers.Authorization = `Bearer ${token}`
  return config
} 

)

axiosInstance.interceptors.response.use((response) => response,
 async (error) => {
    const originalRequest = error.config;
    if(error.response?.status === '401'  && !originalRequest._retry) {
      originalRequest._retry = true; 
      try {
        const { data } = await axiosInstance.post('/auth/refresh-token')
        setAccessToken(data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
         return axiosInstance(originalRequest);
      }
      catch (refreshError) {
        clearAccessToken()
        return Promise.reject(refreshError)
      }
    }
  return Promise.reject(error)
})

export default axiosInstance;