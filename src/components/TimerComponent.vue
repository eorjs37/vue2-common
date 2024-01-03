<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'TimerComponent',

  data() {
    return {
      isVisible: false,
      isVisible2: false,
      intervalId: -1,
    };
  },

  created() {
    setTimeout(() => {
      this.isVisible = true;
    }, 5000);

    this.intervalId = setInterval(() => {

      this.isVisible2 = true;
    }, 3000);
  },

  mounted() {

  },

  methods: {

  },
  destroyed() {
    clearInterval(this.intervalId)
  }
};
</script>
<style scoped></style>
