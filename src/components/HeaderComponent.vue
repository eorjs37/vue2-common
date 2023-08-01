<template>
  <header class="header" :class="headerCss">
    <div class="wrap">
      <h1 class="title">
        APLAYZ
      </h1>
      <div class="button_group">
        <button class="header_btn btn1" @click="goVideo">매장용 플레이어 다운로드</button>
        <button class="header_btn btn2" @click="goMixin">로그인/회원가입</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    goVideo() {
      this.$router.push({ name: 'video' }).catch(() => { })
    },
    goMixin() {
      this.$router.push({ name: 'mixin' }).catch(() => { })
    }
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    headerCss() {
      if (this.$route.name !== 'home') {
        return 'bg_black'
      }
      else {
        return '';
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  box-sizing: border-box;
  z-index: 1;
  height: 80px;
  top: 0;
  left: 0;
}

.header>.wrap {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.header>.wrap>.title {
  color: var(--white);
  font-size: 38px;
  line-height: 38px;
}

.button_group {
  display: flex;
  justify-content: space-between;
  width: 310px;
}

.header_btn {
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: var(--white);
  font-size: 16px;
  padding: 10px;
  font-weight: 700;
}

.btn1 {
  background: transparent;
  border: 1px solid var(--white);
}

.btn2 {
  background-color: var(--ff1150);
}

.bg_black {
  background-color: var(--black);
}


/* 반응형 */
@media screen and (max-width:1200px) {
  .header>.wrap {
    padding: 0 15px;
  }
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {

  /*스타일입력*/
  .header>.wrap>.title {
    font-size: 16px;
  }

  .button_group {
    width: 260px;
  }


  .header_btn {
    font-size: 14px;
    padding: 5px;
  }

}
</style>
