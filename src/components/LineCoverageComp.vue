<template>
  <div>
    {{ reversedMsg }}
    <button data-btn="test" @click="test">btn</button>
  </div>
</template>
<script>
const Component = {
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

export default Component
</script>
<style scoped></style>
