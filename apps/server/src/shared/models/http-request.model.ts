import { AxiosRequestConfig, Method } from 'axios';

export interface HttpRequestModel {
  url: string;
  method: Method;
  config?: AxiosRequestConfig
}
