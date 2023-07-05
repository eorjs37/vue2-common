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
    const src = 'https://www.aplayz.co.kr/broadcast/a44610765711c95e0fcd4274c93116ec.m3u8'
    //const brandSrc = `https://dev.www.aplayz.co.kr/stream/getMusic?FKiZAhTfjsdKDegP/+OgRuzltdsGgCCuqMybPWuwNOphFTTIOSPvPr7iVx+3`;
    this.$VideoJS.setVideo(ele)
    this.$VideoJS.initHls(src);
    this.$VideoJS.addEvent();

    console.log(this.$crontab);
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
