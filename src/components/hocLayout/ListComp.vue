<template>
  <div class="font_white">
    userId : {{ data.userId }}
    id : {{ id }}
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    id: {
      type: String,
      default: "ss"
    }
  }
}
</script>
<style scoped></style>
