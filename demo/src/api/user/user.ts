import request from "@/utils/request";
import type { MenuDataType } from "./types";

// 用户信息获取  /admin/info
export const getUserInfoApi = () => {
    return request<MenuDataType>('/admin/info','GET')
}