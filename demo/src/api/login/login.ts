import request from "@/utils/request";
// 登录  /admin/login
interface FormState {
    username: string
    password: string
}
export const userloginApis=(data:FormState)=>{
    return request("/admin/login",'POST',data)
}
