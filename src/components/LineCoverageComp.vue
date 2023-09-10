<template>
  <div>

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
      return this.msg
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
