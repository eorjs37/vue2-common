<template>
  <div class="font_white">
    userId : {{ data ? data.userId : '' }}
    id : {{ id }}
  </div>
</template>
<script>
export default {
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
      default: "ss"
    }
  },
  created() {
    console.log("ListComp created");
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
