<template>
  <div>
    <button id="playbtn" @click="clickPlay">재생</button>
    <button id="pausebtn" @click="clickPause">중지</button>
    <p>{{ currentTime }} / {{ durationTime }}</p>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
const app = getCurrentInstance()
const $VideoPlayer = app.appContext.config.globalProperties.$VideoPlayer

const m3u8Url = ref(
  'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/m3u8/lauv/music.m3u8'
)

const currentTime = ref(0)
const durationTime = ref(0)
const pauseEventListener = () => {
  console.log('pause')
}
const playEventListener = () => {
  console.log('play')
}

const timeUpdateEventListener = (event) => {
  currentTime.value = event.target.currentTime
  if (event.target.duration) {
    durationTime.value = event.target.duration
  }
}

const endedEventListener = () => {
  setTimeout(() => {
    $VideoPlayer.onPlay()
  }, 1500)
}

$VideoPlayer.setVideo(document.querySelector('#streaming'))
$VideoPlayer.registerEventListener('pause', pauseEventListener)
$VideoPlayer.registerEventListener('play', playEventListener)
$VideoPlayer.registerEventListener('timeupdate', timeUpdateEventListener)
$VideoPlayer.registerEventListener('ended', endedEventListener)
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
