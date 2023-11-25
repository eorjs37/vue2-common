<template>
  <div class="obigo_container">
    <div ref="swiper" class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
  </div>
</template>
<script>

import Swiper from 'swiper';
import { Navigation, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
export default {
  name: 'ObigoPurposeView',
  data() {
    return {
    };
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, EffectCreative],
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // effect: 'creative',
      // creativeEffect: {
      //   prev: {
      //     shadow: true,
      //     origin: 'left center',
      //     translate: ['-5%', 0, -200],
      //     rotate: [0, 100, 0],
      //   },
      //   next: {
      //     origin: 'right center',
      //     translate: ['5%', 0, -200],
      //     rotate: [0, -100, 0],
      //   },
      // },
      slidesPerView: 2.5
    })
  },
  methods: {
    onProgress() { },
    onSlideChange() {
      console.log('slide changed')

    }
  }

};
</script>
<style scoped src="@/assets/styles/obigopurpose.css"></style>
