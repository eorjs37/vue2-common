<template>
  <router-view></router-view>
</template>
<script setup>
import { onMounted, provide, ref } from 'vue'
const count = ref(0)

const addCount = () => {
  count.value++
}
//반응형 값
provide('count', count)
provide('addCount', addCount)

onMounted(() => {})
</script>
