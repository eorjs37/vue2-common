<template>
  <div>
    <button id="btn" @click="clickBtn">버튼</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    }
  },
  methods: {
    clickBtn() {
      alert("클릭하였습니다.")
    }
  }
}
</script>
<style scoped></style>
