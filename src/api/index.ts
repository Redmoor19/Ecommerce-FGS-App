import { error } from 'console';
import { Response } from '@/types'
import axios, { AxiosResponse } from 'axios'
import { ApiError } from './apiError';

const isDevelopment = import.meta.env.MODE === 'development'
let baseURL = 'http://localhost:8080/api/v1'

if (!isDevelopment) {
  // Update this later when you have a working backend server
  baseURL = 'http://localhost:5125/api/v1'
}

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
  }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
})

api.interceptors.response.use(
  <T>(response: AxiosResponse<Response<T>>): T => {
    const responseData = response.data;
    if (responseData.data === null && responseData.error) {
      throw new ApiError(responseData.error.errorMessage, responseData.error.errorStatus, responseData, response);
    }
    return responseData.data as T;
  },
  (error): Promise<ApiError> => {
    const message = error.response ? error.response.data.error.errorMessage : error.message;
    const status = error.response ? error.response.data.error.errorCode : undefined;
    return Promise.reject(new ApiError(message, status, error.response?.data, error));
  }
)

// use this to handle errors gracefully
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 500) {
//       throw new Error(error.response.data)
//     }
//   }
// )

export default api
