<template>
  <div>
    <video id="video" controls autoplay playsinline></video>
    <div>
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
    </div>
    <video id="brandvideo" controls autoplay playsinline></video>
  </div>
</template>

<script>
export default {
  name: 'videoView',

  data() {
    return {

    };
  },

  created() {
    this.addCron();
  },

  mounted() {
    const ele = document.querySelector('#video')
    const src = 'https://www.aplayz.co.kr/broadcast/94ee2de9742b5906c1c90d6e461b65b0.m3u8'
    const brandEle = document.querySelector('#brandvideo')
    this.$VideoJS.setVideo(ele)
    this.$VideoJS.initHls(src);
    this.$VideoJS.addEvent();

    this.$BrandVideoJS.setBrandVideo(brandEle)
    this.$BrandVideoJS.addEvent();
  },

  methods: {
    addCron() {
      this.$crontab.addJob({
        name: "tempCron",
        interval: {
          seconds: '0',
          minutes: '28',
          hours: '12'
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
  },
};
</script>

<style scoped>
#video {
  width: 100%;
  height: 35px;
}

#brandvideo {
  width: 100%;
  height: 35px;
}
</style>
