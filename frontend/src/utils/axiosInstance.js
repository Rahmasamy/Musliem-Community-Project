import axios from "axios";
const Base_Url = import.meta.env.Base_Url  || "http://localhost:5000/api"
const axiosInstance = axios.create({
    baseURL: Base_Url,
    withCredentials: true,
});
export default axiosInstance;
