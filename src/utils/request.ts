import axios, { type AxiosRequestConfig, AxiosResponse } from "axios";
import { getTestICode } from "./getCode";
import { IResType } from "./types";
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
service.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode();
    config.headers.icode = icode;
    config.headers.codeType = time;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const request = <T = any, R = IResType<T>>(
  config: AxiosRequestConfig<T>
): Promise<R> => {
  return service.request({ ...config });
};

export default request;
