<template>
  <div class="obigo_container">
    <swiper-container effect="creative" :modules="modules" :navigation="true" class="swiper-container" :loop="true"
      :slides-per-view="2.5" :centered-slides="true" :creative-effect="{
        prev: {
          shadow: true,
          origin: 'left center',
          translate: ['-5%', 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: 'right center',
          translate: ['5%', 0, -200],
          rotate: [0, -100, 0],
        },
      }" :grabCursor="true" @swiperprogress="onProgress" @swiperslidechange="onSlideChange">
      <swiper-slide>
        <figure class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/business.png')" alt="business">
        </figure>
      </swiper-slide>
      <swiper-slide>
        <figure class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/daily.png')" alt="daily">
        </figure>
      </swiper-slide>
      <swiper-slide>
        <figure class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/drive.png')" alt="drive">
        </figure>
      </swiper-slide>
      <swiper-slide>
        <figure class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/gotowork.png')" alt="gotowork">
        </figure>
      </swiper-slide>
      <swiper-slide>
        <figure class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/leavework.png')" alt="leavework">
        </figure>
      </swiper-slide>
      <swiper-slide>
        <figure class="slider-image">
          <img class="slider-image_img " :src="require('@/assets/images/obigo/purpose/trip.png')" alt="trip">
        </figure>
      </swiper-slide>
    </swiper-container>
  </div>
</template>
<script>
import { register } from 'swiper/element/bundle';
import { Navigation, EffectCoverflow, EffectFade, EffectCreative } from 'swiper/modules'
register();

export default {
  name: 'ObigoPurposeView',
  data() {
    return {
      modules: [Navigation, EffectCoverflow, EffectFade, EffectCreative],
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      creativeEffect: {
        prev: {
          opacity: 0,
        },
        next: {
          opacity: 0,
        },
      }
    };
  },

  mounted() {
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
