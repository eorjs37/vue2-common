<script setup>
import { inject } from 'vue'
const count = inject('count')
const addCount = inject('addCount')
</script>
<template>
  <div>
    <div>{{ count }}</div>
    <button @click="addCount">숫자 늘리기</button>
  </div>
</template>
