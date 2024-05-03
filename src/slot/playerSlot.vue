<template>
  <div>
    <transition name="slide">
      <aside-comp v-if="asideOpen === 'on'" :openstatus="asideOpen" @closeaside="onCloseAside"
        v-click-outside="outSideClick" />
    </transition>
    <header class="h_80px w_100 layout4_header fixed ">
      <!--############## PC ##############-->
      <ul class="space_between w_90 h_100 m_auto header_pc">
        <li class="align_center">
          <img class="cursor" :src="require(`@/assets/images/logo_white.svg`)" alt="로고">
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
            <li class="ml_60px hambuger_bar" @click="asideOpen = 'on'">
              <img id="hambuger" class="cursor" src="/media/img/toggle.svg" alt="햄버거바">
            </li>
          </ul>
        </li>
      </ul>
      <!--############## Mobile ##############-->
      <ul class="w_90 h_100 m_auto header_mobile space_between">
        <li class="align_center w_73px">
          <img class="cursor" :src="require(`@/assets/images/logo_m_ws.svg`)" alt="로고">
        </li>
        <li class="align_center">
          <span class="font_white">스타필드 고양</span>
          <img class="arrow_icon" :src="require(`@/assets/images/arrow_drop_down_circle.svg`)" alt="추천채널">
        </li>
        <li class="align_center">
          <ul class="space_between align_center h_100">
            <li class="align_center">
              <img class="cursor" src="/media/img/alarm.png" alt="알람">
            </li>
            <li class="ml_60px hambuger_bar" @click="asideOpen = 'on'">
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
import AsideComponent from '@/components/layout4Layout/AsideComponent.vue';
import ClickOutside from 'vue-click-outside'
export default {
  name: 'PlayerSlot',
  directives: {
    ClickOutside
  },
  components: {
    'aside-comp': AsideComponent
  },
  data() {
    return {
      asideOpen: ''
    };
  },

  mounted() {

  },

  methods: {
    onCloseAside() {
      this.asideOpen = 'off'
    },
    outSideClick(e) {
      if (e.target.id !== 'hambuger') {
        this.onCloseAside();
      }
    }
  },
};
</script>
<style scoped src="@/assets/styles/header.css"></style>
<style scoped>
.arrow_icon {
  margin-left: 5px;
}


.slide-enter-active,
.slide-enter-to {
  animation: slideInRight;
  transform: translateX(0);
  animation-duration: 0.5s;
}

.slide-leave-to {
  animation: slideInLeft;
  animation-duration: .7s;
  right: -347px;
}

.main {
  position: relative;
  height: 100vh;
}

@media (max-width: 1024px) {
  .slide-leave-to {
    right: -100%;
  }
}
</style>
