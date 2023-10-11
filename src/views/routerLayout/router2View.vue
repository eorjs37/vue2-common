<template>
  <div>
    <h1 class="font_white">router2</h1>
    <p class="font_white">
      {{ $route.params }}
    </p>
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
      this.$router.replace({ name: "router3View", params: { from: "2" } }).catch(() => { })
    }
  }
}
</script>
<style scoped></style>
