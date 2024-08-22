<template>
  <div>
    <TextComp />
    <PostComp />
    <button id="btn1" @click="onBtn1Click">스토어데이터 전환</button>
    <p id="message">
      {{ messageComp }}
    </p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import TextComp from '@/components/hoc/TextComp.vue'
import PostComp from '@/components/hoc/PostComp.vue'
import { onMounted, computed } from 'vue'

const store = useStore()

const messageComp = computed(() => {
  return store.getters['getMessage']
})

const onBtn1Click = () => {
  store.dispatch('apiDummyApi1')
}

onMounted(() => {})
</script>
