<template>
  <div class="main_container">
    <div class="car_container">
      <button @click="playCarPurpose">차량 play</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CarPurposeView',

  data() {
    return {
      videoSrc: "https://www.aplayz.co.kr/media/upload/mentForCarUsePurpose/여행.mp3"
    };
  },

  created() {

  },

  mounted() {
    this.$CarPurposeJS.setVideo();
    this.$CarPurposeJS.initSrc(this.videoSrc);
    this.$CarPurposeJS.onceEvent("canplaythrough", this.carPurposeCanPlayEvent);
    this.$CarPurposeJS.onceEvent("play", this.playEvent);
    this.$CarPurposeJS.onceEvent("pause", this.pauseEvent);
    this.$CarPurposeJS.onceEvent("ended", this.endedEvent);
  },

  methods: {
    playCarPurpose() {
      this.$CarPurposeJS.onPlay();
    },
    carPurposeCanPlayEvent() {
      console.log("carPurposeCanPlayEvent");
    },
    playEvent() {
      this.$VideoJS.setMuted(true)
      console.log("playEvent");
    },
    pauseEvent() {
      console.log("pauseEvent");
    },
    endedEvent() {
      this.$VideoJS.setMuted(false)
      console.log("endedEvent");
    }
  },
  destroyed() {

  }
};
</script>
<style scoped>
.car_container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
