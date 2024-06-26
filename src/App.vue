<template>
  <div id="app">
    <video id="streaming" hidden></video>
    <router-view />
  </div>
</template>

<script>
import { parse, setInterval, date } from '@breejs/later'

export default {
  name: 'App',
  data() {
    return {
      videoSrc: 'https://test-streams.mux.dev/x36xhzz/url_8/193039199_mp4_h264_aac_fhd_7.m3u8'
    }
  },

  created() {
    date.timezone(new Date())
    const cron = '0 7,8,9,10,11 * * *'
    const s = parse.cron(cron)
    console.log(s)
    setInterval(this.task, s, 'system')
  },
  mounted() {
    this.$VideoPlayer.setVideo(document.querySelector('#streaming'))
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
