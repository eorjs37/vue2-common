<template>
  <div id="app">
    <div class="container">
      <video id="video" controls autoplay playsinline></video>
      <div>
        <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
      </div>
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
    const src = 'https://www.aplayz.co.kr/broadcast/2b70edd060a0f3314645870c8718741a.m3u8'
    this.$VideoJS.setVideo(ele)
    this.$VideoJS.initHls(src)
    this.$VideoJS.addEvent();

    console.log('getters : ', this.$store.getters.getIsPlay);
  }
}
</script>

<style>
.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

#video {
  width: 100%;
  height: 35px;
}
</style>
