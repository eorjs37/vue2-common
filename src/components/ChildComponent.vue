<template>
  <div>
    childComponent
  </div>
</template>
<script>
export default {
  emits: ["callemit"],
  data() {
    return {

    }
  },
  methods: {
    method1() {
      this.$emit('callemit', 123)
    }
  }
}
</script>
<style scoped></style>
