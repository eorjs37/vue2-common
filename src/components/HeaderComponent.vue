<template>
  <header class="header">
    <div class="wrap">
      <h1 class="title">
        APLAYZ
      </h1>
      <div class="button_group">
        <button class="header_btn" @click="goVideo">매장용 플레이어 다운로드</button>
        <button class="header_btn">로그인/회원가입</button>
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
    }
  },
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
  width: 250px;
}

.header_btn {
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

/* 반응형 */
@media screen and (max-width:1200px) {
  .header>.wrap {
    padding: 0 15px;
  }
}
</style>
