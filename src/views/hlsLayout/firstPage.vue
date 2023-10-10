<template>
  <div>
    <button @click="clickVideo">Next</button>
  </div>
</template>
<script>
export default {
  name: 'firstPage',
  data() {
    return {

    }
  },
  methods: {
    clickVideo() {
      // const video = document.querySelector('#hlsVideo');
      // video.play();
      this.$router.push({ name: "secondPage" })
    }
  },
}
</script>
<style scoped></style>
