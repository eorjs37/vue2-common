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
    const src = 'https://www.aplayz.co.kr/broadcast/c790db1be827f48f26cbdbfebb0db7ce.m3u8'
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
