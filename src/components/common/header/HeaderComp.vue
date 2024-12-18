<template>
	<header class="header">
		<nav class="nav">
			<ul class="menu">
				<li>

				</li>
				<!-- 플레어 영역 -->
				<li>
					<button @click="clickPlay">재생</button>
					<button @click="clickPause">중지</button>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script setup>
import { inject, onMounted, ref } from 'vue';
const $VideoPlayer = inject('$VideoPlayer')

const m3u8Url = ref(
	'https://daegeon-everybody.s3.ap-northeast-2.amazonaws.com/m3u8/lauv/music.m3u8'
)
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
 * @description 초기화 설정
 */
const init = () => {
	if ($VideoPlayer) {
		$VideoPlayer.setVideo(document.querySelector('#streaming'))
		$VideoPlayer.playerMusic(m3u8Url.value)
		$VideoPlayer.startLoad(-1)
	}
}

onMounted(() => {
	init ()
})
</script>
<style scoped src="./header.css"></style>