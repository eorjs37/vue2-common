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
      worker: null,
      count: 0,
      //videoSrc: 'https://test-streams.mux.dev/x36xhzz/url_8/193039199_mp4_h264_aac_fhd_7.m3u8'
      videoSrc: 'https://stream.aplayz.co.kr/broadcast/b1e2cf68d2bbee7a6bb2d52d07fa60b6.m3u8'
    }
  },

  created() {
    this.worker = new Worker('/workers/buildingWorker.js')

    //onmessage를 통해 결과를 받는다
    this.worker.onmessage = () => {
      // Should output: The sum of the numbers is 15
      this.interValMethod()
    }
    //postMessage를 통해 전달
    this.worker.postMessage({
      interval: 2000
    })

    //onerror 이벤트
    this.worker.onerror = (event) => {
      console.error('regularWorker error : ', event)
    }

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
    }, 2000)

    setTimeout(() => {
      this.$crontab.enableJob('brand001')
    }, 1000 * 5)
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
    interValMethod() {
      //axios.get('http://localhost:8000/fileInput.php')
    },
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
