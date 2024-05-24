<template>
    <el-card>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号" width="180" />
            <el-table-column prop="username" label="账号" width="180" />
            <el-table-column prop="nickName" label="姓名" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="createTime" label="添加时间" />
            <el-table-column  label="是否启用" >
                <template #default="scope">
                    <el-switch v-model="scope.row.status" />
                </template>
            </el-table-column>
            <el-table-column  label="操作">
                <template #default="scope">
                    <el-button type="danger" link size="small">分配角色</el-button>

                    <el-button type="primary" link size="small">编辑</el-button>
                    <el-button type="danger" link size="small">删除</el-button>
                </template>
            </el-table-column>
              
        </el-table>
    </el-card>
</template>
<script setup lang='ts'>
import { ref } from 'vue'

interface Is {
    pageSize: number,
    pageNum: number,
}
const data = ref<Is>({
    pageSize: 10,
    pageNum: 1,
})
const tableData = ref<List[]>([])
import { getUserList, type List } from '@/api/userlist/index'
const getlist = () => {
    getUserList(data.value).then(res => {
        console.log(res)
        tableData.value = res.data.list
    })
}
getlist()


</script>
<style lang='scss' scoped></style>