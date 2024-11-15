<template>
  <div>
    <button id="playbtn" @click="clickPlay">재생</button>
    <button id="pausebtn" @click="clickPause">중지</button>
    <p>{{ currentTime }} / {{ durationTime }}</p>
  </div>
</template>
<script setup>
import { getCurrentInstance, ref } from 'vue'
import { useCookies } from 'vue3-cookies'
const app = getCurrentInstance()
const $VideoPlayer = app.appContext.config.globalProperties.$VideoPlayer
const { cookies } = useCookies()

const m3u8Url = ref(
  'https://www.aplayz.co.kr/stream/getMusic?kGc0A5OWZzRcEeEgTzdO7GZDVReTc9KFcQCpNXqpjuc7QUqqsO6ATYdgSPr7CK9oycyTG3Ns7roTiA3eUINcYC+AFNIWekg='
)

const currentTime = ref(0)
const durationTime = ref(0)

const pauseEventListener = () => {
  console.log('pause')
}
const playEventListener = () => {
  console.log('play')
}

/**
 * @description 시간 업데이트
 * @param event : 이벤트
 */
const timeUpdateEventListener = (event) => {
  currentTime.value = event.target.currentTime
  if (event.target.duration) {
    durationTime.value = event.target.duration
  }
}

/**
 * @description 종료 이벤트
 */
const endedEventListener = () => {
  setTimeout(() => {
    $VideoPlayer.onPlay()
  }, 1500)
}

/**
 * @description 초기화 설정
 */
const init = () => {
  $VideoPlayer.setVideo(document.querySelector('#streaming'))
  $VideoPlayer.registerEventListener('pause', pauseEventListener)
  $VideoPlayer.registerEventListener('play', playEventListener)
  $VideoPlayer.registerEventListener('timeupdate', timeUpdateEventListener)
  $VideoPlayer.registerEventListener('ended', endedEventListener)
  $VideoPlayer.playerMusic(m3u8Url.value)
  $VideoPlayer.startLoad(-1)
  cookies.set('dummy', 'test@gmail.com')
}

/**
 * @description 재생
 */
const clickPlay = () => {
  $VideoPlayer.onPlay()
}
/**
 * @description 중지
 */
const clickPause = () => {
  $VideoPlayer.onPause()
}

init()
</script>
<style scoped src="@/assets/styles/hls/hlsview.css"></style>
