<template>
  <aside class="side_bar fixed h_100 " :class="openstatus">
    <nav class="nav h_100 ml_80px mt_80px pc_nav">
      <figure class="flex_end">
        <img class="cursor" :src="require(`@/assets/images/aside/icon_close_24.svg`)" alt="닫기">
      </figure>
      <ul class="mt_13px">
        <li class="flex space_between">
          <span class="email font_white">chleorjs37@gmail.com</span>
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/toggle_setting.svg`)" alt="설정">
          </figure>
        </li>
      </ul>
      <ul class="mt_63px">
        <li class="flex mb_24px">
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/toggle_icon1.svg`)" alt="설정">
          </figure>

          <span class="align_center email font_white ml_13px">마이스페이스</span>
        </li>

        <li class="flex">
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/ic_menu_mymusic.svg`)" alt="설정">
          </figure>

          <span class="align_center email font_white ml_13px">마이뮤직</span>
        </li>
      </ul>
    </nav>
    <nav class="mobile_nav">
      <div class="info_box">
        <div class="title_box space_between mt_13px mb_24px">
          <h2 class="align_center font_white mobile_menu_title font_500">메뉴</h2>
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/icon_close_24.svg`)" alt="닫기">
          </figure>
        </div>

        <div class="mobile_email space_between">
          <h2 class="align_center font_white mobile_menu_title">chleorjs37@gmail.com</h2>
          <figure class="align_center">
            <img class="cursor" :src="require(`@/assets/images/aside/toggle_setting.svg`)" alt="닫기">
          </figure>
        </div>
      </div>
      <div class="bar"></div>
    </nav>
  </aside>
</template>
<script>
export default {
  props: {
    openstatus: {
      type: String,
      defalut: ""
    }
  },
  name: 'AsideComponent',

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
<style scoped>
.pc_nav {
  display: inline-block;
}

.mobile_nav {
  display: none;
}

.bar {
  width: 100%;
  height: 1px;
  background-color: hsla(0, 0%, 100%, .2);
}

.side_bar {
  top: 0;
  right: 0;
  display: inline-block;
  width: 347px;
  transform: translateX(347px);
  z-index: 1;
  background-color: var(--black151515);
}

.side_bar.on {
  animation: slideInRight;
  transform: translateX(0);
  animation-duration: .5s;
}

.side_bar.off {
  animation: slideInLeft;
  animation-duration: .7s;
  right: -347px;
}

.nav {
  width: 200px;
  display: inline-block;
}

.email {
  line-height: 1.2;
}

@media (max-width: 1024px) {
  .pc_nav {
    display: none;
  }

  .side_bar {
    width: 100%;
  }

  .mobile_nav {
    display: block;

  }

  .info_box {
    width: 90%;
    margin: 0 auto;
  }

  .mobile_menu_title {
    font-size: 18px;
  }

  .mobile_email {
    padding: 12px 0 23px;
  }
}
</style>
