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
    this.$crontab.addJob([
      {
        name: 'startAutoPlay',
        interval: {
          seconds: '0',
          minutes: '25',
          hours: '08',
          week: '4'
        },
        job: this.task
      },
      {
        name: 'endAutoPlay',
        interval: {
          seconds: '10',
          minutes: '25',
          hours: '08',
          week: '4'
        },
        job: this.task
      }
    ])
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
      .finally(() => {})
  },
  methods: {
    task() {
      console.log(`작업이1 실행되었습니다 : ${new Date()}`)
    },
    task2() {
      console.log(`작업이2 실행되었습니다 : ${new Date()}`)
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
