
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig, type Method } from "axios";

const serves:AxiosInstance =axios.create({
    baseURL:'/api',
    timeout:10000,
})

serves.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
    const token = localStorage.getItem('token')
    if(token){
     config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error:AxiosError)=>{
    return Promise.reject(error)
})

serves.interceptors.response.use((response:AxiosResponse)=>{
    return response.data
},(error:AxiosError)=>{
    return Promise.reject(error)
})

// 返回leixing
type dataType<T = any>= {
    code: number;
    msg: string;
    data: T;
}
const request = <T = any>(url:string,method:Method="GET",data?:Object,option?:AxiosRequestConfig) =>{
    return serves.request<T,dataType<T>>({
        url,
        method,
        [method=="get"? "params": "data"]:data,
        ...option
    })
}
export default request