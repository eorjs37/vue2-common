<template>
  <div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      count: 0,
      interval: null
    }
  },
  created() {
    setTimeout(() => {
      console.log("call setTime out");
      this.visible = true
    }, 10000);

    this.interval = setInterval(() => {
      this.count++;
    }, 1000);
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>
<style scoped></style>
