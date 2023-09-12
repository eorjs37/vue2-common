<template>
  <div>
    {{ reversedMsg }}
    <button data-btn="btn" @click="evetnClick">버튼</button>
    <button data-btn="condition" @click="conditionClick(2, 1)">버튼</button>
  </div>
</template>
<script>
const Component = {
  data() {
    return {
      msg: 'Test coverage',
      val: false
    }
  },
  computed: {
    reversedMsg() {
      return this.reverseString(this.msg)
    }
  },
  methods: {
    reverseString(str) {
      return str.split('').reverse().join('')
    },
    evetnClick() {
      if (this.val === true) {
        console.log("success")
      }
    },
    decisionClick(a, b) {
      if (a > b) {
        console.log("pass condition")
      }
    }
  }
}

export default Component
</script>
<style scoped></style>
