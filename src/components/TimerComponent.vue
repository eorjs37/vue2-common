<template>
  <div>

  </div>
</template>
<script>
export default {
  name: 'TimerComponent',

  data() {
    return {
      isVisible: false
    };
  },

  created() {
    setTimeout(() => {
      this.isVisible = true;
    }, 5000);
  },

  mounted() {

  },

  methods: {

  },
};
</script>
<style scoped></style>
