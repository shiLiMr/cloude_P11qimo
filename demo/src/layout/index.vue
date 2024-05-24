<template>
<div class="common-layout">
    <el-container>
      <!-- aside -->
      <lataside></lataside>
      <el-container direction="vertical">
        <!-- header -->
        <lataheader></lataheader>
        <!-- main -->
        <latamain></latamain>

      </el-container>
    </el-container>
  </div>
</template>
<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';
import {useIndeWStore} from '@/stores/indew'
const indeWStore = useIndeWStore()

const lataside = defineAsyncComponent(() => import('./layoutaside/index.vue'))
const latamain = defineAsyncComponent(() => import('./layoutmain/index.vue'))
const lataheader = defineAsyncComponent(() => import('./layoutheader/index.vue'))


</script>
<style lang='scss' scoped>

</style>