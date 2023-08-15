<template>
  <div>
    <button @click="addCount">버튼1</button>
    <p>
      {{ count }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++;
    }
  }
}
</script>
<style scoped></style>
