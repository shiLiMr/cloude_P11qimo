import { defineStore } from "pinia";
import { ref } from "vue";

export const useIndeWStore = defineStore("indeW", ()=>{
    const is=ref(false)
    return{
        is,
    }
})