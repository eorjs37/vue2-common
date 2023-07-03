<template>
  <div id="app">
    <video id="video" controls autoplay playsinline></video>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
  },
  mounted() {
    const ele = document.querySelector('#video')
    const src = 'https://www.aplayz.co.kr/broadcast/13e683a6e5e543211a764bf85d28be7e.m3u8'
    this.$VideoJS.setVideo(ele)
    this.$VideoJS.initHls(src)
    this.$VideoJS.addEvent()
  }
}
</script>

<style></style>
