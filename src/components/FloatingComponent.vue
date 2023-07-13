<template>
  <div class="floating">

  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style scoped>
.floating {
  position: fixed;
  bottom: 10px;
  right: 30px;
  background-color: aqua;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

/* 모바일 */
@media screen and (max-width:767px) {
  .floating {
    width: 60px;
    height: 60px;
  }
}
</style>
