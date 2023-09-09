<template>
  <div>
    {{ reversedMsg }}
    <button @click="test">button</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Test coverage'

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
    test() {
      console.log(1)
    }
  }
}
</script>
<style scoped></style>
