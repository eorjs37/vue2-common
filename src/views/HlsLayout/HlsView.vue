<template>
  <div>
    <button @click="clickPlay">재생</button>
    <button @click="clickPause">중지</button>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
const app = getCurrentInstance()
const $VideoPlayer = app.appContext.config.globalProperties.$VideoPlayer

const m3u8Url = ref(
  'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/m3u8/lauv/music.m3u8'
)
const pauseEventListener = () => {
  console.log('pause')
}
const playEventListener = () => {
  console.log('play')
}
$VideoPlayer.setVideo(document.querySelector('#streaming'))
$VideoPlayer.registerEventListener('pause', pauseEventListener)
$VideoPlayer.registerEventListener('play', playEventListener)

const clickPlay = () => {
  $VideoPlayer.playerMusic(m3u8Url.value)
  $VideoPlayer.startLoad(-1)
  $VideoPlayer.onPlay()
}

const clickPause = () => {
  $VideoPlayer.onPause()
}
</script>
<style scoped src="@/assets/styles/hls/hlsview.css"></style>
