
import router from "./router";
import {ref} from 'vue'

router.beforeEach((to, from, next) => {
    // 判断是否需要登录
    const token = localStorage.getItem('token');
    const rerer=ref( ['/login'])
    if(token){
        if(to.path == '/login'){
            return next({path:from.path})
        }else{
             next()
        }
       
    }else{
       if(rerer.value.includes(to.path)){
           return next()
       }else{
            next('/login')
       }
    }
})