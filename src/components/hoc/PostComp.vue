<template>
  <div>
    <h1>PostComp</h1>
    <h2>{{ title }}</h2>
    <h3>{{ text }}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getTextApi } from '@/api/fakeApi'
// eslint-disable-next-line no-undef
defineProps({
  title: {
    type: String,
    required: false,
    default: '제목'
  }
})

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
