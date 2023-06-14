import service from "@/utils/request";
import { loginData } from "./types";

// 用户登录
export const login = (data: loginData) => {
  return service({
    url: "/sys/login",
    method: "POST",
    data,
  });
};
