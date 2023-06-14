// import type { AxiosInstance } from "axios";
// // 自定义axios请求响应拦截器
// export interface MyTnterceptors {}
// 后端返回的数据类型
export interface IResType<T = any> {
  success: boolean;
  code: number;
  data?: T;
  message?: string;
}
