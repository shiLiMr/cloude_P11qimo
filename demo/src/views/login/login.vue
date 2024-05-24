<template>
    <div class="login">
        <div class="login-main">

            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
                class="demo-ruleForm" status-icon>
                <el-form-item  prop="username">
                    <el-input prefix-icon="user" v-model="ruleForm.username" />
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input prefix-icon="lock" v-model="ruleForm.password" type="password" show-password />
                </el-form-item>
                <el-form-item >
                    <el-button style="width: 40%;" type="primary" @click="submitForm">
                        登录
                    </el-button>
                    <el-button style="width: 40%;" type="primary">获取体验账号</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { ElMessage, type ComponentSize, type FormInstance, type FormRules } from 'element-plus'
import {userloginApis} from '@/api/login/login'
import { useRouter } from 'vue-router';
const router = useRouter()

const ruleFormRef = ref<FormInstance>()

interface FormState {
    username: string
    password: string
}
const ruleForm = ref<FormState>({
    username: 'admin',
    password: 'macro123',
})
const rules = reactive<FormRules<FormState>>({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
})
const submitForm = () => {
    ruleFormRef.value?.validate(async(valid: boolean) => {
        if (!valid) return
        const res = await userloginApis(ruleForm.value)
        console.log(res)
        if(res.code==200){
            localStorage.setItem('token', res.data.token)
           ElMessage({
                message: '登录成功',
                type: 'success',
            })
            router.push('/')
        }
    })
}



</script>
<style lang='scss' scoped>
.login{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    .login-main{
        width: 400px;
        box-sizing: border-box;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px #ccc;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-90%);
        text-align: center;
    
    }
}
</style>