<template>
  <div id="app">
    <div class="container">
      <video id="video" controls autoplay playsinline></video>
    </div>
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

<style>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

#video {
  width: 100%;
  height: 35px;
}
</style>
