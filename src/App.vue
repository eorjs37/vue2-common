<template>
  <div id="app">
    <video id="streaming" hidden></video>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //videoSrc: 'https://test-streams.mux.dev/x36xhzz/url_8/193039199_mp4_h264_aac_fhd_7.m3u8'
      videoSrc: 'https://stream.aplayz.co.kr/broadcast/641f19804a705bb838a83a01bc291d53.m3u8'
    }
  },

  created() {
    const cron = '0 31 7,8,9,10,11 * * 3,4,5'
    this.$CronTab.addJob(this.task, cron, 'timecuration1')
    const cron2 = '0 31 7,8,9,10,11 * * 3,4,5'
    this.$CronTab.addJob(this.task, cron2, 'timecuration2')

    //
  },
  mounted() {
    this.$VideoPlayer.setVideo(document.querySelector('#streaming'))
    this.$VideoPlayer.playerMusic(this.videoSrc)
    this.$VideoPlayer.startLoad(-1)
    this.$VideoPlayer
      .onPlay()
      .then(() => {
        console.log('success play')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setTimeout(async () => {
          const result = await this.$VideoPlayer.fadeOut(1).then((res) => {
            if (res) {
              this.$VideoPlayer.fadeIn(0)
            }
          })
          console.log(result)
        }, 5000)
      })
  },
  methods: {
    task() {
      console.log(`작업이 실행되었습니다 : ${new Date()}`)
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

body {
  background-color: var(--black);
}
</style>
