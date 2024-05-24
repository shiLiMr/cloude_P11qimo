
import request  from "@/utils/request";

// 获取用户列表 /admin/list
export interface Data {
    list: List[];
    pageNum: number;
    pageSize: number;
    total: number;
    totalPage: number;
    [property: string]: any;
}

export interface List {
    createTime: string;
    email: string;
    icon: null | string;
    id: number;
    loginTime: null | string;
    nickName: string;
    note: null | string;
    password: string;
    status: number;
    username: string;
    [property: string]: any;
}
export const  getUserList = (params:any) => {
    return request<Data>("/admin/list",'GET',{params})
}