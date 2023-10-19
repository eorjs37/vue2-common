<template>
  <div class="ws_wrap">
    <!--###################### Title ######################-->
    <h1 class="title ">
      <span class="bold">스타필드 고양</span> 에 <br>
      어울리는 음악을 재생 중 입니다.
    </h1>
    <!--###################### Curation ######################-->
    <ul class="curation">
      <li class="curationall">
        <img :src="require(`@/assets/images/player/curation_setting_on.svg`)" alt="curation_setting">
      </li>

      <li class="curation_option">공간 분위기</li>
      <li class="curation_line"></li>
      <li class="curation_option">국내곡 비율</li>
      <li class="curation_line"></li>
      <li class="curation_option">선호 장르</li>
      <li class="curation_line"></li>
      <li class="curation_option">선호 시디</li>
      <li class="curation_line"></li>
      <li class="curation_option">선호 음악 분위기</li>
    </ul>
    <!--###################### Player Box ######################-->
  </div>
</template>
<script>
export default {
  name: 'PlayerWS',

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
