<template>
  <div>
		<h1>{{ $t('hello') }}</h1>
    <button id="playbtn" @click="clickPlay">재생</button>
    <button id="pausebtn" @click="clickPause">중지</button>
		<button id="fadeOut" @click="FadeOut">FadeOut</button>
		<button id="fadeIn" @click="FadeIn">FadeIn</button>
		<button id="changeLocales" @click="changeLanguage">국문/영문 전환</button>
    <p>{{ currentTime }} / {{ durationTime }}</p>
  </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import { useCookies } from 'vue3-cookies'
import { useI18n } from 'vue-i18n';
const app = getCurrentInstance()
const i18n = useI18n();
const $VideoPlayer = app.appContext.config.globalProperties.$VideoPlayer
const { cookies } = useCookies()

const m3u8Url = ref(
	'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/m3u8/lauv/music.m3u8'
	//'https://www.aplayz.co.kr/stream/getMusic?/dAoIBzlod3B0sYx3qYy1ICgpWm+ypRCq2oD29BwieN68iDXYkvsGNe2Yxmel6+l0mchs/5qTF7ZF8+81XjTILfg3yHzIw=='
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
	if ($VideoPlayer) {
		$VideoPlayer.setVideo(document.querySelector('#streaming'))
		$VideoPlayer.registerEventListener('pause', pauseEventListener)
		$VideoPlayer.registerEventListener('play', playEventListener)
		$VideoPlayer.registerEventListener('timeupdate', timeUpdateEventListener)
		$VideoPlayer.registerEventListener('ended', endedEventListener)
		$VideoPlayer.playerMusic(m3u8Url.value)
		$VideoPlayer.startLoad(-1)
	}

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

/**
 * @description Fadeout 처리
 */
const FadeOut = () => {
	$VideoPlayer.fadeOut($VideoPlayer.getVolume())
			.then((res) => {
				console.log(res);
			})
}

/**
 * @description Fadeout 처리
 */
const FadeIn = () => {
	$VideoPlayer.fadeIn(0);
}


const changeLanguage = () => {
	if (i18n.locale.value === 'en') {
		i18n.locale.value = 'ko'
	} else {
		i18n.locale.value = 'en'
	}
}
onMounted(() => {
	init()
})
//
onUnmounted(() => {
	this.$VideoPlayer.removeEventListener('pause', pauseEventListener)
	this.$VideoPlayer.removeEventListener('play', playEventListener)
	this.$VideoPlayer.removeEventListener('timeupdate', timeUpdateEventListener)
	this.$VideoPlayer.removeEventListener('ended', endedEventListener)
})
</script>
<style scoped src="@/assets/styles/hls/hlsview.css"></style>
