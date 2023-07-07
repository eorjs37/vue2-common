<template>
  <div id="app">
    <div class="container">
      <video id="video" controls autoplay playsinline></video>
      <div>
        <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
      </div>
      <video id="brandvideo" controls autoplay playsinline></video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

  created() {
    this.addCron();
  },
  mounted() {
    const ele = document.querySelector('#video')
    const src = 'https://www.aplayz.co.kr/broadcast/ac5bed707d5f4de278779ec83e4c72b6.m3u8'
    const brandEle = document.querySelector('#brandvideo')
    this.$VideoJS.setVideo(ele)
    this.$VideoJS.initHls(src);
    this.$VideoJS.addEvent();

    this.$BrandVideoJS.setBrandVideo(brandEle)

  },
  methods: {
    addCron() {
      this.$crontab.addJob({
        name: "tempCron",
        interval: {
          seconds: '0',
          minutes: '57',
          hours: '8'
        },
        job: () => {
          console.log("start crontab : ", new Date());
          this.$VideoJS.fadeOutSound().then(() => {

            const brandSrc = `https://dev.www.aplayz.co.kr/stream/getMusic?FKiZAhTfjsdKDegP/+OgRuzltdsGgCCuqMybPWuwNOphFTTIOSPvPr7iVx+3`;

            this.$BrandVideoJS.initHls(brandSrc)
          })
        }
      })
    }
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

#brandvideo {
  width: 100%;
  height: 35px;
}
</style>
