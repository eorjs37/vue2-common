<template>
  <div>
    childComponent
  </div>
</template>
<script>
export default {
  emits: ["callemit"],
  name: "ChildComponent",
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
