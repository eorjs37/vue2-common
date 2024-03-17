<template>
  <div>
    <button @click="sendData">버튼</button>
  </div>
</template>
<script>
export default {
  name: 'Vue2EditorconfigPlayerChildComp',
  emits: ['send-data'],
  data() {
    return {}
  },

  mounted() {},

  methods: {
    sendData() {
      this.$emit('send-data', '데이터를 전송합니다.')
    }
  }
}
</script>
