<template>
  <div class="main_container">
    <div class="video_container">
      <span>재생상태 : {{ $store.getters.getIsPlay ? '재생' : '중지' }}</span>
      <span>볼륨 : {{ getVolume }}</span>
      <div class="control">
        <button id="playbtn" @click="playMusic">onPlay</button>
        <button id="pausebtn" @click="pauseMusic">onPause</button>
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
      this.$VideoJS.videoRegisterEvent('canplaythrough', this.canplaythroughEvent);
      this.$VideoJS.videoRegisterEvent("loadedmetadata", this.onLoadedmetadata);
      this.$VideoJS.videoRegisterEvent("error", this.onError);
      this.$VideoJS.videoRegisterEvent("stalled", this.onError);
      this.$VideoJS.videoRegisterEvent("suspend", this.onSuspend);
      //this.$VideoJS.videoRegisterEvent("progress", this.onProgress);

      setTimeout(() => {
        const videoAudioTrack = this.$VideoJS.getVideoAudioTrack();
        console.log(videoAudioTrack);
        videoAudioTrack[0].enabled = false;

        videoAudioTrack.addEventListener("change", (event) => {
          console.log(`change event fired : `, event);
        });

        videoAudioTrack.addEventListener("addTrack", (event) => {
          console.log(`addTrack event fired : `, event);
        })
        videoAudioTrack.addEventListener("addtrack", (event) => {
          console.log(`Audio track: ${event.track.label} added`);
        });

      }, 5000);


      this.volume = this.$VideoJS.getVolume();
    })
  },

  methods: {
    onProgress(evt) {
      console.log("progress event trigger : ", evt);
    },
    onSuspend(evt) {
      console.log("suspend event trigger : ", evt);
    },
    onStalled(evt) {
      console.log("stalled event trigger : ", evt);
    },
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
    onError(evt) {
      console.log("video error : ", evt);
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
    },
    onLoadedmetadata(evt) {
      console.log("onLoadedmetadata : ", evt);
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
