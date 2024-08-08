<template>
  <div>
    <h1>TextComp</h1>
    <h3>{{ text }}</h3>
  </div>
</template>

<script setup>
import { getTextApi } from '@/api/fakeApi'
import { ref } from 'vue'

const text = ref('')
const getText = () => {
  getTextApi().then((response) => {
    const { data } = response
    const { posttext } = data
    text.value = posttext
  })
}

getText()
</script>
