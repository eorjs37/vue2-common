<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'RandomComponent',

  data() {
    return {

    };
  },

  created() {
    this.generateRandomString(20);
  },

  mounted() {

  },

  methods: {
    generateRandomString(num) { //네이버 인증 state 난수생성
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
  },
};
</script>
<style scoped></style>
