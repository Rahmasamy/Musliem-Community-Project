import axiosInstance from "@/utils/axiosInstance";
import { setAccessToken, getAccessToken, clearAccessToken } from "@/utils/tokenUtils";



axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}

)

axiosInstance.interceptors.response.use((response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Exclude login page, logout, AND refresh-token endpoint
    if (window.location.pathname === '/login' || 
        originalRequest.url?.includes('/profile/logout') ||
        originalRequest.url?.includes('/auth/refresh-token')) {
      return Promise.reject(error);
    }
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axiosInstance.post('/auth/refresh-token')
        setAccessToken(data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axiosInstance(originalRequest);
      }
      catch (refreshError) {
        clearAccessToken()
        window.location.href = '/login';
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  })
export default axiosInstance;