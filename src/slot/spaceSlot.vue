<template>
  <div>
    <header class="h_80px w_100 layout4_header bg fixed ">
      <!--############## PC ##############-->
      <ul class="space_between w_90 h_100 m_auto header_pc">
        <li class="align_center">
          <img class="cursor" :src="require(`@/assets/images/logo.svg`)" alt="로고">
        </li>

        <li>
          <ul class="space_between align_center h_100">
            <li class="align_center mr_60px space_name">
              <img class="cursor mr_10px" :src="require(`@/assets/images/header_shop.png`)" alt="스페이스">

              <span class="font_white">스타필드 고양</span>
            </li>
            <li class="align_center">
              <img class="cursor" src="/media/img/alarm.png" alt="알람">
            </li>
            <li class="ml_60px hambuger_bar">
              <img class="cursor" src="/media/img/toggle.svg" alt="햄버거바">
            </li>
          </ul>
        </li>
      </ul>
      <!--############## Mobile ##############-->
      <ul class="w_90 h_100 m_auto header_mobile space_between">
        <li class="align_center">
          <img class="cursor" src="/media/img/icon_back_24.svg" alt="로고">
        </li>
        <li class="align_center font_white">
          <slot name="menunm"></slot>
        </li>
        <li class="align_center ">
          <img class="cursor" :src="require(`@/assets/images/icon_close.svg`)" alt="로고">
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
export default {
  name: 'SpaceSlot',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped src="@/assets/styles/header.css"></style>
<style scoped>
.close {
  width: 36px;
  height: 36px;
}
</style>
