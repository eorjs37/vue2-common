<template>
  <div>
    <p id="count">{{ count }}</p>
    <p id="intervalCount">{{ intervalCount }}</p>
  </div>
</template>
<script>
export default {
  name: 'TimeOut',

  data() {
    return {
      count: 0,
      intervalCount: 0,
      intervalId: -1
    }
  },
  created() {
    setTimeout(() => {
      this.count++
    }, 5000)

    this.intervalId = setInterval(() => {
      this.intervalCount++
    }, 1000)
  },
  mounted() {},

  methods: {},
  destroyed() {
    clearInterval(this.intervalId)
  }
}
</script>
<style scoped></style>
