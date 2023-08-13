<template>
  <div>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
    <input type="text" @keydown.prevent="onKeydown" v-model="quantity" />
    <button id="btn" @click="fetchResults">{{ value }}</button>
    <p class="result">{{ value }}</p>
  </div>
</template>
<script>
const KEY_DOWN = 40
const KEY_UP = 38
const ESCAPE = 27
import axios from 'axios';
export default {
  name: 'EventsComponent',
  props: {
    callMe: {
      type: Function
    }
  },

  data() {
    return {
      quantity: 0,
      value: null

    };
  },

  created() { },

  mounted() {

  },

  methods: {
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
    },
    callYes() {
      this.callMe('yes')
    },
    callNo() {
      this.callMe('no')
    },
    async fetchResults() {
      const response = await axios.get("mock/service");
      this.value = response.data.value
    }
  },
};
</script>
<style scoped></style>
