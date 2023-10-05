<template>
  <div class="font_white">
    userId : {{ data ? data : '' }}
    id : {{ id }}
  </div>
</template>
<script>
export default {
  emits: ['startLoading', 'endLoading'],
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          userId: ""
        }
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
