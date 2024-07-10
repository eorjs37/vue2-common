<template>
  <div>
    <h1>{{ title }}</h1>
    {{ count }}
    <button @click="addCount">카운트늘리기</button>
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
const count = inject('count')
const addCount = inject('addCount')
const title = ref('Title')
</script>
