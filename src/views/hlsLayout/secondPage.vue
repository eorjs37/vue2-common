<template>
  <div>

  </div>
</template>
<script>
import Hls from 'hls.js';
export default {
  name: 'secondPage',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    const videoSrc = "https://stream.aplayz.co.kr/broadcast/19642cd2c002183eeb06862e745d7686.m3u8";
    const video = document.querySelector('#hlsVideo')
    const hls = new Hls({
      // debug: true,
      enableWorker: true,
      lowLatencyMode: true,
      backBufferLength: 90
    });
    hls.loadSource(videoSrc);
    hls.attachMedia(video);

    video.addEventListener("canplaythrough", () => {
      video.play()
        .catch(err => {
          alert("재생버튼을 클릭해주세요.")
          console.log(err)
        })
    })

    hls.on(Hls.Events.AUDIO_TRACK_SWITCHING, () => {
      console.log(`AUDIO_TRACK_SWITCHING`);
    })

    hls.on(Hls.Events.MANIFEST_LOADED, () => {
      console.log(`MANIFEST_LOADED`);
      // video.play()
      //   .catch(err => {
      //     console.log(err)
      //   })
    })

    hls.on(Hls.Events.BUFFER_FLUSHED, () => {
      console.log(`BUFFER_FLUSHED`);
    })

    hls.on(Hls.Events.ERROR, (event, data) => {
      console.error("error : ", data);
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log('fatal media error encountered, try to recover');
            hls.recoverMediaError();
            break;
          case Hls.ErrorTypes.NETWORK_ERROR:
            console.error('fatal network error encountered', data);
            hls.recoverMediaError();
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    })
  }
}
</script>
<style scoped></style>
