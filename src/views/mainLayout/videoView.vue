<template>
  <div class="main_container">
    <div class="video_container">
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
      <span>볼륨 : {{ getVolume }}</span>
      <div class="control">
        <button @click="playMusic">onPlay</button>
        <button @click="pauseMusic">onPause</button>
        <input type="range" min="0" max="10" :value="getVolume" @input="duratinonChange">
      </div>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
export default {
  name: 'videoView',
  data() {
    return {
      volume: 0
    };
  },
  created() {

  },

  mounted() {
    this.$nextTick(() => {
      this.$VideoJS.registerHlsErrorEvent(Hls.Events.ERROR, this.errorHandle)
      this.$VideoJS.videoRegisterEvent('play', this.playEvent)
      this.$VideoJS.videoRegisterEvent('canplaythrough', this.canplaythroughEvent)
      this.volume = this.$VideoJS.getVolume();
    })
  },

  methods: {
    playMusic() {
      console.log("playMusic");
      this.$VideoJS.onPlay()
        .then(() => {
          console.log("success play");
        }).catch(error => {
          {
            console.error("error : ", error);
          }
        })
    },
    pauseMusic() {
      this.$VideoJS.onPause();
    },
    duratinonChange(e) {
      const { valueAsNumber } = e.target;
      this.$VideoJS.setVolume(valueAsNumber * 0.1);
      this.volume = this.$VideoJS.getVolume();
    },
    errorHandle(_, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("MEDIA_ERROR");
            break;
          case Hls.ErrorTypes.NETWORK_ERROR:
            console.log("NETWORK_ERROR");
            alert("네트워크 상태를 확인해주세요");
            this.$VideoJS.onPause();
            break;
          default:
            this.$VideoJS.destory();
            break;
        }
      }
    },
    playEvent(evt) {
      console.log('playEvent : ', evt);
    },
    canplaythroughEvent() {
      this.$VideoJS.videoPromiseRetry()
        .then(() => {
        })
        .catch(err => {
          if (err.name === 'FailRetry') {
            alert("재생버튼을 클릭해주세요")
          }
          else {
            alert("관리자에게 문의해주세요")
          }
          console.error("videoPromiseRetry error : ", err.name);
        })
    }
  },

  computed: {
    getVolume() {
      return this.volume * 10;
    }
  },

  destroyed() {
    this.$VideoJS.removeVideoEvent('play', this.playEvent)
  }
};
</script>

<style scoped>
.video_container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
