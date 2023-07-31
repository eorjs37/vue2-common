<template>
  <div class="main_container">
    <div>
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
      <button @click="playMusic">onPlay</button>
      <button @click="pauseMusic">onPause</button>
    </div>
  </div>
</template>

<script>
import Hls from "hls.js";
export default {
  name: 'videoView',
  data() {
    return {

    };
  },
  created() {

  },

  mounted() {
    this.$nextTick(() => {
      this.$VideoJS.registerHlsErrorEvent(Hls.Events.ERROR, this.errorHandle)
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
  },
};
</script>

<style scoped>
.video_container {
  margin-top: 80px;
}
</style>
