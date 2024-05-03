<template>
  <div id="app">
    <video id="streaming"></video>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      videoSrc: "https://test-streams.mux.dev/x36xhzz/url_8/193039199_mp4_h264_aac_fhd_7.m3u8"
    }
  },

  created() {},
  mounted() {
    this.$VideoPlayer.setVideo(document.querySelector('#streaming'))
  },
  methods: {}
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
