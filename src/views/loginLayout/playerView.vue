<template>
  <player-slot>
    <template v-slot:main>
      <div class="player_wrapper">
        <h1 class="player_title_box">
          <em class="title_em">스타필드 고양 </em> 에 <br>
          어울리는 음악을 재생 중 입니다.
        </h1>
        <div class="player_box">

        </div>
      </div>

    </template>
  </player-slot>
</template>

<script>
import PlayerSlot from '@/slot/playerSlot.vue'
export default {
  name: "playerView",
  components: {
    'player-slot': PlayerSlot
  },
  mounted() {
    this.$WeatherPlugin.setWeather('morning')
  },
  data() {
    return {

    }
  },
  destroyed() {
    this.$WeatherPlugin.removeWeather()
  }
}
</script>
<style src="@/assets/styles/player/player.css"></style>
