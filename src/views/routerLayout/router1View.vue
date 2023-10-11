<template>
  <div>
    <h1 class="font_white">router1</h1>
    <button @click="next">Next</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    next() {
      this.$router.push({ name: "router2View", params: { from: "1" } }).catch(() => { })
    }
  }
}
</script>
<style scoped></style>
