// import LocalStorage from "@/utils/local-storage/local-storage";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";


// Create an Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/v1', // Use environment variable
  timeout: 10000, // Optional: Set a request timeout
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    try {
      // // Get login info from local storage (client-side only)
      // const loginInfo = LocalStorage.getInstance().getLoginInfo();

      // if (!loginInfo) {
      //   console.warn("LoginInfo does not exist");
      //   return config;
      // }

      // Get token from cookies
      const token =
        typeof window !== "undefined" ? Cookies.get("access_token") : null;

      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }

      return config;
    } catch (error) {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error); // Forward error
    }
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
