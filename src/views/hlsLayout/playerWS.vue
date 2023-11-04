<template>
  <div class="ws_wrap">
    <!--###################### Title ######################-->
    <h1 class="title ">
      <span class="bold">스타필드 고양</span> 에 <br>
      어울리는 음악을 재생 중 입니다.
    </h1>
    <!--###################### Box ######################-->
    <ul class="ws_box">
      <li class="ws_left_box">
        <!--###################### Player ######################-->
        <player-comp />
      </li>
      <li class="ws_right_box">
        <!--###################### Recommend Channel ######################-->
      </li>
    </ul>
  </div>
</template>
<script>
import PlayerComp from '@/components/playerws/PlayerComp.vue'
export default {
  name: 'PlayerWS',
  components: {
    'player-comp': PlayerComp
  },
  data() {
    return {

    };
  },

  created() {
    document.querySelector('body').classList.add('morning')
  },

  mounted() {
    document.querySelector('body').classList.add('morning')
  },

  methods: {

  },
  destroyed() {
    document.querySelector('body').classList.remove('morning')
  }
};
</script>
<style scoped src="@/assets/styles/player.css"></style>
