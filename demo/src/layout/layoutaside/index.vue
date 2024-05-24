<template>
    <el-aside width="200px" style="background-color: aqua;">
        <el-menu router active-text-color="#ffd04b" :collapse="indeWStore.is" background-color="#545c64" class="el-menu-vertical-demo" default-active="/admin"
            text-color="#fff">
            <el-menu-item :index="item.name" v-for="(item, index) in menusList" :key="index">
                <el-icon>
                    <component :is="item.icon" />
                </el-icon>
                <span>{{ item.title }}</span>
            </el-menu-item>

        </el-menu>
    </el-aside>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { getUserInfoApi } from '@/api/user/user'
import type { MenuDataType, Menu } from '@/api/user/types'; // 返回数据类型
import {useIndeWStore} from '@/stores/indew'
const indeWStore = useIndeWStore()

const menusList = ref<MenuDataType | any>(

   

)
const getmenusList = async () => {
    const res = await getUserInfoApi()
    // console.log(res);
    localStorage.setItem('userInfo', JSON.stringify(res.data))
    const ress = res.data.menus
    // console.log(ress)
    menusList.value = ress
    // console.log(menusList.value);

}
getmenusList()


</script>
<style lang='scss' scoped></style>