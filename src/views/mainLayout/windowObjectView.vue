<template>
  <div>
    <button id="btn" @click="reload">리로드</button>
  </div>
</template>
<script>
export default {
  name: 'WindowObjectView',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    reload() {
      window.location.reload()
    }
  }
}
</script>
<style scoped></style>
