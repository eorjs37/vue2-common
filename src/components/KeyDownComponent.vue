<template>
  <div>
    <button id="btn" @click="multiplyBy2">버튼</button>
    <input type="text" @keydown.prevent="onKeydown" v-model="quantity" />
  </div>
</template>
<script>
const KEY_DOWN = 40
const KEY_UP = 38
const ESCAPE = 27
export default {
  name: 'KeyDownComponent',

  data() {
    return {
      quantity: 0
    };
  },

  mounted() {

  },

  methods: {
    multiplyBy2() {
      this.quantity *= 2;
    },
    increment() {
      this.quantity += 1
    },
    decrement() {
      this.quantity -= 1
    },
    clear() {
      this.quantity = 0
    },
    onKeydown(e) {
      if (e.keyCode === ESCAPE) {
        this.clear()
      }
      if (e.keyCode === KEY_DOWN) {
        this.decrement()
      }
      if (e.keyCode === KEY_UP) {
        this.increment()
      }
      if (e.key === 'a') {
        this.quantity = 13
      }
    }

  },
};
</script>
<style scoped></style>
