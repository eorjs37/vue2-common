<template>
  <div>
    <button @click="goDummy">버튼</button>
  </div>
</template>
<script>
export default {
  name: 'PlayerView',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    goDummy() {
      this.$router.push({ name: "dummyview" })
    }
  },
};
</script>
<style scoped></style>
