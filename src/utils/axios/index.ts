import axios from 'axios';
import config from '@/config';
import { createAxios } from './axios';

const axiosInstance = createAxios();

export const requestOfGet = (url: string, data: any) => {
  return axiosInstance.get(url, data)
}
export const requestOfPost = (url: string, data: any) => {
  return axiosInstance.get(url, data)
}