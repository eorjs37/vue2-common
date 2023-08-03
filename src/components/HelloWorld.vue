<template>
  <div>
    <button @click="click()"></button>
  </div>
</template>
<script>
export default {
  emits: ["custom"],
  methods: {
    click() {
      this.$emit("custom")
    }
  }
}
</script>
<style scoped></style>
