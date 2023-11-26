<template>
  <div class="obigo_container">
    <div ref="swiper" class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <figure class="slider-image">
            <img class="slider-image_img" :src="require('@/assets/images/obigo/purpose/business.png')" alt="business.png">
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="slider-image">
            <img class="slider-image_img" :src="require('@/assets/images/obigo/purpose/daily.png')" alt="daily.png">
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="slider-image">
            <img class="slider-image_img" :src="require('@/assets/images/obigo/purpose/drive.png')" alt="drive.png">
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="slider-image">
            <img class="slider-image_img" :src="require('@/assets/images/obigo/purpose/gotowork.png')" alt="gotowork.png">
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="slider-image">
            <img class="slider-image_img" :src="require('@/assets/images/obigo/purpose/leavework.png')"
              alt="leavework.png">
          </figure>
        </div>
        <div class="swiper-slide">
          <figure class="slider-image">
            <img class="slider-image_img" :src="require('@/assets/images/obigo/purpose/trip.png')" alt="trip.png">
          </figure>
        </div>
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
    const swiper = new Swiper(this.$refs.swiper, {
      init: false,
      modules: [Navigation, EffectCreative],
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2.5
    });

    swiper.on('slideChange', this.onSlideChange);
    swiper.on('init', this.onInit)

    swiper.init();

  },
  methods: {
    onInit() {
      console.log('afterInit');
    },
    onSlideChange() {
      console.log('slide changed')

    }
  }

};
</script>
<style scoped src="@/assets/styles/obigopurpose.css"></style>
