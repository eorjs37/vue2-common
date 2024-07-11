<template>
  <div>
    <h1>{{ title }}</h1>
    <common1_comp />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const title = ref('Title')

const common1_comp = () => import('@/components/common/Common1Comp.vue')
</script>
