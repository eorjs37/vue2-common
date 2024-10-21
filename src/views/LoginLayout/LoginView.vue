<template>
  <div class="login_container">
    <h1 class="login_title">Login</h1>
    <form class="login_form" @submit.prevent="submit">
      <input class="input" @input="idInputEvent" type="text" name="id" id="id" />
      <input
        class="input"
        @input="passwordInputEvent"
        type="password"
        name="password"
        id="password"
      />
      <button type="submit">로그인</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'

/*  */
const submit = () => {
  console.log('submit')
}

const id = ref('')
const idInputEvent = ($event) => {
  if ($event.target) id.value = $event.target.value
}

const password = ref('')
const passwordInputEvent = ($event) => {
  if ($event.target) password.value = $event.target.value
}
</script>
<style scoped src="./loginview.css"></style>
