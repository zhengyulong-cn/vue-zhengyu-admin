import type { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import axios from 'axios';

export const createAxios = (options: AxiosRequestConfig = {}): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create(options);
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
  axiosInstance.interceptors.response.use(
    (config: AxiosResponse) => {
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
  return axiosInstance;
}
