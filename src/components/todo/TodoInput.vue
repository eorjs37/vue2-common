<template>
  <div class="w_100 input_wrap">
    <input
      id="input"
      class="input"
      v-model="inputValue"
      @input="onInputEvent"
      @keydown="inputEnter"
      type="text"
    />
    <button id="addbtn" class="addbtn" @click="addTodo">추가</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// eslint-disable-next-line no-undef
const emit = defineEmits(['inputtext'])

const inputValue = ref('')

const onInputEvent = ($event) => {
  inputValue.value = $event.target.value
}

const inputEnter = ($event) => {
  if ($event.isComposing) return true
  if ($event.key.toLowerCase() === 'enter') {
    if (!$event) return
    $event.preventDefault()
    emit('inputtext', inputValue.value)
    inputValue.value = ''
  }
}

const addTodo = () => {
  emit('inputtext', inputValue.value)
  inputValue.value = ''
}
</script>
<style scoped>
.input_wrap {
  display: flex;
  justify-content: space-between;
}

.input {
  width: 88%;
}

.addbtn {
  width: 10%;
}
</style>
