<template>
  <div>
    <header class="h_80px w_100 layout4_header bg fixed ">
      <ul class="space_between w_90 h_100 m_auto">
        <li class="align_center header_pc">
          <img class="cursor header_pc" :src="require(`@/assets/images/logo.svg`)" alt="로고">
        </li>
        <!--######  menu left Mobile ######-->
        <li class="align_center header_mobile ">
          <ul class="align_center h_100">
            <li>
              <img class="cursor" src="/media/img/icon_back_24.svg" alt="로고">
            </li>
            <li class="font_white">
              <slot name="menunm"></slot>
            </li>
          </ul>
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
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
  </div>
</template>
<script>
export default {
  name: 'MainSlot',
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
