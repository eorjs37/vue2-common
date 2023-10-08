<template>
  <div></div>
</template>
<script>
export default {
  emits: ['startLoading', 'endLoading'],
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    id: {
      type: String,
      default: ""
    }
  },
  created() {
    console.log("ListComp created");
    this.$emit('startLoading')
    this.$emit('endLoading')
  },
  mounted() {
    console.log("ListComp mounted");
  },
  methods: {
    //test() { }
  }
}
</script>
<style scoped></style>
