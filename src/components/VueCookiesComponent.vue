<template>
  <div>

  </div>
</template>
<script>
import VueCookies from 'vue-cookies';
export default {
  name: 'VueCookiesComponent',

  data() {
    return {

    };
  },

  created() {
    VueCookies.set("userid", "test");
    VueCookies.get("userid");
    const ele = document.createElement('a');
    ele.href = "https://naver.com/";
    ele.click();
  },

  mounted() {

  },

  methods: {
    getMockTest() {
      if (VueCookies.get("userid2") === 'test') {
        VueCookies.set("id", "any");
      }
    },

    createEle() {
      const ele = document.createElement('a');
      ele.href = "https://naver.com";
      ele.click();
    },

    createEle2() {
      const ele = document.createElement('a');
      ele.href = "https://aplayz.co.kr";
      ele.click();
    }
  },
};
</script>
<style scoped></style>
