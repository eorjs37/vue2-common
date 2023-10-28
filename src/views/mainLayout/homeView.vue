<template>
  <div>
    <section class="introduce">
      <video muted autoplay loop class="introducevideo"
        src="https://www.aplayz.co.kr/media/images/video/az_official.mp4"></video>
      <article class="introduce_title">
        <h1 class="play_title"><span class="mblock">세상 모든 공간을</span> <img class="play_img"
            src="../../../public/images/main_icon_logo.png" alt="play"> <span>하라</span> </h1>
      </article>
    </section>
    <section class="event">
      <h1 class="event_title">이제 선곡 걱정은 <span class="event_no">NO!</span></h1>
      <div class="mockup">
        <img class="mockup_img" src="../../../public/images/slide_mockup_06.png" alt="">
      </div>
    </section>
  </div>
</template>
<script>
import WOW from 'wowjs'

export default {
  name: 'HomeView',

  data() {
    return {
      introduceSrc: 'https://www.aplayz.co.kr/media/images/video/az_official.mp4'
    };
  },

  mounted() {
    this.setWow();
  },

  methods: {
    setWow() {
      const wow = new WOW.WOW({
        boxClass: 'event_title',
        animateClass: 'animate__animated animate__fadeInDown',
        offset: 5,
        mobile: true,
        live: true
      });

      wow.init();
    }
  },
};
</script>
<style scoped src="@/assets/styles/home.css"></style>
