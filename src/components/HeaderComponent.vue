<template>
  <header class="header">
    <div class="wrap">
      <h1 class="title">
        APLAYZ
      </h1>
      <div class="button_group">
        <button class="header_btn">매장용 플레이어 다운로드</button>
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

  },
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: var(--black);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  box-sizing: border-box;
}

.header>.wrap {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.header>.wrap>.title {
  color: var(--white);
  line-height: 30px;
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
</style>
