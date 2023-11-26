<template>
  <div class="main_container">
    <div class="rolling_container">
      <h1 class="rollingtitle" v-rollingpractice="musicTitle"></h1>
    </div>

  </div>
</template>
<script>
import rollingpractice from '@/utils/directives/rollingpracitve';
export default {
  name: 'RollingView',
  directives: {
    rollingpractice
  },
  data() {
    return {
      musicTitle: '아무노래입니다~~아무노래입니다~~~~~~',
      interval: null,
      count: 0
    };
  },

  mounted() {
    this.interval = setInterval(() => {
      this.musicTitle = `아무노래입니다~~~아무노래입니다${this.count}`;
      this.count += 1;
    }, 5000);
  },

  methods: {

  },
  destroyed() {
    clearInterval(this.interval)
  }
};
</script>
<style scoped src="@/assets/styles/rollingview.css"></style>
