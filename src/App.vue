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
      videoSrc: 'https://stream.aplayz.co.kr/broadcast/b1e2cf68d2bbee7a6bb2d52d07fa60b6.m3u8'
    }
  },

  created() {
    this.$crontab.addJob([
      {
        name: 'startAutoPlay',
        interval: {
          seconds: '0',
          minutes: '00',
          hours: '08',
          week: '*'
        },
        job: this.task
      },
      {
        name: 'endAutoPlay',
        interval: {
          seconds: '10',
          minutes: '00',
          hours: '08',
          week: '*'
        },
        job: this.task2
      }
    ])

    this.$crontab.addJob({
      name: 'brand001',
      interval: { seconds: '0', minutes: '10', hours: '08', week: '*' },
      job: this.task3
    })

    setTimeout(() => {
      this.$crontab.disableJob('brand001')
    }, 5000)

    setTimeout(() => {
      this.$crontab.enableJob('brand001')
      console.log(this.$crontab.jobList)
    }, 1000 * 15)
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
    },
    task3() {
      console.log(`작업이3 실행되었습니다 : ${new Date()}`)
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
